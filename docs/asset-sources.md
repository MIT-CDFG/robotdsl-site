# Third-party files and sources

What the project page (`index.html`, `assets/`) takes from others and under which licence, and where its figures come from. [LICENSE.md](../LICENSE.md) states the licences of the site's own content, the Studio and the robots.

## Interface files

| What | Source | Where it is, and its licence |
| --- | --- | --- |
| Icons | [lucide-static 1.47.0](https://www.jsdelivr.com/package/npm/lucide-static?version=1.47.0) | `assets/icons/`, the original SVGs; ISC with inherited MIT notices (`assets/icons/LICENSE`) |
| Feature cards and buttons | [VitePress 1.6.4](https://github.com/vuejs/vitepress/tree/v1.6.4) [VPFeature](https://github.com/vuejs/vitepress/blob/v1.6.4/src/client/theme-default/components/VPFeature.vue) and [VPButton](https://github.com/vuejs/vitepress/blob/v1.6.4/src/client/theme-default/components/VPButton.vue) | `assets/vendor/vitepress/`, the Vue sources and the CSS extracted from them; MIT |
| Badges | [Lucide website Badge.vue](https://github.com/lucide-icons/lucide/blob/66d8f9fc394b8530377e5f6112f0b8908ba01280/docs/.vitepress/theme/components/base/Badge.vue) | `assets/vendor/lucide/`, the source and its style block; ISC |
| Charts | [Chart.js 4.4.9](https://www.jsdelivr.com/package/npm/chart.js?version=4.4.9) | `assets/vendor/chartjs/`; MIT |
| 3D view | [Three.js 0.170.0](https://www.jsdelivr.com/package/npm/three?version=0.170.0) | `assets/vendor/three/`, unchanged distribution files (the minified build); MIT |
| Video dialog, terminal window and dot pattern | [Magic UI](https://magicui.design/) [Hero Video Dialog](https://magicui.design/docs/components/hero-video-dialog), [Terminal](https://magicui.design/docs/components/terminal) and [Dot Pattern](https://magicui.design/docs/components/dot-pattern) | Written again in plain CSS in `index.html` and `assets/site.css`; MIT |
| Video player | [Vidstack 1.15.6](https://www.jsdelivr.com/package/npm/vidstack?version=1.15.6), with the two libraries it asks for: [media-captions 1.0.4](https://www.jsdelivr.com/package/npm/media-captions?version=1.0.4) and [media-icons 1.1.5](https://www.jsdelivr.com/package/npm/media-icons?version=1.1.5) | `assets/vendor/vidstack/`, `assets/vendor/media-captions/`, `assets/vendor/media-icons/`, unchanged distribution files; the page's import map brings the two libraries from these copies; MIT |
| Code listing style | [github-markdown-css 5.8.1](https://cdnjs.com/libraries/github-markdown-css/5.8.1) | `assets/vendor/github-markdown-css/`; MIT |
| Typefaces | [Inter](https://fonts.google.com/specimen/Inter) and [Geist Mono](https://fonts.google.com/specimen/Geist+Mono) on the project page, from [@fontsource-variable/inter 5.2.8](https://www.jsdelivr.com/package/npm/@fontsource-variable/inter?version=5.2.8) and [@fontsource-variable/geist-mono 5.2.7](https://www.jsdelivr.com/package/npm/@fontsource-variable/geist-mono?version=5.2.7); [Geist](https://fonts.google.com/specimen/Geist) and Geist Mono on the print pages | The project page's in `assets/fonts/`, the Latin files with their licences; the print pages' are served by Google Fonts; SIL Open Font License |
| Documentation | Built with [VitePress 1.6.4](https://github.com/vuejs/vitepress/tree/v1.6.4) | `docs/`; MIT |

The vendored files keep their upstream formatting and licence files.

## The robot in 3D

`assets/models/fig1_robot.glb` is the robot of the program typed beside it, as the compiler assembles it, drawn with the component library's meshes. `assets/fig_coredsl.webp`, the paper's Fig. 1, is shown in its place where the 3D view cannot run.

## What the charts show

The charts compare a coding agent that writes a MobileDSL program with the same agent writing the ROS and Gazebo files itself, for three agents. The figures are the paper's.

- **Execution success in simulation**: the paper's execution-success rate, which is measured in simulation and not on hardware.
- **Time per design**: generation time, which covers model calls, component retrieval and static validation; the mean per attempt, in minutes rounded to 0.1.
- **API cost per design**: the recorded tokens at the providers' rates as recorded on 2026-09-11, cache pricing included; the mean per attempt, rounded to cents.

No significance test or confidence claim over repeated trials is implied.

## Video and clips

The overview video and the three clips of a real robot are the project's own, under the site content licence. The clips show runs on hardware and make no claim about success rates.

## Practices the Copilot follows

In MobileCopilot Studio, the Copilot measures the robot it built before it trusts a picture of it, and ends its answer with a report of what it checked, what it did not check and what it assumed. Both follow the practice of [text-to-cad](https://github.com/earthtojake/text-to-cad) (© 2026 Thompson Labs LLC, MIT License), whose CAD skill validates a model with geometry checks, uses snapshots for review and reports only the checks that ran. The Studio takes these ideas and none of text-to-cad's code. With thanks to its authors.
