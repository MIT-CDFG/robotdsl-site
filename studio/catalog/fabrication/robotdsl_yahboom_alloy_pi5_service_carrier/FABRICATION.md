# Yahboom alloy 4WD Pi5 service carrier

An open frame carries the Raspberry Pi 5 on four narrow pads. It uses four existing deck holes, keeps the board 11 mm above the deck and exposes the USB/Ethernet end, power/HDMI side, GPIO/cooling area and rear microSD edge. There is no plate under the board electronics.

## Manufacture and purchase

| Item | Quantity | Required dimensions |
|---|---:|---|
| Printed open carrier | 1 | PETG prototype; 3.4 mm deck and 2.9 mm PCB clearance holes |
| ISO 4762 M3 × 10 socket screw | 4 | Length below head 10 mm |
| DIN 125 M3 washer | 8 | **0.5 mm thick**; one above carrier and one below deck |
| ISO 4032 M3 hex nut | 4 | **2.4 mm thick** |
| ISO 4762 M2.5 × 12 socket screw | 4 | Length below head 12 mm |
| M2.5 washer | 4 | Selected CAD: 6 mm outside diameter, **1.1 mm thick** |
| M2.5 hex nut | 4 | Selected CAD: 5 mm across flats, **2 mm thick** |

The captive-nut pocket is 5.3 mm across flats and 2.35 mm high, with an outward loading slot. It needs no heat-set insert and must not be filled with support. Check the slicer's pocket bridging and clear each side opening. The upper PCB pads are 5.6 mm diameter, limiting contact to the real mounting lands.

## Assembly and access

1. Slide one M2.5 nut into each outward-facing pocket before fitting the board. Inspect that each nut seats flat and its hole lines up. Do not widen the pocket by forcing the screw.
2. Open/remove the top deck as necessary to reach its underside. Use the measured holes at chassis (-90.5, ±29) and (18, ±25.5) mm. They are 3.2 mm diameter through the 2 mm deck. Use the specified M3 hardware with lower washers and nuts, then restore the deck. The nominal M3 tip is 6.5 mm below the top face and extends 1.6 mm beyond the nut.
3. Seat the Pi on the four pads, 58 × 49 mm apart. Fit the M2.5 top washers and screws through the PCB into the captive nuts. Native PCB thickness at the mounting holes is 1.276 mm. Screw tips end 1.376 mm above the deck, so they do not bottom on it.
4. USB/Ethernet faces forward. Power/HDMI side access, the rear SD edge and the space above the SoC/GPIO stay exposed in the nominal model. Check real plugs, cable bends, cooling hardware and any HAT separately; none is silently included.

The kit's control boards and wiring are absent from its native CAD. Their actual space and access need checking before closing the deck. The full robot is reviewed together with the separate OAK-D Lite fork; adding another device requires a new fit review. This supplies mechanical mounting only.

## Manufacturing status

This is a source-derived manufacturing candidate, not a physically tested product. The STL is the printed body in millimetres. No sliced job, strength calculation, vibration qualification, screw torque, cable bend-radius check or electrical/control integration is supplied.

For the printed body, prototype PETG with 0.2 mm layers, four walls and at least 40% infill is an initial process choice, not a qualified setting. Print base-down, inspect the slicer and finish bores to the listed clearance sizes. Do not force hardware or use a screw to pull a misprinted part into alignment. Source-derived datums are nominal; verify the real chassis and sensor revision.

Authored geometry is MIT.

## Exact STL DfAM review

Process assumed: FDM/FFF PETG prototype, 0.2 mm layers. These are screening measurements, not a printer-qualified profile.

| Body | Sampled minimum / p05 wall (mm) | Down-facing area below 45° (mm²) | Build height (mm) |
|---|---:|---:|---:|
| lynx_cmp10a_cradle | 2.364 / 3.0 | 0.0 | 5.5 |
| alloy_pi5_carrier | 1.348 / 2.45 | 194.48 | 11.0 |
| alloy_oak_lite_fork | 4.0 / 4.0 | 79.49 | 66.46 |

The limits used are 1.2 mm supported walls, 1.6 mm unsupported walls and 45° from horizontal for FDM/FFF. All reported p05 wall values exceed 1.6 mm. The Pi's 1.348 mm sampled minimum is on its vertical supported PCB-pad walls at Z=8.93–10 mm; their analytic radial wall is (5.6−2.9)/2=1.35 mm, above the 1.2 mm supported-wall default. The other two sampled minima exceed 1.6 mm. Ray sampling is not exhaustive. Base-down has the lowest measured support area among the six axis-aligned choices. Pi nut-pocket roofs (now 1.7 mm thick) and camera horizontal bores still need slicer inspection and removable support/bridge decisions. Minimum holes, bridge span and every feature were not measured, and no physical print or load qualification is implied. No SLS process claim is made.
