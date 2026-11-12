# Hexapod front camera and downward ToF yoke

This removable nose fixture carries a Raspberry Pi Camera Module 3 looking forward and a Pololu VL53L1X looking down ahead of the lower body plate. Two split collars grip the native front posts. It uses no new chassis holes and leaves the four top-deck screws in their original role.

Print one `hexapod_sensor_yoke` and two identical `hexapod_post_jaw` pieces. The STL geometry uses millimetres and the native body frame, so move each STL onto the build plate in the slicer.

| Purchased hardware | Quantity | Role |
| --- | ---: | --- |
| ISO 4762 M3 × 20 socket-head screw | 4 | Front-access post clamps |
| M3 normal washer, 1.1 mm thick | 4 | Clamp screw seats |
| ISO 4032 M3 nut, 2.4 mm thick | 4 | Captive rear-jaw pockets |
| ISO 4762 M2 × 12 socket-head screw | 4 | Camera PCB |
| ISO 4762 M2 × 8 socket-head screw | 2 | Downward ToF PCB |
| M2 normal washer, 0.7 mm thick | 6 | PCB screw heads |
| M2 nut, 1.6 mm thick | 6 | PCB retaining nuts |

The nominal screw tips extend 1.0 mm past the clamp nuts, about 1.0 mm past the camera nuts, and 1.68 mm past the ToF nuts. Different washer or PCB thickness changes that stack; check the actual hardware.

Use SLS PA12 as the currently screened manufacturing candidate. The two exact STL files are watertight single bodies. Their sampled minimum/p05 thicknesses are 1.697/1.840 mm for the yoke and 1.437/1.889 mm for the jaw, above the 0.7 mm SLS guideline. This is a geometry screen, not load or fatigue qualification. The camera pads have 1.8 mm nominal radial walls. PETG FDM remains a fit-prototype option requiring supports and inspection of the jaw's local clamp seams; it is not declared to meet every unsupported-wall rule. No process is qualified for holding a moving robot or arresting a fall.

Seat M3 nuts in the rear jaws before placing the halves around the two front posts at X70, Y±40 mm. The nominal post bore is 8.2 mm around the native 8 mm post; the 1 mm split gap allows clamping. Keep the clamp bodies between Z12 and Z37, with the posts vertical. Start all four screws from the front and tighten evenly only enough to retain the small sensor assembly. Clamp force, friction, creep and printed-post strength have not been measured. Do not infer a torque specification from the CAD.

Attach the camera with its lens facing forward, using the four pads rather than pressing its electronics against a full plate. The ribbon exits upward into the open space ahead of the top deck. Attach the ToF board below the two front feet, optical face downward, leaving its rear header row open. The nominal 3 mm header-lead and camera ribbon gauges clear the fixture; a real cable/header still needs a fit check.

Geometric checks do not establish clamp friction, optical performance, magnetic compatibility, cable fatigue, gait stability or collision-free motion over every joint pose. This is not a validated cliff-prevention or autonomous inspection system. Power, processing computer, data connection and software remain separate integration work.

Supplier references: [Camera Module 3 mechanical drawing](https://datasheets.raspberrypi.com/camera/camera-module-3-standard-mechanical-drawing.pdf) and [Pololu VL53L1X resources](https://www.pololu.com/product/3415/resources). Native Hexapod geometry is the RobotDSL team's CC-BY-4.0 design. Authored mounting geometry is MIT licensed.
