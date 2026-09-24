# Asset sources

The original page typography, palette, video player and Language section are retained. Content additions use plain text, a BibTeX disclosure, downloaded Lucide icons, Tabler Steps, Chart.js and the existing Three.js integration. No stock robot, generated illustration or invented robot mesh is used as research evidence.

## Downloaded interface assets

Retrieved September 24, 2026. Chart.js, Three.js and icons are vendored. The original Vidstack player, GitHub Markdown stylesheet and Google Fonts retain their existing CDN imports.

| Asset                                                 | Source                                                                                                                                                        | Local copy / license                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| SVG icons                                             | [lucide-static 1.47.0](https://www.jsdelivr.com/package/npm/lucide-static?version=1.47.0)                                                                     | `assets/icons/`, original SVGs; ISC and inherited MIT notices in `LICENSE` |
| Workflow steps and connecting lines                    | [Tabler Steps](https://docs.tabler.io/ui/components/step), [Tabler 1.1.1 CSS](https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/css/tabler.css) | `assets/vendor/tabler/steps.css`, unmodified Steps excerpt; [upstream MIT license](https://github.com/tabler/tabler/blob/dev/LICENSE) saved alongside |
| Benchmark bars and axes                               | [Chart.js 4.4.9](https://www.jsdelivr.com/package/npm/chart.js?version=4.4.9), [bar chart documentation](https://www.chartjs.org/docs/latest/charts/bar.html) | `assets/vendor/chartjs/`, MIT; the application formats the data labels     |
| 3D renderer, controls, GLB loader and environment     | [Three.js 0.170.0](https://www.jsdelivr.com/package/npm/three?version=0.170.0)                                                                                | `assets/vendor/three/`, MIT; unchanged distribution files                  |
| Geist / Geist Mono                                    | [Google Fonts](https://fonts.google.com/specimen/Geist), [Vercel Geist](https://github.com/vercel/geist-font)                                                 | Served by Google Fonts; SIL Open Font License; system-font fallback        |

Vendored files retain upstream formatting. `.gitattributes` marks them as vendored and exempts their existing whitespace from Git checks.

Only Tabler's Steps component is loaded. Existing site colors map to its variables; local CSS applies its vertical layout below 850 pixels and spaces the role labels and descriptions. The workflow is a static explanation, not a live progress indicator. The return-loop and terminal symbols are unmodified `undo-2.svg` and `terminal.svg` from the same Lucide release.

## Research assets reused from the project

The research imagery and compiled robot models are existing project artifacts, not newly designed decorative assets. They are kept separate from downloaded interface libraries.

### Interactive generated-design gallery

The three GLBs reuse existing exports in `fig1-3d-build/hero/*_raw.glb`, exported from compiled benchmark programs with the component library's geometry. They retain one named node per visible component. Web copies are compressed with glTF Transform 3.10.1 / Meshopt (simplification, joining, palette, flattening and instancing disabled); decoded bounds were checked against the originals within 1 mm. No meshes or mounting poses were authored for this redesign. `*.json` stores the corresponding component names and display offsets for exploded inspection. Explosion is a visualization, not a validated assembly sequence. These are geometry viewers, not live physics simulations.

Source CAD is the project's imported component library; component-specific provenance remains in the source component records. Gallery posters reuse `mobilecopilot-video/outputs/opening/thumbs/`. Input images reuse the matching `robotdsl-experiment/dataset/images/` files. The input image and generated output are different assets; input images open at full resolution. The displayed request is shortened from the benchmark prompt.

| Gallery design  | Benchmark task   | Recorded generation run                              |
| --------------- | ---------------- | ---------------------------------------------------- |
| `arm_mecanum`   | `basic_geom_g02` | `claude-opus-4-8/basic_geom_g02__mobiledsl__4cH4bjS` |
| `tslot_mecanum` | `basic_geom_g01` | `gpt-5.6-sol/basic_geom_g01__mobiledsl__vC3GdEY`     |
| `open_omni`     | `basic_geom_g03` | `gpt-5.6-sol/basic_geom_g03__mobiledsl__rZhihkQ`     |

Mappings are taken from `mobilecopilot-video/outputs/opening/designs/designs.json`. Selecting a model is not a claim that this specific trial passed the benchmark: individual verdicts are not presented. The arm remains fixed, as the source request specifies.

### Warehouse walkthrough

The exact `warehouse.patch` was fetched with the latest manuscript source at commit `8606c8b` (September 17, 2026). The prompt, `unresolved_ref` error, added `wp2` goal and “0 errors; 1 advisory” follow `src/content.json`. This is explicitly a paper walkthrough, not a live agent session.

### Video and physical platform

`assets/hardware-closeup.jpg` is the original JPEG embedded in `figures/Fig_robot_closeup.pdf` from the fetched manuscript, extracted without re-encoding using `pdfimages -j`. It is displayed as a standalone platform photograph with an original-resolution link, not as a pasted paper figure.

The overview, three hardware clips and their posters are unchanged project assets. Hardware specifications and the meaning of the composite video views are retained from the pre-redesign site. The page presents the hardware clips as qualitative demonstrations; it does not extend simulation success rates to physical robots. The existing social-preview image is unchanged.

## Manuscript basis

The manuscript submodule was uninitialized in the working experiment checkout. To leave that checkout untouched, the source URL from `robotdsl-experiment/.gitmodules` was fetched into an isolated temporary clone. Latest remote HEAD at retrieval: `8606c8b`, September 17, 2026.

- `tex/table-agent.tex`: every displayed main-comparison value, including input/output token precision.
- `tex/table-ablation.tex`: all six ablation rows.
- `tex/05-benchmark.tex`: denominators, motion/execution definitions, authoring budget, means and historical cost date.
- `tex/04-mobileCopilot.tex`: compile/repair workflow; no simulator feedback in benchmark authoring.
- `tex/06-experiments.tex`: interpretation and EvaluateDSL tradeoff.
- `tex/07-limitations.tex`: library scope and qualitative hardware evidence.

Execution differences are 74−24 = 50, 82−40 = 42 and 64−22 = 42 percentage points. Code ratios 505.3/43.7, 1301.9/46.8 and 870/41.5 round to 12, 28 and 21. “37 vs 12” is 74% and 24% of 50. No significance test or repeated-trial confidence claim is implied. The provisional citation omits the previous unverified publication year and “to appear” claim.
