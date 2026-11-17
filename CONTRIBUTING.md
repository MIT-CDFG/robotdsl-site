# Contributing to RobotDSL

RobotDSL grows through the people who use it. Everything below is an issue or a discussion of this repository: it needs a GitHub account, and what you write is public.

## Report a robot that came out wrong

In MobileCopilot Studio, **Report issue** opens the **Generated design looks wrong** form in a new tab, with the program, what the last build found and the recent lines of the log filled in. You say what looks wrong, add a screenshot if you like, and create the issue there. Your API key is never part of it.

Without the Studio, fill in [the same form](https://github.com/MIT-CDFG/robotdsl-site/issues/new?template=generated-design.yml) by hand. Failed designs become test cases for the next release.

A problem with the project page, the Studio or the documentation itself goes in [Site or Studio problem](https://github.com/MIT-CDFG/robotdsl-site/issues/new?template=site-problem.yml).

## Add to the parts library

**A product the library lacks, or a part of your own.** **Suggest a product** in the Studio asks what kind of part it is and opens that kind's form here (**Submit a wheel**, **Submit a motor**, and so on; all of them are on the [new issue page](https://github.com/MIT-CDFG/robotdsl-site/issues/new/choose)). The form takes the part's name, a link to where it is sold or to its files, its price and mass, the figures its kind needs, how it mounts, its 3D model (STEP, STL, OBJ or GLB) and the licence it is published under. A maintainer builds the part from that and checks that it compiles and mounts as described. It then appears in the Studio with your credit.

**A part your robot needs and the library does not have.** [Request a part](https://github.com/MIT-CDFG/robotdsl-site/issues/new?template=part-request.yml): a bracket between two parts, a battery, a regulator. Whoever adds it answers on the issue.

**A figure the library lacks or states wrongly.** [Propose a part's figures](https://github.com/MIT-CDFG/robotdsl-site/issues/new?template=part-figures.yml): a voltage range, a current or a mass, with the datasheet or the measurement it comes from. A maintainer checks it against your source, and from then on every robot with that part is checked with it.

**Upload a part** in the Studio shows a 3D model of yours in the page. Sending it to the library from there is not open yet. Until it is, use the form of its kind and link or attach the files.

## Ask and share

Questions, robots you want to show and ideas go in [Discussions](https://github.com/MIT-CDFG/robotdsl-site/discussions).

## Keys and what you publish

Never post an API key in an issue or a discussion. If you posted one by mistake, revoke it with its provider first, then edit the post.

Issues and discussions are public. Leave out what you do not want to publish, and attach only files you may share.

## Changes to the site itself

`studio/` and `docs/` in this repository are built from sources that are not public yet, so a change made to those files here is lost at the next build. Open an issue instead, and it is fixed where the file is made. The project page (`index.html`, `assets/`) is written here, and the [README](README.md#previewing-it) says how to preview it.
