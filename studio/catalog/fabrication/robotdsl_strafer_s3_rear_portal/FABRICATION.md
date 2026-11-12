# Strafer S3 support

Rearward open truss portal on four measured Strafer middle-channel holes; leaves the rear-left Pi5 bay free.

Print the pieces individually in PETG as a prototype: 0.2mm layers, at least five perimeters, generous solid layers around screw lands. These are starting print settings, not a strength result. Print cap flat. Print crown or combined tray on its feet; print each Strafer cheek on its broad outside face and support the offset feet. Inspect and clear all bores, captive-nut channels and head pockets. No printed threads.

1. Insert the four removable M3 nuts from the outside service windows. For Ackermann, install the purchased PCB spacers with their underside screws and four deck sleeves before mounting.
2. Bolt the support to the specified chassis holes using the host screws, washers and accessible underside nuts. Do not use occupied holes. Strafer arm bridges share one hole pair and cannot be installed with this portal.
3. Ackermann: add Pi5 to board_holes. Strafer: use the separate rear-left Pi5 carrier. ROSbot XL already supplies its computer. Remove the scanner cap for vertical GPIO/board service.
4. Off the robot, attach the scanner to the cap from underneath with four M2.5×8 screws and 0.5mm washers. The 4.5mm cap leaves 3mm nominal engagement, below the published 4mm maximum. Confirm actual screw/washer stack before tightening.
5. Install the cap with four outside M3×10 service screws and washers. Keep cables below the optical scan plane; use the open center and sides for routing.

The STL files are millimetres.

Nominal CAD fit is not actual fit, stiffness, vibration, thread torque or complete robot qualification. Host internal nut access is unverified; Strafer source holes are nominal 4mm, leaving zero nominal radial clearance to M4. Cooling, actual cable overmolds and arbitrary neighboring scanner occlusion need hardware review.

## What to buy

- 4 × M2.5 × 8 socket screws for scanner; 0.5mm washers (they go 3 mm into the scanner, 4 mm at most)
- 4 × M3 × 10 cap service screws, M3 nuts (AF5.5 × 2.4), OD7 × 0.5mm washers
- 4 × M4 × 14 host screws, M4 nuts (AF7 × 3.2), 8 × OD9 × 0.8mm washers
