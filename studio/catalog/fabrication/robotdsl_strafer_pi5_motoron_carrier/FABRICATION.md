# Open Strafer Pi 5 and dual Motoron carrier

FDM print **one PETG tray** from `assets/print-tray.stl`, at 1:1 scale in
millimetres, with its flat underside on the build plate. The alternative
`source/print-tray.step` is editable CAD for that same single printed body.
Both files exclude electronics, screws, washers, standoffs and the removable
guard. Print only one tray; the two formats are alternatives. The installed
assembly STEP and runtime GLB are not print files.

The nominal body is 136 × 91.5 × 7.2 mm, with a 3.2 mm floor. PETG is the
prototype design material; print settings, tolerances and load capacity
have not been qualified. Check hole and countersink fit before assembly.
All threads are in separate metal hardware; no printed threads are used.

## Hardware for one installation

- 4 × M2.5 female/female steel standoffs, 8 mm body, 5 mm across flats;
  retained purchase candidate [Wurth 970080151](https://www.newark.com/wurth-elektronik/970080151/standoff-hex-female-female-8mm/dp/57AC7956).
- 4 × M2.5×6 countersunk lower screws, 5 mm head diameter and 1.5 mm head
  height; [Aspen ME300-25045X6](https://www.aspenfasteners.com/content/2D_PDF/product87/ME300-25045X6.PDF).
- 4 × M2.5 washers, OD5 mm, ID2.7 mm, thickness 0.5 mm.
- 8 × [Pololu 1952](https://www.pololu.com/product/1952) aluminum M2.5
  male/female standoffs, 11 mm body, 4 mm across flats and 6 mm male thread.
  Two Motoron 5054 controllers include these eight standoffs in total.
- 4 × [Pololu 1970](https://www.pololu.com/product/1970) nylon spacers,
  length2 mm, OD4 mm, ID2.7 mm; purchased separately.
- 4 × M2.5×6 socket-head top screws,
  [Aspen ME266-25045X6](https://www.aspenfasteners.com/content/2D_PDF/product66/ME266-25045X6.PDF):
  M2.5×0.45, Ø4.5 mm head, 2.5 mm head height, 2 mm hex drive.
- 4 × M4×12 chassis screws, 8 × M4 washers (OD9 mm, ID4.2 mm,
  thickness0.8 mm), and 4 × M4 nuts (7 mm across flats, height3.2 mm).

The Pi 5, two Motoron 5054 boards and wiring are separate components.
Do not add the original carrier's guard or guard standoffs to this stack.

## Assembly

1. Attach the four 8 mm female/female spacers to the tray using the lower
   countersunk screws. Their heads recess beneath the tray's underside.
2. Bolt the tray to the Strafer's named rear-left computer-carrier holes,
   using one M4 washer above and one below each chassis joint, then the
   M4 nut. The channel top wall is 2.5 mm thick. Nuts need underside access.
3. Seat the Pi on the four lower spacers. Place one 0.5 mm M2.5 washer above
   each PCB hole, then install the lower four 11 mm male/female standoffs.
4. Fit the first Motoron onto its four standoffs and the Pi's 40-pin header.
   Place one 2 mm nylon spacer over each Motoron mounting hole, then install
   the second four 11 mm standoffs through those spacers and the PCB.
5. Fit the second Motoron onto all four upper standoffs and the lower
   controller's header; secure with the four M2.5×6 socket screws.
   Inspect terminal-block lead and solder-fillet clearance. Follow
   [Pololu's stacking instructions](https://www.pololu.com/product/5054)
   and trim terminal-block leads where necessary before applying power.

Pi and Motoron PCB undersides are at 11.200, 23.976 and 38.556 mm above the
tray's chassis mating plane. Nominal first-standoff thread engagement is
4.224 mm; upper-standoff engagement is 2.42 mm; top-screw engagement is
4.42 mm. The PCB hole pattern is 58 × 49 mm. The 0.5 mm Pi washers are part
of the validated nominal stack and must remain installed.

Enable Pi I²C1 and configure the second controller to address0x11 before
stacking; leave the first at0x10. The 40-pin header supplies Motoron logic
from Pi3V3 and common ground; motor VIN uses the separate traction supply.
See [Pololu I²C setup](https://www.pololu.com/docs/0J84/3.3),
[address setup](https://www.pololu.com/docs/0J84/3.4) and
[M2H connections](https://www.pololu.com/docs/0J84/4.6).

This is an authored RobotDSL prototype, not a sold goBILDA or Pololu adapter.
The CAD establishes nominal geometry; physical fit, retention torque,
vibration and thermal performance require validation. No Active Cooler is
included in the reviewed Pi stack.
