# Strafer bridge for two opposing OpenManipulator-X arms

Use two copies of this machined aluminium bridge on the actual Strafer front/central channels. The left arm faces forward; the right arm faces rearward using the180-degree symmetric OEM40×22 mm mounting pattern. The rear-left Raspberry Pi5 carrier stays separate. This is a fixed mechanical arrangement, not an articulated or electrically integrated robot.

This is a distinct part from `robotdsl_mount_v3_arm_strafer_omx_channel_bridge`. Its plate, screws, washers, nuts and OEM spacer rings are unchanged; only the two backing strips shorten from112 to108 mm. That difference matters: the old strips touched the chassis end blocks at these positions. The new strips have2 mm nominal end clearance and retain the88 mm hole pitch,10 mm width and2 mm thickness. The holes have10 mm end distance, and each lower washer retains47.713 mm² of annular bearing area.

## Make one mount

Machine one160×112×10 mm main plate from aluminium, with the supplied STEP defining the outline,Ø4.5 host holes, recessedØ9.6 host counterbores and OEMØ2.7/Ø6 underside counterbores. The plate is geometrically identical to the original single-arm design. Machine/cut two108×10×2 mm aluminium backing strips withØ4.5 bores at88 mm pitch. The DXF counterbore layers are machining references, not through cuts. Use the STEP files as the authoritative fabrication geometry. Proposed6061-T6 stock is not a load rating. Deburr without changing seating planes or hole datums. These are metal fabrication parts; do not print them as structural substitutes.

For each mount obtain four M4×16 ISO4762 socket screws, eight9×4.3×0.8 mm M4 Form A washers, and four ISO4032 M4 nuts. Reuse the arm's four manufacturer M2.5×20 screws and four correct X-SP spacer rings, or obtain the compatible OEM mounting hardware.

## Assemble and service

1. Off the robot, install the OEM rings and four original M2.5×20 screws from the underside of the plate. The shoulder is at local Z4; the case seats at Z10. The left case faces+X; the right case faces−X. Preserve the manufacturer's screw/spacer stack; do not substitute longer screws from this drawing alone.
2. Offer the backing strips vertically from below the open channels. The108 mm strips end2 mm before the actual quad blocks.
3. Seat each arm/plate unit on the channel top. Use host axes X16/152,Y20/108 for left and Y−108/−20 for right, at Z24. These are existing nominalØ4 bores; no new holes are implied.
4. Fit the four M4 bolts with top/bottom washers and nuts. Top-driver access uses an8 mm diameter envelope; bottom access uses a maximum10 mm outside-diameter socket/extension envelope, with0.5 mm nominal sidewall clearance. These are tool envelopes, not a purchased-tool fit guarantee. Check the actual tool, wiring and underside access before assembly.
5. Remove the four host bolts to service the buried OEM screw heads. Do not attempt to reach them through the installed robot. Recheck screw protrusion, retained nut position and preload appropriate to the actual parts.

## What the checks establish

Thread engagement is not independently certified.

A previous parallel-yaw pair crossed near the grippers; a wider pair hit the chassis blocks. The selected opposing-yaw layout addresses those specific failures. Static separation does not establish moving workspaces, simultaneous operation or cable sweep.

## Remaining limits

Actual M4 shaft and chassis-hole tolerances,2 mm end clearance, clamp preload, aluminium/channel bending, fatigue, moving-arm collision, payload limits, tipping stability and operation while driving remain unqualified. No FEA or physical test was performed. The computer carrier does not provide power regulation, servo/motor control or data links. Confirm those separately before treating this as an operational robot.

Manufacturer sources: [Strafer](https://www.gobilda.com/strafer-chassis-kit-104mm-gripforce-mecanum-wheels/), [264 mm channel](https://www.gobilda.com/1120-series-u-channel-10-hole-264mm-length/), [quad block](https://www.gobilda.com/1201-series-quad-block-pattern-mount-43-2/), and [ROBOTIS Base Plate-02](https://robotis.us/products/base-plate-02-openmanipulator-x). Authored plates are MIT.
