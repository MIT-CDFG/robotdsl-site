# LEGO 42109 covered LSM6DSO side case

This is a source-matched manufacturing prototype. No physical fit, pin holding
force, vibration transfer, weather sealing or robot operation is qualified.
The original tires, motor, steering, panels and battery hub remain in place.

## Make two pieces

- One `lego42109_imu_base.stl`: side case, two native pin receivers and captive nut channels.
- One `lego42109_imu_lid.stl`: removable cover with PCB clamping bosses and a main-header opening.

Do not print the metal screws, nuts,
washers, LEGO pins or sensor board.

Process candidate: SLS PA12. Clean powder from the open case, nut channels, pin receivers
and header opening before assembly. The parts are printed separately, so no
sealed powder cavity is intentional. No machine-specific build, material
strength, powder-removal inspection, slicer profile or G-code is supplied.
The small pin-receiver lips are not qualified for unsupported FDM manufacture.

## Purchase hardware

| Quantity | Hardware | Source |
| --- | --- | --- |
| 2 | LEGO Technic 2L friction pin, design 2780, matching the source slotted variant | [2780 catalog and sellers](https://www.bricklink.com/v2/catalog/catalogitem.page?P=2780) |
| 2 | ISO 4762 M2 x 12 socket head screw | [CAD and exact nominal standard](https://www.step.parts/parts/iso4762_socket_head_cap_screw_m2x12) |
| 2 | M2 flat washer, 0.7 mm thick, 5 mm outside diameter | [CAD dimensions](https://www.step.parts/parts/flat_washer_normal_m2_simple) |
| 2 | ISO 4032 M2 hex nut, 1.6 mm thick | [CAD dimensions](https://www.step.parts/parts/hex_nut_m2_simple) |
| 1 | Pololu LSM6DSO carrier, product 2798 | [Manufacturer](https://www.pololu.com/product/2798) |

The step.parts links provide hardware CAD references; source the listed
physical standard locally. Other pin mould variants, washer thicknesses,
screw lengths and populated header combinations require another fit check.
Headers, a reading computer, power and wiring are not selected by this fixture.

## Geometry and assembly

1. Confirm that the real car matches the retained source model. The two free
   holes are in the upper left sill beam, at chassis coordinates
   (-43.160, 48.000, 39.328) and (-35.160, 48.000, 39.160) mm. Their axes are
   proportional to (0.021, 0, 1). Existing pins and panels stay in place.
2. Trial-fit purchased 2780 pins in the actual printed case receivers before
   installing the electronics. The nominal shaft bore is 4.85 mm, the centre-collar relief is
   6.45 mm and the distal-lip relief is 5.4 mm. The centre relief opens toward
   the nearby panel and, on the rear receiver, toward the cabin rib; the load-bearing shaft receiver remains closed above it.
   A 0.15 mm axial allowance and 0.5 mm inboard panel clearance are nominal
   model clearances, not measured manufacturing tolerances. Do not force the
   printed case or drill the car to make an incorrect fit work.
3. Before mounting to the car, slide one M2 nut into each end channel of the
   base. The channels are open at the left and right ends; no underside tool
   or hidden nut installation is assumed.
4. Place the bare PCB on the two insulating pads. Its two manufacturer holes
   are 17.78 mm apart. PCB backside is 6.7 mm above the case floor datum;
   the canonical long-board +X direction faces the car's +X direction, and
   component-side +Z points up. The actual sensor IC axis convention must be
   handled by the reading software; this case does not calibrate it.
5. Fit the cover, then two washers and M2 x 12 screws from above. Cover bosses
   contact only the two PCB hole annuli. The screw stack puts the screw tip
   at local Z1.7, nut faces at Z2.0 and Z3.6, the washer at Z13.0..13.7 and
   the screw head bearing face at Z13.7 mm. This gives full nominal nut
   engagement with a 0.3 mm tip projection inside the base. Tighten only
   enough to seat the board; no preload or tightening torque is qualified.
6. Fit the two purchased pins in the existing beam and press the case onto
   their upper ends. Two separated pins constrain nominal yaw, while the
   real friction, play, pull-out force and vibration response remain untested.
7. Use the open roof slot for the nine-pin main I2C/SPI header row. The checked
   23 x 3.6 mm vertical gauge is an access allowance, not a chosen connector.
   Auxiliary header use needs a new fit check. Add external strain relief for
   the actual cable; the case does not claim an integrated cable clamp.

## Checked scope and remaining limits

The case does not occupy the downward removal path of the native battery lid
and six-cell holder. This does not replace the stock car's own
battery-service procedure or qualify hand access and cable routing.

The case is below the roof and outboard of the hub,
with its outer Y face at 72.5 mm versus the native body's 72.6 mm extent.
It is not mounted at the ground plane. The printed receivers follow the
native beam's slight pitch while the board stays level in the chassis frame.

The fixture supplies
no data acquisition, electrical connection, stopping behaviour or verified
vibration measurement.

## Final mesh measurements

The STL files were measured against these
process limits: SLS PA12 minimum wall 0.7 mm; FDM supported wall 1.2 mm and
unsupported wall 1.6 mm. The base is one watertight body with a sampled wall
minimum of **0.924 mm**, p05 **1.225 mm**; the cover is one watertight body with
minimum **0.800 mm**, p05 **1.249 mm**. Both pass this sampled SLS wall screen;
both have local walls below even the supported FDM minimum, so these exact
files are **not qualified for FDM**. Sampling is not a strength test or an
exhaustive minimum-thickness proof. Powder escape, machine settings, actual
pin fit, surface finish and component handling still need physical checks.

Native nonmating gaps are **0.500 mm** to the adjacent inner panel and
**0.505 mm** to the cabin rib. The smaller nominal gap at the receiver bridge
and beam is an intended mating/tolerance allowance, not clearance to an
unrelated panel.
