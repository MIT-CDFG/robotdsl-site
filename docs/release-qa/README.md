# Release verification

## 2026-09-28 MobileDSL section, time chart and community cards

- The Language section becomes one heading, "MobileDSL and its compiler as agentic tools", over the Fig. 1 robot's CoreDSL typing itself line by line while the robot assembles beside it, each part arriving as its line is finished. The module list, the eyebrow and the paragraph are gone; the documentation describes the language.
- Sections run on without divider lines or tinted bands, as on lucide.dev; the community cards take the hero cards' grey.
- The benchmark's second chart shows time per design instead of lines of code; the setup caption was dropped in favour of the paper.
- Community links became four feature cards with a line each.
- The pages load their own styles and script with content-hash queries, so a cached older copy cannot pair with a new page.
- Checked in headless Chromium at 1440, 820 and 390 pixels wide, the full page for chart initialisation, and the animation in real time through Puppeteer (typing, each part arriving, the hold and the restart) and with reduced motion (the finished robot, no typing); all local links, anchors and assets resolve.

## 2026-09-28 benchmark, physical robots and agent sections

- Removed the Agent section and its workflow steps; the hero's agent-assisted design card and the benchmark carry the agent result. The Guide's link to the removed section was dropped.
- The benchmark heading states the result. Two value-labelled charts from the manuscript's Table I sit side by side under one legend: execution success in simulation and authored lines of code (per-attempt means). The no-JavaScript summary lists both.
- Physical robots shows the three runs side by side, without tabs or the platform photograph.
- Checked in headless Chromium at 1440, 820, 740 and 390 pixels wide, without the 3D module; all 1,202 local links, anchors and media references resolve.

## 2026-09-24 latest overview video

- Replaced the overview with the latest narrated 1080p delivery export from the user-specified `mobilecopilot-video` directory. The copied MP4 matches its source SHA-256 exactly; no video re-encoding was performed.
- Updated the poster to the new opening at 3 seconds, player duration to 179.52 seconds, and six chapter intervals to the source timeline. Removed the obsolete 2:57 label.
- Verified 1080p30 H.264 video and AAC audio, fast-start metadata, valid chapter intervals and a complete error-free FFmpeg decode. HTML validation and `git diff --check` passed.

The poster was inspected as a local asset. No browser playback or listening tests were run.

## 2026-09-24 Guide destination

- Replaced the Studio preview badge with Guide and added `guide/index.html`. The version badge links to its language section; the Learn MobileDSL entry also opens the guide.
- Added a visible table of contents, Studio editing steps, descriptions of all four modules, compilation/repair guidance and links to the existing demonstrations and community. The page works without JavaScript and identifies which Studio features currently need the hosted service.
- Extracted shared base styles without changing their declarations. The complete homepage title and introductory paragraph remain identical.
- Both pages pass HTML validation. Local asset, navigation, fragment and ARIA reference checks and `git diff --check` pass.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 Lucide layout with the original introduction

- Restored the Lucide-style layout and downloaded components while retaining the complete original title and introductory paragraph, including its emphasis and RobotDSL Team attribution.
- Widened the text column and adjusted heading/body sizes for the full text. The paragraph remains left-aligned and visible on narrow screens.
- Verified that the title's text and the introduction's markup match the pre-redesign version exactly. HTML validation, site JavaScript syntax and Git whitespace checks passed.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 Lucide website reference

- Replaced the long centered introduction and full-width video with a short split hero: large heading, concise description and actions beside the existing video. Added three linked entry points for Studio, MobileDSL and Community.
- Downloaded the actual VitePress 1.6.4 feature-card and button styles used by the reference site, with original source and MIT license retained. Adapted Vue style scoping for static HTML.
- Adopted Inter, neutral grays, pill buttons and plain header links while retaining RobotDSL's blue accent. The hero stacks and feature cards become compact rows on narrow screens; keyboard focus and reduced-motion styles are included.
- Preserved the visible five-step agent workflow, curated benchmark results, hardware demos, Community position and compact citation. Generated robots remains removed.
- HTML validation, site JavaScript syntax, local asset/icon references, anchor and ARIA references, and `git diff --check`: passed.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 generated robots removed for now

