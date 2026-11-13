# Strafer lower battery cradle: fabrication and assembly

Make one cradle and four spacer columns for one LiTech LRL1220 battery.
The machining STEP files contain individual aluminium bodies only. The
visual assembly includes purchased hardware that must not be machined as
part of the cradle. These are nominal prototype drawings; manufacturing
tolerances, physical fit and structural loads remain unqualified.

## Make

| File | Quantity | Material and nominal geometry |
| --- | ---: | --- |
| `source/bridge-machining.step` | 1 | 6061 aluminium; 4 mm floor, 8 mm high retaining rim, 184 x 80 mm inside pocket, 216 x 360 x 12 mm overall envelope |
| `source/spacer-machining.step` | 4 | Aluminium; 8 mm outside diameter, 4.5 mm through bore, 45.5 mm length |

Both files use millimetres. The cradle STEP retains its installed component
datum: the floor is at Z = -52 to -48 mm, and the rim ends at Z = -40 mm.
The separate spacer STEP starts at Z = 0 and ends at Z = 45.5 mm.

Machine the cradle's existing clearance holes and both through-slots as
drawn. The central support underneath the two cinch plates is required.
Preserve the closed retaining rim and its battery clearance when choosing
corner-finishing operations; do not substitute an assembled preview mesh
for the individual machining solid.

The spacer can be turned and drilled from aluminium stock, or cut from
tube having the stated outside and inside diameters. Face both ends to
the nominal 45.5 mm length and deburr the bore. No taps are required:
the screws pass through the columns into separate metal nuts.

## Buy and cut

| Item | Quantity per cradle | Specification |
| --- | ---: | --- |
| Top-web screws | 4 | ISO 4762 nominal M4 x 60 mm cap screws |
| Cinch-plate screws | 4 | ISO 4762 nominal M4 x 16 mm cap screws |
| Lock nuts | 8 total | Four supplied with the cinch kit plus four matching additional M4 x 0.7 nylock nuts; retained nominal envelope is 7 mm across flats and 4.85 mm high |
| Cinch plates | 2 | The two rigid plates from one [goBILDA 1209-0032-0001 kit](https://www.gobilda.com/hook-loop-cinch-strap-with-mounting-plates/) |
| Flexible strip | 1 cut | 600 mm of Panduit TTR-20R0, 19.1 mm wide and 0.9 mm thick |

Replace the goBILDA kit's supplied 250 mm strip with the longer Panduit
strip. The kit's supplied M4 x 12 mm screws are too short for the declared
8 mm plate-and-floor stack; use the M4 x 16 mm screws above.

The Panduit strip must retain at least 50 mm of engaged overlap. The
declared route leaves 76.79 mm for the nominal 162 mm case height and
62.79 mm at the manufacturer's 169 mm maximum height. A strip's loop
strength is not a load rating for the complete cradle.

## Install

1. Place the cradle below the Strafer's rear bay. Its component origin is
   (-120, 0, 24) mm in the chassis frame; the battery floor is at Z = -24 mm.
2. Put the four spacer columns between the cradle floor and the underside
   of the existing top web. Use the verified chassis holes at X = -200 and
   -16 mm, Y = +/-172 mm. The channels open downward; there is no bottom
   web to drill or clamp instead.
3. Insert the four M4 x 60 mm screws from above, through the 2.5 mm web,
   45.5 mm columns and 4 mm floor. Fit the four nylock nuts underneath.
   Nominal thread protrusion is 3.15 mm. Tightening torque is unspecified.
4. Fasten both cinch plates on the central support with their outer
   32 mm hole pairs, four M4 x 16 mm screws and four remaining nuts.
   Point their strap slots toward the battery pocket and align each slot
   with the opening in the floor.
5. Thread the 600 mm strip through the two actual slots and underneath the
   floor, seat the battery in the retaining rim, then wrap the strip over
   the battery and engage at least 50 mm of overlap. Keep the terminals
   exposed and route electrical cables separately.

The longest screws end 16 mm above nominal level ground with the 104 mm
wheels. Ground travel, vibration, arm movement, strap wear, cable clearance
and dynamic loads require physical qualification. The existing CAD audit
verifies nominal fit against the original chassis geometry only.
