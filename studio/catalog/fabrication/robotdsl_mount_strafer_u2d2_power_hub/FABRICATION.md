# Manufacturing downloads

Print one PETG carrier from `assets/print-carrier.stl`, in millimetres, with its broad underside on the build plate. `source/carrier.step` is the same single plastic body as editable neutral CAD. `source/installed_fixture.step` is an assembly reference showing purchased hardware positions; do not print that assembly.

Obtain the listed metal spacers, screws, washers and nuts separately. The hub and U2D2 are separate parts. Finish and inspect the bores and countersinks before assembly; print settings and physical strength have not been qualified.

# Strafer U2D2 Power Hub carrier

This is a RobotDSL-authored fabrication option (`sold: false`), not a ROBOTIS or
goBILDA product. The separate hub is retained by four purchased steel standoffs
on a vented PETG carrier, and the carrier is bolted to four existing Strafer
channel holes. The STEP and STL provide a concrete part to fabricate; physical
fit, print strength, preload, vibration, temperature and load ratings remain
unqualified.

The carrier occupies the front-right rail at chassis `(96, -156, 24)` mm.
Its local +X points along chassis +Y, and its +Y points along chassis -X.
Use chassis `power_hub_front_right` -> carrier `under_holes`, then carrier
`board_holes` -> `robotis_u2d2_power_hub.mounting_holes`. The hub PCB underside
sits 13 mm above the channel top. The separate U2D2 attaches to the hub through
the manufacturer-supported interface declared by the hub part.

## Fabrication and assembly

Print one `assets/print-carrier.stl`, flat side down, in PETG, nominal 3 mm floor.
The 58 × 74 mm outline, ventilation slots, 4.6 mm host bores, 3.4 mm standoff
bores and underside 90-degree countersinks are authored dimensions. The STL is
only the printed part. `source/installed_fixture.step` and `assets/model.glb`
include the separately purchased hardware at its installed positions.

Off the robot, retain the four M3 standoffs with the underside countersunk
screws. Then bolt the carrier onto the four named rail holes with the M4 stack.
Set the hub on the four standoffs, add the four M3 washers and upper screws.
The supplied ROBOTIS plastic feet and nuts are not used in this installation.
The hub/U2D2 and their cables are separate purchases and separate models.

| Quantity | Purchased hardware | Nominal model dimensions |
| --- | --- | --- |
| 4 | [Würth 970100321](https://www.we-online.com/components/products/datasheet/970100321.pdf) steel female/female spacers | M3 through thread, length 10 mm, 5.5 mm across flats |
| 4 | [Accu SSK-M3-8-A4](https://www.accu.co.uk/countersunk-socket-head-screws/5596-SSK-M3-8-A4) lower screws | ISO 10642, overall length 8 mm, 6.72 mm maximum head, 1.86 mm head height, 90-degree cone, 2 mm hex |
| 4 | [Accu SSCF-M3-6-A2](https://www.accu.co.uk/metric-cap-head-screws/3817-SSCF-M3-6-A2) upper screws | M3 × 6 mm, 5.5 × 3 mm head, 2.5 mm hex |
| 4 | [Accu HPW-M3-A2](https://www.accu.co.uk/metric-flat-washers/72482-HPW-M3-A2) PCB washers | OD 7 mm, ID 3.2 mm, thickness 0.55 mm (+0/-0.1) |
| 4 | [Accu SSCF-M4-12-A2](https://www.accu.co.uk/metric-cap-head-screws/3839-SSCF-M4-12-A2) host bolts | M4 × 12 mm, 7 × 4 mm head, 3 mm hex |
| 8 | [Accu HPW-M4-A2](https://www.accu.co.uk/metric-flat-washers/72488-HPW-M4-A2) host washers | OD 9 mm, ID 4.3 mm, thickness 0.9 mm (+0/-0.2) |
| 4 | [Accu HPN-M4-A2](https://www.accu.co.uk/hexagon-nuts/7890-HPN-M4-A2) host nuts | M4, 7 mm across flats, 3.2 mm height |

The hardware is drawn from these nominal dimensions with simple unthreaded
shanks/bores, not substituted supplier CAD. The plastic colour is an authored
choice; the purchased hardware is represented in its natural metallic finish.
Mass and inertia estimate the nominal CAD solids using PETG 1270 kg/m³ and
steel 7850 kg/m³; they are not weighed values or a print infill estimate.

## Source datums and fit

The [ROBOTIS download directory](https://en.robotis.com/service/downloadpage.php?ca_id=70f0)
links the exact U2D2PHB STEP, download 2202. Its four outer bores are 4 mm
nominal diameter. Relative to the PCB underside datum, their centres are
`(±21.03678258532, ±24.02042391896, 0)` mm; the board is 1.65 mm thick.
The runtime board conversion uses native origin
`(0.3445840619466, -1.65, 1.4963351222173)` mm and axes `x-zy`.
These are nominal CAD measurements, not manufacturing tolerances.

The exact [Strafer kit STEP](https://www.gobilda.com/content/step_files/3209-0001-0007.zip)
contains the four selected Ø4 mm cylinders at chassis `x = 64, 128` mm,
`y = -140, -172` mm. Their faces run from `z = 21.5` to `24` mm, establishing
2.5 mm channel thickness. Their four hardpoints are consumed by the mount.

The 10 mm spacer leaves about 6.93 mm between the lowest hub solder-side
feature and the printed floor. The upper M3 screw engagement is
`6 - 1.65 - 0.55 = 3.80` mm. The lower screw's head sits 0.05 mm recessed,
so engagement is `8 + 0.05 - 3 = 5.05` mm, leaving 1.15 mm between the screw
tips inside the through-threaded spacer. The M4 bolt passes through
`0.9 + 3 + 2.5 + 0.9 + 3.2 = 10.5` mm, leaving 1.5 mm beyond the nut.
These are nominal stack calculations; preload and thread tolerance remain
unqualified. Inspect and finish the printed bores/countersinks before assembly.