- Removed the Generated robots gallery from Results, together with its loader and page styles. The results chart now leads directly into Physical robots.
- Retained the source assets and viewer module for possible reuse; they are no longer loaded by the page.
- HTML validation, site JavaScript syntax and `git diff --check`: passed.

No browser visual or interaction tests were run for this removal.

## 2026-09-24 closer generated-model framing

- Removed the arrow between the reference image and generated model, leaving two equal-width columns.
- Centered and fitted the actual visible mesh to 88% of the view's limiting dimension, reducing the whitespace from bounding-sphere framing. The saved-render fallback also fills the stage without letterboxing.
- Measured the exploded geometry separately so the camera pulls back enough for separated components.
- Loaded all three compressed GLBs with Three.js and tested the actual framing functions at 4:3 and square aspect ratios. Every model fills 88% initially; projected vertices stay within the viewport at five assembled-to-exploded positions. Framing restores assembled part positions, and the initial camera distance respects the orbit controls' minimum distance.
- HTML validation, viewer JavaScript syntax and `git diff --check`: passed.

These were source and geometry checks at the default viewing angle; no browser visual or interaction tests were run.

## 2026-09-24 matched gallery views

- Removed the rule above Generated robots and the full-width rule beneath its thumbnail choices.
- Gave the reference image and generated model equal-width, 4:3 stages with matching captions and no borders. Moved the selected model name to the shared gallery heading.
- Matched the live renderer background and ground to the input images' existing `#babfc7` gray. All three input images have the same corner color; source images and robot geometry were not edited.
- HTML validation, viewer JavaScript syntax and `git diff --check`: passed.
- Source checks confirmed shared stage classes and captions, equal column widths, removed separators and intact viewer element references.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 curated results and larger generated models

- Removed the platform/training specification list and both detailed result tables. Kept the three-agent success-rate chart, the execution/code takeaway and the benchmark's interpretation limits.
- Added a short text fallback for all three rate pairs when JavaScript or Chart.js is unavailable. An isolated execution check verified both chart success and failure behavior.
- Reworked the gallery around thumbnail choices, reference image/request, and a larger generated model. Removed the repeated title/description area, counter and on-page agent metadata; provenance remains in `docs/asset-sources.md`.
- HTML validation, both JavaScript syntax checks and `git diff --check`: passed.
- Source checks confirmed unchanged section order, three thumbnail choices, all viewer element references, correct rate pairs and valid local asset paths. The mask and icon URL declarations still share one stylesheet.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 fix missing icon URLs

