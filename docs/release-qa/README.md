# Release verification

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
