# Fabrication files

Forward ultrasonic obstacle indication; object-dependent beam and floor response require physical tuning. Print one bracket body; metal hardware is separate.

STL meshes contain the individual printed bodies. Part counts are per one mount. CAD fit checks do not establish physical fit or a load rating.

# robotdsl_mount_v3_sensor_strafer_mb1010

Forward ultrasonic obstacle indication; object-dependent beam and floor response require physical tuning. Primary purpose-built robot layout.

This is a bespoke gobilda_strafer_chassis_kit_104mm support for [maxbotix_mb1010_lv_maxsonar_ez1](https://maxbotix.com/products/mb1010).
It is fixed by actual measured host features and the source PCB pattern.
Print only the body STL; never print the hardware assembly as one part.

- Manufacturing STL

Hardware: Two M4×14 host screws, four 0.8 mm M4 washers, two M4 nuts; two M2.5×12 PCB screws, two 0.5 mm M2.5 washers and two M2.5 nuts.

Load the metal PCB nuts from the open rear on the bench, fit the source PCB and
front-access screws, then attach the whole module at its two chassis holes with
metal nuts underneath. The full module is removable for rear-nut service.
The body includes explicit washer seats, nut pockets and driver paths.

The nominal M4 shank equals the source nominal Ø4 mm channel bore; supplier tolerances/physical fit remain unqualified. The forward aperture corridor is clear, but acoustic beam/floor response remains object-dependent and untested.

No supplier-exact helical threads, print fit, strength, vibration qualification,
electrical integration or physical sensor trial is claimed. Authored fixture
source is MIT; source payload assets retain their original provenance/license.