- Reproduced nine missing icon paths: URL variables declared in `assets/site.css` were consumed by the mask in the inline stylesheet, resolving to `/icons/` instead of `/assets/icons/`. Earlier asset-existence checks used the declaration's directory and missed this failure.
- Moved the mask and all icon URL declarations into `assets/site.css`. Relative URLs now share the same base, following the [CSS variable URL resolution rules](https://www.w3.org/TR/css-variables-1/#syntax).
- Served the site locally and checked every resolved icon URL under both `/` and `/robotdsl-site/`: all 15 unique URLs returned HTTP 200 with valid SVG content, including all five workflow icons.
- HTML validation and `git diff --check`: passed.

These were source and HTTP checks; no browser visual or interaction tests were run.

## 2026-09-24 workflow icons and concise repair sequence

- Replaced numbered workflow markers with five large Lucide icons inside the existing Tabler Steps component. Short labels and captions identify each stage without requiring paragraph reading.
- Replaced the long warehouse-example heading and code blocks with three visible states: missing destination, agent adds the goal, ready to run. The exact repair remains downloadable.
- Original Lucide assets are downloaded unchanged; CSS lays out the workflow vertically below 850 pixels and the repair sequence vertically below 640 pixels.
- HTML validation and `git diff --check`: passed.
- Source checks confirmed five workflow icons, three repair states, unchanged results and section order, valid SVGs and local references, and only one disclosure for BibTeX.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 Studio access and workflow visibility

- Header actions expose both Studio and Community. The Community section follows the physical robots, before the paper; alternating section backgrounds follow that order.
- Replaced the three condensed Agent descriptions with five connected Tabler Steps: request, retrieval, authoring, compilation and execution. The compiler-to-agent repair loop and the compiler feedback / agent repair example remain visible.
- The Steps component is an unmodified excerpt of Tabler 1.1.1 CSS. Its vertical layout is applied below 850 pixels; only the existing site palette is used.
- HTML validation and `git diff --check`: passed.
- Source checks confirmed both header destinations, section order, five workflow steps, one remaining BibTeX disclosure, unchanged table values, and valid local assets and references. The error and repair code match the fetched manuscript example.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 readable content without disclosure controls

- Made Studio availability and roadmap, the compiler repair example, both results tables with interpretation, and platform specifications visible in the page. Only the BibTeX utility remains collapsed.
- Shortened repeated explanations, put the main ablation finding before its table, and used compact spacing for the visible material.
- Removed the chart fallback's obsolete attempt to open the now-visible results table.
- HTML validation, JavaScript syntax and `git diff --check`: passed.
- Source checks confirmed unchanged table values and section order, one remaining disclosure for BibTeX, and valid local assets, anchors and ARIA references.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 navigation and section hierarchy

- Replaced the seven-link header navigation with one Community action; the header stays on one row on phones.
- Moved Community directly after the video, put it second among the hero actions, and made Discussions the section's primary action. Preview details and the roadmap share one disclosure.
- Alternated the existing white and light-gray backgrounds and strengthened section dividers using the existing palette.
- `npx --yes html-validate@8.29.0 index.html` and `git diff --check`: passed.
- Source checks for section order, unique IDs, local assets, anchor targets and ARIA references: passed.

No browser visual or interaction tests were run for this adjustment.

## 2026-09-24 content improvements, original layout restored

Validated locally in the `codex/modern-site` worktree:

- `npx --yes html-validate@8.29.0 index.html`: passed.
- `node --check assets/site.js` and `node --input-type=module --check < assets/robot-viewer.js`: passed.
- `git diff --check`: passed.
- Local checks for page assets, gallery models and Three.js imports: passed.
- Original navigation and hero match `2f6cfd1` exactly. Language and video retain their layout, text and behavior, with nonvisual accessibility labels and the no-JavaScript style moved to the document head. The original palette, width and section order are preserved.
- Three.js GLTFLoader with Meshopt decoded all three optimized models; all 26 component nodes and explosion offsets matched, and bounding extents remained within 1 mm of the source exports.
- Main comparison and ablation values were checked against the fetched manuscript at `8606c8b`.

No browser visual or interaction tests were run for these changes. The checks and screenshots below document the earlier page. Studio assets are unchanged.

## 2026-09-21 baseline

Verified on 2026-09-21 with Chromium 153, desktop and touch/phone emulation. No physical-phone or Safari testing has been performed.

The production build was served under `/robotdsl-site/`, including `/robotdsl-site/studio/`. All 37 checks passed:

- At 320, 390, 768 and 1440 CSS pixels: page width, seven section links, table scrolling, code whitespace, key guide, Upload dialog layout and theme persistence.
- At 390 and 1440 pixels: playback of the paper video and all three robot demonstrations, plus keyboard navigation of the demo tabs.
- At 320 and 390 pixels: bottom navigation before/after dismissing the offline notice, one selected panel, and touch inspection followed by explicit part insertion.
- Report and Upload service errors are readable, and modal focus stays inside the dialog.

The maintained Studio source also passes 13 browser scenarios, including native drag-and-drop at the drop position, editor persistence after reload, Upload retries with retained files, and real WebGL capture saved by a local report service as `view.png`.

Build, Copilot, exports, uploads and report submissions still require the hosted service. The service's renderer must include the canvas-capture hook for report screenshots; the dialog explains when capture is unavailable. No test reports or parts were submitted to a public service.

## Phone screenshots

![Project page at 390 CSS pixels](site-phone.png)

![Touch inspection with an explicit Insert reference action](studio-touch.png)
