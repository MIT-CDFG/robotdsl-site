# Front stock-arm capture dock

This fixture captures the original `robotdsl_arm_compact` without drilling or changing its printed base. It is CNC-machined aluminum; do not print the metal load path in plastic and reuse these assumptions.

Machine one frame from 16 mm aluminum stock, leaving a 6 mm web, four integral seats at z12 and locating walls to z16. The nominal foot pocket is Ø12.6 for the source-model Ø12 feet. Four host socket access openings are Ø7.4. Front foot seats intentionally include access notches. Machine four 6 mm toe clamps, four 19 mm heel spacers with Ø4 × 1.5 locating spigots, and the two distinct 3 mm backing strips. Aluminum alloy, temper and surface treatment must be selected and load-qualified before manufacture.

The frame's nut pockets are AF6.0 with explicit R1 corners, 3.5 mm deep from the top to z2.5. They fit the catalog M3 nut model with a defined orientation. A 2 mm end mill can form those corners. The 6 mm web contour also includes explicit R1 relief. Deburr edges and verify stock-foot fit against the actual printed arm; the 0.3 mm radial clearance is a design allowance, not a measured printer tolerance.

The front outer backing strip has a 9 mm rounded profile with the nose edge trimmed to 4 mm from the bolt axis, preserving the full Ø7 washer footprint and 0.5 mm nominal edge land. The measured source-wall clearance is about 1 mm. The rear inner strip retains 6 mm half-width away from the computer and is trimmed to 4 mm on the computer side, leaving 1 mm beyond its Ø6 washers. This avoids the central computer's underdeck washers. The other two backing strips retain 12 mm width. Verify actual enclosure folds and tolerances before machining; the maker's coarse STL is not a production drawing.

Hardware: four M3×16 host screws, eight M3 washers and four M3 nuts; four M3×30 clamp screws, four M3 washers and four M3 nuts. These are separate purchased items. The rear M2.5 host screw choice is conservative relative to the coarse source mesh, not a certified product hole size.

Installation sequence:

1. Confirm the existing host hole pattern; do not enlarge host holes to force a match. Obtain internal access according to the actual host assembly, without assuming the roof is removable.
2. Place the backing strips against the roof underside and mount the empty frame using the four host bolts, top and bottom washers, and nuts. Bolts must be accessible before inserting the arm. The source-model clearance check does not verify any unmodeled driver electronics.
3. Load the four M3 captive nuts from above into their pockets. Seat the stock arm's four feet into the metal cups. The centre remains open for the arm's original underside servo screws and connectors.
4. Place the four heel spacers in their locating holes, then the toe clamps over the plate side edges. Insert the M3×30 screws and washers. Each toe overlaps the stock plate and bears on a heel; no tightening preload is assigned.
5. Check bearing contact, nut engagement, clearance and fit on the real parts. Tightening torque, resistance to creep/crushing of the original PLA plate, chassis stiffness and vibration require separate qualification. No torque value or load rating is asserted here.

The four integral feet locate laterally in Ø12.6 pockets, the metal seats block downward translation, and four removable bolted toes block upward translation. Rotational escape, preload, load capacity, deformation and physical fit have not been qualified.

This fixture does not add articulation, a servo bus, a power source, or manipulation/transport validation. The front and rear arms are for independently specified tasks.


## Inserting the backing strips from below

In the pinned chassis/motor geometry, both front strips can be raised vertically through the open underside while aligned with their final holes. The inner strip uses the row at chassis X approximately +47.93 mm; the outer strip uses X approximately +127.98 mm, with its trimmed nose edge toward +X (forward). Keep the strips flat in the chassis XY plane. Insert the corresponding host through-bolts and nuts only after holding each strip against the roof underside. Roof removal is not required by the reviewed geometry.

The source mesh has no complete installed driver-board, wiring or motor rear-cap model. Confirm actual underside access before assembly. These strip routes do not establish room for fingers, pliers or a holding tool, and do not qualify physical tolerances or tightening loads.

## What to buy

- 4 × M3 × 16 ISO 4762 socket-head screw
- 8 × M3 flat washer
- 4 × M3 hex nut
- 4 × M3 × 30 ISO 4762 socket-head screw
- 4 × M3 flat washer
- 4 × M3 ISO 4032 hex nut
