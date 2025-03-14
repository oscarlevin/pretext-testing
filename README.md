# pretext-testing

A collection of documents to use when testing pretext features.

## What's here

The `projects` folder contains copies of a number of different PreTeXt projects, mostly taken from the examples directory in PreTeXt.  While some of these have their own `project.ptx` file, they are all controlled primary through the the main `project.ptx` manifest in the root of the repository.  

The main project manifest is set up to build different versions of each project with output going into the `test-output` folder.  The specific output location for each build within this folder should not be modified; it is designed to exactly match the structure of the `snapshots` directory for the purposes of performing a *diff* between the the test output and the accepted canonical output for each build.

The contents of `projects` and `snapshots` are updated automatically by a script that downloads the latest version of projects (where applicable) and builds them using the latest CLI release, but using the latest core commit.

The `latex-to-pretext` folder serves a different purpose; it contains a number of latex documents that can be used to test latex-to-pretext conversions.
