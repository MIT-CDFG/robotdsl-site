# Strafer front-right Unitree L2 support

This is a two-piece prototype mount with a small removable sensor cap and two rising webs. It bolts to the existing front wall of the Strafer cross-channel. It does not use the Drawing Arm deck area, require drilling the chassis, or place a bare sensor on a platform.

The final host datum is **[192, -88, 0] mm**, in the chassis frame (+X forward, +Y left, +Z up). Four native Ø4 mm chassis holes are at X192, Y−108/−68, Z±16. The 8 mm lateral refinement avoids the existing Strafer bolt heads at Y−124. It also gives access behind the new bolts.

## Manufacture files

- `fork.stl` contains only the fork print body.
- `sensor-cap.stl` contains only the cap.

STL files are in millimetres, Z up.

## Prototype printing

The assumed process is PETG FDM, nominal 0.4 mm nozzle and 0.2 mm layer height. Material and process are choices for review, not a tested strength specification. Use enough perimeters to fill the 1.9 mm minimum pocket floors, and inspect the nut pockets and hole fit before assembling. No print has been started or physically qualified.

The exact final fork STL is watertight, one body, approximately 28.54 cm³. Minimum sampled thickness is 1.9 mm and 5th-percentile thickness 3.997 mm. This exceeds generic FDM 1.2 mm supported-wall / 1.6 mm unsupported-wall baselines. Print the fork with its crown seating face down (180° about X, then place on the bed): measured support-facing surface falls from 16.7% to 4.2% at the 45° limit, with a 76 mm build height. Support planning is still needed for the remaining overhangs; the print has not been sliced or certified. Keep support removable from the open frame and the three side-loaded nut pockets.

Print the cap flat, underside on the bed. Its exact STL is watertight and one body, approximately 14.47 cm³, with 4.0 mm minimum and 5th-percentile sampled thickness and zero measured down-facing area below the 45° threshold. The cap is 4 mm thick and has a 28 mm central opening; the mating crown has four blind Ø8 mm screw-head clearances.

## Hardware and sequence

| Hardware | Quantity | Role |
|---|---:|---|
| ISO 4762 M4×14 socket head screw | 4 | Front-channel attachment |
| ISO 7089 M4 washer, 9 OD / 4.3 ID / 0.8 mm | 8 | Front and rear channel bearing |
| ISO 4032 M4 nut | 4 | Inside channel |
| ISO 4762 M3×8 socket head screw | 4 | L2 mounting inserts |
| ISO 4762 M3×12 socket head screw | 3 | Removable cap |
| ISO 7089 M3 washer, 7 OD / 3.2 ID / 0.5 mm | 7 | Sensor and service screws |
| ISO 4032 M3 nut | 3 | Side-loaded captive cap nuts |

1. Insert the three M3 nuts through the radial side openings in the fork. Their metal threads, not the printed clearances, retain the cap screws.
2. Seat the four front M4 washers in the 0.5 mm-deep spotfaces. Bolt the fork to the verified front-wall holes, with washers and nuts inside the channel. The front socket path and rear nut-socket path are checked against the actual vendor chassis geometry.
3. With the cap detached, install the L2 using the four M3×8 screws and 0.5 mm washers from underneath. Their nominal insertion is 3.5 mm. The L2 manual permits at most 6 mm. The asymmetric vendor hole centers are preserved; do not replace them with a guessed square pattern.
4. Lower the cap onto the crown, putting the sensor screw heads into the four reliefs. Fit the three exposed M3×12 service screws and washers. Their axes sit outside the 37.5 mm sensor radius; a 6 mm driver envelope has at least 3.5 mm nominal radial clearance.
5. The cap and scanner can now be removed together using the three service screws. Route the existing L2 cable rearward through the open rear/underside area without using the sensor housing as a structural support. Final cable selection and bend radius remain outside the measured geometry model.

No torque is invented here; follow the fastener and sensor suppliers' applicable instructions and qualify the polymer clamp load physically.

## Fit evidence and limits

Estimated component mass is **52.28 g for the fork and its hardware** and **26.11 g for the cap and its hardware**, using fully dense PETG at 1.27 g/cm³ and steel at 7.85 g/cm³. Actual infill, filament and hardware change the result.

A tall Drawing Arm behind the scanner obstructs some directions. This mount alone does not establish a completely clear 360° field, structural load capacity, driving stability, sensor calibration, water resistance or electrical completion.

## Provenance

- [goBILDA Strafer native STEP archive](https://www.gobilda.com/content/step_files/3209-0001-0007.zip).
- [Unitree L2 native STEP](https://oss-global-cdn.unitree.com/static/L2%203D%20Model.STEP) and [L2 user manual](https://oss-global-cdn.unitree.com/static/Unitree%204D%20LiDAR%20L2%20User%20Manual.pdf).
