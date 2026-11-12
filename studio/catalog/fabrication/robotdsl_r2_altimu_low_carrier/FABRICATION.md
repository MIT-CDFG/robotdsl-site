# ROSMASTER R2 low AltIMU carrier

A small, low bridge for the Pololu AltIMU-10 v6 on the R2's existing rear deck bores. The 56 × 16 mm footprint spans a real 49 mm host pattern. The board sits 6.6 mm above the deck, on two screw posts and a third support pad. Its two asymmetric holes are retained; the header remains open.

## Parts and assembly order

- Print one carrier in PETG, flat base down. Suggested starting settings: 0.2 mm layers, four perimeters, 40% infill. Inspect bridges over the two underside screw recesses. No sliced job or physical print has been tested.
- Buy 2 × M2 × 10 socket-head screws, 2 × M2 × 8 socket-head screws, 6 × M2 washers (selected reference thickness 0.7 mm, OD 5 mm), and 4 × M2 nuts (1.6 mm thick, 4 mm across flats).
- Before mounting the carrier, insert the two M2 × 8 screws upward into its underside recesses. Put the PCB on the three supports, then add one washer and nut above each PCB hole. Tighten gently and evenly; no torque or preload is qualified. The nominal screw tip extends 0.484 mm beyond the nut.
- Place the bridge on the two native Ø2.5 mm bores at X=-133.57442/-84.57442, Y=-19 mm, Z=47 mm in the R2 frame. Put the M2 × 10 screws and upper washers through the bridge and native 2 mm deck, then fit lower washers and nuts. Nominal thread protrusion below each nut is 2 mm. Install the rear nut with the deck removed: a straight underside tool corridor meets existing rear chassis geometry when the deck is assembled. This is not an in-place retrofit. Reinstall the deck and its original fasteners afterwards.
- The third support pad is offset from the header row. A 2.7 × 12.4 × 3 mm reserved space below the PCB header row is clear in CAD for pin/solder protrusion; match the actual header to that space. Connect the I2C header only after checking its actual connector and cable path. Orient the board axes parallel to the chassis as shown; calibration and electronics are separate.

## Source and limits

The actual Pololu STEP gives mounting holes at (10.16,-3.81) and (5.08,3.81) mm in the board frame, diameter 2.1844 mm, and a 1.016 mm PCB. These are through holes, not invented threads.

This is a CAD manufacturing candidate, not proof of fit, load capacity, vibration isolation, nut locking, sensor accuracy or autonomous operation. Magnetic heading near steel chassis parts and steel hardware is unqualified.

Two explicit 5 mm diameter top-tool cylinders clear the native geometry; the front one has approximately 1 mm clearance. The rear underside tool corridor is obstructed, as described in the installation sequence. These gauges do not certify a particular commercial tool or cable connector.

The exact printable STL is watertight and one connected body. The base-down orientation minimizes the six tested orientations' support area; its two recessed screw-head shoulders still need slicer inspection. This does not qualify an actual printer or material.

Authored geometry is MIT. Reference source: [Pololu AltIMU-10 v6](https://www.pololu.com/product/2863), [official native STEP](https://www.pololu.com/file/0J1982/altimu-10-v6-gyro-accelerometer-compass-and-altimeter.step).
