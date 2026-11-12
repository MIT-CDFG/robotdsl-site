# Lynx low CMP10A edge cradle

The case sits on four small pads outside the left rail, only 3 mm above its top. This is a low-profile rail support, not lower-body mounting: the flange is at chassis Z232.95 mm, about377.14 mm above nominal wheel-ground. It remains aligned with the robot axes, leaves the central cargo area open and exposes its rear USB socket. This fixture uses the actual 26 × 50 mm case-hole pattern, not adhesive placement.

## Manufacture and purchase

| Item | Quantity | Required dimensions |
|---|---:|---|
| Printed edge cradle | 1 | PETG prototype; 2.9 mm case clearance holes; 5.5 mm rail clearance holes |
| Machined steel slide key | 2 | Separate key STEP; 14 mm long, 11.1 mm lip width; do not print |
| ISO 4762 M5 × 12 socket screw | 2 | Length below head 12 mm |
| ISO 7091 / DIN 126 M5 washer | 2 | 10 mm outside diameter, **1 mm thick** |
| ISO 4762 M2.5 × 12 socket screw | 4 | Length below head 12 mm |
| M2.5 washer | 4 | Selected CAD: 6 mm outside diameter, **1.1 mm thick** |
| M2.5 hex nut | 4 | Selected CAD: 5 mm across flats, **2 mm thick** |

Machine the two slide keys from steel and tap M5 × 0.8. The STEP bore shows the nominal 5 mm thread envelope; **drill the appropriate tap pilot (nominally 4.2 mm), then tap**, rather than machining a 5 mm clearance hole. Break sharp edges without changing the retaining faces. Assembled key top is 2 mm below the rail top and key bottom 5.7 mm below. With the specified washer and 5.5 mm foot, the M5 screw tip is 5.5 mm below the rail top: nominal engagement 3.5 mm and 0.5 mm clearance from the native slot floor. Actual thread strength and tolerances are unqualified.

## Assembly and access

1. With the cradle loose, insert the four M2.5 screws upward through its small pads. Seat the case on its real flanges; place one 1.1 mm washer and one 2 mm nut above each flange. The flange is 4.75 mm thick and the printed pad is 3 mm, giving 1.15 mm nominal screw protrusion beyond the nut. Tighten without distorting the case.
2. Insert the two machined keys through an accessible end of the Lynx left rail. Rail-end covers or existing hardware may need temporary removal. Confirm access on the actual robot; these models do not prove the disassembly procedure.
3. Locate the cradle at chassis (0, 135, 229.95) mm, align the keys at X = ±30 mm, and install the two M5 screws and specified washers from above. Slide keys to the measured pose and tighten. Keep the central deck clear.
4. The four case screw heads lie outboard of the rail and are reached from below before final rail mounting. The USB socket faces chassis -X. Route the real cable along the outer edge; a cable model, bend radius and strain relief are not provided.

Magnetic disturbance from nearby steel, sensor calibration and vibration remain untested.

## Manufacturing status

This is a source-derived manufacturing candidate, not a physically tested product. The STL is the printed body in millimetres. No sliced job, strength calculation, vibration qualification, screw torque, cable bend-radius check or electrical/control integration is supplied.

For the printed body, prototype PETG with 0.2 mm layers, four walls and at least 40% infill is an initial process choice, not a qualified setting. Print base-down, inspect the slicer and finish bores to the listed clearance sizes. Do not force hardware or use a screw to pull a misprinted part into alignment. Source-derived datums are nominal; verify the real chassis and sensor revision.

Authored geometry is MIT.
