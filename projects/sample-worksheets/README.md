# Sample Worksheets

The printout sections of the sample article, and nothing else: the
`worksheets`, `handouts`, `standalone project printouts`, and
`worksheet solutions testing` sections, lifted verbatim from
`../sample-article/sample-article.xml`.

It exists because printout page breaks are slow to iterate on. The sample
article is ~300 PDF pages and several minutes a build; this is 52 pages and
under a minute, while still carrying all 19 printouts, all 14 worksheets, all
3 handouts, and all 85 `@workspace` attributes the sample article has.

## Targets

From the top level of the repository:

    pretext build sw-web     # HTML, with a print preview per printout
    pretext build sw-pdf     # PDF, plus the LaTeX source beside it

There is also a stand-alone `project.ptx` here, with `html`, `latex` and `pdf`
targets, for building from inside this directory.

## Keeping it in step with the sample article

The sections are a verbatim copy, so anything added to the sample article's
printout sections has to be copied across to show up here. Two deliberate
departures:

- the cross-reference to `exercises-multiple`, which is the section *after*
  the printouts in the sample article and is not itself a printout, is
  reworded away rather than left dangling;
- `gen/` and `media/` hold copies of only the assets these sections use,
  rather than pointing at the sample article's, so that a generating build
  here cannot write into another project's directory.

The publication file mirrors the sample article's in everything that bears on
printouts (chunking level, exercise component visibility,
`<worksheet formatted="yes"/>`, 10pt LaTeX), and drops everything that does
not, so a printout laid out here lays out the same way it does there.
