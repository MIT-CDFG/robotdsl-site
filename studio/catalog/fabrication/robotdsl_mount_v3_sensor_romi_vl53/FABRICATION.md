# Fabrication files

20–120 mm front docking target, with floor-cone limit. Print one bracket body; metal hardware is separate.

STL meshes contain the individual printed bodies. Part counts are per one mount. CAD fit checks do not establish physical fit or a load rating.

# robotdsl_mount_v3_sensor_romi_vl53

20–120 mm front docking target, with floor-cone limit. Primary purpose-built robot layout.

This is a bespoke pololu_romi_chassis_kit support for [pololu_vl53l4cd_carrier](https://www.pololu.com/product/3692).
It is fixed by actual measured host features and the source PCB pattern.
Print only the body STL; never print the hardware assembly as one part.

- Manufacturing STL

Hardware: Two M3×12 host screws, four 0.5 mm M3 washers, two M3 nuts; two M2×10 PCB screws, two 0.3 mm M2 washers and two M2 nuts.

Load the metal PCB nuts from the open rear on the bench, fit the source PCB and
front-access screws, then attach the whole module at its two chassis holes with
metal nuts underneath. The full module is removable for rear-nut service.
The body includes explicit washer seats, nut pockets and driver paths.

The small rounded central rear relief clears the original front-caster tongue by 0.809920 mm. Intended 20–120 mm docking range is below the conservative floor-cone crossing.

No supplier-exact helical threads, print fit, strength, vibration qualification,
electrical integration or physical sensor trial is claimed. Authored fixture
source is MIT; source payload assets retain their original provenance/license.
