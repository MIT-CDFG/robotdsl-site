# Yahboom alloy 4WD front OAK-D Lite fork

Two compact rising cheeks carry the camera at the front, facing forward. The structure uses the actual rear 75 mm M4 hole pair and the existing deck 72 mm pair. Camera screw heads are approached from behind; the lower-edge USB socket has a clear approach above the top deck.

## Manufacture and purchase

| Item | Quantity | Required dimensions |
|---|---:|---|
| Printed front fork | 1 | PETG prototype; 3.4 mm deck and 4.5 mm camera clearance holes |
| ISO 4762 M3 × 12 socket screw | 2 | Length below head 12 mm |
| DIN 125 M3 washer | 4 | **0.5 mm thick**; one above fork and one below deck |
| ISO 4032 M3 hex nut | 2 | **2.4 mm thick** |
| ISO 4762 M4 × 8 socket screw | 2 | Length below head 8 mm |
| ISO 7091 M4 washer | 2 | 9 mm outside diameter, **0.8 mm thick** |

Print the flat feet down. The sloped webs support the rising pads; inspect the horizontal 4.5 mm bores and finish them to size. Each rear pad is 4.2 mm thick. With the specified 0.8 mm washer, the M4 screw enters the camera by **3 mm nominally**. The maker's December 2021 [mechanical drawing, page 5](https://github.com/luxonis/oak-hardware/blob/master/DM9095_OAK-D-LITE_DepthAI_USB3C/Datasheet/OAK-D-Lite_Datasheet.pdf) calls out M4 holes 6.5 mm deep. The nominal screw is shorter than that depth; confirm the actual camera revision and do not bottom the screws.

## Assembly and access

1. With the top deck accessible from below, fit the fork at chassis (88, 0, -0.02) mm using the real holes at Y = ±36 mm. Use the two M3 screws, top and underside washers, and nuts. The 2 mm deck, 4 mm fork and two 0.5 mm washers give nominal tip Z = -7.5 mm and 2.6 mm protrusion beyond the nut.
2. Place the camera against the two rear pads and align its real holes, 75 mm apart. Insert the M4 hardware from behind after confirming permissible insertion.
3. The camera rear screws have straight rear tool access; the deck screws are reached vertically through the relieved feet. The lower-edge USB socket faces down ahead of the top deck. A bounded 10 × 16 × 35 mm plug approach clears the other modeled parts; it is not an exact cable or a bend-radius qualification. Optical performance remains unqualified.

This fixture uses **the same front hole pair as the existing sonar cradle**. They cannot occupy it simultaneously. The specified internal installation includes only this fork and the Pi carrier. Kit electronics and wiring are not represented by the native chassis; check their real clearance before closing the deck.

## Manufacturing status

This is a source-derived manufacturing candidate, not a physically tested product. The STL is the printed body in millimetres. No sliced job, strength calculation, vibration qualification, screw torque, cable bend-radius check or electrical/control integration is supplied.

For the printed body, prototype PETG with 0.2 mm layers, four walls and at least 40% infill is an initial process choice, not a qualified setting. Print base-down, inspect the slicer and finish bores to the listed clearance sizes. Do not force hardware or use a screw to pull a misprinted part into alignment. Source-derived datums are nominal; verify the real chassis and sensor revision.

Authored geometry is MIT.
