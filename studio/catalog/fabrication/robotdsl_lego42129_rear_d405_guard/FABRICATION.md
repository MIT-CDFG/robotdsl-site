# LEGO42129 rear D405 protective saddle

This is a nominal manufacturing prototype. It has not been printed, assembled, driven or impact tested. Retention remains unknown until the purchased pins and printed receiver have been physically checked.

## Make and buy

Print one `lego42129_rear_saddle.stl` in millimetres. SLS PA12 is the preferred initial process. PETG FDM needs supports under the elevated receiver and front guard, a fit coupon and process-specific dimensional adjustment. No CAD validity result proves printed strength or friction fit.

The final mesh is watertight with one body. Sampled minimum wall is1.782mm and the fifth percentile is4.0mm, exceeding the selected SLS0.7mm and FDM unsupported-wall1.6mm screening limits. The original+Z orientation has6.9percent downward-facing area at the45degree screen. FDM therefore still needs slicing/support review; this is not a support-free print or a machine-ready job.

Purchase two LEGO Technic3L friction pins, design42924 / BrickLink6558, one1/4-20UNC×3/8in button socket screw and one1/4in washer of1.143mm thickness. Do not substitute a longer screw or washer thickness without recomputing insertion.

- [LEGO replacement pin search](https://www.lego.com/en-us/pick-and-build/pick-a-brick?query=6558)
- [3L pin catalogue identifier](https://www.bricklink.com/v2/catalog/catalogitem.page?P=6558)
- [Tripod screw CAD record](https://api.step.parts/v1/parts/asme_button_head_socket_screw_1_4_20_l0p375in_simple)
- [Washer CAD record](https://api.step.parts/v1/parts/asme_flat_washer_1_4_20_simple)

The linked CAD records identify nominal hardware geometry; they are not purchase orders or stock confirmations. Use an actual supplier listing with those dimensions. The D405 itself is not included in this fixture.

## Source attachment and assembly

It uses two free holes atY=±16mm through the stacked8mm beams. The long16mm legs of the purchased3L pins enter the existing beams; the remaining8mm legs enter the printed receiver. Existing rear panels obstruct a conventional bottom nut, so this design does not add imaginary bolt access.

Fit the two pins to the existing source holes, then lower the empty saddle onto their short legs. The nominal printed bores are4.85mm with6.45mm×0.85mm relief mouths. Those are process-dependent prototype dimensions: first test a receiver coupon and confirm full seating, retained friction, and removability without damaging the original beams. Do not glue, drill or force an oversized fit. If the fit does not retain the camera against expected vibration, reject the installation instead of treating it as complete.

Seat the rear-facing D405 on the lower floor. Insert the washer and tripod screw from below; this approach is behind the native rear panel. The nominal stack is9.525mm shank minus1.143mm washer minus5mm floor=3.382mm insertion. The manufacturer's maximum is5mm. The screw is the retaining fastener; the two small rear stops only limit nominal yaw play and do not establish an antirotation or torque rating.

Connect USB from the side after seating the camera. The full nominal plug envelope remains outside the guard and the original body. The guard lies beyond the front glass, so it is the first new part encountered by a broad rear contact plane; it is not qualified to survive a collision. Its front optical opening is clear in the static source pose. Actual field of view and cable bend need the real camera and cable.

## Evidence and limits

The camera tripod is20mm below the rear crossbar top. Its optical-center estimate is about124.6mm above the nominal wheel ground. It faces horizontally rearward. The original wheels and motor placements are preserved, but full suspension articulation, impact strength, cargo loading, USB cable flex, electronics and recording software are unqualified. A static check must not be presented as operational validation.

Source LDraw model/parts remain under their original CC BY2.0/4.0 attribution; authored CAD and step.parts hardware are MIT.

Primary geometry references: [Philo's42129 OMR model](https://library.ldraw.org/library/omr/42129-1.mpd?download=1), [pinned manufacturer D405 exterior](https://github.com/realsenseai/realsense-ros/blob/9a11121700cb4780e273e34141f6402fe184321d/realsense2_description/meshes/d405.stl), and [RealSense D400 datasheet, October2025, drawing page93](https://realsenseai.com/wp-content/uploads/2025/09/Intel-RealSense-D400-Series-Datasheet-October-2025.pdf).
