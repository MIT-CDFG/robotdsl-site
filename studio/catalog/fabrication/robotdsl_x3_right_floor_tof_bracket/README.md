# ROSMASTER X3 right floor ToF bracket

Compact open right front corner holder for Pololu VL53L4CD with optical axis down. Two stepped native host sites, a PCB header opening and separate M2 hardware; central deck remains free. Native suspension travel and physical fit unqualified.

This is the right front-corner holder, not a central deck plate. The two mounting sites are on different native levels: the rear bore is in the lower deck above an extra under-deck flange, and the front bore is on a 1.5 mm raised native flange. Both original structures remain intact. Measured source bore polygons are conservatively recorded as 2.8 and 2.3 mm; use M2 screws, never assume a thread. The rear through screw is M2 x 12 and the front is M2 x 10. Fit 0.3 mm M2 washers on both outer faces and separate 1.6 mm M2 nuts. Small 0.04–0.12 mm nominal seating relief avoids faceted source-surface penetration; final seating and preload require a real fit check.

The actual Pololu VL53L4CD carrier sits beyond the front body, optical axis downward. Its two 2.184 mm PCB holes are 12.7 mm apart. The holder contacts only the two corner pads; the large opening leaves the sensor, components and header row exposed. The shared manufacturer carrier CAD has a 1.02 mm PCB. Two M2 x 8 screws with 0.3 mm washers and M2 nuts clamp that PCB; do not over-tighten an unreinforced PCB. The hardware is outside the sensing cone. Install the host bolts first, then the PCB and electrical leads. Header space is an explicit reservation, not a specified soldered cable assembly.

Keep the original mecanum wheels and native suspension. The central upper deck remains free. The retained source does not state pendulum travel or stops, so suspension-stroke clearance remains unknown; the supplied native-mesh and nominal 18-degree downward ray checks are static. Do not advertise cliff protection or driving safety from these checks.

## Fabrication

Print only the listed polymer support, in PA12 using SLS. Nominal holes need a physical gauge/fit check; do not silently scale the whole part. Use separate purchased metal hardware. These are fabrication candidates, not physically tested kits. No strength, creep, vibration, screw preload, impact, environmental or operational qualification has been performed. Electrical supply, data/control links, OS/driver, calibration and first operation are outside this mechanical fixture. Preserve unknowns in the robot report.

Do not print the screws.

Sources: [ROSOrin pinned maker description](https://github.com/Hiwonder/ROSOrin/tree/7e9cbed4267e21a2df5f7fb0c3ce14c9856f6e48), [MentorPi pinned maker description](https://github.com/Hiwonder/MentorPi/tree/fb6d9969e935eb0e31966185158e33347951e761), [Yahboom ROSMASTER X3 documentation](https://github.com/YahboomTechnology/ROSMASTER-X3), [Pololu VL53L4CD product and carrier CAD](https://www.pololu.com/product/3692), and [RealSense D435i](https://store.realsenseai.com/buy-realsense-depth-camera-d435i.html).

## What to buy

- 1 × M2 x 12 ISO4762 host screw
- 1 × M2 x 10 ISO4762 host screw
- 2 × M2 x 8 ISO4762 PCB screw
- 8 × M2 washer, 5 OD / 2.2 ID / 0.3 mm
- 4 × M2 nut, 4 AF / 1.6 mm
