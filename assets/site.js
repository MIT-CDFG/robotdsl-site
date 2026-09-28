/* Content enhancements; the original page retains its video, tabs and Fig. 1 viewer. */
(() => {
  'use strict';
  const get = id => document.getElementById(id);
  const colors = getComputedStyle(document.documentElement);
  const accent = colors.getPropertyValue('--accent').trim();
  const muted = colors.getPropertyValue('--muted').trim();
  const text = colors.getPropertyValue('--text').trim();
  const line = colors.getPropertyValue('--line').trim();
  // The manuscript's Table I, paired within each agent/model configuration.
  function showChart() {
    new Chart(get('results-chart'), {
      type: 'bar',
      data: {
        labels: [['Codex', 'gpt-5.6-sol'], ['Codex', 'gpt-6-astra'], ['Claude Code', 'claude-opus-4-8']],
        datasets: [
          {label: 'MobileDSL', data: [74, 82, 64], backgroundColor: accent, barThickness: 16},
          {label: 'ROS/Gazebo files', data: [24, 40, 22], backgroundColor: '#a5adb9', barThickness: 16}
        ]
      },
      plugins: [{
        id: 'values',
        afterDatasetsDraw(chart) {
          const ctx = chart.ctx;
          ctx.save();
          ctx.font = '500 12px Inter, system-ui, sans-serif';
          ctx.textBaseline = 'middle';
          chart.data.datasets.forEach((dataset, index) => {
            ctx.fillStyle = index === 0 ? accent : text;
            chart.getDatasetMeta(index).data.forEach((bar, row) => ctx.fillText(dataset.data[row] + '%', bar.x + 6, bar.y));
          });
          ctx.restore();
        }
      }],
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        animation: matchMedia('(prefers-reduced-motion: reduce)').matches ? false : {duration: 250},
        layout: {padding: {right: 12}},
        plugins: {
          legend: {position: 'top', align: 'start', labels: {color: text, boxWidth: 12, boxHeight: 12, padding: 16, font: {family: 'Inter, sans-serif', size: 13}}},
          tooltip: {callbacks: {label: context => `${context.dataset.label}: ${context.raw}%`}}
        },
        scales: {
          x: {beginAtZero: true, max: 100, border: {display: false}, grid: {color: line}, ticks: {color: muted, maxTicksLimit: 6}},
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
      showChart();
      get('results-fallback').hidden = true;
    } catch (error) {
      document.querySelector('.result-chart').hidden = true;
      console.warn('Chart unavailable; displaying the success-rate summary.', error);
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
