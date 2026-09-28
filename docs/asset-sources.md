# Asset sources

The page follows the user's Lucide website reference, with Inter typography, neutral surfaces and the existing RobotDSL blue accent. The video player and research content are retained. Interface components use downloaded VitePress styles, Lucide icons, Chart.js and the existing Three.js integration. No stock robot, generated illustration or invented robot mesh is used as research evidence.

## Downloaded interface assets

Retrieved September 24, 2026. Chart.js, Three.js and icons are vendored. The original Vidstack player, GitHub Markdown stylesheet and Google Fonts retain their existing CDN imports.

| Asset                                                 | Source                                                                                                                                                        | Local copy / license                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| SVG icons                                             | [lucide-static 1.47.0](https://www.jsdelivr.com/package/npm/lucide-static?version=1.47.0)                                                                     | `assets/icons/`, original SVGs; ISC and inherited MIT notices in `LICENSE` |
| Feature cards and pill buttons                        | [VitePress 1.6.4 VPFeature](https://github.com/vuejs/vitepress/blob/v1.6.4/src/client/theme-default/components/VPFeature.vue), [VPButton](https://github.com/vuejs/vitepress/blob/v1.6.4/src/client/theme-default/components/VPButton.vue) | `assets/vendor/vitepress/`, original Vue sources, extracted CSS and MIT license |
| Hero version and Guide badges                         | [Lucide website Badge.vue](https://github.com/lucide-icons/lucide/blob/66d8f9fc394b8530377e5f6112f0b8908ba01280/docs/.vitepress/theme/components/base/Badge.vue) | `assets/vendor/lucide/`, original source, unchanged style block and ISC license; original `rocket.svg` from lucide-static 1.47.0 and existing `arrow-right.svg` |
| Benchmark bars                                        | [Chart.js 4.4.9](https://www.jsdelivr.com/package/npm/chart.js?version=4.4.9), [bar chart documentation](https://www.chartjs.org/docs/latest/charts/bar.html) | `assets/vendor/chartjs/`, MIT; the application draws the value labels and the page the shared legend |
| 3D renderer, controls, GLB loader and environment     | [Three.js 0.170.0](https://www.jsdelivr.com/package/npm/three?version=0.170.0)                                                                                | `assets/vendor/three/`, MIT; unchanged distribution files                  |
| Inter / Geist Mono                                    | [Inter](https://fonts.google.com/specimen/Inter), [Geist Mono](https://fonts.google.com/specimen/Geist+Mono)                                                 | Served by Google Fonts; SIL Open Font License; system-font fallback        |
| RobotDSL documentation                                | [VitePress 1.6.4](https://github.com/vuejs/vitepress/tree/v1.6.4) build of the compiler repository's `docs/` | `docs/` except this file and `release-qa/`; VitePress is MIT; the nav mark is the same unmodified `bot.svg` |
| Docs button icon                                      | [lucide-static 1.47.0 book-open](https://cdn.jsdelivr.net/npm/lucide-static@1.47.0/icons/book-open.svg) | `assets/icons/book-open.svg`, original SVG; ISC (see `assets/icons/LICENSE`) |

Vendored files retain upstream formatting. `.gitattributes` marks them as vendored and exempts their existing whitespace from Git checks.

The layout reference is [lucide.dev](https://lucide.dev/), inspected September 24, 2026, and its [homepage source](https://github.com/lucide-icons/lucide/blob/66d8f9fc394b8530377e5f6112f0b8908ba01280/docs/index.md). The site identifies VitePress 1.6.4. `VPFeature.css` preserves the upstream declarations, replaces Vue's scoped selectors with the `.VPFeature` ancestor and unwraps `:deep`; `VPButton.css` contains the original component style block. Local CSS maps their variables to RobotDSL's colors and adapts feature layout on narrow screens. The hero reuses the existing research video rather than adding decorative imagery. No Vue runtime or full VitePress theme is added.

The Agent section, a Tabler Steps workflow with Lucide markers, was removed at the user's request on 2026-09-28; the hero's agent-assisted design card and the benchmark carry the agent result. The Language section's module list and CoreDSL listing gave way the same day to the MobileDSL section: the documentation now describes the language, and the section shows what a coding agent gets from the compiler.

The compiler report in the MobileDSL section is output of `mobiledsl` 0.1.0 for the documentation's demo program with `wheel_lf`'s glue moved from x = 0.1275 to 0.14, checked with `--check` against the compiler's test library. The page shows the lines from that diagnostic's header to its first help line; the second help line, the evidence note and the companion wheel-mount error are left out, as the caption's “excerpt” says. Its JSON form carries the same help and no machine-applicable edit, so the page does not claim one.

The community cards reuse the vendored VPFeature component as links. `bug` and `package-plus` are original SVGs from `lucide-static@1.47.0`, like the other icons.

The Guide uses the same typography, header, icons and downloaded button component as the home page, with native document sections and a table of contents. Its content draws from the existing Language and Agent sections, the paper's repair example and the repository's documented Studio capabilities. Library and Editor labels were checked against the shipped Studio bundle. It does not add installation commands or imply the static Studio has a working compiler service.

## Research assets reused from the project

The research imagery and compiled robot models are existing project artifacts, not newly designed decorative assets. They are kept separate from downloaded interface libraries.

### Interactive generated-design gallery (currently removed from the page)

The gallery was removed from the page at the user’s request on 2026-09-24. Its assets and viewer module are retained for possible reuse; the page no longer loads them. The notes below record their provenance and previous presentation.

The three GLBs reuse existing exports in `fig1-3d-build/hero/*_raw.glb`, exported from compiled benchmark programs with the component library's geometry. They retain one named node per visible component. Web copies are compressed with glTF Transform 3.10.1 / Meshopt (simplification, joining, palette, flattening and instancing disabled); decoded bounds were checked against the originals within 1 mm. No meshes or mounting poses were authored for this redesign. `*.json` stores the corresponding component names and display offsets for exploded inspection. Explosion is a visualization, not a validated assembly sequence. These are geometry viewers, not live physics simulations.

Source CAD is the project's imported component library; component-specific provenance remains in the source component records. Gallery posters reuse `mobilecopilot-video/outputs/opening/thumbs/`. Input images reuse the matching `robotdsl-experiment/dataset/images/` files. The input image and generated output are different assets; input images open at full resolution. The displayed request is shortened from the benchmark prompt.

The gallery uses the saved renders as thumbnail selectors, with equal-width reference and generated-model views sharing a 4:3 aspect ratio. The live viewer's backdrop and ground match the original input images' `#babfc7` background; source image pixels and model geometry are unchanged. The camera fits the visible geometry rather than a surrounding sphere, with a separate distance calculation for exploded parts. The views sit directly beside each other without an arrow or full-width separator rules; the page's selection underline identifies the active thumbnail. No additional image or frame assets were authored. Agent/run provenance is recorded below rather than repeated beneath the viewer.

| Gallery design  | Benchmark task   | Recorded generation run                              |
| --------------- | ---------------- | ---------------------------------------------------- |
| `arm_mecanum`   | `basic_geom_g02` | `claude-opus-4-8/basic_geom_g02__mobiledsl__4cH4bjS` |
| `tslot_mecanum` | `basic_geom_g01` | `gpt-5.6-sol/basic_geom_g01__mobiledsl__vC3GdEY`     |
| `open_omni`     | `basic_geom_g03` | `gpt-5.6-sol/basic_geom_g03__mobiledsl__rZhihkQ`     |

Mappings are taken from `mobilecopilot-video/outputs/opening/designs/designs.json`. Selecting a model is not a claim that this specific trial passed the benchmark: individual verdicts are not presented. The arm remains fixed, as the source request specifies.

### Warehouse walkthrough

The Guide's warehouse example follows the manuscript's Figure 4 source at commit `8606c8b` (September 17, 2026): the undefined `wp2` goal, its WorldDSL repair and “0 errors; 1 advisory” in `src/content.json`. It is a paper walkthrough, not a live agent session. The home page's repair sequence and the repair-diff download were removed at the user's request on 2026-09-28.

### Video and physical platform

The platform photograph taken from the manuscript was removed at the user's request on 2026-09-28.

The overview is copied unchanged from the narrated 1080p render, the latest delivery export in the user-specified video repository (September 22, 2026). It is 1920 × 1080 at 30 fps, H.264 with English AAC narration, 179.52 seconds and 18,789,160 bytes. Source SHA-256: `f265481576acfc51ebce4bde1c2180e91fd00a7cef54cb05c4cbeccb851c7e2e`. `assets/video_poster.png` is the caption-free opening still from `mobilecopilot-video/previews/slides/frame-00-at-0.5s.png`, copied unchanged at 1920 × 1080. It retains the title and seven assembled robots without the narration subtitle overlay. The six player chapters use section boundaries from `mobilecopilot-video/mp4-review/chapters.json`; the video's final cue extends to the measured media duration. Source repository HEAD at retrieval: `0edf05f45681843d73766584aeb53a5a2de8b252`.

The three standalone hardware clips and their posters are unchanged project assets. The page shows the three clips side by side and describes their composite views, without naming or specifying the platform. The benchmark's chart title limits the success rates to simulation; the hardware clips make no success claim. The existing social-preview image is unchanged.

## Manuscript basis

The manuscript submodule was uninitialized in the working experiment checkout. To leave that checkout untouched, the source URL from `robotdsl-experiment/.gitmodules` was fetched into an isolated temporary clone. Latest remote HEAD at retrieval: `8606c8b`, September 17, 2026.

- `tex/table-agent.tex`: the three paired execution-success rates and the authored-code comparison. Full result and ablation tables are not reproduced on the page.
- `tex/05-benchmark.tex`: denominators, motion/execution and generation-time definitions, authoring budget, per-attempt means and historical cost date.
- `tex/04-mobileCopilot.tex`: compile/repair workflow; no simulator feedback in benchmark authoring.
- `tex/06-experiments.tex`: interpretation and EvaluateDSL tradeoff.
- `tex/07-limitations.tex`: library scope and qualitative hardware evidence.

Execution differences are 74−24 = 50, 82−40 = 42 and 64−22 = 42 percentage points. The time chart shows generation time (model calls, component retrieval and static validation; per-attempt means) of 285, 151 and 268 s against 731, 250 and 569 s, in minutes rounded to 0.1. Every MobileDSL value is the lower, the basis of the heading's “in less time”. No significance test or repeated-trial confidence claim is implied. The BibTeX takes its title from `main.tex`. The manuscript is anonymous and names no venue or year, so the entry credits the RobotDSL Team, points to this site and states neither.
