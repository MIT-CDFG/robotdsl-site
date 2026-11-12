# ROSOrin low L2 roof adapter

Open roof truss on four measured ROSOrin bores, carrying the removable L2 service cap. Separate through hardware respects the front backing flange. PA12 prototype; physical fit, strength and electrical integration unqualified.

The open roof truss uses the existing two rear 3.5 mm roof bores and two front 4.3 mm bores. The front pair passes through an additional 2 mm native backing flange; that lower bore is about 3.3 mm, slightly offset in Y. M2.5 through screws deliberately clear both layers without modifying the host. Rear screws are M2.5 x 10; front screws M2.5 x 12. All receive 7 mm OD / 3.2 mm ID / 0.5 mm washers on both outer faces and separate M2.5 nuts. No native thread is inferred.

Remove the roof as needed to access the backing nuts, and check the omitted/real electronics before fitting them. Attach and tighten the roof truss first. Its three side-loaded M3 nuts accept the separate existing `robotdsl_l2_service_cap`; the cap seats 16 mm above the adapter datum. Attach the L2 to that removable cap off the robot, then fit the three visible cap screws. This preserves access to the four roof screws and avoids trying to drive sensor screws through the roof. Existing L2 cap hardware uses four M3 x 8 sensor screws (3.5 mm nominal insertion) and three M3 x 12 service screws; it is a separate library component and its print file is not duplicated here.

The horizontal scan ring is above the roof and service screws. The front display/openings remain native and uncovered. Actual wiring, roof removal access and the vendor's allowed thread depth/preload still require a physical check.

## Fabrication

Print only the listed polymer support, in PA12 using SLS. Nominal holes need a physical gauge/fit check; do not silently scale the whole part. Use separate purchased metal hardware. These are fabrication candidates, not physically tested kits. No strength, creep, vibration, screw preload, impact, environmental or operational qualification has been performed. Electrical supply, data/control links, OS/driver, calibration and first operation are outside this mechanical fixture. Preserve unknowns in the robot report.

Do not print the screws.

Sources: [ROSOrin pinned maker description](https://github.com/Hiwonder/ROSOrin/tree/7e9cbed4267e21a2df5f7fb0c3ce14c9856f6e48), [MentorPi pinned maker description](https://github.com/Hiwonder/MentorPi/tree/fb6d9969e935eb0e31966185158e33347951e761), [Yahboom ROSMASTER X3 documentation](https://github.com/YahboomTechnology/ROSMASTER-X3), [Pololu VL53L4CD product and carrier CAD](https://www.pololu.com/product/3692), and [RealSense D435i](https://store.realsenseai.com/buy-realsense-depth-camera-d435i.html).

## What to buy

- 2 × M2.5 x 10 ISO4762 socket screw
- 2 × M2.5 x 12 ISO4762 socket screw
- 8 × M3 flat washer, 7 OD / 3.2 ID / 0.5 mm
- 4 × M2.5 hex nut, 5 AF / 2 mm
- 3 × M3 ISO4032 captive nut
