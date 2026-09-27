# RobotDSL

Community site of the RobotDSL project and the static preview of MobileCopilot Studio.

- `index.html`, `assets/` — the project page (MobileDSL 1.0, MobileCopilot, results, real-robot runs, community).
- `docs/` — the RobotDSL documentation: guide, reference and development notes. It is built with VitePress from the compiler repository's `docs/` and copied here; `docs/release-qa/` holds release review notes.
- `studio/` — MobileCopilot Studio front end with the component library and thumbnails. This static copy has no compiler behind it: the library, the editors and the key guide work; Build, Copilot, exports, uploads and design reports need the hosted service.

Questions, designs and announcements: use Discussions. Problems with a generated design or the site: open an Issue. See [CONTRIBUTING.md](CONTRIBUTING.md) for reports, part uploads and discussions, and [LICENSE.md](LICENSE.md) for what may be reused.

The Studio preview is a production build with relative asset paths. This repository contains the built front end and catalog only; application and compiler source are maintained privately.
