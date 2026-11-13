# Strafer D42V110F5 carrier

FDM print **one PETG carrier** from `assets/print-carrier.stl`, at 1:1 scale in millimetres with its flat underside on the build plate and the support bosses facing upward. `source/carrier.step` is editable CAD for the same single printed body. These are alternative formats: print one carrier, not one of each file. Both exclude electronics, metal nuts, screws and washers. Do not print `source/installed.step` or the runtime GLB; those are assembly representations containing metal hardware.

This is an authored fabrication option for the Pololu D42V110F5 regulator, **not a goBILDA or Pololu product**. PETG is the prototype design material; print settings, tolerances and load capacity have not been qualified. Check the Ø2.4 and Ø4.6 holes and captive-nut pockets before installing hardware.

The 80 × 48 × 4 mm PETG carrier uses four Ø4.6 mm holes on a 64 × 32 mm pattern. It sits on the front-left Strafer side rail, centered at chassis `(96,156,24)` mm with the same axes as the chassis. Four actual channel Ø4 bores are `(64/128,140/172,24)` mm, measured from the official kit STEP's `1120-0017-0432_v8` cylinders through the 2.5 mm top wall. These resources are distinct from the arm bridge and rear computer carrier. M4 nuts need access inside the rail: install this mount before the front-left motor, or remove that motor for service.

Four Ø4.5 mm printed bosses put the regulator PCB underside at z = 13 mm. Their centers are the official regulator CAD pattern, 38.86206 × 25.40006 mm, whose drawing rounds to 38.9 × 25.4 mm. The board has nominal Ø2.1844 bores and 1.5875 mm thickness. A 4.4 mm AF, 2.6 mm deep pocket under each boss captures an M2 metal nut. There are no printed threads. The nut's top is z = 2.6 mm; its bottom is z = 1.0 mm. An M2 × 14 screw under the PCB-top head reaches z = 0.5875 mm: it traverses the full 1.6 mm nut and stays above the channel. The 1.4 mm pocket roof and Ø2.4 through-bore are deliberate design dimensions. Check printed hole/nut fit before assembly; no manufacturing tolerance or preload is claimed.

The nominal board under-component clearance to the carrier floor is 13 − 1.82 − 4 = 7.18 mm. Three open windows retain 3 mm webs. Host screw stack is 0.9 mm upper washer + 4 mm carrier + 2.5 mm channel + 0.9 mm lower washer + 3.2 mm nut = 11.5 mm, leaving 0.5 mm projection from M4 × 12 screws. The full nut is engaged. All dimensions are nominal; the model simplifies screw threads to their major-diameter envelope. CAD fit is not an operating, heat, vibration, electrical-insulation or load qualification.

## Hardware to buy

- 4 × [Accu SSCF-M2-14-A2](https://www.accu.co.uk/metric-cap-head-screws/3796-SSCF-M2-14-A2), M2 × 14 DIN 912 socket screws: 3.8 mm head diameter, 2 mm head height, 1.5 mm hex, 0.4 mm pitch, 0.4 g each.
- 4 × [Accu HPN-M2-A2](https://www.accu.co.uk/hexagon-nuts/7884-HPN-M2-A2), M2 DIN 934 nuts: 4 mm AF, 1.6 mm nominal height, 0.14 g each.
- 4 × [Accu SSCF-M4-12-A2](https://www.accu.co.uk/metric-cap-head-screws/3839-SSCF-M4-12-A2), M4 × 12 DIN 912 socket screws: 7 mm head diameter, 4 mm head height, 3 mm hex, 0.7 mm pitch, 1.95 g each.
- 8 × [Accu HPW-M4-A2](https://www.accu.co.uk/metric-flat-washers/72488-HPW-M4-A2), OD 9, ID 4.3, thickness 0.9 mm, 0.27 g each. The supplier's current page specifies 0.9 +0/−0.2 mm; the model uses 0.9 mm.
- 4 × [Accu HPN-M4-A2](https://www.accu.co.uk/hexagon-nuts/7890-HPN-M4-A2), M4 DIN 934 nuts: 7 mm AF, 3.2 mm nominal height, 1 g each.

Supplier specifications were consulted on 2026-11-13. Screw and nut threads are metal; captive pockets only prevent nut rotation. Insert the M2 nuts and install the regulator off-robot before bolting the carrier to the channel. All eight screw heads remain accessible from above. The component includes the installed hardware's mass; PETG is a solid-density estimate, not a measured mass. Fabricate only the carrier STL, not the entire installed STEP.

## Evidence and limitations

The carrier uses the [Pololu board drawing](https://www.pololu.com/file/0J2217/d42v110fx-step-down-voltage-regulator-dimensions.pdf) and the [goBILDA Strafer kit CAD](https://www.gobilda.com/content/step_files/3209-0001-0007.zip). Its nominal dimensions are verified against those source parts. Supplier hardware specifications are linked above. The printed fixture is RobotDSL-authored MIT-licensed geometry.

Nominal CAD validation found no positive-volume intersections among the 25 installed fixture solids, with the regulator CAD, or with the adjacent channel solids. This checks nominal geometry, not printed tolerances, retention torque, heat, vibration or load qualification. The regulator and electrical harness remain separate components.
