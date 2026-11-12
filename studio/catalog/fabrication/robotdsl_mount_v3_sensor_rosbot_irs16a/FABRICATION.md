# Fabrication files

5 cm binary front bumper. Print one bracket body; metal hardware is separate.

STL meshes contain the individual printed bodies. Part counts are per one mount. CAD fit checks do not establish physical fit or a load rating.

# robotdsl_mount_v3_sensor_rosbot_irs16a

5 cm binary front bumper. Primary purpose-built robot layout.

This is a bespoke husarion_rosbot_xl_mecanum_chassis support for [pololu_digital_distance_sensor_5cm](https://www.pololu.com/product/4050).
It is fixed by actual measured host features and the source PCB pattern.
Print only the body STL.

Hardware: Two M4×14 host screws, four 0.8 mm M4 washers, two M4 nuts; one M2×12 PCB screw, one 0.3 mm M2 washer and one M2 nut.

Load the metal PCB nuts from the open rear on the bench, fit the source PCB and
front-access screws, then attach the whole module at its two chassis holes with
metal nuts underneath. The full module is removable for rear-nut service.
The body includes explicit washer seats, nut pockets and driver paths.

One genuine PCB hole plus both close board-edge guides bounds rotation. The ROSbot source omits lower roof-bore walls; physical through-hole and underside access confirmation is required.

No supplier-exact helical threads, print fit, strength, vibration qualification,
electrical integration or physical sensor trial is claimed. Authored fixture
source is MIT; source payload assets retain their original provenance/license.
