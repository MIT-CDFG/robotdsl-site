/* Content enhancements; the original page retains its video and Fig. 1 viewer. */
(() => {
  'use strict';
  const get = id => document.getElementById(id);
  const colors = getComputedStyle(document.documentElement);
  const accent = colors.getPropertyValue('--accent').trim();
  const baseline = colors.getPropertyValue('--baseline').trim();
  const text = colors.getPropertyValue('--text').trim();
  // The manuscript's Table I, paired within each agent/model configuration.
  const agents = [['Codex', 'gpt-5.6-sol'], ['Codex', 'gpt-6-astra'], ['Claude Code', 'claude-opus-4-8']];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // One MobileDSL and one ROS/Gazebo-files bar per agent, each labelled with its
  // value, so the charts need no axis; the page's legend names the colours.
  function pairChart(id, mobiledsl, rosFiles, max, format) {
    new Chart(get(id), {
      type: 'bar',
      data: {
        labels: agents,
        datasets: [
          {label: 'MobileDSL', data: mobiledsl, backgroundColor: accent},
          {label: 'ROS/Gazebo files', data: rosFiles, backgroundColor: baseline}
        ]
      },
      plugins: [{
        id: 'values',
        afterDatasetsDraw(chart) {
          const ctx = chart.ctx;
          ctx.save();
          ctx.textBaseline = 'middle';
          chart.data.datasets.forEach((dataset, index) => {
            ctx.font = `${index === 0 ? 600 : 500} 12px Inter, system-ui, sans-serif`;
            ctx.fillStyle = index === 0 ? accent : text;
            chart.getDatasetMeta(index).data.forEach((bar, row) => ctx.fillText(format(dataset.data[row]), bar.x + 6, bar.y));
          });
          ctx.restore();
        }
      }],
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        animation: reduced ? false : {duration: 900, easing: 'easeOutQuart'},
        datasets: {bar: {barThickness: 16, borderRadius: 3}},
        layout: {padding: {right: 60}},
        plugins: {legend: {display: false}, tooltip: {enabled: false}},
        scales: {
          x: {display: false, beginAtZero: true, max},
          y: {border: {display: false}, grid: {display: false}, ticks: {color: text, font: {family: 'Inter, sans-serif', size: 12}}}
        }
      }
    });
  }
  // Chart.js measures the axis labels when it lays the chart out. Laid out before
  // Inter arrived, the longest label ("claude-opus-4-8") was measured in the
  // fallback face and drawn with its first letter cut off.
  const labelFont = document.fonts ? document.fonts.load('12px Inter').catch(() => {}) : Promise.resolve();
  // The bars grow as the charts come into view; the text summary stands in only if they cannot be drawn.
  const figure = document.querySelector('.results-figure'), fallback = get('results-fallback');
  if (typeof Chart === 'function') fallback.hidden = true;
  const inView = new Promise(resolve => {
    if (!('IntersectionObserver' in window)) return resolve();
    const io = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { io.disconnect(); resolve(); } }, {threshold: 0.3});
    io.observe(figure);
  });
  Promise.all([labelFont, inView]).then(() => {
    try {
      pairChart('success-chart', [74, 82, 64], [24, 40, 22], 100, v => `${v}%`);
      // Generation time, recorded in seconds per attempt, shown in minutes.
      const minutes = seconds => seconds.map(s => s / 60);
      pairChart('time-chart', minutes([285, 151, 268]), minutes([731, 250, 569]), 731 / 60, v => `${v.toFixed(1)} min`);
      pairChart('cost-chart', [0.550, 0.871, 1.485], [1.406, 1.291, 2.959], 2.959, v => `$${v.toFixed(2)}`);
    } catch (error) {
      figure.hidden = true;
      fallback.hidden = false;
      console.warn('Charts unavailable; displaying the benchmark summary.', error);
    }
  });
  // The robot clips play muted while in view, as a looping preview, and pause out of view.
  if (!reduced && 'IntersectionObserver' in window) {
    const clips = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()), {threshold: 0.4});
    document.querySelectorAll('.demos video').forEach(video => clips.observe(video));
  }
  get('copy-citation').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(get('bibtex').textContent.trim());
      get('copy-status').textContent = 'BibTeX copied.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(get('bibtex'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      get('bibtex').focus();
      get('copy-status').textContent = 'The BibTeX is selected. Use your browser’s Copy command.';
    }
  });
})();
