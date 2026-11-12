# MicroROS rear MB1010 open outrigger

The two roof-clamp screws sit at points inside two existing diagonal ventilation slots, not native round mounting holes. A small backing shoe under each slot includes a solid key away from the screw; it follows the slot direction. Two M2 screws, washers and captive nuts hold the printed outrigger and backing shoes around the nominal 1.5 mm roof. Remove the cover to fit the backing shoes. The native STEP omits the internal controller and has incomplete skins; physically check components, wires and lid seating before use. No source hole is drilled or widened. The small pads cover a local portion of two vents, and the effect on cooling is unknown.

The MB1010 faces rearward (-X). Its two actual diagonal PCB holes receive M2 x 8 screws with their small heads behind the support, and 0.3 mm washers plus nuts on the transducer side. The support is relieved for the actual seven-pin header row. The narrower M2 fastener uses the unchanged 3.175 mm PCB holes. A 1x7, 2.54 mm socket is used as an access gauge on the measured pin row. It clears the relieved support by 0.210 mm and the closest rear screw head by 0.347 mm at nominal dimensions. A 10 mm withdrawal sweep of its housing clears the fixture and chassis. This is a specific fit reservation; other plugs, print variation and soldered hardware need a real fit check. The socket is not a preinstalled electrical BOM item. The transducer is behind the rear body panel; the original antenna projects farther rearward off to the right and remains in place. Ultrasonic beam coverage and reliable parking control are not confirmed.

## Fabrication and limitations

Print only the listed polymer pieces, using PA12 SLS as the design process. Use separate metal hardware; do not print screws or nuts. Nominal bores and dimensions require a real fit check. No strength, creep, vibration, preload or weather qualification has been performed. Electrical integration, OS/driver, calibration and initial operation are outside this fixture.

Source evidence: [Hiwonder JetAcker pinned maker model](https://github.com/Hiwonder/JetAcker/tree/80639fd8d913f123cdbdfa835c56f1c5e658c0b3), [Yahboom MicroROS documentation](https://www.yahboom.net/study/MicroROS-ESP32/), [MicroROS native STEP](https://drive.google.com/file/d/15h6xTYyL9jL-hJWP-TsZq0uJqVIUf3hM/view), [MaxBotix MB1010](https://maxbotix.com/products/mb1010), [Yahboom TinyF](https://category.yahboom.net/products/tinyf), and [step.parts](https://www.step.parts).

## What to buy

- 2 × ISO 4762 M2 x 8 socket screw
- 4 × M2 washer, 5 OD / 2.2 ID / 0.3 mm
- 2 × M2 nut, 4 AF / 1.6 mm
- 2 × ISO 4762 M2 x 8 sensor socket screw, head behind support
- 2 × M2 front sensor washer, 5 OD / 2.2 ID / 0.3 mm
- 2 × M2 front sensor nut, 4 AF / 1.6 mm
