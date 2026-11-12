# RobotDSL Drawing Arm: parked derivative and positive clamp dock

This package keeps the original four Feetech STS3215 joints, pen, horn interfaces, rear servo rails and footed base. It replaces the two long flat link webs with rounded relief openings and raised outer ribs, and adds a removable four-toe metal clamp dock. The original base has **no chassis mounting holes**; none have been invented.

The published pose is a stationary transport/parked candidate: yaw 0, shoulder 1.10, elbow 2.20 and wrist −2.00 rad. It does not inherit the original table-mounted arm's drawing, strength or simulation claims. Servo holding power, movement into this pose, vibration retention and clamp preload remain unverified. It is not a passive transport lock.

## Files and coordinate conventions

STEP and every manufacturing STL are in millimetres, Z up, X forward, Y left.

Four M4 host bores at dock-local `[±68, ±44, 0]` match the actual channel pattern. The model assumes the measured 2.5 mm channel wall.

## Parts to make

| Body | Quantity | Process and material | Files |
|---|---:|---|---|
| Original base plate | 1 | Original solid PLA print; unchanged geometry | `manufacturing/base_plate.stl` |
| Original shoulder bracket | 1 | Original solid PLA print; unchanged geometry | `manufacturing/shoulder_bracket.stl` |
| Ribbed shoulder link | 1 | Solid PLA prototype print; 4 mm web, 3 mm additional outer ribs | `manufacturing/shoulder_plate_ribbed_derivative.stl` |
| Ribbed elbow link | 1 | Solid PLA prototype print; same web/rib construction | `manufacturing/elbow_plate_ribbed_derivative.stl` |
| Original pen holder | 1 | Original solid PLA print; unchanged geometry | `manufacturing/pen_holder.stl` |
| Dock bridge | 1 | Machine from 9 mm aluminium plate; 6 mm rails and seats, 3 mm locating-cup walls | `manufacturing/bridge.step` |
| Toe clamp | 4 | 4 mm aluminium plate, cut/profile and deburr | `manufacturing/toe_clamp.step`, `.dxf` |
| Clamp heel spacer | 4 | Aluminium tube/spacer, OD 8, ID 4.5, length 13 mm | `manufacturing/heel_spacer.step` |
| Under-channel backing strip | 2 | 2 mm aluminium sheet | `manufacturing/backing_strip.step`, `.dxf` |

Aluminium 6061-T6 is a material candidate for the bridge and clamps; no material strength calculation has been performed. The metal STEP/DXF files are machining inputs, **not print jobs**. The bridge's stepped locating cups require milling and cannot be produced by a single flat laser cut. No kerf or cutter compensation is baked into DXFs.

Print STLs are separate individual bodies laid on their selected print faces. The two revised links retain all four M3 horn holes and four M2 rear-rail holes. Their ribs increase local depth to 7 mm without changing the mounting pads. Original links should not be mixed with a different servo geometry variant. Final revised links measure zero overhang area below 45°, with sampled minimum walls 2.202/2.204 mm. The original shoulder bracket and pen holder retain horizontal round bores and need slicer bridging/support review. No printer settings, toolpaths or print job were submitted.

## Purchased hardware

The dock adds 4 × M4×20 socket-cap screws, 4 × M4×30 socket-cap screws, 8 × M4 full nuts and 16 × M4 washers, nominal ID 4.3, OD 9, thickness 0.8 mm. A 3 mm hex driver serves the M4 heads; a 7 mm wrench serves the full nuts. Sourcing/dimension references:

- [M4×20 socket-cap screw](https://www.tcfixings.co.uk/product/m4-x-20mm-a2-stainless-socket-cap-head-screws-din-912/7213); [manufacturer technical dimensions](https://accu-components.com/api/product-datasheet?id=2828).
- [M4×30 socket-cap screw](https://www.trfastenings.com/Products/Catalogue/screws-and-bolts/hexagon-socket-screws/Cap-Head/TR00005944-000).
- [M4 full nut, 7 mm flats and 3.2 mm height](https://www.accu.co.uk/hexagon-nuts/7909-HPN-M4-A4).
- [M4 Form A washer dimensions and supplier](https://www.ukstainless.co.uk/a4-stainless-steel-washers-form-a.html).
- The original arm retains 4 × M2×8, 12 × M2×6, 16 × M3×6 and 1 × M3×12 screws. Original servo identity is [Feetech STS3215, 12 V ST-3215-C018](https://www.feetechrc.com/525603). The pen is a user-supplied 6.6–10 mm diameter pen; the modeled envelope is 10 × 140 mm, with 60 mm point extension at joint zero.

These are source/specification links, not a claim of current regional stock or a placed order.

## Assembly and actual retention

1. Place the two backing strips inside the two Strafer channels. Bolt the bridge down through the verified four holes **before** placing the arm: the rear host bolt heads sit under the original base edge. Each stack is top washer 0.8 + bridge 6 + channel wall 2.5 + backing 2 + lower washer 0.8 + nut 3.2 mm; M4×20 leaves nominal 4.7 mm protrusion beyond the nut.
2. Set the original four feet into the four locating cups. Nominal foot diameter is 12 mm; cup bore is 12.6 mm, giving 0.3 mm radial prototype clearance. The two rear collars are relieved around the nearby host washer. In CAD, the closest washer-to-foot gap is 0.511 mm. Confirm this tight fit against manufactured tolerances before building.
3. Install four 13 mm heel spacers and four removable toe clamps. The toes contact the original base plate's upper face at dock Z 19 mm; they restrain upward motion while the cup walls locate the feet laterally. Each clamp's M4×30 stack is top washer 0.8 + clamp 4 + spacer 13 + bridge 6 + lower washer 0.8 + nut 3.2 mm, leaving nominal 2.2 mm protrusion. The screw axes are outside the base at Y ±55 mm, so their heads remain accessible after the base is installed.
4. Keep the yaw servo's underside connector window and the open centre of the bridge clear. The dock has no cable-routing or electrical completion claim. Do not infer an allowable tightening torque from the geometric model: compression of the printed base and service preload require physical review.

Clamp preload, loads and strength, physical fit, swept motion and operation remain unqualified. No arm bolt pattern or whole-arm enclosure has been invented.

## Remaining limits

Thread engagement and material contact pressure are not simulated.

The printed parts' geometry and the parked pose are candidates for a prototype. Revised link stiffness, M2 pilot fit, horn screws, cable flex, 12 V supply, servo-bus adapter, controls, heat, fatigue and vibration are outside this package's verified scope. The assembly contains no new electronics or harness. Approximate masses are 0.388494 kg for the arm including its 20 g pen, and 0.221132 kg for the dock including fixings.

## Provenance

Original Drawing Arm: RobotDSL Team, **CC-BY-4.0**. The new link profile and clamp dock are local derivatives.

Servo geometry: [SO-ARM100 pinned `STS3215_03a.step`](https://github.com/TheRobotStudio/SO-ARM100/blob/d04fa975fb79c9870df5824cce7c7390d52cac85/STEP/SO100/STS3215_03a.step), **Apache-2.0**.
