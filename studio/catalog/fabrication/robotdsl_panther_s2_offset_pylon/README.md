# Panther offset S2M1 scanner rail pylon

An open pylon on the right roof rail raises a planar scanner above the body and offsets it inward, leaving the central cover free. Its separate slide keys follow the Panther rail section, which differs from Lynx. This is a fabrication candidate for the historical S2M1-R2 pattern; the purchased scanner revision and hole yaw still need confirmation.

## Make and assemble

Print one pylon in a qualified PA12/SLS process. PETG is a fit prototype pending load, vibration and creep review. The body is 86 × 120 × 135 mm. A side rib can face the build plate; determine supports in the chosen slicer. The 86 mm deck is 5 mm thick, with four 3.4 mm holes on a 41.7 mm square and an 18 mm center opening. Both side ribs leave the four screw heads accessible from underneath.

Machine two **Panther-specific** steel slide keys from the separate STEP and tap M5 × 0.8 through. The modeled 5 mm bore represents a simplified finished thread envelope, not the tap-drill diameter. Select the tap drill and thread tolerance for the material and process. The Lynx keys are not interchangeable.

Use two ISO 4762 M5 × 12 screws with 10 mm OD × 5.3 mm ID × 1 mm washers. Use four M3 × 8 scanner screws with 7 mm OD × 3.3 mm ID × 0.5 mm washers only after confirming the exact scanner revision. Nominal scanner insertion is 2.5 mm; the historical S2M1-R2 manual allows at most 4 mm. The store SKU omits the revision and the simplified mesh does not expose the hole pattern or its yaw.

The host is the native Panther v1.21 WH01/BAT01 exterior. Its right rail has Y = -247.5 mm and top Z = 171.8 mm. Place the keys at X = -84 and -36 mm. The source profile has a 1.8 mm lip and a 5.349 mm cavity depth. Insert the keys through the rail end after removing the required corner/end hardware; the closed rail frame means this access operation must be checked on the actual robot. Nominal M5 engagement is 3.15 mm; screw tips clear the source slot floor by 0.349 mm. The assembled keys seat beneath the lips.

The pylon keeps the center of the cover clear, subject to actual cables and accessories. Remove it when needed for cover service.

## What is and is not checked

Tolerances and loads have not been qualified.

The scanner's exact revision/yaw is unconfirmed. Do not interpret the displayed assembly or successful compilation as a verified sensor fit. Loads, vibration, weather sealing, actual scan occlusion and power/data are unverified. Possible antenna occlusion and full 360-degree coverage remain unverified.

Sources: [Panther manual](https://husarion.com/manuals/panther/) and [native Panther v1.21 CAD](https://docs-new.s3.eu-west-1.amazonaws.com/models/Panther_v1.21_pub3D_WH01.step.zip).
