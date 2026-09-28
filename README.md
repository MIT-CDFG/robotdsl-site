# RobotDSL

Community site of the RobotDSL project and the static preview of MobileCopilot Studio.

- `index.html`, `assets/` — the project page (MobileDSL 1.0, MobileCopilot, results, real-robot runs, community).
- `docs/` — the RobotDSL documentation (guide, reference, development notes), built with VitePress from the compiler repository's `docs/` for the published path `/robotdsl-site/docs/` and copied here. `docs/release-qa/` and `docs/asset-sources.md` are this site's own.
- `guide/` — MobileDSL introduction, Studio editing steps, the four modules and the compiler/agent workflow.
- `studio/` — MobileCopilot Studio front end with the component library, thumbnails and the papers that use each part (a paper search lists a paper's robots and parts). This static copy has no compiler behind it: the library, the papers, the editors and the key guide work, and Copilot calls the chosen provider directly with your own key; Build, exports, uploads and design reports need the hosted service.

Questions, designs and announcements: use Discussions. Problems with a generated design or the site: open an Issue. See [CONTRIBUTING.md](CONTRIBUTING.md) for reports, part uploads and discussions, and [LICENSE.md](LICENSE.md) for what may be reused.

The Studio preview is a production build with relative asset paths. This repository contains the built front end and catalog only; application and compiler source are maintained privately.

## Local preview

This remains a static site; there is no build step or package installation.
From this worktree, run `python3 -m http.server 8769 --bind 127.0.0.1` and open
`http://127.0.0.1:8769/`. Use HTTP rather than opening `index.html` as a file,
because the 3D viewer loads modules and model metadata. The documentation's
pages load their files from `/robotdsl-site/docs/`, where GitHub Pages serves
them; to preview it, serve this worktree under that prefix:

```console
mkdir -p /tmp/robotdsl-preview && ln -sfn "$PWD" /tmp/robotdsl-preview/robotdsl-site
python3 -m http.server 8769 --bind 127.0.0.1 --directory /tmp/robotdsl-preview
```

and open `http://127.0.0.1:8769/robotdsl-site/`.

The project page follows the Lucide reference, using locally vendored VitePress
components and Lucide icons alongside the existing Vidstack player, Chart.js and Three.js.
The project page and guide share typography and colors through `assets/base.css`.
The success-rate summary remains accessible without JavaScript; the Language
section's 3D viewer has a static fallback. The generated-robot gallery is currently removed.
See [asset sources](docs/asset-sources.md) for licenses and manuscript references.
The Studio bundle remains separate from the project-page redesign.
