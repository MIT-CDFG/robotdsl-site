# ROSbot 3 low front D405 fork

Two native cover bores are at Y=-65.9 and 66.1 mm, diameter 3.4 mm. The layers below contain 5.9 mm square apertures; nominal DIN 562 M3 nuts are 5.5 x 5.5 x 1.8 mm. These dimensions come from the pinned maker mesh, not an assertion that the factory uses this fastener. Open the cover and confirm insertion access and seating before assembly; preserve all factory electronics and cables. No new host hole is drilled. Do not use the lower front ToF-cover holes.

Install the camera on the fork before attaching the fork. The 1/4-20 x 3/8 screw with a 1.143 mm washer through the 5 mm tray inserts nominally 3.382 mm into the camera, below the D405 datasheet's 5 mm maximum. Confirm actual washer and screw dimensions. The side guides have nominal 0.4 mm clearance; tripod preload provides normal holding, and the guides limit gross yaw rather than establish calibrated alignment. Attach the fork with two M3 x 12 screws and the square nuts. Straight vertical hex-tool access is open in the fixture; internal cover-service access still needs a physical check.

Camera bottom is roughly 70 mm above level ground with the original wheels. It faces forward. The tray is ahead of the chassis, and the support bridge is above the existing front ToF windows. The nominal side USB-plug box clears this fork by 5.255 mm and the host by 25.57 mm. Optical coverage of the native front ToF windows is not verified. Camera USB cable routing, exact near-field coverage, shelf height, vibrations and impacts require validation on the real robot.

## Fabrication and limits

Print the one-piece polymer body in PA12 using a qualified SLS process. PETG is appropriate for a fit prototype; support and layer direction must be chosen in a slicer and checked for the chosen process. Do not print fasteners. Clean the clearance bores to their nominal sizes. Exact exported STL checks found watertight single bodies with correct millimetre scale. The sampled minimum / p05 wall values are 1.008 / 2.000 mm for the ROSbot fork and 1.353 / 2.986 mm for the R2 cradle, above the selected SLS PA12 0.7 mm guideline. No structural, preload, creep, impact, vibration or weather qualification has been performed.

The complete bolt-washer-nut stack, access, preload and physical holding are not checked.

Sources: [Husarion ROSbot maker model](https://github.com/husarion/rosbot_ros/tree/ff77c662bdfd1fac933af74df488c917f987afc5/rosbot_description/meshes/rosbot), [Yahboom R2 download archive](https://drive.google.com/file/d/1-c7kDXBg3K4fGobxWS9SkPeAG0ZfDJ-2/view), [Yahboom TinyF model](https://drive.google.com/file/d/1h-HZgts57KBwUyfj33rkt0Iuyj9XEWif/view), [RealSense D400 datasheet](https://realsenseai.com/wp-content/uploads/2025/09/Intel-RealSense-D400-Series-Datasheet-October-2025.pdf), and [step.parts](https://step.parts). Electrical, data, OS/driver, calibration and operation are outside this mounting fixture.

## What to buy

- 2 × ISO 4762 M3 x 12 socket screw
- 2 × M3 washer, 7 OD / 3.2 ID / 0.5 mm
- 2 × DIN 562 M3 thin square nut, 5.5 x 5.5 x 1.8 mm
- 1 × 1/4-20 UNC x 3/8 inch button-head socket screw
- 1 × 1/4 inch washer, 13.97 OD / 1.143 mm thick
