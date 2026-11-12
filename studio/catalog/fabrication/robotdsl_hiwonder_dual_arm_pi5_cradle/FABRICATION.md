# Hiwonder dual-arm central Pi 5 cradle

A separate, compact computer cradle fits between the two Compact Arm bases. Four existing chassis holes support four metal spacers; a vented printed tray and four shorter metal spacers retain the Pi through its real mounting holes. The board is rotated 90 degrees so USB and Ethernet face the chassis side. Its power and display connectors sit above the arm base plates rather than pointing into them.

This is an authored prototype candidate. It has not been physically fitted, thermally qualified, or tested under arm motion.

## Geometry and assembly

The tray footprint is 66 × 97 mm, with low edges and an open top. The fixture's lower host spacers are 25 mm tall, and the board spacers are 8 mm tall.

The host uses the measured central 32 × 48 mm hole group. Those holes are from the exact pinned manufacturer JetAuto mesh matched to the retail green chassis, not a native product STEP. The staged 2.7 mm interface clearance is conservative mesh evidence, not a claimed maker nominal bore. All host screws are M2.5. The Pi pattern is the official 58 × 49 mm M2.5 pattern.

Print `assets/print-tray.stl` with its flat underside on the bed. The STL is already at Z = 0. PETG is the assumed material for the mass estimate; print settings, creep, operating temperature and strength remain unqualified. Retaining threads are metal.

Hardware required by the nominal geometry:

| Item | Quantity | Function |
| --- | ---: | --- |
| M2.5 female/female spacer, 25 mm long, 5 mm across flats | 4 | Host-to-tray support |
| M2.5 female/female spacer, 8 mm long, 5 mm across flats | 4 | Tray-to-board support |
| M2.5 × 6 socket-head screw | 4 | Upward through the chassis into the long spacers |
| M2.5 × 8 socket-head screw | 4 | Tray into the long spacers |
| M2.5 × 6 countersunk screw, nominal 5 mm head | 4 | Recessed below the tray into board spacers |
| M2.5 × 5 socket-head screw | 4 | Board retention |
| 5 mm OD, 2.7 mm ID, 0.5 mm washer | 8 | Tray top and board |
| 7 mm OD, 2.7 mm ID, 0.5 mm washer | 4 | Load spread under chassis |

These are documented nominal hardware envelopes, not asserted exact supplier products. Select a matching supplier part and verify thread engagement and dimensions before fabrication.

Fit the long spacers through the chassis from below. Off the robot, fit the short board spacers to the tray using its recessed screws. Attach the tray to the long spacers, then install the Pi. Some host fasteners require the Pi to be removed for service. The tray's ventilation and SD opening preserve full lands around every host fastener. No top cover is included; the cooling and GPIO access envelope remains open.

## Checks and limits

The official board geometry comes from [Raspberry Pi's CAD download](https://datasheets.raspberrypi.com/rpi5/RaspberryPi5-step.zip); the host mesh comes from [Hiwonder's pinned JetAuto source](https://raw.githubusercontent.com/Hiwonder/JetAuto/569b77d3ed5ae4a581cdd8e341f29eb8476284da/src/jetauto_simulations/jetauto_description/meshes/base_link.stl).

No moving-arm swept-volume, electrical/control integration, thermal, structural, vibration, production-tolerance or physical-fit result is claimed.

The final paired fixtures have a minimum exact dock-to-computer-fixture gap of 1.476 mm between the rear frame ear and a computer spacer. The two rear backing-strip-to-washer gaps are 2.043 and 2.047 mm. These are nominal CAD distances.

## What to buy

- 4 × M2.5 female/female metal spacer,25 mm body, 5 mm across flats
- 4 × M2.5 female/female metal spacer,8 mm body, 5 mm across flats
- 4 × M2.5 × 6 socket-head screw — upward chassis attachment
- 4 × M2.5 × 8 socket-head screw — tray attachment
- 4 × M2.5 × 6 countersunk screw,5 mm head — board spacers
- 4 × M2.5 × 5 socket-head screw — board retention
- 8 × 5 mm OD/2.7 mm ID/0.5 mm washer
- 4 × 7 mm OD/2.7 mm ID/0.5 mm underdeck washer
