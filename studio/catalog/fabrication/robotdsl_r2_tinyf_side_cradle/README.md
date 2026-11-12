# ROSMASTER R2 lateral TinyF cradle

Use one cradle per side; rotate the same part 180 degrees about Z for the right side. Each foot uses the native deck holes X=-47.074422 and -10.074422 mm, 37 mm apart. These are nominal 2.5 mm through bores through the 2 mm plate. No host threads or drilling are assumed. These locations leave the rear Y=-19 mm IMU reservation free.

Fit each sensor to its two ears using M2 x 8 screws, a 0.3 mm washer on each side and M2 nuts. The native TinyF STEP has conical bores about 3.02-3.04 mm diameter, 30 mm apart, through 2.005 mm ears. The sensor is not drilled. M2 screws and 5 mm washers are intentional. Two open rear pockets allow the nuts to be held while tightening. Then bolt the foot to the deck using M2 x 10, washers above and below, and nuts underneath. Both stages require underside access. A long vertical driver intersects the upper deck: remove that deck and fit the holder before reinstalling it. A 21.6 mm short driver envelope above each screw clears the assembled host by 6.4 mm; this is an access-space check, not a tested tool procedure.

The sensor faces outward: left +Y and right -Y. The holders sit behind the steering area and below the upper deck. The native TinyF cable connector stays between the ribs. Preserve a service loop and check the actual connector/lead. A design-reserved underside lead corridor (11 x 6 x 10.8 mm) clears the host by 3 mm and the cradle by 5.004 mm; confirm the actual connector.

## Fabrication and limits

Print the one-piece polymer body in PA12 using a qualified SLS process. PETG is appropriate for a fit prototype; support and layer direction must be chosen in a slicer and checked for the chosen process. Do not print fasteners. Clean the clearance bores to their nominal sizes. The STL is in millimetres. The sampled minimum / p05 wall values are 1.008 / 2.000 mm for the ROSbot fork and 1.353 / 2.986 mm for the R2 cradle, above the selected SLS PA12 0.7 mm guideline. No structural, preload, creep, impact, vibration or weather qualification has been performed.

The complete bolt-washer-nut stack, access, preload and physical holding are not checked.

Sources: [Husarion ROSbot maker model](https://github.com/husarion/rosbot_ros/tree/ff77c662bdfd1fac933af74df488c917f987afc5/rosbot_description/meshes/rosbot), [Yahboom R2 download archive](https://drive.google.com/file/d/1-c7kDXBg3K4fGobxWS9SkPeAG0ZfDJ-2/view), [Yahboom TinyF model](https://drive.google.com/file/d/1h-HZgts57KBwUyfj33rkt0Iuyj9XEWif/view) and [RealSense D400 datasheet](https://realsenseai.com/wp-content/uploads/2025/09/Intel-RealSense-D400-Series-Datasheet-October-2025.pdf). Electrical, data, OS/driver, calibration and operation are outside this mounting fixture.

## What to buy

- 2 × ISO 4762 M2 x 10 socket screw
- 2 × ISO 4762 M2 x 8 socket screw
- 8 × M2 washer, 5 OD / 2.2 ID / 0.3 mm
- 4 × M2 hex nut, 4 mm AF / 1.6 mm thick
