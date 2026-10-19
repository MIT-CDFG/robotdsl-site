# Licence

**Site content** (the text, figures, tables, demo clips and the paper video under `index.html` and `assets/`):
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
Credit "RobotDSL Team" and link to https://mit-cdfg.github.io/robotdsl-site/.

**MobileCopilot Studio** (`studio/`, including the built front end and the catalog index):
© RobotDSL Team. All rights reserved. It is published here so that it can be used through this site; the application and compiler sources are not public.
The parts' 3D models are not in this repository: the Studio reads them from the component library's dataset on Hugging Face (https://huggingface.co/datasets/Aki-Frank/robotdsl-library-assets), each built from the maker's published model and keeping that model's rights.

**LEGO robots in the Studio** (`studio/catalog/showcase/`): each robot is drawn element by element from the
[LDraw parts library](https://library.ldraw.org) (CC BY 4.0; a few files CC BY 2.0 and CC BY 4.0, see
https://www.ldraw.org/legal-info), from a model of the LDraw Official Model Repository (CC BY 2.0) or from a model
of ours made after LEGO's building instructions (CC BY 4.0, RobotDSL Team). These files are under those licences,
not under the reservation above. `showcase.json` names each robot's model and its author and the authors of the
LDraw files it is drawn from, and the Studio shows them with the robot. LEGO® is a trademark of the LEGO Group of
companies which does not sponsor, authorize or endorse this site. LDraw™ is a trademark owned and licensed by the
Estate of James Jessiman.

**Walking robots in the Studio** (`studio/catalog/showcase/mjcf/unitree_go1/`, `unitree_g1/`, `booster_t1/`,
`unitree_go1_modular/` and `unitree_g1_modular/`): each robot's model (`scene.xml`), which RobotDSL-Core writes from
MuJoCo Playground's model of the robot, and its walking controller (`policy.onnx`) keep the licences of what they are
made from, which are beside them: MuJoCo Playground's Apache-2.0 (`LICENSE-playground.txt`) and MuJoCo Menagerie's
licence of the robot (`LICENSE-menagerie.txt`: BSD-3-Clause, Copyright (c) Unitree Robotics, for the Go1 and the G1;
Apache-2.0 for the T1). The Go1's and the T1's walking controllers are MuJoCo Playground's, unchanged (Apache-2.0);
the G1's is the RobotDSL Team's, trained by Playground's joystick task (CC BY 4.0); the modular Go1 walks by a gait
and has none. These files are under those licences, not under the reservation above, and each `scene.xml` says at
its top what was changed. The meshes the robots are drawn with come from the component library's dataset like the
other parts', reduced from MuJoCo Menagerie's, under the same licences. The RobotDSL Hexapod, Quadruped, Dog and
Biped (`robotdsl_hexapod/`, `robotdsl_quadruped/`, `robotdsl_dog/`, `robotdsl_biped/`) are the RobotDSL Team's own
designs, CC BY 4.0, and so is the Biped's walking controller (`robotdsl_biped/policy.onnx`), which the RobotDSL Team
trained by MuJoCo Playground's joystick task on RobotDSL-Core's model of the robot.
Unitree and Booster Robotics are trademarks of their owners, who do not sponsor, authorize or endorse this site.

**Parts submitted** through the Studio's form (an issue of this repository) go into the component library once a maintainer has built and approved them: a product under its maker's rights, a part of the submitter's own under the licence they chose (CC BY 4.0, CC BY-SA 4.0, CC0 1.0, MIT, or as stated in the submission).

**Third-party interface assets** (`assets/vendor/`, `assets/icons/`) retain their
original licenses and copyright notices. They are not relicensed under the site
content license. Chart.js and Three.js use MIT; Lucide includes ISC and
inherited MIT notices. See [asset sources](docs/asset-sources.md) for versions,
source URLs, research-asset provenance and font licensing. Imported component
geometry retains the applicable source component rights.
