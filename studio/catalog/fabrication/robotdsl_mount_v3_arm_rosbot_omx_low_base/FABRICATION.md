# Fabrication files

Machine one 10 mm aluminium arm plate and two 2 mm aluminium backing strips. These are metal parts, not 3D prints; STEP defines the counterbores.

STL meshes contain the individual printed bodies. Part counts are per one mount. CAD fit checks do not establish physical fit or a load rating.

# Low metal arm bases for ROSbot XL and Strafer

These two mounts place the fixed OpenManipulator-X case only **10 mm above the real chassis surface**. Each has a machined aluminium load path to four actual chassis holes, recessed host bolt heads, and two separate metal backing strips. There is no printed tower or shared central mounting bus. They are fabrication candidates with measured geometry, not load-qualified robot upgrades.

## Deliberate layouts

- **ROSbot XL:** arm case origin `(50, 0, 93.4)` mm in the original chassis frame. Four roof fasteners use `(20, ±40)` and `(80, ±40)` mm at roof Z83.4. The 84 ×104 mm spider stays behind X92, keeping the front-left near-field sensor pair at X120 free. The rear roof remains available for service. ROSbot XL already contains its main Pi 5; an optional rear Pi carrier would be an auxiliary controller, not a required second computer.
- **Strafer:** arm case origin `(84, 0, 34)` mm. The 160 ×112 mm bridge reaches the middle and front channels through `(16, ±44)` and `(152, ±44)` mm at Z24. Its open windows and broad diagonal arms leave the rear-left Pi 5 carrier and rear connector exit separate from the arm base. This is a bridge between actual channels, not a plate floating between them.

Coordinates are millimetres, +X forward, +Y left, +Z up.

## Preserved manufacturer arm stack

The [ROBOTIS Base Plate-02](https://robotis.us/products/base-plate-02-openmanipulator-x) is a 10 mm aluminium plate supplied with M2.5×20 screws and spacer rings. Its official drawing and native STEP show Ø2.7 through holes and Ø6 underside counterbores 4 mm deep. Both new base plates reproduce that mounting section and the 40 ×22 mm pattern.

Four original M2.5×20 screws are inserted from below. Their shoulders sit at fixture Z4, leaving the same 6 mm plate grip and 14 mm projection into the manufacturer case stack. The four OEM X-SP spacer rings' 2.8 mm axial length sits inside the case counterbores; the arm case itself seats at Z10. We do not invent a receiver thread or independently certify engagement depth. [ROBOTIS explains why these spacer rings are required](https://emanual.robotis.com/docs/en/dxl/x/xm430-w350/).

Preserve the original bolts/rings or buy the compatible manufacturer mounting hardware. Do not substitute longer screws from this drawing alone.

## Host fasteners and assembly order

For each base: four ISO 4762 M4×16 screws, eight M4 Form A washers **9 OD ×4.3 ID ×0.8 thick**, and four ISO 4032 M4 nuts. The top washer seats at Z5 in a Ø9.6 counterbore. The screw head ends at Z9.8, below the plate top. Two 2 mm aluminium backing strips sit under the actual roof/channel wall.

| Stack | ROSbot XL | Strafer |
|---|---:|---:|
| Chassis sheet thickness | 3.0 mm, official manual | 2.5 mm, measured native visual |
| Backing-strip underside | Z−5.0 | Z−4.5 |
| Nut underside | Z−9.0 | Z−8.5 |
| M4 screw tip | Z−10.2 | Z−10.2 |
| Nominal protrusion beyond nut | 1.2 mm | 1.7 mm |

All Z values in this table are relative to the chassis seating surface. Washers and nuts are separate purchased parts. The selected washer is the [0.8 mm supplier Form A item](https://www.farnell.com/datasheets/1674342.pdf).

1. Off the robot, fit the four OEM rings to the fixed arm case and install the four original M2.5×20 screws through the underside counterbores. This underside operation is intentionally inaccessible after mounting.
2. Open/remove the chassis cover as its service procedure permits. Offer the two backing strips from below; retain access to the four lower nuts with a tool.
3. Seat the complete arm/plate unit on the real host sheet and install the four outboard M4 bolts with top/bottom washers and nuts. Their top driver axes are separate from the fixed arm case.
4. Before closing the chassis, check internal wiring/electronics clearance, nut retention, screw protrusion and torque appropriate to the actual materials. Route the arm cable into the reserved service region with strain relief; cable motion is not modeled.
5. Remove the four outboard host bolts to service the underside arm fasteners. Do not try to tighten the buried M2.5 heads through the robot.

The [ROSbot XL manual](https://husarion.com/manuals/rosbot-xl/) documents the 3 mm top plate and internal Pi 5. Its [manufacturer manipulation assembly](https://husarion.com/manuals/rosbot-xl/options/manipulation-pro/) also requires cover removal and a dedicated arm holder. The vendor chassis CAD omits internal electronics and is an open surface model: **the underside strips/nuts require an explicit internal-clearance and service-access check on the actual robot**. Surface checks cannot close that gate.

## Manufacture

Machine each main plate from 10 mm aluminium stock; 6061-T6 is a proposed stock choice, not a strength claim. Profile first, then drill and machine the opposite-side counterbores. The actual internal outline roots are R3 and the load-path branches are 24 mm wide before blends. Deburr all edges without changing seating faces or hole datums. Backing strips are 2 mm aluminium: ROSbot 76×16 mm, Strafer 112×10 mm. The shorter ROSbot ends avoid its underside roof supports; the narrow Strafer strips clear its channel sidewalls. They can be cut separately and drilled to Ø4.5.

The plate DXFs contain a through outline/drill layer plus clearly named **REFERENCE** counterbore layers. These references are machining instructions, not through laser cuts. The STEP is the authoritative 3D artifact. No manufacturing STL is supplied because none of these structural parts is intended to be printed.

## Evidence and limits

Using the published 0.7 kg arm, 0.5 kg payload and 380 mm reach, a deliberately conservative gravity moment demand bound places the entire 1.2 kg at 392 mm from the case origin: **4.615 N·m**. Dividing that by the fore-aft chassis bolt spans gives 76.9 N across the ROSbot 60 mm couple or 33.9 N across the Strafer 136 mm couple, before weight, prying, braking or dynamic factors. These are external load demands, **not allowable loads**. Roof bending, screw preload, fatigue, mobile-base tipping and operation while driving remain unqualified. No FEA or physical test was performed.

Authored plate geometry is MIT.
