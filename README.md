# RobotDSL

Community site of the RobotDSL project and the static preview of MobileCopilot Studio.

- `index.html`, `assets/` — the project page (MobileDSL 1.0, MobileCopilot, results, real-robot runs, community).
- `studio/` — MobileCopilot Studio front end with the component library and thumbnails. This static copy has no compiler behind it: the library, the editors and the key guide work; Build, Copilot, exports, uploads and design reports need the hosted service.

Questions, designs and announcements: use Discussions. Problems with a generated design or the site: open an Issue. See [CONTRIBUTING.md](CONTRIBUTING.md) for reports, part uploads and discussions, and [LICENSE.md](LICENSE.md) for what may be reused.

The Studio preview is a production build with relative asset paths. This repository contains the built front end and catalog only; application and compiler source are maintained privately.

## Local preview

This remains a static site; there is no build step or package installation.
From this worktree, run `python3 -m http.server 8769 --bind 127.0.0.1` and open
`http://127.0.0.1:8769/`. Use HTTP rather than opening `index.html` as a file,
because the 3D viewer loads modules and model metadata.

The project page uses locally vendored Tabler components, Lucide icons, Chart.js
and Three.js. The gallery loads only the selected generated robot. Result tables
remain accessible without JavaScript; the 3D viewer falls back to saved renders.
See [asset sources](docs/asset-sources.md) for licenses and manuscript references.
The Studio bundle remains separate from the project-page redesign.
