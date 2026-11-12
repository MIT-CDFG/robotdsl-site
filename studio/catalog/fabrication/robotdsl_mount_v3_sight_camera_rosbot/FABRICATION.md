# Fabrication files

Print the camera fork and make the separate 3 mm aluminium contact plate. The metal plate is not a printed thermal substitute.

STL meshes contain the individual printed bodies. Part counts are per one mount. CAD fit checks do not establish physical fit or a load rating.

# ROSbot navigation optics: distinct supports for distinct jobs

The D435 looks forward from the front-right corner. The L2 needs an unobstructed horizontal scan around the robot, so it has a separate raised, open support. The scanner is not combined with the arm.

## D435 front-right fork

The two actual roof apertures are at X120, Y−20/−40, Z83.4 mm. The printed fork spans **39 × 58 × 32 mm**; its footprint follows the two fixing points and the camera's rear M3 pair. Two diagonal feet and low ribs support rear posts. A separate **62 × 18 × 3 mm aluminium contact plate** contacts the camera rear, retaining the source mounting/thermal intent. The camera's front face extends beyond the chassis nose. It is not sitting on the roof.

Use the separate `PRINT/camera_body.stl` and the actual CAD-projected `camera_plate.dxf`/`camera_plate.step`. The DXF is a nominal cutting profile; it is not a supplier quote or a process-qualified toolpath. The plate is metal, not a printed thermal substitute. The two rear M3×10 screws have a0.5 mm washer,4 mm printed post and3 mm aluminium stack, leaving **2.5 mm nominal insertion** into the D435 (manufacturer maximum3 mm). Two M4×14 roof screws use washers and metal nuts against the documented3 mm roof. Fit the rear camera screws before fastening the assembly to the roof.

## L2 open scanner support

The four roof apertures are X±40/Y±40 at Z83.4 mm. The support places a removable cap at local Z32 mm and the sensor base at Z36 mm. Four inclined legs, an open central crown and a removable sensor cap replace a general raised platform. The underside central opening remains accessible for assembly and the actual cable arrangement needs physical confirmation.

`PRINT/lidar_base.stl` and `PRINT/lidar_cap.stl` are separate printable bodies. Four M4×14 roof stacks attach the feet. Four metal M3 nuts enter the rounded-square housings from the sides. Off-robot, four M3×8 screws and0.5 mm washers attach the L2 to the4 mm cap: **3.5 mm nominal insertion**, within the documented6 mm allowance. Four M3×12 service screws fix the cap to the captured nuts. The outer service screws are reachable beyond the sensor case. Threads are in metal; this design does not rely on printed tapped holes.

## Manufacturing and evidence

The intended prototype process is FDM PETG,0.4 mm nozzle/0.2 mm layer. This is a process assumption, not a sliced or physically tested job. Measurements use a 45° angle and published FDM wall thresholds (1.2 mm supported/1.6 mm unsupported).

| Body | Sampled minimum / fifth-percentile wall | Support-area observation |
|---|---|---|
| Camera fork |4.0 /4.0 mm|26.14 mm² below45°; small horizontal camera bores may need local support/cleanup. |
| Scanner base |3.2 /4.0 mm|2183.64 mm² in assembly orientation; upside-down candidate1260.06 mm² at the same32 mm height. Supports and nut-pocket cleanup remain necessary. |
| Scanner cap |3.888 /4.0 mm|0 mm² below45° with its flat underside on the bed. |

ROSbot's retained roof CAD has exact upper circular trims and a lower sheet face but omits closed bore walls at these apertures. The manufacturer documents a3 mm mountable roof. Nominal screw passages through the incomplete mesh are explicitly **source-mesh-limited**; physical through-hole confirmation and access around the unmodelled internal Pi/electronics remain required. No strength, vibration, thermal, full optical-field or physical-fit qualification is claimed.
