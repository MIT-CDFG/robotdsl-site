# Fabrication files

Print one Pi carrier tray and one removable guard. Use the separate metal spacers and fasteners listed under What to buy below.

STL meshes contain the individual printed bodies. Part counts are per one mount. CAD fit checks do not establish physical fit or a load rating.

# Pi 5 ackermann service carrier

Low Pi 5 rear tray using the actual Hiwonder Ackermann four-hole plate pattern.

Print `assets/print-tray.stl` and `assets/print-guard.stl` separately.

Off-robot, fit the four M2.5×8 mm female/female PCB spacers and four M3×25 mm guard spacers using underside countersunk screws. Seat the carrier on its named chassis holes and install host bolts, washers and nuts. Romi additionally uses four OD6/ID3.2×12 mm brass sleeves; Ackermann uses four OD8/ID4.3×4 mm brass sleeves and M4×16 host screws. Then install the Pi on its four actual holes, with M2.5×5 screws and 0.5 mm washers. Finally fit the separate guard with M3×6 screws and 0.5 mm washers. Remove the guard before servicing board screws or FFC latches; some host screws require board removal. All threads are metal.

The Pi underside sits8 mm above the printed floor. The header ribbon leaves through the full GPIO opening. USB/Ethernet and side USB-C/HDMI connections remain open; the SD card can leave the short edge. A reference Active Cooler envelope is clear, but actual cooling performance, cable overmolds and unmeasured cooler push-pin details require physical confirmation.

This is an authored fabrication option, not a sold product. Purchased computer and fastener costs are separate. Adding a computer does not supply battery regulation, motor controllers, wiring, drivers or a working robot. Structural, vibration, electrical and physical-fit qualification remains open.

## What to buy

- 4 × Pi mounting spacers: M2.5 female/female, 8 mm long, 5 mm across flats, steel (for example [Wurth970080151](https://www.newark.com/wurth-elektronik/970080151/standoff-hex-female-female-8mm/dp/57AC7956))
- 4 × Guard spacers: M3 female/female, 25 mm long, 5.5 mm across flats, steel (for example [Ettinger005.03.251](https://www.newark.com/ettinger/005-03-251/standoff-hex-female-steel-25mm/dp/59M3913))
- 4 × Pi lower countersunk screws: M2.5, 6 mm long, head 5 mm across and 1.5 mm high
- 4 × Guard lower countersunk screws: M3, 8 mm long, head 6 mm across and 1.7 mm high
- 4 × Pi upper socket screws: M2.5, 5 mm long, with 0.5 mm washers, 5 mm outside
- 4 × Guard upper socket screws: M3, 6 mm long, with 0.5 mm washers, 7 mm outside
- 4 × spacers: 8 mm outside, 4.3 mm inside, 4 mm long, nickel-plated brass (Wurth Elektronik 963040174, [datasheet](https://www.we-online.com/components/products/datasheet/963040174.pdf))
- 4 × M4 × 16 bolts, each with a 0.8 mm washer above, a 0.8 mm washer below and an M4 nut
