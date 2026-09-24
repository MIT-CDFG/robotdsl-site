/* Tabler owns the tabs, disclosure controls, modal focus and keyboard behavior. */
(() => {
  "use strict";
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const get = (id) => document.getElementById(id);
  const metrics = {
    execution: {
      title: "Completes its programmed behavior",
      unit: "%",
      direction: "Higher",
      max: 100,
      dsl: [74, 82, 64],
      baseline: [24, 40, 22],
      number: "37",
      compare: "vs 12",
      heading: "working systems out of 50.",
      explanation:
        "With Codex / gpt-5.6-sol, 25 more designs completed their programmed behavior using MobileDSL. All three agent configurations improved.",
      context:
        "Moving is only the first check: 98% moved, but 74% completed their behavior. The gap exposes integration failures beyond basic mobility.",
    },
    motion: {
      title: "Responds to velocity commands",
      unit: "%",
      direction: "Higher",
      max: 100,
      dsl: [98, 100, 96],
      baseline: [56, 78, 58],
      number: "49",
      compare: "vs 28",
      heading: "robots that move, out of 50.",
      explanation:
        "With Codex / gpt-5.6-sol, MobileDSL produces 21 more robots that respond to velocity commands. Assembly and controller settings have to work together for this first check to pass.",
      context:
        "This checks simulator pose after a driving command. It does not by itself show that the robot can finish a route or avoid obstacles.",
    },
    loc: {
      title: "Agent-written source code",
      unit: "lines",
      direction: "Lower",
      dsl: [43.7, 46.8, 41.5],
      baseline: [505.3, 1301.9, 870],
      number: "43.7",
      compare: "vs 505.3",
      heading: "lines of code per attempt.",
      explanation:
        "With Codex / gpt-5.6-sol, the agent writes about 12 times less code. Across the three configurations the reduction is about 12–28 times.",
      context:
        "Compiler output and existing library code are excluded. The savings concern what the agent has to author, not the size of the final robot system.",
    },
    time: {
      title: "Time spent generating the system",
      unit: "s",
      direction: "Lower",
      dsl: [285, 151, 268],
      baseline: [731, 250, 569],
      number: "4.8",
      compare: "vs 12.2 min",
      heading: "average authoring time.",
      explanation:
        "With Codex / gpt-5.6-sol, authoring takes about 61% less time. The compiler handles assembly transforms and dependent settings that the agent otherwise has to write and repair.",
      context:
        "Includes model calls, component retrieval and static validation. Subsequent simulation is excluded; the authoring budget is 30 minutes in both conditions.",
    },
    cost: {
      title: "API cost during authoring",
      unit: "$",
      direction: "Lower",
      dsl: [0.55, 0.871, 1.485],
      baseline: [1.406, 1.291, 2.959],
      number: "$0.55",
      compare: "vs $1.41",
      heading: "mean API cost per attempt.",
      explanation:
        "With Codex / gpt-5.6-sol, authoring costs about 61% less. MobileDSL reduces recorded cost within every tested agent/model pair.",
      context:
        "Historical rates recorded on September 11, 2026, including cache pricing. These are benchmark costs, not an estimate for current API pricing.",
    },
  };
  const labels = [
    ["Codex", "gpt-5.6-sol"],
    ["Codex", "gpt-6-astra"],
    ["Claude Code", "claude-opus-4-8"],
  ];
  let chart;
  const numberFormat = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  });
  function format(value, metric) {
    if (metric.unit === "$") return "$" + value.toFixed(3);
    return numberFormat.format(value) + (metric.unit === "%" ? "%" : "");
  }
  // Data marks use Chart.js. This plugin only labels the existing bars.
  const barLabels = {
    id: "barValues",
    afterDatasetsDraw(instance) {
      const metric = metrics[get("metric").value];
      const ctx = instance.ctx;
      ctx.save();
      ctx.font = "500 12px Geist, system-ui, sans-serif";
      ctx.textBaseline = "middle";
      instance.data.datasets.forEach((dataset, index) => {
        instance.getDatasetMeta(index).data.forEach((bar, row) => {
          ctx.fillStyle = index === 0 ? "#245be0" : "#536075";
          ctx.fillText(format(dataset.data[row], metric), bar.x + 7, bar.y);
        });
      });
      ctx.restore();
    },
  };
  function updateResults() {
    const metric = metrics[get("metric").value];
    get("chart-title").textContent = metric.title;
    get("metric-direction").textContent =
      `${metric.direction} is better · ${metric.unit}`;
    get("result-number").replaceChildren(
      document.createTextNode(metric.number + " "),
    );
    const comparison = document.createElement("span");
    comparison.textContent = metric.compare;
    get("result-number").append(comparison);
    get("result-heading").textContent = metric.heading;
    get("result-explanation").textContent = metric.explanation;
    get("result-context").textContent = metric.context;
    get("results-chart").setAttribute(
      "aria-label",
      `${metric.title}, ${metric.unit}. ` +
        labels
          .map(
            (name, i) =>
              `${name.join(" ")}: MobileDSL ${metric.dsl[i]}, ROS/Gazebo ${metric.baseline[i]}.`,
          )
          .join(" "),
    );
    if (!window.Chart) {
      get("results-chart").hidden = true;
      get("chart-fallback").hidden = false;
      get("result-tables").classList.add("show");
      const trigger = document.querySelector(
        '[data-bs-target="#result-tables"]',
      );
      trigger.classList.remove("collapsed");
      trigger.setAttribute("aria-expanded", "true");
      return;
    }
    if (chart) {
      chart.data.datasets[0].data = metric.dsl;
      chart.data.datasets[1].data = metric.baseline;
      chart.options.scales.x.max = metric.max;
      chart.update();
      return;
    }
    chart = new Chart(get("results-chart"), {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "MobileDSL",
            data: metric.dsl,
            backgroundColor: "#245be0",
            borderRadius: 3,
            barThickness: 16,
          },
          {
            label: "ROS/Gazebo files",
            data: metric.baseline,
            backgroundColor: "#8793a8",
            borderRadius: 3,
            barThickness: 16,
          },
        ],
      },
      plugins: [barLabels],
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        animation: reducedMotion ? false : { duration: 300 },
        layout: { padding: { right: 48 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.dataset.label}: ${format(context.raw, metrics[get("metric").value])}`,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            max: metric.max,
            border: { display: false },
            grid: { color: "#edf0f5" },
            ticks: { color: "#667386", maxTicksLimit: 5, font: { size: 12 } },
          },
          y: {
            border: { display: false },
            grid: { display: false },
            ticks: {
              color: "#344054",
              font: { family: "Geist, system-ui, sans-serif", size: 12 },
            },
          },
        },
      },
    });
  }
  updateResults();
  get("metric").addEventListener("change", updateResults);

  // Pause clips as soon as a different tab is selected or the modal closes.
  document.querySelectorAll('[data-bs-toggle="pill"]').forEach((tab) => {
    tab.addEventListener("hide.bs.tab", () => {
      document
        .querySelector(tab.dataset.bsTarget)
        ?.querySelectorAll("video")
        .forEach((video) => video.pause());
    });
  });
  const paperVideo = get("paper-video");
  get("video-dialog").addEventListener("show.bs.modal", () =>
    get("video-dialog").removeAttribute("inert"),
  );
  get("video-dialog").addEventListener("hidden.bs.modal", () =>
    get("video-dialog").setAttribute("inert", ""),
  );
  get("video-dialog").addEventListener("shown.bs.modal", () => {
    document.querySelectorAll("#real video").forEach((video) => video.pause());
    paperVideo.play().catch(() => {
      /* Native controls remain available if autoplay is blocked. */
    });
  });
  get("video-dialog").addEventListener("hide.bs.modal", () =>
    paperVideo.pause(),
  );
  document.addEventListener("visibilitychange", () => {
    if (document.hidden)
      document.querySelectorAll("video").forEach((video) => video.pause());
  });
  get("copy-citation").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(get("bibtex").textContent.trim());
      get("copy-status").textContent = "BibTeX copied.";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(get("bibtex"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      get("bibtex").focus();
      get("copy-status").textContent =
        "Copy is unavailable here. The BibTeX is selected; use your browser’s Copy command.";
    }
  });
  // Preserve incoming links from the previous page's Language and Video sections.
  function followHash() {
    if (location.hash === "#mobiledsl" && window.tabler) {
      const tab = get("step-write");
      tab.addEventListener(
        "shown.bs.tab",
        () => get("copilot").scrollIntoView(),
        { once: true },
      );
      tabler.Tab.getOrCreateInstance(tab).show();
    }
    if (location.hash === "#video" && window.tabler)
      tabler.Modal.getOrCreateInstance(get("video-dialog")).show();
  }
  window.addEventListener("hashchange", followHash);
  followHash();
  // Dynamic import allows a readable poster fallback even when WebGL or a module fails.
  import("./robot-viewer.js").catch((error) => {
    get("robot-stage").setAttribute("aria-busy", "false");
    get("robot-status").textContent =
      "3D unavailable · showing the saved render";
    document.querySelectorAll("[data-design]").forEach((button) => {
      button.disabled = true;
    });
    get("robot-canvas").tabIndex = -1;
    console.warn("Robot viewer unavailable:", error);
  });
})();
