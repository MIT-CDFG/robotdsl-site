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
        animation: matchMedia('(prefers-reduced-motion: reduce)').matches ? false : {duration: 250},
        datasets: {bar: {barThickness: 16, borderRadius: 3}},
        layout: {padding: {right: 44}},
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
  labelFont.then(() => {
    try {
      pairChart('success-chart', [74, 82, 64], [24, 40, 22], 100, v => `${v}%`);
      pairChart('code-chart', [43.7, 46.8, 41.5], [505.3, 1301.9, 870.0], 1301.9, v => Math.round(v).toLocaleString('en-US'));
      get('results-fallback').hidden = true;
    } catch (error) {
      document.querySelector('.results-figure').hidden = true;
      console.warn('Charts unavailable; displaying the benchmark summary.', error);
    }
  });
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
