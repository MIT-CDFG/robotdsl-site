// The print pages' downloads. Written into the site as assets/print.js by robotdsl-studio's scripts/print_page.py.
//
// The asset store serves a STEP file as text to be shown, and a browser ignores a link's `download` for another site,
// so a click on a piece's file fetches it (the store allows the site to) and saves it under the name the link gives,
// the robot's and the piece's. When the fetch fails, the link opens the file as it would without this script.
// "Download all" fetches every file of the page the same way and saves them as one zip, stored, not compressed.
(function () {
  'use strict';

  function save(blob, name) {
    var url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
  }

  function bytesOf(url) {
    return fetch(url, { mode: 'cors', credentials: 'omit' }).then(function (answer) {
      if (!answer.ok) throw new Error(url + ': ' + answer.status);
      return answer.arrayBuffer();
    }).then(function (buffer) { return new Uint8Array(buffer); });
  }

  var table = new Uint32Array(256);
  for (var n = 0; n < 256; n++) {
    var c = n;
    for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  function crc32(bytes) {
    var crc = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) crc = table[(crc ^ bytes[i]) & 255] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  // A zip of `files` ({name, bytes}), each stored as it is, dated `day` (YYYY-MM-DD).
  function zip(files, day) {
    var words = day.split('-').map(Number), date = ((words[0] - 1980) << 9) | (words[1] << 5) | words[2];
    var encoder = new TextEncoder(), parts = [], central = [], offset = 0, size = 0;
    files.forEach(function (file) {
      var name = encoder.encode(file.name), crc = crc32(file.bytes), length = file.bytes.length;
      var local = new DataView(new ArrayBuffer(30)), entry = new DataView(new ArrayBuffer(46));
      local.setUint32(0, 0x04034b50, true);
      local.setUint16(4, 20, true);
      local.setUint16(6, 0x0800, true);  // names in UTF-8
      local.setUint16(12, date, true);
      local.setUint32(14, crc, true);
      local.setUint32(18, length, true);
      local.setUint32(22, length, true);
      local.setUint16(26, name.length, true);
      entry.setUint32(0, 0x02014b50, true);
      entry.setUint16(4, 20, true);
      entry.setUint16(6, 20, true);
      entry.setUint16(8, 0x0800, true);
      entry.setUint16(14, date, true);
      entry.setUint32(16, crc, true);
      entry.setUint32(20, length, true);
      entry.setUint32(24, length, true);
      entry.setUint16(28, name.length, true);
      entry.setUint32(42, offset, true);
      parts.push(local, name, file.bytes);
      central.push(entry, name);
      offset += 30 + name.length + length;
      size += 46 + name.length;
    });
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true);
    end.setUint16(8, files.length, true);
    end.setUint16(10, files.length, true);
    end.setUint32(12, size, true);
    end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [end]), { type: 'application/zip' });
  }

  function one(link) {
    if (link.getAttribute('aria-busy') === 'true') return;
    link.setAttribute('aria-busy', 'true');
    bytesOf(link.href).then(function (bytes) {
      save(new Blob([bytes], { type: 'application/octet-stream' }), link.dataset.file);
    }, function () {
      window.location.href = link.href;
    }).then(function () { link.removeAttribute('aria-busy'); });
  }

  function all(button) {
    if (button.getAttribute('aria-busy') === 'true') return;
    var links = Array.prototype.slice.call(document.querySelectorAll('a[data-file]'));
    var label = button.querySelector('.label'), was = label.textContent, status = document.getElementById('status');
    var readme = document.getElementById('readme'), folder = button.dataset.zip.replace(/\.zip$/, '') + '/', done = 0;
    button.setAttribute('aria-busy', 'true');
    status.textContent = '';
    label.textContent = 'Fetching 0 of ' + links.length;
    Promise.all(links.map(function (link) {
      return bytesOf(link.href).then(function (bytes) {
        done += 1;
        label.textContent = 'Fetching ' + done + ' of ' + links.length;
        return { name: folder + link.dataset.file, bytes: bytes };
      });
    })).then(function (files) {
      if (readme) files.unshift({ name: folder + 'README.txt', bytes: new TextEncoder().encode(readme.textContent.replace(/^\n/, '')) });
      save(zip(files, button.dataset.date), button.dataset.zip);
    }, function () {
      status.textContent = 'The files could not be fetched together: download them one by one below.';
    }).then(function () {
      label.textContent = was;
      button.removeAttribute('aria-busy');
    });
  }

  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var link = event.target.closest('a[data-file], a[data-zip]');
    if (!link || !window.fetch || !window.TextEncoder) return;
    event.preventDefault();
    if (link.dataset.zip) all(link); else one(link);
  });
})();
