var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "derivatives",
  "level": "1",
  "url": "#derivatives",
  "type": "Article",
  "number": "",
  "title": "Sample Research Article",
  "body": " Sample Research Article  A derivation of the PreTeXt Sample Article       Robert Beezer Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu Statement about support received by the first author.   A. Second Author   Department of Mathematics  University of Somewhere  Anytown, USA   asauthor@example.edu  Statement about support received by the second author.      samples PreTeXt testing document    00-01  00-02  00A99   This is an example of a statement describing funding support for the current document.       This is a sample of many of the things you can do with PreTeXt . Sometimes the math makes sense, sometimes it seems to be written in the first person, sort of like this Abstract.        The Fundamental Theorem  There is a remarkable theorem: And fortunately we do not need to try to write it in the margin!    The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then test: buried in theorem\/statement\/p    Left to the reader.      You will find almost nothing about all this in the article , nor in the book , since they belong in some other article, but we can cite them out-of-order for practice anyway.   When we are writing we do not always know what we want to cite, or just where subsequent material will end up. For example, we might want a citation to or we might want to reference a later .  We can also embed todo s in the source by making an XML comment that begins with the four characters todo , and selectively display them, so you may not see the one here in the output you are looking at now. Or maybe you do see it?   Because a definite integral can be computed using an antiderivative, we have the following definition.    indefinite integral integral indefinite integral    indefinite integral of    Suppose that . Then the indefinite integral of is and is written as .       Computing Integrals with Sage ( )    Computing Integrals with Sage (∫)   Sage integration  Sage integration cell  Sage integration numerical  numerical Sage integration  numerical Sage   numerics  numerics Sage  numerical integration Sage cell Sage   A F  A G  A H  A B  A B C  A B C D  A B C A    X  X F  X G  X H  X Y  X Y Z D  X Y Z A    mixed-content emphasized  structured-content emphasized  sorted as if Cat  sorted as if Quorum  units Z ( sort as A)  units A ( sort as Z)  verbatim text , use sortby   fibers      Cayley graph cayley graph CAYLEY GRAPH     as a variable  Sage can compute definite integrals. The output contains the approximate numerical value of the definite integral, followed by an upper bound of the error in the approximation.   Given the Fundamental Theorem, we would find the antiderivative useful. Cayley graph as a variable   The same command can be used to employ the antiderivative in the application of the Fundamental Theorem. Notice that the answer is exact and any further manipulation is likely to be simply producing a numerical approximation. cayley graph    There are integrals you really do not want to evaluate, or you do not want your reader to evaluate. A Sage cell can be configured for display purposes only you can look but you cannot touch. CAYLEY GRAPH   You can give a Sage element a doctest doctest attributes doctest attribute, whose value mirrors the optional hash tags used in Sage doctests. Possible values are random , long time , not implemented , not tested , known bug , absolute , relative , and optional . The values absolute and relative refer to floating-point tolerances for equality and require a second attribute tolerance to specify a floating point value. The value optional refers to the test requiring that an optional Sage package be present. The name of that package should be provided in the package attribute.   The next cell is marked in the source as doctest=\"random\" , and so is specified as unpredictable and not tested. But there is some sample output which will appear in the latex version (and always be the same). c  A bug test, sorted as c b c one  A bug test, sorted as c x c two  A bug test, sorted as c b c three    While the next cell is random, the returned value will never be more than away from , since the random() function stays between and . So we provide as the expected answer, but test with an absolute tolerance of .   Sage has some functions which affect output, generally making mathematics look more like mathematics via latex syntax. This is a simple test, and you should see the variable and superscript in italics, properly formatted as output when viewed within HTML output. We have provided expected output for doctesting, but it is sort of silly to have this as part of latex output, even if it is instructive.    Sage, and by extension, the Sage Cell Server, can interpret several languages. The next example has code in the R language, R a popular open source language for statistics. As an author, you add the attribute language=\"r\" to your sage element. (The default language is Sage, so you do not need to indicate that repeatedly.) Note that a language like R likes to use a less than character, <, special character in XML. You need to escape it by writing &lt; as we have done in the source for this example. (See the discussion in .)  As a reader you learn that the Evaluate button for a pre-loaded Sage cell will indicate the language in use.   The Sage Cell Server supports the following languages: sage , gap , gp , html , maxima , octave , python , r , and singular .  Here is another R cell. Unfortunately, it seems Sage's doctest facility cannot be used easily with code from other languages. In the source for this example, we have employed the XML escape sequence, &lt; several times (see ).    The Sage Cell server imports a few important R packages. As of 2022-06-04 these are deSolve , ggplot2 , pracma , survey , swirl , and tidyverse . This next example uses the ggplot library for both a data set and the plotting capabilities. Note the initial use of the library() function. This is a modified version of the Bubble plot example at Top 50 ggplot2 Visualizations The Master List .   Here is a blank Sage cell that you may use for practice and experimentation with the commands above. Note that this cell allows a choice of languages, and is not linked with any of the previous cells, so a reader would need to start fresh, or cut\/paste definitions from other cells.   On the other hand a <sage> element with no content will also create an empty Sage cell for the reader's use, but now it will be specific to a particular language and linked to others of the same language. Run the R cell above that defines the variable ruth and then try typing summary(ruth) in the cell below.   You can make Sage blocks which are of type=\"invisible\" , which will never be shown to a reader, but which get doctested. Why do this? If some code produces an error, and you hope it is fixed someday, use an invisible block to raise the error. Once fixed, the doctest will fail, and you can adjust your commentary to suit. There is such a block right now, but you will need to go to the source to see it.    Our maximum width for text, designed for readability, suggests you should format your Sage code with a maximum of about 54 characters. On a mobile device, the number of displayed characters might be as low as 28 in portrait orientation, and again around 50 in landscape. You can use a variety of techniques to shorten long lines, such as using intermediate variables. Since Sage is just a huge Python library, you can use any of Python's facilities for handling long lines. These include a continuation character (which I try to avoid using) or natural places where you can break long lines, such as between entries of a list. Also, if writing loops or functions, you may wish to have your indentation be only two characters wide (rather than, say, four).  Sage output can sometimes be quite long, though this has improved with some changes in Sage's output routines. Output code should be included primarily for doctesting purposes, and in this use, you may break at almost whitespace character and the doctesting framework will adjust accordingly. You may wish to show sample output in a static format, like a PDF, so you can consider formatting your output to fit the width constraints of that medium. Or you may even adjust exactly what is output, to keep it from being too verbose. Sage doctesting also allows for a wild-card style syntax which allows you to skip over huge chunks of meaningless or unpredictable output, such as tracebacks on error messages.  This paragraph is just a placeholder. It has handful of index entries, all starting with the letters gas , taken from Indexing for Editors and Authors: A Practical Guide to Understanding Indexes by Leise, Mertes, and Badgett. The intent is to test letter-by-letter versus word-by-word sorting of index entries. We use a word-by-word order, resulting in:  gas  gas masks  gas production  gas works  gasoline  gastritis   gasoline  gas works  gas  gas masks  gas production  gastritis    Titled Sage Cells  Sage cell with a title   You can place Sage cells inside of a paragraphs if you want to give them a title, but no numbers, .      An Interesting Corollary   Fundamental Structures   This is an <objectives> element you are reading, and this is its introduction. This early section has really grown and tries to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More.  Evermore.    This concludes the (incomplete) objectives for this section, so now we can carry-on as before.     This is a cross-reference to one of the objectives above, forced to use the phrase-global form of the text. It should describe the objective as belonging to the section (rather than the objectives ), since objectives are one-per-subdivision and are numbered based upon the containing division: . For comparison this is the (forced) type-global cross-reference: .  The Fundamental Theorem comes in two flavors, where usually one is a corollary of the other.    Second Version of FTC    Leibniz, Newton  Fundamental Theorem of Calculus Corollary   Suppose is a continuous function. Then .    We simply take the indicated derivative, applying Theorem at .    A justification, which is one of the variants of a proof.         Alternate Proof  You can have multiple proofs, and they can have titles which replace the word Proof as a heading. Here we just exercise displayed math with no automatic numbering, and an elective number on the middle equation.    The alternative version of the Fundamental Theorem ( FTC ) in is a compact way to express the result.  For testing purposes, there is a simple bare Sage Cell here.    A Mysterious Derivative!  So if we define a function with its variable employed as a limit of integration, like so then we get the derivative of that function so easily it seems like a mystery, . That's it.  For testing purposes, there is a simple Sage Cell here, buried inside an example that should be a knowl (embedded in the page).   We test a Sage cell inside a knowl, which should set the value of a variable that will be available to subsequent cells within the knowl.    Even if you ran the cell at the top of this page, within this knowl the value of the variable c is not known, so the next cell will cause an error.    The Sage cells on a page will remember results computed elsewhere on the page. If you rely on this feature, remind your readers to evaluate all the necessary cells and that they perhaps need to be evaluated in a certain order.   There are some Sage cells in the previous (knowled) <example> . The results there are restricted to the knowl. In other words, the scope of those cells is the knowl. So if you opened the example and executed the Sage cells there, or if you skipped the example entirely, the next cell should not know the values of those variables and will raise an error.   We cross-reference the example just prior, , to test the simple Sage cells that will now be part of a cross-reference knowl (an external file).   An Equivalent Claim   This claim is an equivalence: it is true if and only if it is correct.    Our purpose here is to show how you can structure a proof with cases, such as an equivalence structured with the arrows typically used to demonstrate the two directions involved in the proof, by using the direction attribute on a <case> element.   Nulla non lectus suscipit, bibendum leo quis, dignissim justo. In urna turpis, tincidunt id elementum id, faucibus ac tellus.    Quisque auctor ligula turpis, ut aliquam urna consectetur hendrerit. Aenean porta dolor et justo facilisis feugiat in sed sapien. Nullam porta ex et commodo semper.    Case 3b: The inductive step  A case may also have a title , whose formatting and structure is entirely up to the author. This then becomes the text of a cross-reference, as well.    Why Not Try This?  A <case> (or any other element with a default title) did not always handle title-ending punctuation correctly. So we try an example title with a question mark.    Necessity  If you like, you can have both indications.    No direction, no title, then just a generic title.     Exciting Proof!  We test here that punctuation at the end of the title of a proof is handled correctly.    Exact Proof  This proof should fill exactly three lines (as of defaults in place 2018-12-31) and so the tombstone\/Halmos should be on a fourth line, and then flush right . xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx.     A List of Equivalent Statements   The following are equivalent.  This statement is equivalent to all those below.  This statement is equivalent to the statement above and to all those below.  This statement is equivalent to the two statements above and to the statement below.  This statement is equivalent to all those above.      Our purpose here is to show how you can structure a proof with cases to address the circular logic required to prove the equivalence of a list of statements, by using the direction attribute on a <case> element. You should order the list of statements in the order that you would like to prove ``this statement implies the next.''   Here we would prove that the first statement implies the second.    Here we would prove that the second statement implies the third.    The trickiest case  This time we include a title to describe the nature of this case. But we would still need to prove that the third statement implies the last.    Wrap-around  Finally, we would complete the cycle of logic by proving that the last statement implies the first.     We can also use direction set to cycle in a stand-alone proof of our TFAE claim. If we include a ref on the <proof> that points to the original claim, then the formatting of the markers on the statement list will be honored in our cases.   Once again we will prove that the four statements in are equivalent.   Another argument that the first statement implies the second.    And another argument that the second statement implies the third.    Not so tricky this time  Why did we find it so difficult before to prove that the third statement implies the last?    Wrap-around  And once more we complete the cycle of logic.    A couple more times to check that the default list markers get applied to the directional cases properly.   Another List of Equivalent Statements   The <ol> that creates the list below does not have marker .  This statement is equivalent to the two below.  This statement is equivalent to both the statement above and to the statement below.  This statement is equivalent to the two above.      You know the drill by now.   Does the first statement imply the second?    The middle case  Does the second statement imply the third?    And finally, does the third imply the first?     This proof includes a ref to the preceding claim.    Does the first statement imply the second?    The middle case  Does the second statement imply the third?    And finally, does the third imply the first?    This proof does not include a ref , and so the direction indicators get default markers.    Does the first statement imply the second?    And finally, does the second imply the first?       A Pedagogical Note about   Symbolic and Numerical Integrals  The Fundamental Theorem explains why we use the same notation for a definite integral, which is a numerical calculation, Which I think sometimes students lose sight of. and an antiderivative, which is a symbolic expression.   Essay Question: Compare and Contrast   Write a short paragraph which compares, and contrasts, the definite and indefinite integral. This is an exercise which sits in the midst of the narrative, so is formatted more like an example or a remark. It can have a hint and a solution, but this one does not. It can have a title, which this one does.    Start writing!        Advice  Using an integral sign for an antiderivative (aka indefinite integral) would seem to make the Fundamental Theorem a fait accompli . So I would suggest not conflating the notation for two very different things until the Fundamental Theorem exposes them as being highly related.   An Example of Structure   This is an example of an example with a bit more structure. Specifically, the example has a title , as usual, but then has a statement , which is separate from the solution . Why did we implement an example in two ways?    Authors asked for it and it seemed a very natural thing to do, even if we only had an unstructured version for a long time.     An Example of a Question   Any kind of question can be marked as such with <question> . Or similarly, as a <problem> . They behave identically to example s, such as the one preceding and are numbered along with theorems, examples. etc.    You can have a solution. Or several, even if you don't ask a question.    See?     An Inline Exercise   There are lots of exercises in this sample article, but mostly they are in special exercise sections. Sometimes you just want to sprinkle some exercises through the narrative. We call these inline exercises , in contrast to divisional exercises . The inline exercises look a bit more like a theorem or definition, with titles and fully-qualified numbers.  These may also have hints, answers and solutions.    A good hint.    42.    If your exercise feels like proving a theorem, then you might want to make some comments, but also clearly delineate which part of the solution is a the complete proof.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.        An Example of with math formula in the title   Just for testing math in knowls, and also extra whitespace in a <p> .    There are many different blocks you can employ, and they mostly behave the same way. A <project> project is very similar to a <question> question or <problem> problem   Start Exploring PreTeXt  You could grab the minimal.xml file from the examples\/minimal directory and experiment with that.  Projects get their own independent numbering scheme, since they may be central to your textbook, workbook, or lab manual. If you process this sample article with level for project numbering set to 0 then you will get consecutive numbers from the beginning of your book, starting with 1.    Exploring Explorations   This is an <exploration> . exploration Other similar possibilities are <project> project , <activity> activity , <task> task , and <investigation> investigation .  Note that projects, activities, explorations, tasks and investigations share the independent numbering scheme, so it is really only intended you use one of these. If you want a variant of the name (  Directed Activity ) you can use the <rename> rename an environment facility ( ).    This is a solution to the exploration. In practice, you might choose to not make this visible for students, but instead include it as part of some guidance you might provide to instructors ( an Instructor's Manual ).     Hints, Answers, Solutions   This is quite the activity upcoming. This is a prelude authored within the activity element, but visually just prior.    Another variant of these project-like items is to possibly include a <hint> and an <answer> before the <solution> .    Just a little help.    The result, but no help in getting there.    Everything to get it all done, in detail.    This was quite the activity just now. This is a postlude authored within the activity element, but visually just after.     A Note on Remarks  <remark> , <convention> , <note> , <observation> and <warning> are designed to hold very simple contents, with no additional structure (no proofs, no solutions, ).  But they do carry a title and a number, can be the target of a cross-reference, and may be optionally knowlized in HTML with the html.knowl.remark processing switch.  And distinctly different from a <note> in a <biblio> A gratuitous footnote to test prior bug confusing this with a <note> in a <biblio> . .    An Aside with a Formatted Title  aside  An <aside> is similar to a remark, but is not as critical to the narrative. It is not numbered, and so requires a title. It can be the target of a cross-reference. They are meant to be short, and so are not knowlized at their first appearance. If the content is appropriate, these can be marked as <historical> or <biographical> , though longer items should use subdivisions ( sections, subsections) instead.   An <exercise> can be structured with <task> .   A very structured exercise   This is an over-arching introduction to the whole exercise. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    A super-simple task  This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    A title of a task that has a subtask with an <answer> for the Solutions   This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    A task with a title and an <answer> for the Solutions   A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.    With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.      A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      Three simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First subsubtask. Short paragraph.    A second three-deep subsubtask!  Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First answer. In interdum suscipit ullamcorper.    Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     This is a conclusion where you could summarize the exercise. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    The following <project> is nearly identical to the preceding <exercise> .   A very structured project   The next block is a project, demonstrating the use of the task element to structure its parts. You are reading the prelude now. The project has lots of nonsense words, so we can test spacing the nested items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This is an over-arching introduction to the whole project. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.    With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.      A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      Two simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First subsubtask. Short paragraph.    Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.        Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First answer. In interdum suscipit ullamcorper.    Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     This is a conclusion where you could summarize the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This postlude appears visually outside the project, but is authored within, to make clear its attachment to the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     Notation mathématique 2   The following <example> , from Elise Desgreniers, is structured with <task> .    Écrivez chacun des exemples suivants avec les conditions pertinentes.     Soit l'ensemble .  On constate que cet ensemble contient uniquement des entiers positifs allant de 1 à 5.  Donc, on peut écrire .         Ce sont des multiples de 3.            Ce sont des nombres impairs.            Ce sont des nombres premiers.            Ce sont des carrés parfaits.            Ce sont des cubes parfaits.        Notes or examples related to computation or technology can go in blocks of the same name.   Sample Use of Sage  This would be a good place to talk about Sage, including a cell or two.   But you might want to describe how to use some other calculator, or maybe some numerical method.    A <paragraphs> with a <project> with an <answer>  The solutions to a project (and similar) once did not migrate to the automatically-generated solutions.    A simple project, no tasks, just an answer.    Here's the answer we are looking for.         This is an exercise in an Exercises subdivision at the level of a subsubsection. There is no question other than if the numbering is appropriate. Here is a self-referential link: Exercise .  The subsubsection has no title in the source, so one is provided automatically, and will adjust according to the language of the document.    This solution will migrate to a list of solutions in the backmatter. We include a sidebyside as a test.   This is a skinny paragraph which should be just 30% of the width.  And another skinny paragraph which should also be just 30% of the width.       An <exercise> can be structured with parts, called <task> . This is the <introduction> .    Do this.    And the other thing.       reading questions  A set of reading questions may have an <introduction> , perhaps for preparatory explanation.  If a student has logged in to the HTML version, then they can answer the reading questions directly in the book. Inline math LaTeX can be entered using $ ... $ or \\( ... \\) delimiters, and inline AsciiMath using backticks ` ... ` as delimiters. Here are some `gratuitous backticks` to check that AsciiMath is only active in the answers to reading questions.    This is a reading question that you might have a student answer prior to a class session, based on reading part of the book. A quick glance before class can help you tailor class time to the specific needs of your students. The perfect reading question will reveal whether the student has read and understood the material, and will be difficult to answer if they have not. What do you think of that?    And a second one, with a cross-reference to the first, as a check on numbering: . Reading questions are allowed to have answers, but providing answers misses the point of a reading question, and the answer knowl interacts poorly with the mechanism used to allow students to answer directly in the book. Do you think the schema should ban answers to reading questions?    And for symmetry, a <conclusion> .     glossary   A glossary may have a <headnote> , perhaps with some explanation. This glossary is a specialized division within a section. Placement in the back matter is another option, see the .    bar  A part of foobar . See .    foobar  A synonym for the acronym FUBAR .     Solutions for This Subsection  solutions for a division   This is an introduction, where you might explain that this division of this subsection contains various hints, answers, solutions of inline exercises, divisional exercises, and\/or project-like blocks. See the source to see just how this solutions division was built.     And a conclusion to this solutions division, which may not be readily apparent as distinct from the final division's worth of solutions, but since it is not prefixed with a number, it may be different enough.      Theorem-Like Environments  There are a variety of pre-defined environments in PreTeXt . All take a title, and must have a statement. Some have proofs (theorems, corollaries, ), while some do not have proofs (conjectures, axioms, principles).   The Title Principle   It is a fundamental principle that many elements can have a title. Try it and see. If you get better formatting, then it is being recognized. If it looks very plain, check the documentation and perhaps make a feature request.    More precisely, <theorem> , <corollary> , <lemma> , <algorithm> , <proposition> , <claim> , <fact> , and <identity> , all behave exactly the same, requiring a statement (as a sequence of paragraphs) followed by an optional proof, and may have an optional title. The elements <axiom> , <conjecture> , <principle> , <heuristic> , <hypothesis> , and <assumption> are functionally the same, barring a proof (since they would never have one!). Definitions are an exception, as it is natural to place <notation> within see the source for Definition for an example.    Linking Sage Cells  Sage cells linking  Sage cells share their results on a per-webpage basis, or a per-knowl basis, so if you move to a new chapter, section, or subsection that happens to be on another webpage, your Sage computations are gone and you start fresh. But maybe you need some results from elsewhere. As an author, you can make an exact copy of a cell in another location by placing the code in an external file, which is pure text, freed from any need to format for XML processing. So, in particular, there is no need to escape ampersands and angle brackets, nor is there employment of the CDATA mechanism. But the real value is that there is just one version to edit, and any changes will be reflected in both copies. We demonstrate this in the sample book, since it has the xinclude mechanism in place. In the chapter on groups, find the section on Sage and then find the discussion of subgroups, and you will find an example of two identical Sage cells produced from one source file.  You can also specify certain cells to be auto-evaluated, by setting the auto-evaluate attribute to yes . The resulting cell will not have a button for evaluation (so editing it would be pointless). See the source of this sample article for the two examples below.  2023-08-17: support just now is for the use case of a small portion of code, not a huge library of helper routines.  Two cells with the default language sage .    Two cells with language python .      Hierarchy   Structure  This section of this article has subsections and subsubsections. In a book you can have chapters enclosing multiple sections. There is one finer subdivision, it is achieved with the paragraphs element.  It is basically a sequence of paragraphs, where the first one gets an inline title. You are reading the second, and final, paragraph of one right now. It is useful for organizing very short documents, where numbered subdivisions might be overkill.    A Second Paragraphs  This is a second consecutive paragraphs element, so should seem related to its title, but distinct from the two paragraphs in the grouping with the title Structure immediately prior.    Assemblages: Collections and Summaries  An <assemblage> is a collection, or summary, that does not have much structure to it. So you are limited to paragraphs and friends ( p , blockquote , pre ) and side-by-sides that do not contain captioned items ( sidebyside , sbsgroup ). The intent is that contents are not numbered, so cannot be cross-referenced individually, and so also do not become knowls. You may place <image> , <tabular> , and <program> inside a <sidebyside> , in addition to other objects that do not have captions. Note that p may by extension contain lists ( ol , ul , dl ). Despite limited structure, the presentation should draw attention to it, because the contents should be seen as more important in some way. It should be highlighted in some manner. If you need to connect the entire assemblage with material elsewhere, you can do that with the usual xref\/xml:id mechanism. assemblage  What have we seen so far in this (disorganized) sample?  Theorems, definitions and corollaries. ( )  Sage cells, including with R. ( )  Lots of document structure, like introductions and conclusions (next). ( )   A sample table, as a tabular inside a sidebyside with no caption, follows.   A B C  Uno Dos Tres     This is a small assemblage with no title, simply to make sure the surrounding box behaves properly, especially for latex output.    Assemblages containing  It is acceptable for an assemblage to contain mathematical content, even in its title.     Introductions and Conclusions   An Introductory Introduction  Any subdivision may have a sequence of paragraphs within an <introduction> that precedes subsequent further subdivisions. You are reading one now. They are always leaves of the document structure, so are rendered on some pages that reference the following subdivisions.  An introduction or conclusion is an extremely restrictive container with simple presentation. A title is optional (and probably not advisable). Content is meant to be short and unstructured, in particular, nothing that can be numbered is allowed. If this feels too restrictive, then place your content in an initial numbered subdivision and perhaps title it Introduction . Or make your entire subdivion unstructured and place whatever you want into it.  This ends this introduction to introductions.    Test One  An intervening subsubsection just after an introduction.    Test Two  An intervening subsection section which contains an <exercises> division which must be at the level of a Subsubsubsection.    An inline exercise to examine any clash with divisional exercises below.    An answer so there is something to appear in a <solutions> .     What Did You Learn?    A mock exercise to appease validation.    An answer so there is something to appear in a <solutions> .      And a second to help with formatting the division heading.        A mock exercise to appease validation.    An answer so there is something to appear in a <solutions> .      And a second to help with formatting the division heading.       Test Three  An intervening subsubsection just before a conclusion.    Entirely analogous to introductions are conclusions. Any subdivision may have a sequence of paragraphs within a <conclusion> that follows previous further subdivisions. You are reading one now. They are always leaves of the document structure, so are rendered on some pages that reference the preceding subdivisions.  This concludes this conclusion (and this subsection and this section).     Some Paragraph-Level Markup  Text within a paragraph may be emphasized em emphasis styling words em styling words emphasis with <em> or if you want to take it to the next level you can identify the text as an alert alert styling words alert with <alert> .  Similarly, within a paragraph, you can identify edits between versions as inserted text that has been added styling words insert with <insert> or as deleted text that has been removed styling words delete with <delete> . Note that these identified edits are slightly different than stale text that you want to retain, but which is no longer relevant styling words stale , which is accomplished with <stale> . The original request for stale text came from an instructor with an online list of student topics for presentations, and as students claimed topics they were marked as no longer available for other students.  If you need a fill-in blank , like this , it can be obtained with an empty <fillin> element that defaults to roughly a 10-character width. You can use the characters attribute to make the rule longer or shorter, such as a 40-character blank: . The character count is approximate, based on typical character widths within a proportional font carrying English language text. Adjust to suit, or request a language-specific adjustment if it is critical.  This paragraph is intended to make a <fillin> appear right at the start of the second line in print and then the next paragraph has nothing but a <fillin> . Both are for testing purposes.   The following are <fillin> with rows and\/or cols attributes (at least one of which is greater than 1): , , .  Long after we started this mess, we added PreTeXt tags to mark up tags and attributes. The elements are: <tag> , <tage> , <attr> . Examples of how these render are (respectively): <section> , <hash\/> , width . Perhaps this document will make greater use of these tags.  We supply two provisional cross-references for testing purposes only: , .    A conclusion here, which we fill with some numbering tests.  This is a cross-reference to one of the outcomes, forced to use the type-global form of the text. It should describe the outcome as belonging to the section (rather than the outcomes ), since outcomes are one-per-subdivision and are numbered based upon the containing division: . For comparison this is the (forced) type-global cross-reference: .    Fundamental Structures, Revisited   This is a <outcomes> element you are reading, and this is its introduction. This early section has really grown and we have tried to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More, and this is what the cross-references above are pointing to.  Evermore.    This concludes the (incomplete) outcomes for this section, so now we can carry-on to the next section.       Some Facts and Figures  footnotes   Because of the Fundamental Theorem First test footnote , for every derivative we know, there is an antiderivative we might find useful. Because of the Fundamental Theorem of Calculus Second test footnote , we recycle the symbol as notation for an antiderivative.   Derivatives       Antiderivatives         You can Third test footnote gain a greater understanding of derivatives by studying the graphs of functions with their derivatives. Can Fourth test footnote you discern the derivative antiderivative Fifth test footnote relationship in Figure ?     A function and its derivative   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes    Lists Sixth test footnote can have multiple columns. With HTML items displayed in row-major order (horizontally first) and Seventh test footnote with latex items are displayed in column-major order (vertically first). When one order, or the other, becomes workable in both variants, maybe we will be consistent in presentation. (Note that with just one row, it makes no difference.) We used it above for the two items derivatives and integrals where each item was a list of its own. Here are two more examples, one with short snippets and lots of columns, the other with lots of text in paragraphs. list multicolumn  Red  Blue  Green  Purple  Yellow  Black  Orange  Pink  Salmon strange colors  Aqua  Cyan  Puce strange colors    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.    Donec vestibulum auctor nisl. Nullam placerat interdum dui. Quisque lobortis scelerisque augue imperdiet placerat. Maecenas ultricies massa tempor, laoreet urna a, eleifend enim. Integer sed suscipit odio. Pellentesque non dapibus diam, eget tempus dui. Maecenas sollicitudin magna viverra, egestas velit nec, tristique sem. Cras iaculis mattis dui ac cursus. Integer volutpat, urna vel tempus convallis, erat nisi consectetur turpis, id varius dolor lorem vitae mauris. Phasellus erat orci, laoreet commodo gravida quis, congue in lacus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent at bibendum turpis. Pellentesque est nisl, dapibus at sagittis non, ultricies in nunc. Etiam ipsum arcu, porta sed feugiat eget, facilisis nec libero. Mauris tempor convallis felis.  Cras iaculis sapien elit, at convallis ligula convallis nec. Duis ante tortor, euismod a libero vitae, ornare viverra purus. Pellentesque facilisis urna a velit volutpat, in malesuada tortor porttitor. Sed vehicula mauris id lectus dignissim, eget consectetur dui pellentesque. Sed vel quam molestie, euismod ligula ac, venenatis arcu. Fusce sit amet sapien non urna dignissim tempus in vitae metus. Aliquam arcu turpis, mattis non libero eu, lacinia feugiat turpis. Phasellus rhoncus lacinia lacus facilisis ullamcorper. Praesent hendrerit accumsan neque, eu dignissim est consequat sed. Nulla facilisi. Proin at mi scelerisque, scelerisque felis ut, tristique diam. Proin in leo in lorem porttitor varius. Praesent condimentum in dui sit amet blandit. In imperdiet blandit congue.    Ut nec sem vitae ipsum interdum vestibulum sit amet sed velit. Aliquam tempor nibh vitae augue pulvinar, at ultricies urna commodo. Donec in porta lectus, ac sagittis felis. Vestibulum tincidunt quis metus facilisis luctus. In lobortis lacus vel ornare vehicula. Duis aliquet, ligula semper sodales adipiscing, augue nibh ornare ante, quis pulvinar justo mi eget mi. Mauris varius imperdiet vehicula. Duis dignissim magna quis velit mattis, in cursus lectus vehicula. Morbi quis tempus felis, ut gravida nisi.  Vivamus eu commodo est, pretium fringilla dolor. Curabitur vel sollicitudin libero. Integer sit amet auctor felis. Maecenas sagittis erat at ante feugiat, in tincidunt ligula pretium. Integer eget auctor ipsum, quis volutpat felis. Morbi id dignissim eros. Suspendisse aliquet pulvinar lorem gravida egestas. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec massa dui. Suspendisse convallis lacus sit amet adipiscing varius. Suspendisse tempus diam vitae justo ornare, in condimentum metus pharetra. Curabitur sem dolor, auctor vitae sagittis vestibulum, posuere imperdiet metus. Etiam pretium lacus urna, vel auctor diam tincidunt non. Etiam viverra sodales iaculis.    Sed varius leo urna. Phasellus tempus mollis ultricies. Curabitur non neque aliquet, facilisis tortor in, sodales dui. Donec hendrerit ultricies nulla mollis rhoncus. In vel lobortis est. Vestibulum consectetur lacus vel sem dignissim vestibulum. Etiam sed elementum ligula, vel congue turpis. Morbi nec diam mattis, venenatis eros et, elementum tellus. Integer sed orci ornare, elementum elit id, lacinia augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In et libero id turpis pharetra faucibus. Integer consequat dignissim semper. Donec pretium magna at ullamcorper ultricies. Nam quis suscipit elit. Donec cursus tellus et venenatis feugiat. Mauris dictum molestie leo, vitae aliquet metus luctus vitae.  Ut id iaculis leo. Sed nec vestibulum mi. Mauris est mauris, porta in nulla eget, bibendum luctus nisl. Praesent et posuere felis, molestie vehicula velit. Nulla a nunc venenatis, aliquam orci nec, congue felis. Vestibulum a dolor nisi. Morbi sed nisi nulla. Nam iaculis felis a enim blandit, at venenatis diam congue. Nulla augue diam, egestas eget fermentum nec, posuere eget risus. Praesent egestas nulla eros, eget accumsan augue euismod vel. Pellentesque pellentesque non erat vitae posuere. Curabitur lacus arcu, varius sed risus ut, ullamcorper tincidunt lorem. Sed et lacus dignissim, tincidunt nisl ac, porttitor sapien.          Some Advanced Ideas   The multi-row displayed mathematics in the proof of the Fundamental Theorem had equations aligned on the equals signs via the & character. Sometimes you don't want that. Here is an example with some differential equations, with each equation centered and unnumbered, .   this symbol could be used for lots of things, but we are just trying to make a super-long description to get it to wrap within the column where it belongs, which is sometimes set to a fixed width to accomodate really complicated explanations   rho, a test Just prior to this sentence, in the middle of this paragraph, is an <idx> and a <notation> , adjacent, but separated by some whitespace in the authored source. That insignificant whitespace will be removed akways, which will be a (slightly) noticeable improvement in the latex output. We test referencing notation here, placed before the sentence-ending period and right after some inline mathematics for (ring of) integers modulo .  latex has a device where you can interrupt a sequence of equations with a small amout of text and preserve the equation alignment on either side. Here are two tests of that device, with aligned equations and non-aligned equations. Study the source to see use and differences. (The math does not make sense.)  Aligned and numbered first.  Now with no numbers and no alignment. We include two cross-references in the intertext portion for testing. .  Tables can get quite complex. Simple ones are simpler, such as this example of numerical computations for Euler's method in just a bit.  But first we make a figure with two very simple tables next to each other. This causes the very first instance of <table> to actually be a subtable , which exposes a bug provoked by Emiliano Vega and fixed around 2020-08-06. (So we have to place this early to create the same behavior that exposed the bug.)   Buggy sub-tables    First   One     Second   Two       Euler's approximation for Duffing's Equation with          0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900      Mathematics   To be able to create both latex and HTML output (plus variations), we rely on MathJax, which in turn supports an extensive subset of the mathematical symbols normally available. The AMSMath symbol set is a good approximation. The PreTeXt Guide has a link to the complete list of macros supported by MathJax. We load the AMSsymbols library.    Basic Mathematics  The following is from the MathJax demonstration page , an identity due to Ramanujan:  And again, from the MathJax demonstration page, Maxwell's equations: Maxwell's equations gradient operator  Historically, we provided internal support for the latex package extpfeil . As of 2023-10-19 this has become an author election (see the <docinfo> section in the source of this document). We preeserve a small test that this extensible arrows library is being included properly:  Look back at the top of the source file of this document to see how to include your tex macros just once. For best results keep your macros simple and semantic.  PreTeXt once provided modest built-in support for slanted , or beveled , or nice fractions. To wit, we mean fractions such as: . Use the pre-defined \\sfrac{}{} macro in your mathematics to achieve this presentation. The presentation in HTML is subpar, but could improve as MathJax provides support. It is now an author's responsibility to add support for superior typesetting for PDF output by loading the xfrac  latex package with the following in <docinfo> :  <math-package latex-name=\"xfrac\" mathjax-name=\"\"\/>  which is what we have done here as a test. See the Guide for more details.  We consider a system of equations. We number the first and last equation (there are just two) and include an xml:id on each. We reference the whole system later as the range of equations from the first to the last.    Displayed Mathematics  Multi-line displays of mathematics are achieved with the md tag ( math display ), and the variant that produces numbers on each line, mdn ( math display numbered ), used within a paragraph ( p ). As a good example of how XML syntax is superior, you author lines of equations by enclosing each line inside of a mrow tag, rather than using separators (such as \\\\ ).  If you use no ampersands to express alignment (read ahead), then each equation is centered independently on the width of the text. This is implemented according to the AMSmath latex package's gather environment. Example:  An ampersand is used, in two ways, to describe positioning several equations per line, organized in columns. We have created the pre-defined latex macro \\amp as one way specify these, but the escape sequence &amp; may be used also. The second, fourth, sixth, ampersands separate columns, and the spacing between columns will be provided automatically. The first, third, fifth, ampersands are alignment points for the equations in each column. Typically this is placed just prior to a binary operator, such as an equal sign ( \\amp = ), or for a column of explanations or commentary, just prior to the \\text{} macro. Note that this scenario suggests always having an odd number of ampersands in each mrow . In the example below, alignment is on the equals sign in the first two columns, and provides left-justification to the explanations in the third column. N.B.: the use below of the \\text{} macro does not include mathematics within its argument. Doing so may yield unpredictable results depending on your choice of delimiters for the mathematics (and using an m tag will be ineffective).  PreTeXt will automatically detect the presence or absence of ampersands, but by defining macros for entire aligned equations, you can effectively hide the ampersands. So the @alignment attribute can override automatic detection. We use a simple latex macro to demonstrate setting alignment='align' to override the use of a gather environment and use a align environment instead. Example:  The AMSmath latex package's alignat environment is a third variant of alignment. It never happens automatically, you need to ask for it with alignment=\"alignat\" . It is very similar to align but adds no space between the equation columns. So you can leave it that way, or you can add your own extra space to suit. Here is a previous example with no inter-column space: . This modified example has a middle row with three columns, while the other rows have just one column, as a test of our routines for determining the mrow with the greatest number of ampersands (and how many there are), . Final example demonstrates that ampersands in other objects (matrices here) can wreak havoc with computing the number of columns. So we provide yet another attribute to override automatic detection, alignat-columns . This is the number of columns not the number of ampersands . Generally, for columns, there will be ampersands. . One caveat: if your number of ampersands is even (see advice above about using an odd number) behavior should still be correct, as in next example.  If you want super-precise control over alignment of the terms of a system of equations (linear or not) you can use the alignat option to advantage by not including any extra space. This example is modified slightly from a post by Alex Jordan: Beautiful.  A long equation, to check layout on various screen sizes. This is Weil's explicit formula for the Riemann -function: .   Excessive Display Mathematics  In print versions, a long run of displayed equations often needs to be broken across pages. If you are reading some other version of this, then there is nothing to see here. But for latex output it could be interesting. First, with no extra effort, this page-long display should break naturally, no matter how the preceding material changes. .  In this version we have turned off page breaking for the entire display, but then allowed a break at every fourth equation, so you should see a reasonably attractive page break right after one of the equations. .  So. Do not take any extra steps and let latex figure out the breaks. If you do not like a break, modify the md or mdn to go back to the AMSmath default behavior and not break at all. Ever. Or rather, go further and modify an individual mrow to suggest that it is a good place for a break.   This is a poorly-authored paragaph to test the conversion to HTML . There are two displayed equations, separated by a period ending the first one's sentence, which should migrate into the display, and not leave behind an empty paragraph: . . This final sentence should remain, inside another HTML paragraph, without the second equation's period.    latex Packages and MathJax Extensions  If you would like to enhance your mathematics by using a macro from a latex package and there is a MathJax extension which implements the same macro , then you may use this with your mathematics as we demonstrate here.  This example is from Jason Underdown. Underdown, Jason The package is named cancel and is included in the TeXLive distribution, so is fairly standard. The particular macro being demonstrated is \\cancelto{}{} . . Look at the source of this article to see the package name being supplied in a <math-package> element within the <docinfo> section. That is the only setup required to make the macro usable in latex and HTML output. canceling a term cancelto macro  See the PreTeXt Guide subsection about MathJax Extensions for more detail.    Advanced Mathematics  MathJax is extremely capable in rendering a subset of latex in web browsers, and improving all the time. You can get fairly fancy with some of its supported commands. In particular, if you need to mix in a few words with your mathematics, the \\text{} macro is supported. For example, you might use an if or an otherwise in the definition of a piecewise function.  Consider that the first line below is text sandwiched in-between two Greek letters, wrapped in a \\text{} macro. In HTML output we have taken care that the font for text material within display mathematics should match the font of the surrounding paragraph, as also happens with latex output. The second line is nearly identical in the source, but is just naked text being rendered like a slew of variables. . We are not suggesting here that using words in place of symbols, as in the first line, is a good practice. (It is not.)  The following example is a good stress-test of using the \\text{} macro to achieve certain effects. Note the Unicode left and right smart quotes. This a contribution from Alex Jordan as part of his work on APEX Calculus . And another one from Alex. Note the use of the \\mathord{} and \\mathrel{} macros to control spacing around the mathematical symbols. Examine the source to see how the quotation marks have been authored with XML syntax for Unicode characters, since we do not allow most markup inside mathematics.  Generally, you cannot use any XML elements inside of the mathematics elements. An exception is the xref element which you might want to use to provide justifications for the steps of a derivation. Here is a visual example that is mathematically meaningless, .  Scott Beaver likes to write short chains of equalities all in one line, with the cross-references sitting on each equals sign. Here we test the latex  \\overset and \\underset macros wrapping a PreTeXt  <xref> , with and without content, inside an <me> element. Note that \\stackrel is obsolete, and \\overunderset is not yet supported by MathJax (but see GitHub #2704 ). The mathematics is Scott's, the reasons are totally unrelated to the math. We suggest using cross-references that only display numbers ( <xref> with text set to global ) since if you stick to elements like <theorem> , <lemma> , <definition> , or <axiom> , then the numbers will be unambiguous and the target of the cross-reference will contain full information. But note that if you mix in divisions, or perhaps figures, as reasons then there is a possibility that numbers will need to be qualified by their type. We have provided an abbreviation for one cross-reference to (which will not benefit from automatic translation to other languages).    Local Tags on Equations  If you are not writing a research monograph, maybe (a) you will not use many numbered equations, or do not like the looks of them, or feel they scare your readers, and (b) maybe your cross-references are always local-ish, like strictly within an example or a proof . For this situation you can create, and employ, a local tag on a displayed equation. Nothing enforces the idea of what constitutes local, and there is nothing to stop you from using the same symbols more than once. With freedom comes responsibility.  Use the @tag attribute on an mrow , only. (Remember, you can have just one mrow .) The behavior is identical within an md or mdn . The value of the @tag attribute is a symbol name. The prefix d means double , and the prefix t means triple . So allowed values are  star, dstar, tstar  dagger, ddagger, tdagger  daggerdbl, ddaggerdbl, tdaggerdbl  hash, dhash, thash  maltese, dmaltese, tmaltese  Cross-references to these tagged equations happens in the usual way and should behave as expected. We test the double versions to make sure the symbols render properly in various output formats. Here are the local cross-references: , , , , . We test another farther away in , contrary to our advice above.    Commutative Diagrams  This diagram is authored by Tom Judson using the syntax of the AMS  latex  CD package. Inside of a <me> element start with \\begin{CD} . Remember to escape the less-than character. While this package is not as flexible as some generic drawing packages, it has the advantage of full support by MathJax, and thus the HTML version will be more accessible.    Line-Breaking after Mathematics  As of 2021-05-14, in HTML output the next sentence should just fill a full line across the page. We take active measures to bind the concluding period to the final bit of mathematics, the variable . The prevents a bad line break which could see the period begin a new line, all by itself. In the event that the line-breaking siutation improves, we could relax these measures. This testing is only relevant to HTML output, not latex output.  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx .    Fonts and Mathematics  This section is about testing types and sizes of fonts, not so much about using different typefaces. First, one long displayed equation, which is designed to be full-width for latex output when using defaults as of 2020-01-29 (commit defd4bffd462e7ea ).  Start paragraph. End paragraph.  The next paragraph has five ways to write the sine of , bracketed by plain text versions. This tests font size and the fonts employed. The raw source of this paragraph is (spread over two lines)  sin x | <m>\\sin x<\/m> | <m>\\text{sin}\\ x<\/m> | <m>\\mathrm{sin}\\ x<\/m> |  <m>\\text{sin}x<\/m> | <m>sin x<\/m> | sin x  The five ways, from good to bad,  The best way, using \\sin . Note the distance to the .  With a \\text{} macro.  With a \\mathrm{} macro. Not recommended for PreTeXt .  Without a space. Note that the previous two require explicit spacing.  No extra effort, so latex renders as a product of four variables.   sin x | | | | | | sin x  Finally a simple paragraph that places a text x next to a variable x .  wordxx xxword    Miscellaneous  In HTML output, a MathJax workaround for a Safari rendering bug was inserting extra spaces after textual subscripts and superscripts ( MathJax thread ). PreTeXt CSS now applies a correction. The following tests if the CSS fix is sufficient, and could be used to test the necessity of our fix in the future. Following is the original report, though NOT has been moved to a superscript: . There should not be anything to see in latex \/ PDF output. (2021-10-21)     Grouping Samples   While building or testing a rendering of PreTeXt, especially in HTML, it can be useful to see all the various elements that potentially create visual blocks in one place. So they are collected here.  We will omit content specific blocks like figures, images, tables, as those elements have significant stress testing of their own elsewhere.  Please add any similar elements that are created or that you discover are missing from this page.   A title  There are more <aside> es below, but here is a solor one.     Our goals  A minimal <objective> .   Stress test HTML themes  Locally, test objectives     Remark-like Blocks   A title  A minimal <remark> .    A title  A minimal <convention> .    A title  A minimal <note> .    A title  A minimal <observation> .    A title  A minimal <warning> .    A title  A minimal <insight> .     Example-like Blocks   A title  A minimal <example> .    A title  A structured <example> .    A structured <example> .   A <hint>  An <answer>  A <solution>   The <conclusion> .    A title  A minimal <question> .    A title  A minimal <problem> .    A title  A minimal <observation> .    A title  A minimal <warning> .    A title  A minimal <insight> .     Theorem-like Blocks   A title  A minimal <theorem> .    A title  A theorem with a proof.   The proof of the theorem.     A title  A minimal <corollary> .    A title  A minimal <lemma> .    A title  A minimal <algorithm> .    A title  A minimal <proposition> .    A title  A minimal <claim> .    A title  A minimal <fact> .    A title  A minimal <identity> .    A title  A stand-alone proof.     Axiom-like Blocks   A title  A minimal <axiom> .    A title  A minimal <conjecture> .    A title  A minimal <principle> .    A title  A minimal <heuristic> .    A title  A minimal <hypothesis> .    A title  A minimal <assumption> .     Definition-like Blocks   A title  A minimal <definition> .     Aside-like Blocks  Three <aside> s are below.   A title  A minimal <aside> .    A title  A minimal <biographical> .    A title  A minimal <biographical> .    A title  A minimal <historical> .     Computation-like Blocks   A title  A minimal <computation> .    A title  A minimal <technology> .    A title  A minimal <data> .     Project-like Blocks   A title  A minimal <project> .    A title  A minimal <activity> .    A title  A minimal <exploration> .    A title  A minimal <investigation> .     A minimal <assemblage> .    Wrap-up  A minimal <conclusion> .    A title  A final <aside> to test behavior at the end of a page. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     Further Reading   Specialized Subdivisions  In a longer work you might wish to have some references on a per-chapter basis, or similar. You can make a references subdivision anywhere to hold bibliographic items, and you can reference the items like any other item. For example, we can cite the article below , included an indication that a specific chapter may be relevant.    Exercises    No problem here, but the next two are in an exercise group with an introduction and a conclusion, along with an optional title. The two problems of the exercise group should be indented some to indicate the grouping.  N.B. An <exercisegroup> is meant to hold a collection of (short) exercises with common, shared, instructions. Do not use this structure to subdivide an <exercises> division, as you will eventually be disappointed. Instead, use the available, but under development as of 2019-11-02, <subexercises> , which requires a <title> .     Two Derivative Problems  exercise group two derivatives   In the next two problems compute the indicated derivative.   You could connect the image above with the exercises following as part of this introduction for the exercisegroup .     , . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line.  We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : .    derivative cosine   , .     Note that the previous two problems used very different notation for the function and the resulting derivative.     This isn't really an exercise, but an explanation that the next <exercisegroup> has a title and no <introduction> , which once resulted in some aberrant formatting in latex output.    Two More Derivative Problems   Some common instructions would go here in the <introduction>    , . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line.  We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : .     , .      Compute .     One of the few things you can place inside of mathematics is a fill-in blank. fill-in blank We demonstrate a few scenarios here. See details on syntax in the use is identical within mathematics.  Inside inline math (short, space for ):  Inside inline math (default, space for ):  Inside exponents and subscripts (each is space for the string 12 ). In this case, be sure to wrap your exponents and subscripts in braces, as would be good latex practice anyway:  Inside inline math (too long for this line probably, 40 characters long):  So use inside a displayed equation like this one.  Inside the second line of a multi-line display:  This fillin has the historical characters attribute for a fillin inside math: , which may be more convenient, but may not side properly in places like subscripts, superscripts, fractions, limits of integrals, and so on.       More Exercises    This is not a real exercise, we just want to explain that this is another subsection of exercises, which has two consecutive exercise groups.     Introduction to first exercise group.   Only exercise of first group.   Conclusion to first exercise group.    Introduction to second exercise group.   First exercise of second group.    Second exercise of second group.   Conclusion to second exercise group.    An <exercisegroup> can have a cols attribute taking a value from 2 6. Exercises will progress by row, in so many columns. On a small screen, the HTML exercises may reorganize into fewer columns.       Addition is associative.   First, add and to get , then add to arrive at .       Add seven to eight.            Addition is associative.    First, add and to get , then add to arrive at .   A simple argument.   And a bit more.        Add seven to eight.            Addition is associative.   First, add and to get , then add to arrive at .       Add seven to eight.            Addition is associative.   First, add and to get , then add to arrive at .       Add seven to eight.       This feature was designed with short drill exercises in mind. With long exercises, or exercises with long hints, answers, or solutions, there is a risk that the latex output will have bad page breaks in the vicinity (just before) such an exercise that occupies too much vertical space. Edit, rearrange, or use fewer columns to see if the situation improves.     Make a table and a graph for the function .                                   References  references within a section   These items are here to test basic formatting of references.   Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.   J. B. Conrey and D. W. Farmer  Mean values of -functions and symmetry  Internat. Math. Res. Notices  17  2000    Robert A. Beezer, A First Course in Linear Algebra , 3rd Edition, Congruent Press, 2012. An online, open-source A gratuitous footnote to test prior bug confusing this with a REMARK-LIKE <note> . offering.    H. Davenport  Multiplicative Number Theory  GTM  74  Springer-Verlag New York, NY  2000  xiv+177  A note may accompany a bibliographic item, such as saying the manuscript is under review. But it cannot contain any formatting.   Alexander Rosswell, Diffeomorphisms of Penciled Fiber Bundles , Mathematicians of America  2020 , 2  6 , 884 888.  , Diffeomorphisms of Penciled Fiber Bundles, Part 2 , Mathematicians of America  2021 , 3  4 , 102 103.   This is a conclusion, which has not been used very much in this sample. Did you see that the entry for has a short annotation? So you can make annotated bibliographies easily.      List Calisthenics   Lists, Generally  ordered list  list ordered  unordered list  list unordered  Use ol to make an ordered list, ordered list and ul to make an unordered (bulleted) list. In both cases, use li for each entry. If an entry contains more than one paragraph, then each must be wrapped in p . unordered list  list ordered  list unordered   This section contains nested lists, to demonstrate how they get assigned labels (numbering, symbols). But we begin with two simple lists, demonstrating an ordered list and an unordered list. See the end of section for an example of a description list. Note in the source the optional use of a paragraph ( p ) for the list items of the list of colors.   First.  Second Footnote in an unstructured list item .  Third.   Red One of our favorite colors  Green  Yellow  Purple   Next, we have a list with no customization and multiple levels to test the defaults. latex allows a maximum of four levels of ordered\/numbered lists, and a total of six levels if some unordered lists are mixed in. Note that to have nested lists you must structure your list items as paragraphs, since a list may only appear within a <p> element.   A title on a top-level item  Level 1, first.    Level 1, second.  Level 2, first.  Level 2, second.  Level 3, first.  Level 3, second.  Level 4, first.  Level 4, second.   Title on xref'ed list item  Level 4, third.    Level 3, third.     A title on a nested item  Level 2, third.     Level 1, third.   Items in ordered lists (only) may be be give an xml:id and then may be the target of an xref . We test three here, referencing down into the hierarchy above. Level 1, second: . Level 3, second: . Level 4, third: . Note that if a list item of an ordered list is contained within a list item of an unordered list, then its number will not be defined.  And now a four-level deep unordered list with the default labels supplied by PreTeXt (disc, circle, square, disc). Again, the defalt order for Markdown\/Jupyter (disc, square, circle, circle) is different than for latex and HTML (disc, circle, square, disc)   A title on a top-level item  Level 1, first.    Level 1, second.  Level 2, first.   Level 2, second.  Level 3, first.   Level 3, second.  Level 4, first.  Level 4, second.  Level 4, third.     A title on a nested item  Level 2, third.     Level 2, third.    Level 1, third.   And a total of six levels with a mix of ordered and unordered lists, the most that out-of-the-box- latex is able to handle.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.  Level 3, first.  Level 3, second.  Level 4, first.  Level 4, second.  Level 5, first.  Level 5, second.  Level 6, first.  Level 6, second.  Level 6, third.    Level 5, third.    Level 4, third.    Level 3, third.    Level 2, third.    Level 1, third.   Now, nested lists with the defaults replaced by custom choices. First, an ordered list, three deep, upper Roman numerals, then upper-case Latin, then more traditional Arabic numerals on the three elements of the third level. Note the adornments of the labels will not currently be rendered by WebKit -based browsers (such as Safari) when viewing HTML output.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.  Level 3, first.  Level 3, second.  Level 3, third.    Level 2, third.    Level 1, third.   A nested unordered list, with labels given as squares on the outer list and nothing (blank) on the inner lists.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.    Level 1, third.   A nested ordered list, to test intramural cross-references.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.    Level 1, third. With a cross-reference to second list item, .  Level 1, fourth. Whose number should not change when the knowl just prior is opened.   An ordered list may begin at zero by using a numeral zero in the label attribute, instead of numeral one.  First   Second  Uno  Dos  Tres    Third   The next definition is very poorly worded. It is meant to test leading off with a list (bad form), for which latex normally begins right after the heading.   Group  Group   group definition paragraph initial list  There is a binary operation, denoted .  The operation is associative.  There is an identity element, .  For every element , there is an element (the inverse), such that .   If these conditions are met for a set , then we say is a group .    Exercises and References are specialized subdivisions you can put anywhere. They are implemented as top-level lists, so should share behavior. For example, an exercise may have many parts and when expressed as a list, should have the expected labels.  Similarly, References may have lists in their annotations. Unlikely? But possible.  The next two subdivisions are an Exercises subdivision and a References subdivision, which have lists within an exercise and a bibliographic item (respectively).    List Spacing, I  This is a short list that ends a subsection, so can be used to address the necessary spacing. We also test two XML elements separated by a space (which should not go missing).  One item.  Two  ducks .  Three items. Plus a few more words to check that long entries in a two column list look good.  Four items.  Another long entry that simultaneously tests that long entries look good in a list, and also tests an odd number of entries in a two column list.     List Spacing, II  This is another short list that ends a subsection, so can be used to address the necessary spacing.  Uno item.  Dos items.  Tres item.  Quattro items.   And a paragraph after that list so that spacing can be checked.    List items containing only inline math   Testing list items containing only math  There are many places where it makes sense to have a list of mathematical terms, or possibly equations. For example, one might wish to provide a list of derivative formulas. With such lists, the author may wish to have display mathematics, but almost certainly they don't want it centered. One can work around this by using the latex  \\displaystyle command. However, it would be nice if a list item containing only math used display mode by default.     A list item containing some text in a paragraph, as well as some inline math: .   A list item with text and math , not in a paragraph.        math in lists   Now, a p that isn't in a list, followed by a list that's in a p .      A list item starting with some math, followed by text, all in a p           The above assemblage had some lists in it, just to see what will happen. While we're at it, we might try adding lists that are in a list .   A list of items, some of which contain math    A first list item, containing some text. The next list item will contain only math, with the m tag inline with the li tag.   A list item with text and math , not in a paragraph.    The next two list items will contain, respectively, a list item containing only math, where the math is on a new line, then the same again, but with two new lines, and a list item containing math within a p , first inline, and then after a line break.                 And now, a list in a paragraph.     A paragraph that begins with text, then some math: And now some more text. The next two list items contain:   Math only, inline.    Math only, with a newline.    Math only, but in a paragraph. Also the next item on this list has math, just to see what happens in a nested list.                  Inclusion of any text other than math will kill the automatic display style. For example, this would happen if one were to add punctuation after the math.    ,     List items can have titles. We try that here, along with testing list items structured with paragraphs.   With \\displaystyle added automatically     Two paragraphs      One paragraph, extra text  So,    Two elements (only)  latex      Difficult List Items  In we were careful about lone bits of math inside list items. The <cd> element is used with indentation, which is likely superfluous inside a list item that is already being indented. Here we test lone <cd> elements inside of list items in various configurations.  Unordered list, one-deep.    Foo Bar Foo  Bar Foo Bar     This list item is a long paragraph with a <cd> in the middle which should be indented some to indicate its participation in the paragraph.  Foo Bar Foo  Bar  Bar Foo Bar  Foo  This list item is a long paragraph with a <cd> in the middle which should be indented some to indicate its participation in the paragraph.     Foo Bar Foo  Bar  Bar Foo Bar  Foo      Intervening paragraph, to illuminate spacing at both the top and bottom of a list. Intervening paragraph, to illuminate spacing at both the top and bottom of a list. Intervening paragraph, to illuminate spacing at both the top and bottom of a list. Intervening paragraph, to illuminate spacing at top and bottom of a list.  Ordered lists, two-deep, mixed.   First item, outer level.    First inner item, cd only  Foo Bar Foo  Bar  Bar Foo Bar  Foo    Second inner item, a paragraph in a list item.    Third inner item, cd only  Foo Bar Foo  Foo Bar Foo  Bar Foo Bar        cd inside second item, outer level  Bar  Bar Foo Bar  Foo        Description Lists  Use dl to make a description list description list list description . Inside of those tags, use li for each entry. Then, use title to specify the term being described and p to specify the description.  A description list description list list description has a short term or phrase that is prominent, followed by a short description. It is modeled on the lists of similar structure in both latex and HTML. It makes for a nice medium-weight way to define terms, somewhere in-between the term tag which just makes a term prominent in a sentence, and a definition , which is set off, has a heading, a number, and a title. Do not try to manage the separation between the title and the description by employing punctuation (but you can include a question-mark or exclamation-point if necessary). For example, do not include a colon to the end of the title. This example is from Bob Plantz.   Central Processing Unit (CPU)  Controls most of the activities of the computer, performs the arithmetic and logical operations, and contains a small amount of very fast memory.    Memory  Provides storage for the instructions for the CPU and the data they manipulate.    Input\/Output (I\/O)  Communicates with the outside world and with mass storage devices ( , disks).    Bus!  A communication pathway with a protocol specifying exactly how the pathway is used. (The punctuation is just for testing.)     A geometric series. The formula is valid if .    Some presentations can be assisted by a hint from the author about the lengths of the titles. You can choose to provide a width attribute on a dl element with possible values narrow and medium . The value refers (somewhat confusingly) to the distance between the left margin and the description. The default is medium , which is illustrated above. Conversion to latex ignores the attribute. An example with narrow :   Red  The color of the sun at sunset.    Blue  The color of a clear sky. Also a synonym for depressed or sad , the title of a 1971 Joni Mitchell album (and more than a dozen other musical albums), the period of Picasso's work between 1901 and 1904, and much more!    Aqua  The color of shallow tropical waters. On a sunny day! (Testing footnotes in description lists for latex output.)    Math    Sorry, not a color but testing titles with math in them.    i before e except after c, unless it sounds like a as in neighbor and weigh  Get feisty about that weird counterfeit rule: seize the day and don't have a heifer, man.    Avocado  Avocado is the the color with hex code #568203 , and also the main ingredient in guacamole.    Magenta  Magenta is a color, and a character in Rocky Horror.    Zymurgist  A scientist who studies the chemical process of fermentation in brewing and distilling. Also the alphabetically last 9-letter word in the English language.    Byzantium  Byzantium is the the color with hex code #702963 , and also an ancient Greek city which later became known as Constantinople, and today is called Istanbul.    Convection  Circulating motion in a fluid.    Elementary  No literary detective ever said Elementary my dear Watson. In particular, Sherlock Holmes never said that.    Understand  Perceive the intended meaning of.    Washington  A state, a district, the man on the US $1 bill and on the US quarter. Did you ever notice that on the US dime, the value is stated as one dime ? But how is one to know that a dime is worth 10 cents?    Aquamarine  Aquamarine is a color, and a mineral.    Those who cannot remember the past are condemned to repeat it.  George Santayana wrote those words in 1905. A similar aphorism is misattributed to Winston Churchill. The idea is embodied in the 4th principle: PreTeXt respects the good design practices which have been developed over the past centuries.     The Riemann -function is defined by a Dirichlet series, valid for .    main() is a void function  A dl with width=\"narrow\" might be a useful way to give commentary on a program listing.      Named Lists  named list list named  A list can be wrapped with a <list> element, so that it earns a number, can be given a title and have an introduction and conclusion. Cross-references to individual list items get a bit involved as they are prefixed with the number of the list and then the number of the item, so conceivably you could get a number like 4.5.3:2.a.ii . The colon is used to indicate the transition from the number of the list within divisions and the numbers coming from the list hierarchy, since it has two small dots.   Colors of the Rainbow   Because the colors are always in the same order, an ordered list is natural here. The colors change continuously, but are often divided up into large ranges that human perception can easily distinguish.    Red  Orange  Yellow  Green  Blue  Indigo  Violet    So some people use the acronym ROY-G-BIV to remember this sequence.    This next list is used for testing cross-references to it. See .   A named list of targets   This is the introduction to this named list, which references an item within, via the hybrid text attribute: . At one time this paragraph was inadvertently centered that bug has been fixed.       A and i  A and ii  A and iii        B and a  B and b  B and c (target of some cross-references)        The next three cross-references point to a list item, just above. It is interesting because the list is named, hence numbered. The global reference uses the full number, while the local reference uses the number from within the list. The hybrid reference recognizes that the target is within the same named list, so the number can be shorter. An identical hybrid cross-reference appears within the <introduction> to this list, an immediately following, but outside the <list> .  Cross-reference within named list ( global ):  Cross-reference within named list ( hybrid ):  Cross-reference within named list ( local ):     C and bullet and 1  C and bullet and 2  C and bullet and 3     C and bullet  C and bullet       This is a paragraph just outside the preceding named list, which references an item within, via the hybrid text attribute: .  list This is a paragraph with three lists contained within it. For HTML output we have to inside-out the lists.  A one item ordered list.  In other words, the text before, after, and between, needs to each be encapsulated as an HTML p element of its own.  A one item unordered list.  Including definition lists.   Define Me  A one item definition list.   That's all!  A one item list, whose item is a paragraph with two contained ordered lists, separated by text.  Introductory text.  First item, first list.  Intermediate text.  First item, second list.  Concluding text.     Testing List Decompositions  A list in a paragraph is a construction in HTML that browsers try to correct, which leads to unpredictable results, so we have to decompose an author's paragraph with lists into a sequence of HTML paragraphs, interrupted by lists. This subsection is only relevant to HTML output, and only for testing. paragraph normal   This paragraph opens with an ordered list.  Testing the id, and other info that should be at the top of the paragraph.  Now the paragraph continues, and we have an index item here, so we can test cross-references back here. paragraph opens with list    List Column Testing  This is a list arranged into two columns with some intentional layout challenges. The math is too long to fit in one column and can't be wrapped - it reduces the number of columns in its row. The long text items can be wrapped and stay within their column.  One item.  Two  ducks .     Short item.  A long item that can be wrapped over multiple lines.  Four items.   Another long entry that simultaneously tests that long entries look good in a list, and also tests an odd number of entries in a two column list.     Exercises (with lists)    This exercise should have several parts, and labels should follow the defaults for second-level lists (since the exercise is numbered according to the top-level default).  Exercise 1, first part.  Exercise 1, second part.  Exercise 1, second part, first refinement.    Exercise 1, third part.        Table Alignment Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC     This exercise (a list item really) has a table first. Default latex aligns it vertically above the exercise number. Placement here tests correcting that alignment.     A small test of cross-references to subsidiary parts of exercises. Exercise 1, third part: . Exercise 1, second part, first refinement: .     References (with lists in Annotations)  Some book would be listed here.  Here is the annotation and an ordered list as part of that annotation.  Book 1, first part.  Book 1, second part.  Book 1, third part.        Table Calisthenics   That was a Sage cell just now, which has nothing to do with tables. But we needed someplace to test placement right after a division heading. Carry on.  A very minimal table, hence with left-justified cells, no borders. We do wrap the tabular element in a table element to get centering, numbering and a caption. Footnotes inside cells are tested here.   Some Colors    Red  Green Green can be a very sick looking color.  Yellow    Blue  White  Pink     Note that tables may be constructed using the latex Complex Table Editor tool online at latex-tables.com and then exported in PreTeXt syntax.  Tables can be used and abused many ways. We describe long division of polynomials by using vertical and horizontal borders on individual entries of a <tabular> . The division lines are slightly thicker than the subtraction lines. This is a good example of the typical abuse of tables for horizontal and vertical layout. At least we have called it a Figure, not a Table .   Polynomial Long Division                                                                 An example of aligning table cells' contents horizontally. See the source for comments.     Horizontal Alignment Example          1234567890  1234567890  1234567890  1234567890       [First  Second  Third  Fourth     A  B  C  D     1  2  3  4      Example from above, but now with horizontal rules, plus an extra row to test the bottom border. See the source for comments.    Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4      For a table without a caption, create a <tabular> and place it directly within the current division. This will allow control over the horizontal placment, but without a caption, there is no number, and the tabular cannot be cross-referenced.  One  Same example as before, but now with vertical rules. See the source for comments.   Vertical Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4       Progressively Thicker Rules Example        1111  2222  3333    aaaa  bbbb  cccc    AAAA  BBBB  CCCC      Column Span Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC     A list whose first item is a table. In latex output a \\leavevmode is necessary to keep this organized (item number, then table as content).    Table Alignment Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC       Example Environment with Leading Table    Column Spans, No col Elements, Nine Columns     1  2+3  4  5+6+7  8+9    1  2  3  4  5  6  7+8  9    1  2  3  4  5  6  7  8  9     This example tests several things. In latex output, figures, tables, listings and side-by-sides are floats whose placement can migrate, but we have tries to supress this behavior. However, a float that is the first item of an environment (like a theorem or an example) can still float to a position before its title. If that does not happen here, then our additional defenses are working.  This example also checks that the total number of columns is correctly computed from the first row, which features several colspan attributes.   A bare minimum table (one row with one cell) to test edge cases:   One entry table    One     Table cells with a fixed width where text wraps are known as paragraph cells . A cell will be created as a paragraph cell if and only if it has <p> children. And such cells should only have <p> children. The width of a paragraph cell is determined by a width attribute on the corresponding <col> (as a percentage). If the column has a non-paragraph cell with contents that are wider than the paragraph cells, results will be undesirable. There is presently no implementation for a paragraph cell that has a colspan greater than , although cells with colspan greater than that are above or below a paragraph cell will behave. Setting width on a <col> that has no paragraph cells may produce unexpected results. A valign for the parent <row> (or the ambient <tabular> ) can control vertical alignment (top, middle, or bottom). A paragraph cell's halign attribute (left, center, right, or justify) controls how the text is justfied. Cells inherit halign from <row> , <col> , and <tabular> in that order of preference. In a non-paragraph cell where halign='justify' , the horizontal alignment will match the behavior of halign='left' .   Time Units        Unit  Stands For  Definition  Roughly     second  the duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom  an extraneous paragraph just to demonstrate the inter-paragraph formatting.  the time it takes you to say the phrase differential calculus     minute  exactly seconds  how long it takes to microwave a full dinner plate from the refrigerator     hour  exactly seconds; exaclty minutes  the length of one episode of a premium cable television show     Table cells can have multiline content using <line> elements. This is not the same thing as a paragraph cell line breaking will happen precisely where the author tells it to. A <line> will not break, even on a narrow screen. If a cell uses a <line> , it must only use a sequence of <line> s and no other content. As with paragraph cells, you can use a valign attribute for the row.   Dr. Seuss lines     One Fish  Two Fish  Red Fish  Blue Fish    I am the Lorax.  I speak for the trees.  Self-referential:    Look at me!  Look at me!  Look at me NOW!  It is fun to have fun.  But you have  to know how.      This is a table torture test with many combinations of halign , valign , colspan , <p> children, and <line> children.   Table Torture Test                     Cell too wide     Lf md  Lef mid par cel  Rt md  Rig mid par cel  Cn md  Cen mid par cel  Js md  Jus mid par cel jus mid par cel     Colspan=2 lef mid with lines  Colspan=3 rig mid  Lines Between Par  Lines Between No Par  Par in row with lines     L t  Lef top par cel  R t  Rig top par cel  C t  Cen top par cel  J t  Jus top par cel jus top par cel     L b  Lef bot par cel  R b  Rig bot par cel  C b  Cen bot par cel  J b  Jus bot par cel jus bot par cel     Colspan=3 lef bot  Colspan=2 rig bot with lines  Lines Under Par  Lines Under No Par  Par in row with lines      And now a <sidebyside> with a <table> and a <tabular> to check that width is scaled appropriately. See Section to learn about <sidebyside> s.   Some text from the US Constitution       A1.S1  All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.  Should be 50% of 45% except perhaps on small screens.        A1.S2.C1  The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.  Should be 50% of 55% except perhaps on small screens.      Tables are formed in latex output with copious use of the \\multicolumn macro to override more global alignment settings, and to spread the content of one cell across several columns. However, sometimes latex 's special characters have behaved badly in this situation. So the table below, two items per row, is just designed for latex testing. But of course, it should still render fine in other formats. The three test cases are from , but without 50 alphabetic characters and 8 digits, which should not be problems in this context. In order to test the use of a percent sign ( % ) in a URL, we follow it by two hex digits, specifically, 58 , which is a way to represent the character X in a URL . The first column's entries are forced to be wrapped in a \\multicolumn by specifying their horizontal alignment. The second column's entries will not be wrapped in a \\multicolumn . So the two columns will look identical, other than the first having a left alignment, and the second has the default center alignment. (This table is known to render poorly in a Jupyter notebook. The cause is four dollar signs present in rows 1 and 3, and is explained in .)   Problematic Table Cells for latex    1  09az%-._~:\/?#[]@!$&'()*+,;=  09az%-._~:\/?#[]@!$&'()*+,;=    2  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=    3       Now, the same table repeatedly, but with different headers. No care has been taken with alignment or rules, which could improve how these look.   No Headers    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Two Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Vertical Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Vertical Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Two Vertical Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header, with Rules    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header, Multiline, with Rules    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     The next table has a progression of thicker rules in the header, plus a progression of thicker rules across the columns. For testing, not for aesthetics.   Two Row Header, Many Rules        State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     We now finish this section with some long tables. Ones that will not fit on a single printed page. So this is only of interest when producing this sample article as a PDF . First a naked tabular, which should force a new page to start, and then still overrun the end of the page.    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Now the same <tabular> , but within a <table> . Behavior should be similar, a new page and then it overruns the bottom of the page.   A Lot of Colors    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink     When you wish to allow a <tabular> to split itself at a page break, you can add the attribute break with the value yes . Certainly this will control a <table> or <tabular> which is longer than a page, but will also allow a shorter one to break. This might useful in a draft stage before undertaking page-fitting.  Here is the long <tabular> again, but with the break attribute set to yes .    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Here is the long <table> again, but with the break attribute set to yes on the tabular .   A Lot of Colors, Breaking    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink     This device is not ideal, as some features of tables are not behaving as expected. More precisely, we switch from the standard latex  tabular environment to the longtable environment from the package of the same name when table-breaking is requested. So there may be some undesirable interaction with other packages. For one, full-width horizontal rules seem to become as wide as the page (rather than as wide as the tabular). The following table is repeated but as a breakable <tabular> . The longtable package documentation suggests it accomodates the array package, but it also seems to make a variety of redefinitions. Furthermore, a panel of a side-by-side cannot be a breakable tabular, or a latex compilation error occurs.   Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4      Here is a consecutive pair of bare  <tabular> to test vertical space between them.                                    The longtable package allows for headers and footers indicating continued tables. A possible enhancement is to support this feature in the case of a long table.    Interactive Coding   More interactive components, just for testing, no commentary.    ActiveCode   ActiveCode, Python program.    An interactive Python program, using Runestone   print(\"Hello, World!\")     An interactive Python program without codelens.   print(\"Hello, World!\")      CodeLens   A steppable Python program.    A Python program, stepable with CodeLens   print('Hello, World!')      Activity with An ActiveCode   Something to do with ActiveCode program.    Activity Coding Exercise   Similar to above, but now as a complete Python program inside an <activity> . This demonstrates the possibility to use any project-like block ( <project> , <activity> , <exploration> , <investigation> ), but not in the case when structured with <task> .    for i in range(10): print(i)   We're still not really sure.     YouTube  Video, observable on a Runestone server.      Cross-Referencing  Cross-references cross-reference are easy, since that is a key reason for having a highly structured document. Here is a useful feature if you elect to use it. Any <xref> will know what it points to, so you can let it provide the naming part of the cross-reference text. You can turn this on globally with the command-line parameter autoname autoname set to 'yes' . If you do that, you will see most of the names in this document doubled, since the names are written into the source already in most places outside of this section.  Moreover, the names themselves will change with the use of the one language dependent file. And another bonus is that with an autoname, you automatically get a non-breaking space between the name and the reference. The autoname switch makes no sense for provisional cross-references, since there is no information about what they point to.  Here is a reference that has no indication of its type in the source: . So by default you will just see a number that you can click on. If you use the text=\"type-global\" switch then you should see Theorem prepended. Note that if you changed the theorem to a lemma, then that change would be reflected here automatically when autonaming is in effect.  If you set the autonaming behavior globally, or accept the default behavior, there will still be instances where you want to override that choice. Simple: just say text=\"type-global\" or text=\"global\" as part of the xref . Each example below should look the same each time this article is processed, no matter how the global autoname is set.  No name ever:  Always named:   You might also wish to provide a prefix to a cross-reference and have it incorporated into the text of what you would click on in an electronic version. So if you make an xref with some content, then that content will prefix the cross-reference within the clickable\/pokeable text and be attached with a non-breaking space. This xref content totally overrides any prefix that might happen otherwise. So the name of an item (  corollary ) could be replaced, and if you make a cross-reference with custom text, that will be the clickable also. An example:  A grand result: Major Corollary  A grand result: a nice corollary   Suppose you want to reference two theorems, so you might want to say something like Theorems 4.6 and 5.2. With global autonaming on, you can override the first Theorem by providing the content Theorems on the first xref and text=\"global\" on the second xref . (With global autonaming off, you will also get what you want\/expect.) Here is the test, which should look correct no matter what the global switch is: Sections and . (But notice that it is up to you to be certain the types of these targets do not change without you changing the content of the first xref . The author-tools mode and careful choices of xml:id strings can help avoid this trap.)  If you set the value of text to title , then the title you assigned to the theorem will be used as the link for a cross-reference. Here is a the final example, which refers to a fundamental theorem by name .  Cross-references to exercises with hard-coded numbers should respect the supplied number. Exercise should reference problem 42a.  Here we form a list to test pointing at various structures. Each of the following should open a knowl in the HTML version, otherwise it will be a traditional hyperlink (if possible). Note that if a knowl opens, there will always be an in-context link which will take you to the actual location, should you have wished instead to just go there.  Footnotes: Fermat allusion at .  Citations: Judson's AATA with annotation at  Citations: Judson's AATA with autoname that should have zero effect  Citations: In a <references> division inside an appendix  Note: just the annotation of previous citation at  Examples: Mystery derivative at , or a question at .  Definition-like: A mathematical statement with no proof .  A numbered Note:  A link to a proposition element, while this document has globally renamed proposition s as Conundrum s, so this link should use the new name:  Theorems: Fundamental Theorem of Calculus, with proof at  Proof: of second version of FTC at  Figures: A plot with a derivative at .  A Figure within a side-by-side panel, with its own number:  A Table within a side-by-side panel, with a subnumber:  A Figure, containing a side-by-side with two sub-captioned images:  Display Mathematics: single, first with no name: . Then with an autoname: .  Display Mathematics: multi-row, first with no name: . Then with an autoname: . And two, with a plural form: Equations and .  You can cross-reference The Fundamental Theorem of Calculus via custom text of your choice.  Display mathematics: an equation with local tag, which should not be used so very far away: .  You can author a cross-reference to a displayed equation with no number, but it will not be very satisfying. You should get a warning if you try.  Exercises (divisional), a range, with plural form provided to override autonaming: Exercises .  Exercise (inline): with enclosed hint at  A group of two exercises, with introduction, conclusion:  Solution: An autonamed portion of an exercise:  Parts of a complicated exercise:   A subsidary part of an exercise:   knowl nested Three cross-references to individual exercises, but due to their location, they should have different type names in the cross-reference: in an <exercises> division, ; in the narrative, ; and in a <worksheet> , .  An item buried in nested ordered lists:  List item as knowls in HTML, including nested lists: ,  A titled list:  List item inside a named list, second color in rainbow list:  Second color in rainbow list, but now as a local reference:  An item in ordered list, but contained in an unordered list, hence without a number, so a cross-reference by number would be ambiguous. So we use a cross-reference which relies on custom text: No Number List Item  Several examples of hybrid cross-references to list items within a named list can be found in, and adjacent to, .  An assemblage, which never has a number. A cross-reference now requires content in the xref element, with text='custom' : text to xref an assemblage  A cross-reference to a list item in a description list, which has a title, but never a number: . Note that you need to include the attribute text=\"title\" even if that is obvious from the situation. This requirement may be relaxed in a future refactoring of the cross-reference system.  A very similar cross-reference to the previous one, but testing how final punctuation of titles is handled: .  A cross-reference to a paragraphs subdivision, which never has a number (so comments above about description list items and titles applies here too):  A case within the proof of :  A cross-reference to a description list item with a title containing math:  A cross-reference to an aside, by title necessarily, and with some formatting in the title:  A cross-reference to an objectives block, with an autoname. This demonstrates the number of the Objectives here, which is not shown in the original version since it is implicit:  A cross-reference to an individual objective. This is authored as a list item, but displayed as an objective (singular) via an autoname:  A cross-reference to the top-level element ( book ) will point to a summary page similar to a Table of Contents in HTML. For LaTeX output it will behave similarly, unless there is no Table of Contents, then it will go to the main title page: ToC or Title  Cross-references inside quotations previously lost track of their target, so this tests correcting that, not so much the cross-reference itself:  An activity with full details following:  A type-global cross-reference to a second-level task within a project: , the encompassing project : , and a local reference .  A subcaptioned named list:  This opens a knowl for an example . It has a solution, which is orginally presented as a hidden knowl. But since this version is a duplicate, the knowl for the solution is a file version, not an embedded version, and hence free from duplicating any unique identifaction like an HTML id. So we test its styling and function here:  A cross-reference to a poem, where we need to use a title for the link text, since a poem is not numbered:  A cross-reference to a <references> division in a subsection, which should not be numbered where born, but which has the number of its parent division in a cross-reference: . And a cross-reference to a <references> division, which is the main bibliography in the back matter, and so is not numbered where born, nor in a cross-reference (which we must accomplish via it's title): .  A cross-reference to a <solutions> division in a subsection, which should not be numbered where born, but which has the number of its parent division in a cross-reference: . And a cross-reference to a <solutions> division, which should appear as an appendix both where born and as a cross-reference: .  A cross-reference to an <exercises> division in a subsection, which is the only such division in that subsection and therefore should not be numbered where born, but which has the number of its parent division in a cross-reference: . In contrast we cross-reference an <exercises> division which is one of two inside a section, and therefore is numbered, when born and when cross-referenced, in continuity with the preceding subsections: . Also an <exercise> within an <exercises> which should have a cross-reference employing the number of the containing (unstructured) <section> : which is in which is in the (unstructured) .  A custom cross-reference: Custom   Cross-reference to <instructions> of an <interactive> :  A hyperlink to a <subexercises> via its required title (no number is assigned):  You can request the text to be a type, then a number, then a title:  Asking for the text to be a type, then a number, then a title, when there is no title, is not a problem:     Cross-references to structural elements of the document will always take you there directly, since even in the HTML version these parts never get realized as knowls. You will find such links sprinkled through this document, but here is an autonamed link to a subsubsection: .  Cross-references can be built into display mathematics, but they can only point to one item ( a comma-delimited list of targets is not supported). Examples below should test the distinction in HTML output between a link that opens a knowl and a link that jumps to a larger chunk of content. Notice that display mathematics is entirely latex syntax, no matter which output format you create. So if you do not use the autoname facility, you need to wrap non-math text in \\text{} and perhaps use a tilde ( ~ ) as a non-breaking space (examine the source of this article).  bug in-context broken  Variations on the above include multiple xml:id as the value of a single ref attribute on an xref , in the form of a comma-separated list. In this case, only the numbers are links\/knowls and the autonaming attribute is based on the type of the first ref . Wrapping with brackets (citations) or parentheses (equations) is also controlled by the type of the first ref . And the detail attribute for a bibliographic reference is silently ignored. So you can do silly things like have a reference to a theorem within a list of equation numbers and there will be no error message. Handle with care. Spaces after commas in the list will migrate to the output as spaces, so if you don't have any, you won't get any.    Four theorems, with spaces, autonamed:  Two equations, no spaces, autonamed:  Two bibliographic items, no autoname:    If you have a long list of items (such as homework exercises, not in an exercisegroup , or perhaps several chapters), you can get a cross-reference that prints as a range by using xref with two attributes first and last , which may contain a single xml:id each. As with multiple references, first will control autonaming and other features.  A range of exercises, autonamed (this range appears out-of-order since the two exercise are numbered under two different schemes):  A range of equations:  A system of equations, given as range from first to last:  A range of sections, hand-named to be plural: Sections  A range of bibliographic items:    The url url element may be used to link to a data file, either externally, or internally, if you want to make such an object available to a reader. reference external A good example use case is a spreadsheet that might be part of an exercise, or contain data relevant to some discussion. First let us suppose the data resides somewhere on the Internet, then just use the complete address. Here is one from Microsoft: Sample Excel Spreadsheet .  For a link like the previous one, you might want to provide advice appropriate for your audience about using a context menu to download a file, or how to configure helper\/viewer applications.    You can also provide a file yourself, but now it is your obligation to distribute the file with your document ( HTML , PDF , ) and provide a relative link. This creates some complications, such as making sure an electronic PDF has the associated file in the same place relative to the PDF file. Of course, if you make a print PDF, this becomes impossible. Here is a test example anyway, which is highly likely to be broken in a PDF (including at the PreTeXt project site) unless you build this example on your own computer, locally. Here is a template from the Apache OpenOffice project, provided via the Public Documentation License (PDL): Running Statistics Template .  The next four paragraphs are each a single <dataurl> element. Explore the source and the output from different conversions. Strictly for testing as of 2022-11-04.  Foo Sample Excel Spreadsheet Bar  Foo Runners Template Bar  Foo Sample Excel Spreadsheet Bar  Foo Runners Template Bar  Testing of output positioning for xref's that are inside containers:   Self-referential Xref In a table    A  B  C  D     B  C  D      Xref Inside MathJAX      Now we have two xref's to that same target that has a runestone component. Only the first one clicked should try to render the runestone.    Internationalization  internationalization  Supporting a multitude of possible characters, across many languages and across many output formats can be a challenge. One of our goals is to make this much easier for authors. Fortunately, the Unicode standard has led to improvements from the 7-bit ASCII standard of old.   Unicode Characters for HTML Output  First, we discuss HTML output. If you include Unicode Unicode characters in your PreTeXt source, they should survive just fine en route to a web browser or e-reader. Here are the caveats for HTML output:  So that you can continue to get the best results with print and PDF output, use available empty elements for obscure characters, even if targeting HTML output, before resorting to a Unicode character. For example, use <copyright\/> for the copyright symbol in text before resorting to the Unicode character U+00A9 . It is a bit more work, but you will get better results with other conversions, even if you initially are only fascinated by HTML .  How you actually enter Unicode characters into your source file is dependent on your editor and operating system, and is therefore outside the scope of our documentation. You can cut-and-paste characters and text from the source of our examples for initial testing and experimentation.  Always, always identify your source as having Unicode characters by including the incantation <?xml version=\"1.0\" encoding=\"UTF-8\" ?> as the first line of your source file. (You may be able to accurately cut-and-paste this version here. But if the copy has non-standard characters in it, go back to the top of this source file for a copy.)  Alan Wood’s Unicode Resources has a plethora of samples of various groups of Unicode characters. If you, or your readers, are missing characters in a web browser, this is a good place to start testing the local setup.     Characters in latex , PDF, print  The situation for latex is a bit more complicated, since tex pre-dates Unicode's widespread adoption.  This sample article is intended to work well, out-of-the-box, for authors just starting with PreTeXt . So we only include here examples that we know are likely to convert to PDF without any errors. For more extensive examples and experiments, we provide the sample document examples\/fonts\/fonts-and-characters.xml , so be aware of that example as you look to see what is possible.  Similarly, you should be able to process this sample article successfully with various latex engines. We test regularly with pdflatex and xelatex and provide online sample PDF output of this document processed by pdflatex . In principle, you should be able to use latex (to produce a DVI), and possibly other (unsupported) engines, such as lualatex .  Once you get beyond the Latin alphabet, with accents common in Western Europe and the Western Hemisphere, you will almost assuredly need to restrict your attention to producing PDF output with the xelatex engine. This is discussed and tested in examples\/fonts\/fonts-and-characters.xml .    Basic Latin, U+0000 U+007F  Unicode uses multiple 8-bit bytes to represent characters, and these are typically expressed in hexadecimal (base 16) notation. Using just a single byte, we can get 256 values, and the first 128 (hex 00 to 7F ) are the usual Latin characters with some values used as control codes. These 95 characters are the most basic, and will all render using pdflatex or xelatex with no special setup (and will render easily in HTML). U+0000 to U+001F are control codes and not used here. U+007F is also a control code and so is excluded, while U+0020 is a space, so appears invisible in the table. In the source we have authored each character by its escaped version using its Unicode number (in hexadecimal). So, for example, capital-B is authored as &#x0042; .      Basic Latin, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~       Latin-1 Supplement, U+0080 U+00FF  Now we are interested in the next 128 possible bytes, (hex 80 to FF ). The first 32 are again control codes and U+00A0 is a non-breaking space, so is invisible, while U+00AD is a soft hyphen (which we have not implemented and so is excluded). We have taken care to see that the remainder will render using pdflatex or xelatex with no special setup (and HTML). In the source we have authored each character by its escaped version using its Unicode number (in hexadecimal). So, for example, a copyright symbol is authored as &#x00A9; .      Latin-1 Supplement, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_   ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ      Monospace, Basic Latin and Latin-1 Supplement, U+0000 U+00FF  A monospace font is critical for samples of keyboard input and to distinguish exact technical input from running commentary. We list here all of the reasonable characters from the first 256 Unicode code points. (We skip the same 65 control characters from above, and the soft hyphen.) These should all render fine in HTML and when processed with xelatex , however our focus with this sample article for PDF output is the capabilities when processed with pdflatex . First, characters from U+0000 U+007F .     Basic Latin, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~     Note that the single and double quotes are upright and dumb, not curly and smart: ' \" ' \" ' \" . And a backtick is a backtick: ` ` ` . The zero is distinguished from the capital oh : 0 O 0 O 0 O . And the numeral one is slightly different from the lower-case ell : 1 l 1 l 1 l . The hyphen should be short and not expanded into some other kind of dash: - - - . These characters should all cut\/paste out of a PDF into a text editor with no conversion to other characters.  Now the remaining characters from U+0080 U+00FF . The program tag is implemented in latex via the listing package and these characters require ad-hoc replacements for processing by pdflatex . (You can see the replacements in the preamble of the latex source for this document.) The replacement mechanism provided by the listing package will cause the characters below to produce a latex compilation error if processed by pdflatex and in a table cell in certain situations (which we have avoided in the table below). The only workaround in this case is to switch to xelatex .      Latin-1 Supplement, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_  ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ    The pre tag is implemented in latex with the fancyvrb package. You can compare results here with the table above, lines here are rows above.      ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬ ® ¯  ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿  À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï  Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß  à á â ã ä å æ ç è é ê ë ì í î ï  ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ   The console tag is also implemented with fancyvrb , with adjustments for the input lines. It will not look like it, but these are 8 such inputs, with similar results to above, but now bolded.   ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬ ® ¯  ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿  À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï  Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß  à á â ã ä å æ ç è é ê ë ì í î ï  ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ   We take care to render the U+0080 U+00FF characters in Sage cells. This would allow some flexibility in comments and strings employed. The following is just a test of these characters in the input and output of a sage element. This is not functional code.    The table below has a single column, and each cell of the table has a string of 10 characters inside a c element. It is meant to test if the font is monospace in this situation.   Alignment Test   0123456789  9876543210  iiiiiiiiii  mmmmmmmmmm    Again, more examples and more thorough explanations can be found in the sample: examples\/fonts\/fonts-and-characters.xml . Be aware that the nature of the more advanced sample is that it will likely produce many errors when processed with pdflatex . Adding -interaction batchmode or -interaction nonstopmode to the pdflatex command-line will sometimes be less painless than acknowledging each error. The more advanced sample will perform well when processed with xelatex .    Pre-Formatted Text  In Sage, if you wanted to build a matrix matrix , then you would use the matrix() constructor. Here is the matrix of second partials of , as you would enter it in Sage. Notice that SR is the ring of symbolic expressions, Symbolic Ring .  var('x', 'y') J = matrix(SR, [ [6*x + 16*y^3, 48*x*y^2], [48*x*y^2, 48*x^2*y + 12*y^2] ])  That accomplished, Sage will easily and naturally provide a latex representation of the matrix with the command latex(J) .  \\left(\\begin{array}{rr} 16 \\, y^{3} + 6 \\, x & -48 \\, x y^{2} \\\\ 48 \\, x y^{2} & 48 \\, x^{2} y + 12 \\, y^{2} \\end{array}\\right)  The pre element surrounds text that should be preserved verbatim. It is like a special kind of paragraph, and can be used almost everywhere that a paragraph can be used. The realization of preformatted text should be robust enough that it can be cut from documents and pasted without any substitutions of fancier Unicode characters for generic ASCII characters. Try the minus sign on the above to see if it does not become a dash, or the single quotes on the Sage variables.  For Sage input code, the first non-whitespace character sets the left margin, since legitimate Python code has no subsequent lines outdented. For pre-formatted code, the line with the least whitespace leading the line will determine the left margin. If preserving indentation is important, do not mix spaces and tabs. For syntax highlighting of text representing computer programs, or parts of them, see Section . Examine the source of the following example to help understand this paragraph.  A normal line An indented line An outdented line  Snippets should also be robust for cut\/paste operations. For example, you should not get curly  smart quote marks in verbatim text: this should have \"dumb\" quote marks . Here are a few characters that should migrate through latex to a PDF unmolested: '\"----\"'  If you write a very long snippet of inline code (i.e. within a <c> element) it can impinge on the right margin, since very long words will not hypenate, unless you have a dash\/hypen. Such as when you use words like pneumonoultramicroscopicsilicovolcanoconiosis, parastratiosphecomyia stratiosphecomyioides, floccinaucinihilipilification, or subdermatoglyphic. For output in LaTeX we get line-breaking, and perhaps word-spacing, but we do not get hyphenation and the font is fixed-width. So not always perfect. Consider other options like <cd> or <pre> below.  An intermediate type of verbatim text can be accomplished with the <cd> tag, short for code display. It allows for larger chunks of verbatim text to show up in the middle of a paragraph, but with some vertical space above and below, and centered between the margins. It can be authored as a single line or if you wish to have multiple lines  there is the <cline> tag  meant to model the line tag  and short for \"code line\"  and you may even  use a single cline  if you like to have your source closely model the visual look of the output.  With the showspaces attribute of <cd> set to all there will be a visual indication of every space character, which is nice if indentation is critical. For example,  there is the <cline> tag  meant to model the line tag  and short for \"code line\"  and as single line authored as a single line that is not structured with <cline> elements.  The <pre> tag is meant for use outside of paragraphs, but is otherwise very similar. The source may also be structured as a sequence of <cline> as in the next example, recycling content from above.   If you write a very long snippet of inline code (i.e. within  a <c> element) it can impinge on the right margin, since  very long words will not hypenate, unless you have a dash\/hypen.  Such as when you use words like  pneumonoultramicroscopicsilicovolcanoconiosis,  parastratiosphecomyia stratiosphecomyioides,  floccinaucinihilipilification, or subdermatoglyphic. For output  in LaTeX we get line-breaking, and perhaps word-spacing, but we  do not get hyphenation and the font is fixed-width. So not always  perfect. Consider other options like <cd> or <pre> below.   We use a Unicode right arrow (Unicode Character 'RIGHTWARDS ARROW', U+2192) to sometimes indicate the truncation of long lines in a text file. It is available in our usual monospace font for latex \/PDF, but we include a use here in order to make certain that is always the case. Here: → .    Program Listings (with code in the title)  Sage cells can be used for Python examples, but Sage uses a mild amount of pre-parsing, so that might not be a wise decision, especially in instructional settings. We might implement Skulpt or Brython (in-browser Python) or the Python language argument to the Sage Cell Server. To see examples of authoring Sage cells, have a look at Section .  In the meantime, program listings, listing program listing especially with syntax highlighting, is useful all by itself. The R language might not be a bad stand-in for pseudo-code, as it supports assignment with a left arrow and has fairly generic procedural syntax for control structures and data structures. Or maybe Pascal would be a good choice? Here is an example of R. Note in the source that the entire block of code is wrapped in a CDATA section due to the four left angle brackets. We do not recommend this technique for isolated problem characters, but it is a life-saver for situations like the XSLT code just following.      n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means   And some self-referential XSL:   <xsl:template match=\"biblio\" mode=\"number\"> <xsl:apply-templates select=\".\" mode=\"structural-number\"\/> <xsl:text>.<\/xsl:text> <xsl:number from=\"references\" level=\"any\" count=\"biblio\"\/> <\/xsl:template>  Matlab is a commercial language for mathematics, while Octave in an open source version. The language values of matlab and octave are somewhat interchangeable. Following is a very slighlty edited version of an example from 50 Basic Examples for Matlab .    a = [0:0.5:5]; % A Matlab comment here b = 2*a.^2 + 3*a -5; c = 1.2*a.^2+4*a-3; subplot(1,2,1) plot(a,b,'-or','MarkerFaceColor','g','LineWidth',2) xlabel('X'); ylabel('Y'); legend('Curve ','Location','NorthWest') subplot(1,2,2) plot(a,c,'--ok','MarkerFaceColor','c','LineWidth',2) xlabel('X'); ylabel('Y'); legend('Curve 2','Location','NorthWest')   You can write made-up pseudo-code, but you might explain to a reader what your symbols all mean. This routine takes the marix to reduced row-echelon form. Note that with no language specified, there is no special formatting or use of color. Note in the source the use of escaped characters for the three less-than symbols.   input m, n and A r := 0 for j := 1 to n i := r+1 while i <= m and A[i,j] == 0 i := i+1 if i < m+1 r := r+1 swap rows i and r of A (row op 1) scale A[r,j] to a leading 1 (row op 2) for k := 1 to m, k <> r make A[k,j] zero (row op 3, employing row r) output r and A   Look in the pretext-common.xsl file to see the strings to use to identify languages. Always all-lowercase, no symbols, no punctuation.  Note that the above examples all have slightly different widths (theser are very evident in print with the frames). As 2-D atomic objects, to place them in the narrative requires the layout features of a sidebyside element. Then width and\/or margin attributes will influence the width of the panel.  A program may also be nested inside a listing , which behaves similar to a figure . You can provide a caption , and the listing will be numbered along with tables and figures. This then makes it possible to cross-reference the listing, such as . It also removes the requirement of wrapping the program in a sidebyside . For technical reasons, the three examples above will not split across a page break in PDF output, but the placement inside a listing will allow splits, as you should see in at least one example following.   C Version of Hello, World!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    A <program> may include line numbers.   A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    A <program> may also include highlighted lines.   A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    Although a program should have a <code> element surrounding its code, we attempt to provide one when it is missing. This next sample tests that and intentionally has no leading or trailing newline inside the program.  print(\"Hello world\")  If you are discussing algorithms in the abstract (or even concretely), you can set them off like a theorem, with a number, a title and a target for cross-references. Sometimes you claim an algorithm produces something in particular, or has certain properties, such as a theoretical run time, so a proof may be included. See the discussion just preceding about (limited) options for pseudo-code.   Sieve of Eratosthenes   On input of a positive integer n this algorithm will compute all the prime numbers up to, and including, n . It was named for Eratosthenes of Cyrene ( 276 BC 195\/194 BC) by Nicomachus ( 60 120 CE) in Introduction to Arithmetic . ( Wikipedia , 2015)  Input: n  Form the list of all integers from 2 to n  Set p = 2  While p < sqrt(n)  If present, remove from the list multiples 2p, 3p, ...  If p is now the last element of the list, stop  Otherwise, set p to the element of the list immediately after current p    Output: the remaining elements of the list     Any element removed is a non-trivial product of two integers and hence composite. So no prime is is ever removed from the list.  Each composite number is a multiple of some prime, and since no prime is ever removed, each composite will be removed. Hence the removed elements are precisely the set of composite numbers in the list and thus the remainder are precisely the primes on the list.    If you are writing about system-level software, you may need to write numbers in hexadecimal or binary. Here we use a numbered, displayed equation (mathematics) and latex macros such as \\texttt for a monospace text font, and \\; for spacing\/grouping the bits of the binary number. If you use these constructions repeatedly, then some latex macros might be useful. It might also be beneficial for us to add some PreTeXt markup for such numbers used in a paragraph send us a feature request.    This is a spurious theorem to break up the run of consecutive listing so we might test the effect.    And this is a spurious paragraph to prove that the theorem beforehand, and the proof following, are distinct from one another.   This is a proof that is authored detached. It is not associated with the theorem above in a way other than simply following it.   A specialized version of a program listing is an interactive command\/response session at a command-line, where differing fonts are used to differentiate the system prompt, the user's commands, and the system's reaction. A console session may be used by itself inside a sidebyside , or it can be wrapped in a listing to get a number and a caption. As elsewhere, you will need to escape ampersands and angle brackets (such as if you have a command using redirection), using &amp; , &lt; , and &gt; in your source.   Console Session: int and float   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     Here is the plain version, some layout control. We simply place a small margin on the left (at 4% width).   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    If your console input exceeds more than one line, you can author it across several lines and your choice of line breaks will be reflected in the rendering. You can decide to indent lines after the first one for clarity, if desired. You can also decide if your audience needs line-continuation characters or not.   Console Session: int and float (multi-line input)   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     A <console> may specify a continuation symbol, as a prefix on every line but the first.   for x in range(0:20): print(x) print(\"Excellent!\")  for x in range(0:20): print(x) print(\"Excellent!\")           Notice in the HTML version of the above example that when you highlight all, or a portion, of the listing for a cut-and-paste that the prompts are not included.  The next listing is just absurdity, to check various characters from latex that are otherwise employed by the code supporting consoles, and some Latin-1 characters. We test each in a prompt, input, and output. We use (* and *) as sequences used to escape embedded latex commands, so we test those also.   Console Session: problematic latex characters   A backslash \\ here  A backslash \\ here  A begin group { here  A begin group { here  An end group } here  An end group } here  An open escape sequence (* here  An open escape sequence (* here  An end escape sequence *) here  An end escape sequence *) here  Some quotation marks ` ' \" here  Some quotation marks ` ' \" here  The rest & % $ # _ ~ ^ of LaTeX  The rest & % $ # _ ~ ^ of LaTeX  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß    We conclude this section with a longer example of a program listing, an assembly language program from Bob Plantz, included to test a listing breaking across pages in PDF output.   A longer program listing   @ structPass2.s @ Allocates two structs and assigns a value to each field @ in each struct, then displays the values. @ Bob Plantz - 6 July 2016 @ Constants for assembler .include \"theTag_struct.s\" @ theTag struct defs. .equ y,-28 @ y struct .equ x,-16 @ x struct .equ locals,28 @ space for the structs @ Constant program data .section .rodata .align 2 displayX: .asciz \"x fields:\\n\" displayY: .asciz \"y fields:\\n\" dispAChar: .asciz \" aChar = \" dispAnInt: .asciz \" anInt = \" dispOtherChar: .asciz \" anotherChar = \" @ The program .text .align 2 .global main .type main, %function main: stmfd sp!, {r4, fp, lr} @ save caller's info add fp, sp, #8 @ our frame pointer sub sp, sp, #locals @ for the structs @ fill the x struct add r0, fp, #x @ address of x struct mov r1, #'1 mov r2, #456 mov r3, #'2 bl loadStruct @ fill the y struct add r0, fp, #y @ address of y struct mov r1, #'a mov r2, #123 mov r3, #'b bl loadStruct @ display x struct add r4, fp, #x @ address of x struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine @ display y struct add r4, fp, #y @ address of y struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine mov r0, #0 @ return 0; sub sp, fp, #8 @ restore sp ldmfd sp!, {r4, fp, pc} @ restore and return .align 2 @ addresses of messages displayXaddr: .word displayX displayYaddr: .word displayY dispACharAddr: .word dispAChar dispAnIntAddr: .word dispAnInt dispOtherCharAddr: .word dispOtherChar      Units of Measure  Units of measure can be given xml treatment too with the quantity element. In latex , the siunitx siunitx package package siunitx units package is loaded to achive unit handling. Since that package only offers SI units, some other common units will be added by PreTeXt in the preamble. In HTML, the capabilities of siunitx are simulated, weakly. Note that at present, you should not attempt to use the quantity element within a math environment.  The value of gravitational constant is 9.8 . Force is measured in , also known as one . A quantity with rather ridiculous units is 23 . One is the same as . You can have a unitless quantity, like 42 , which may help with consistency between such numbers and units in the latex output. Some non-SI units are available, such as the absurd . The latex command \\pi is recognized within mag in conversions to HTML, which is consistent with the behavior with a conversion to latex , for example there are  2\\pi   in a full circle. This is a similar quantity with multiple occurences of \\pi to test a particular template used for HTML output. It is not meant to make any sense:  21\\pi45\\pi234\\pi890   .  For a full list of the allowed units and prefixes, see pretext-units.xsl . If you have a need for more units, they need to be added to pretext-units.xsl in the section that deals with units which are not part of siunitx by default. Note that the mag element should come first, followed by the unit element, followed by the per element.    Side-By-Side Panels   Introduction  The flow of a page is almost universally top-to-bottom. But at times you would like to go across a page, perhaps to compare items (identical content in two different languages), or to make good use of a page real estate by grouping several small items together ( images). So the <sidebyside> tag is strictly a layout device, though it does convey some meaning by grouping certain objects together. A variety of different objects can be put side-by-side using the sidebyside element. Specifically, figure , image , tabular , p , ol , ul , dl , pre , poem , and more. The individual components of a <sidebyside> are generically called panels panels .  As a layout device, the <sidebyside> does not allow a <caption> , is never numbered, and therefore cannot be cross-referenced. You may cross-reference whatever element holds the <sidebyside> , and many of the panels may be cross-referenced individually.  As a first example, we have two single paragraphs, laid out with different widths, and slight margins on each side. The widths have been chosen experimentally to get roughly identical heights for the two paragraphs of varying length.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.     Figures with Numbers Side-By-Side  Figures, or other captioned items such as tables or listings, can be placed side-by-side using the sidebyside element. The figures will be captioned and numbered as if they were part of the vertical flow of the document. For example, see and  However, if the <sidebyside> is placed inside another <figure> , then the outer figure gets an overall caption and a regular number, while the captions of the interior items will be labelled as (a), (b), (c), etc; for example, see the subfigures in . You can also cross-reference the subfigures individually, for example: .  The sidebyside tag can have an attribute widths that specifies a percentage width of the page for each panel of the layout. There are automatic margins by default, and any remaining width is divided evenly to space out the panels. When the margins attribute is given as auto , or in the default case, the margins provided each equal half of the inter-panel space.  With no attributes on the sidebyside , each panel is the same width and there is no inter-panel space and no margin. For a sidebyside with a single panel, with its width specified, the panel will be centered.   Side-by-Side, with figures as children, automatic margin      a white square outlined in blue covered by a black X           Side-by-Side, with figures as children, margin set to zero    width=50%     width=25%        Widths calculated automatically, all defaults                   Interior figure     Regular numbering     Regular numbering       Images  We can use the sidebyside element to put images image next to each other. These will illustrate a text, but with no captions or numbers, cannot be cross-referenced. This next example has 10% margins, and the panels have widths 25% and 40% , leaving 15% computed as the one inter-panel space.      Now we fine-tune with different widths (which add up to 100%). The five images have been given different vertical alignments, top middle bottom top middle via the valigns attribute.         If you want an overall caption to a group of images, but no sub-captions on your images, that is also straightforward. This example has no attributes specified. The overall <figure> may be cross-referenced, as   Two equally-spaced (identical) images         Common Side-By-Side Constructions  We have now seen at least one example of each of the four most common constructions involving sidebyside . Working from the exterior inward, we can go figure , sidebyside , figure , X , where X is some atomic (unnumbered) item we might use elsewhere in a PreTeXt document, the inner figure may be repeated with different objects X , and the figure s have captions. Each figure is independently optional, leading to the four combinations in this table. Note this applies to any captioned item used inside the sidebyside , but a figure is the most flexible.   sidebyside and figure interactions    Outer Figure Inner Figure Effect    Absent Absent Layout only, no numbers nor captions    Absent Present Numbers and captions on figure(s)    Present Absent Number and overall caption    Present Present Number and overall caption, sub-numbers and captions on figure(s)       Vertical Alignment  Vertical alignment can be specified using the valign attribute which admits a space-separated list of top , middle , and bottom ; the default is top .          Middle     Top     Middle     The singular version of the attribute, valign , can provide the same alignment to each panel, here we use five different widths, but all with vertical alignment of middle .           Text Next to Text and Images  Text can be put next to other blocks of text using the stack element, which can contain multiple paragraphs using the p element (see ). If only one paragraph is required, simply use the p element on its own.    here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text    here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here   here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here   Similarly, text can be put next to images.   here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text cross reference: and math:    You can place text next to numbered figures, as shown below in .   here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text; cross reference: and math:   Text next to a figure       Image Formats, Side-by-Sides  Most of our demonstrations here use our square blue cross test image, which is provided as a PNG image. You may specify images by any of the methods described in the section on graphics, . The complete graph below is specified with no file extension, on the assumption that an SVG version exists for HTML output, and a PDF version exists for latex output. The second is a JPEG image that we use elsewhere for a YouTube video, but recycle here as an image provided in that format. By default, they are aligned at their tops.      Here are two TikZ images, authored side-by-side. The first has had its geometric portions of the original scaled down to 75%, with the effect of increasing the text, relatively, so the application in a side-by-side panel with 25% width has legible text. We caption only the second panel, which has no text adjustments. From TeXample.net .              tex Work Flow              Images by Stefan Kottwitz  Venn Diagram  Work Flow      Tables Side-By-Side  Tables table can also be put side-by-side, as demonstrated below in ; naturally, subtables can be referenced as in .   Side-by-Side, with tables as children    width=50%        1111  2222    aaaa  bbbb    AAAA  BBBB      width=25%        1111  2222    aaaa  bbbb    AAAA  BBBB        Widths can be calculated automatically    Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB      Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB        If you put two table elements side-by-side without an enclosing <figure> , then they will use regular numbering; see Tables .           1111  2222    aaaa  bbbb    AAAA  BBBB             1111  2222    aaaa  bbbb    AAAA  BBBB             1111  2222    aaaa  bbbb    AAAA  BBBB        Tables Next to Figures  Tables and figures can go next to each other, as demonstrated in and , plus within an overall captioned figure, .    Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB       Figure next to a Table      Figure and Table, with overall caption, hence sub-captioned    Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB       Figure next to a Table        Tables Next to Text  Tables can go next to blocks of text using the <stack> element (see ).    Table next to text        1111  2222    aaaa  bbbb    AAAA  BBBB      here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here    here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here      Tabular Next to Each Other  Four tabular elements inside a single <sidebyside> will result in no captions at all.         1111  2222    aaaa  bbbb    AAAA  BBBB    CCCC  DDDD          1111  2222    aaaa  bbbb    AAAA  BBBB          1111  2222    aaaa  bbbb    AAAA  BBBB          1111  2222    aaaa  bbbb    AAAA  BBBB       Lists in Side-by-Sides  A regular list normally belongs in a p but it can be placed unadorned into a panel of a side-by-side, as demonstrated below in . You can also put named lists into a panel, and then the title, introduction, conclusion, and caption will behave as expected, along with a number that might be used in a cross-reference ( ), or perhaps we might cross-reference by title, .   Two named lists    Sea Life   Dr. Seuss again.    One fish  Two fish Not fishes  Red fish  Blue fish     Color Shades  colors shades   Blue in many shades  Light  Navy  Royal   Red  Maroon  Pink  Shocking     This ends our example.      These same two lists can individually be the panels of a <sidebyside> , where here vertical alignment on the bottom attempts to align the titles, which are placed below for panels of a <sidebyside> .    Sea Life   Dr. Seuss again.    One fish No more fishes  Two fish  Red fish  Blue fish     Color Shades  colors shades   Blue  Light  Navy  Royal   Red a really nice color  Maroon  Pink  Shocking     This ends our example.     We also need to test a sidebyside in a list. The widths are now relative to the space given over to an indented item. Here we nest and nest and nest and nest to get a big, obvious indentation, and then include an image at 100% width and no margin. In your mind's eye, or with a ruler, check that the image spans all the way over to the right margin.  This is  a very  wide   rectangle          Stacking: Back to Vertical Flow  You might wish to mix disparate items within a panel, returning to a vertical flow within a panel. For example, you might want a diagram to the left and some paragraphs of commentary to the right. Or perhaps a photograph on one side and a list of bullet points to the other side. A <stack> is a container that can only be used to collect several items into a single panel of a <sidebyside> . You cannot point to it, but you can point to its contents as usual. Contents may be anything you could otherwise put into a sidebyside panel that does not have a <caption> or a <title> . In particular, these panels cannot be sub-numbered since the panel cannot be made into a <figure> .  Similar items can also be stacked, of course. Most importantly, a normal panel will accept a single paragraph. If you want several paragraphs, simply collect them in a stack .    A simple sentence inside a single <p> as the first item in a stack.      A less simple sentence that will wrap inside the panel to make the right panel taller and allow us to experiment with sliding the left panel contents up and down, here it is placed in the middle .    We have an image to the left, as a regular panel (not a stack). In the right panel we stack a list of properties, followed by a descriptive paragraph. We middle-align the stack at the bottom , just as a demonstration (it would likely look better with top alignment).      Blue  Square  Geometric   The blue-ness of the border contrasts with the stark emptieness of the white interior, evoking images of blue skies and vast sandy deserts. The harsh black cross draws the viewer's attention to the exact center.    In latex an image or a tabular can be used within a paragraph. Here we test a mixture of the three items to make sure they are properly separated in a conversion to latex .    Paragraph one.   Paragraph two.        1111  2222    aaaa  bbbb    AAAA  BBBB       We imagine a <sidebyside> using a <stack> to enable constructions like a table of data in one panel, and maybe a plot with some text next to it.  In the toy example next, the list of data is rigid, so we have set the first panel width to 40% , a value obtained experimentally to just contain the list. This allow us to set the second panel to a width of 58% , and we use no margins. If you try to balance the heights of the two panels, this can become a bit of a zero-sum game. A wider second column means the text occupies fewer lines, but the wider image also creates a taller image, consuming more vertical space.   Experimental results collected in a figure           0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900     This set of values and this plot have nothing to do with each other. You'll recognize that they've been liberated from earlier in this work.  Step back and simply examine how the pieces all fit together within a <figure> .      Bully Pulpit  Remember that <sidebyside> has attributes that strongly influence layout. That is intentional. But to support a variety of output formats, it does not allow overly-precise control, and they be viewed as providing hints to an implementer of a conversion. So for example, do not expect <sidebyside> to function like a latex  tabular or an HTML  table .  In particular, elements of two consecutive <stack> will not line up, unless perhaps you construct them identically. Consider a <sbsgroup> for something closer to putting items into rows.     Other Panels  Other elements may be placed within a sidebyside element. Pure lists first.    Footnotes: Fermat allusion at .  Examples: Mystery derivative at .  Definition-like: A mathematical statement with no proof .  Figures: An early plot, Figure .    Footnotes: Fermat allusion at .  Examples: Mystery derivative at .  Definition-like: A mathematical statement with no proof .  Figures: An early plot, Figure .    You can place aligned equations in paragraphs within a sidebyside element.   here is some text, and here is an equation that contains alignment.   here is some text, and here is an equation that contains alignment.  here is some text, and here is an equation that contains alignment.    Pre-formatted text may be included by using the pre element. This content is horizontally-rigid, so as the author, you need to be sure to provide enough width for the panel to contain the content. It is easy to see the boundary of the panels when rendered in HTML since there is a background that fills the panel.    Hello, World! in Pascal and C++    program HelloWorld;  begin  WriteLn('Hello, world!');  end.   #include int main() { std::cout << \"Hello, world!\"; return 0; }     A graph defined by data (from Keller and Trotter's Applied Combinatorics )   graph1.txt 9 6 2 1 5 1 7 6 8 9 1 4 3 5 7 1 3 5 9 7 9       Poems as Side-By-Side Panels  Poems poem may be panels of a side-by-side layout. Here we place some commentary alongside. See for general information about poetry.    Fire and Ice  Fire and Ice, Frost  Robert Frost   Some say the world will end in fire,  Some say in ice.  From what I've tasted of desire  I hold with those who favor fire.  But if it had to perish twice,  I think I know enough of hate  To say that for destruction ice  Is also great  And would suffice.     You might have several things to say about a poem and you could use a sequence of paragraphs immediately adjacent.  This is a second paragraph of commentary.    Poems are not horizontally-rigid, but they are not perfectly horizontally-flexible either. The left copy of this next poem is in a panel roughly 2\/3 the width of the page and fits there. The right copy has the first five lines and is in space about half the previous width, and you can see the lines being wrapped with obvious indentation. So you can constrain the width of a poem if you do not mind the additional indentation. (Recognize that this example is a bit extreme.)    Sonnet to Liberty  Sonnet to Liberty, Wilde  Oscar Wilde   Not that I love thy children, whose dull eyes  See nothing save their own unlovely woe,  Whose minds know nothing, nothing care to know,  But that the roar of thy Democracies,  Thy reigns of Terror, thy great Anarchies,  Mirror my wildest passions like the sea,  And give my rage a brother! Liberty!  For this sake only do thy dissonant cries  Delight my discreet soul, else might all kings  By bloody knout or treacherous cannonades  Rob nations of their rights inviolate  And I remain unmoved-and yet, and yet,  These Christs that die upon the barricades,  God knows it I am with them, in some things.     Sonnet to Liberty  Oscar Wilde   Not that I love thy children, whose dull eyes  See nothing save their own unlovely woe,  Whose minds know nothing, nothing care to know,  But that the roar of thy Democracies,  Thy reigns of Terror, thy great Anarchies,        Side-By-Side Groups  A side-by-side group,  <sbsgroup> , is still in development. (Notably, subcaptions do not behave as expected.) It is a sequence of sidebyside , which may conceivably use the same margins, widths and vertical alignments for each horizontal run of panels. Attributes on the sbsgroup are global to the group's enclosed sidebyside , and will be used by each contained sidebyside . If attributes are present on an individual sidebyside , they override the global values. The next two examples demonstrate some of this behavior, in a limited way.   Overall SBS Group    One.  Two.  Three.    Four.  Five.  Six.     A long poem, when placed into a sidebyside will not fit onto a physical page and will not break across pages. With a sbsgroup you can put each stanza (say) into its own sidebyside and place something (commentary) next to it. We include the title with the first stanza and the author with the last stanza. This device can also be useful to attach commentary to specific stanzas.     The Stolen Child  Stolen Child, The, Yeats   Where dips the rocky highland  Of Sleuth Wood in the lake,  There lies a leafy island  Where flapping herons wake  The drowsy water-rats;  There we've hid our faery vats,  Full of berries  And of reddest stolen cherries.  Come away, O human child!  To the waters and the wild  With a faery, hand in hand,  For the world's more full of weeping than you  can understand.     Some commentary on Stanza One.        Where the wave of moonlight glosses  The dim grey sands with light,  Far off by furthest Rosses  We foot it all the night,  Weaving olden dances,  Mingling hands and mingling glances  Till the moon has taken flight;  To and fro we leap  And chase the frothy bubbles,  While the world is full of troubles  And is anxious in its sleep.  Come away, O human child!  To the waters and the wild  With a faery, hand in hand,  For the world's more full of weeping than you  can understand.     Some commentary on Stanza Two.        Where the wandering water gushes  From the hills above Glen-Car,  In pools among the rushes  That scarce could bathe a star,  We seek for slumbering trout  And whispering in their ears  Give them unquiet dreams;  Leaning softly out  From ferns that drop their tears  Over the young streams.  Come away, O human child!  To the waters and the wild  With a faery, hand in hand,  For the world's more full of weeping than you  can understand.     Some commentary on Stanza Three.       William Butler Yeats   Away with us he's going,  The solemn-eyed:  He'll hear no more the lowing  Of the calves on the warm hillside  Or the kettle on the hob  Sing peace into his breast,  Or see the brown mice bob  Round and round the oatmeal-chest.  For he comes, the human child,  To the waters and the wild  With a faery, hand in hand,  From a world more full of weeping than he  can understand.     Some commentary on Stanza Four.      The main rationale for sbsgroup is to layout a grid of items, and by placing the layout parameters on the sbsgroup element, the items can line up across sidebyside and subcaptioning can run across the whole group. So, for example, if you have images to compare by placing in a grid, then making them all the same size, or of the same aspect ratio, can help with the overall consistency.  This example has three sidebyside , each with four figure containing an identical image . Since the images are identical and the width is set to 20% they should all line up nicely with little effort. Since the default for margins is automatic, the remaining 20% of the overall width will be used for three inter-panel spaces of 5% and two margins of 2.5% each. Note the numbering of these as independent figures. We have left the captions empty for reasons of space, but you could add more information. Note that in print, a page break is allowed between any two of the sidebyside and cannot be suppressed.                                                          We recycle the prior sbsgroup but now put it in its own overall figure. That will allow a caption for the whole group, and will cause the twelve figures to be subcaptioned. Except the subcaptioning is not implemented. Soon.   Twelve images, arranged in a grid                                                           One more test. We override the spacing and vertical alignments of the middle sidebyside . Note that it is easy to make a panel so skinny that even the smallest possible caption does not fit in the width.                                                          The following is a <sbsgroup> full of operation tables. Once upon a time it was rather cramped vertically in HTML output, but Andrew Scholer improved the spacing at GitHub #2387 . The example is from Valerio Monti.   Tabelle delle operazioni per                                       Testing a Side-By-Side First  A <sidebyside> that appears first within some other container can wreak havoc in latex output. Below we have this situation twice, once in an <activity> , then in an <example> , then in a <paragraphs> .     Here is text block 1  Here is text block 2        Here is text block 1  Here is text block 2     And a <sbsgroup> in similar circumstances.      Here is text block 1  Here is text block 2    Here is text block 3  Here is text block 4       First Child of a Paragraphs     A  B    C  D                  Testing Styling of Related Elements  This subsection has non-side-by-side structures, to aid with the effects of styling decisions across the range of possibilities. First a figure with a caption holding a scaled image and a cross-reference for knowl testing: .   A traditional figure       Open Problems  Like for mathematical research. Experimental as of 2023-07-06.    Solve the Riemann Hypothesis Footnotes were once incomplete on open problems.  and provide a short proof of Fermat's Last Theorem.      Poetry  There is support for poems via the poem poem tag, which can contain a title , author and multiple stanza , each containing multiple line . See the source of the following poem for an example of the exact arrangement. Note how the first quote crosses two line elements and how this is handled in the source. There are many very flexible options for horizontal alignment and indentation. Further extensive examples, constructed by Jahrme Risner, are available in the example Humanities document.   The Charge of the Light Brigade  Charge of the Light Brigade, The, Tennyson  Alfred Lord Tennyson   Half a league, half a league,  Half a league onward,  All in the valley of Death  Rode the six hundred.  Forward, the Light Brigade!  Charge for the guns! he said:  Into the valley of Death  Rode the six hundred.    Charge of the Light Brigade second stanza  Forward, the Light Brigade!  Was there a man dismay'd?  Not tho' the soldier knew  Someone had blunder'd:  Theirs not to make reply,  Theirs not to reason why,  Theirs but to do and die:  Into the valley of Death  Rode the six hundred.    Ken Levasseur, who teaches at UMass-Lowell, has limericks in his Applied Discrete Structures textbook. When he reported that they were unable to be the target of a cross-reference, Karl-Dieter Crisman penned the following limerick.   Karl-Dieter Crisman   CS students studying in Lowell  Required their books to have soul.  Along came their teacher  Who asked for this feature:  A poem that lives in a knowl.    And when yours truly tried to joke about poetry on GitHub CLI #182 , back came:   Steven Clontz   There once was a maintainer named Rob  Who told bad jokes while on the job  While they were lame  You could say the same  Of Steven's limericks that cause you to sob      Atomic Objects   Some PreTeXt objects are relatively indivisable and are used as components of other structures. We call them atomic , even if the term is not perfect. A good example is <image> (next, ). This section is arranged according to these objects and tests the various ways they can be employed.  We frequently include some nonsense text inside short intervening paragraphs to test spacing and establish margins.     <image>  An <image> can be placed in five different ways:  all by itself, as a peer of <p> typically, with layout control,  inside a <figure> , earning a number and caption,  inside a <sidebyside> , with size and layout configured,  inside a <figure> inside a <sidebyside> , with size and layout configured, with a number and caption, and  inside a <figure> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   Width set at 40%, so equal margins and thus centered. Aenean faucibus augue tellus, et sollicitudin tortor finibus non. Maecenas semper dolor quis diam placerat, iaculis sollicitudin augue finibus. Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non.   Asymmetric margins of 20% and 40% given, implying 40% width, equal to previous instance. Vivamus suscipit diam eget mi cursus viverra.   As a plain component of a <sidebyside> . Widths here are 20% and 30%, margins and gaps are automatic, default alignment on top edges. Nulla pharetra imperdiet elit, in sodales nibh blandit ultricies. Maecenas efficitur ac felis ut pharetra.      Inside a <figure> with no adjustments, so default behavior. Note how a <figure> occupies the entire width of the page, so then does the caption.   New Zealand Landscape    Inside a <figure> with asymmetric (large) margins of 30% and 60%. Quisque finibus augue sit amet facilisis fringilla. Aenean faucibus augue tellus, et sollicitudin tortor finibus non.   New Zealand Landscape    Inside figures inside a <sidebyside> . Same widths as previous <sidebyside> but alignment on bottoms of the panels, to partially align captions. Note how the captions are constrained in width by the width of the panels of the side-by-side.    NZ Landscape     New Zealand Terrascape     Identical code to previous example, but now wrapped in an overall <figure> , which has its own caption and number, leaving the interior figures to be sub-numbered. Cross-references use the full number: .   Amalgamation of Scapes    NZ Landscape     New Zealand Terrascape      For latex , in some circumstances it is desirable to print the image on the next line, but backed up by some amount. This top-aligns the image with a number of some sort off to the left. The following are tests for this behavior. Here is a list.          A rotation=\"n\" attribute applied to a bare image will rotate the image by n . The vertical space adjusts to accomodate the rotated image in the latex version but not in the html version.   Rotated Images    rotate=\"180\"     rotate=\"15\"     For pdf output destined for print, when the publication file entry latex\/@print=\"yes\" , a @landscape=\"yes\" attribute applied to a <figure> , <table> , <list> or <listing> will cause the object to be rotated 90 and presented on its own page. Placement of the float is determined by latex and multipage objects are not supported.   This landscape figure will be rotated so the long edge is vertical, and will appear on its own page in print PDF output.     Wide figure containing a sidebyside containing a rotated image. This will be rotated and appear on its own page in print PDF output.    Quack     Propulsion System                                              <video>  An <video> can be placed in five different ways:  all by itself, as a peer of <p> typically, with layout control,  inside a <figure> , earning a number and caption,  inside a <sidebyside> , with size and layout configured,  inside a <figure> inside a <sidebyside> , with size and layout configured, with a number and caption, and  inside a <figure> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  Videos can be realized in many forms, and can come from a variety of sources. See for tests of some of that variety. Here we are testing placement within surroundings and testing the schema for location. But we do have two videos in each test, one provided as a local file and one embedded from a service.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Width set at 40%, so equal margins and thus centered. Aenean faucibus augue tellus, et sollicitudin tortor finibus non. Maecenas semper dolor quis diam placerat, iaculis sollicitudin augue finibus. Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non.   Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Asymmetric margins of 20% and 40% given, implying 40% width, equal to previous instance. Vivamus suscipit diam eget mi cursus viverra.   Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   As a plain component of a <sidebyside> . Widths here are 20% and 30%, margins and gaps are automatic, default alignment on top edges. Nulla pharetra imperdiet elit, in sodales nibh blandit ultricies. Maecenas efficitur ac felis ut pharetra.      Inside a <figure> with no adjustments, so default behavior. Note how a <figure> occupies the entire width of the page, so then does the caption.   University of Puget Sound Promotional Video    Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Pre-Roll Countdown    Inside a <figure> with asymmetric (large) margins of 30% and 60%. Quisque finibus augue sit amet facilisis fringilla. Aenean faucibus augue tellus, et sollicitudin tortor finibus non.   University of Puget Sound Promotional Video    Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Pre-Roll Countdown    Inside figures inside a <sidebyside> . Same widths as previous <sidebyside> but alignment on bottoms of the panels, to partially align captions. Note how the captions are constrained in width by the width of the panels of the side-by-side.    Pre-Roll Countdown     University of Puget Sound Promotional Video     Identical code to previous example, but now wrapped in an overall <figure> , which has its own caption and number, leaving the interior figures to be sub-numbered. Cross-references use the full number: .   Amalgamation of Videos    Pre-Roll Countdown     University of Puget Sound Promotional Video        <program> , <console>  A <program> and\/or <console> can be placed in at least six different ways:  all by itself, as a peer of <p> typically, with layout control  inside a <listing> , earning a number and caption, with layout control  inside a <sidebyside> , with size and layout configured  inside a <sidebyside> , with size and layout configured, and inside a <figure>  inside a <sidebyside> , with size and layout configured, with each inside a <listing> , earning different numbers  inside a <figure> inside a <sidebyside> inside a <listing> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  Programs can be realized in many forms, and can come from a variety of sources. See for tests of some of that variety. Here we are testing placement within surroundings and testing the schema for location. But we do have two videos in each test, one provided as a local file and one embedded from a service.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means   Now a program with shorter lines, with no layout control.   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   And a <console> element, also with no layout control.   gcc -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    Now similar examples, but with layout control: margins and width.  A <program> with a width attribute, so centered and with equal margins. Note how the lines word wrap due to the smaller width.   n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means   A <program> with short lines, so significant, and asymmetric margins, which experimentally do not induce any word-wrapping.   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   A longer <console> , with margins so significant the appearance is ill-advised.   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    Two <listing> , with <caption> , and no layout control.   Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     Same two <listing> , but now with layout control on the <program> and <console> .   Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     This <sidebyside> gives each panel a 30% width. The remaining 10% is apportioned for margins and separation.    \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means    This is the same three-panel <sidebyside> , but now inside of a <figure> , earning a number and a <caption> .   Some Code Samples    \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means     Finally, a smaller <program> and a smaller <console> , each inside a <listing> , as the two panels of a <sidebyside> with no margins, and slightly different widths (to control word-wrapping). The panels have been aligned vertically so their captions align.    Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188      And again, the two-panel <sidebyside> of <listing> , but now inside a <figure> that has a number and a caption. And then the <listing> are sub-numbered as (a) and (b).   Two Code Listings    Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188         <tabular>  A <tabular> can be placed in six different ways:  all by itself, as a peer of <p> typically, with no layout control and hence with a natural width, and centered  all by itself, as a peer of <p> typically, with explicit layout control,  inside a <table> , earning a number and title,  inside a <sidebyside> , with size and layout configured,  inside a <table> inside a <sidebyside> , with size and layout configured, with a number and title, and  inside a <table> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and title, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  A <tabular> realized by latex for PDF\/print will normally be as wide as necessary to hold the content, without word-wrapping the content of any cell that is not explicitly authored that way. This is the most rigid of the content types we call planar. So for PreTeXt output as latex , when you explicitly constrain the width to be less than the natural width (including use as a panel of a <sidebyside> , or even setting margins) the table will be scaled down in width, which can result in an apparent font size very much smaller than that of the surrounding text. Note that we do not ever scale a tabular up to be wider with a larger font size. Note also that if there is no attempt to control the space for the table (no layout control, not in a <sidebyside> ) then no scaling is attempted at all and the table may be wider than the text and protrude into the right margin. For more, see the three examples at: , , . Generally, much of the commentary and testing here is about latex \/PDF\/print. While for HTML output the cells will usually automatically word-wrap to fit in the available space, without adjusting the font size. Some might like this behavior and some might not.  Data in a table form can be placed in amongst a series of paragraphs. With no layout control, it will occupy its natural width and be centered.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    The same effect can be had by specifying that the width attribute have the value auto , but do not specify any margins . We test multiple footnotes in a <tabular> , not included in a <table> .    State Only from the West Coast.  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223 Wow! That is as big as many countries.  163,696  1850    In amongst a run of paragraphs (or similar) a <tabular> can be placed with layout control. For latex output, this will scale the table to fit within the explicit, or implicit, width. This can result in obvious differences in the apparent font size. We first have a width that is experimentally similar to the natural width, with asymetric margins. Then a narrow width, and a wide width, as an illustration.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    Narrow. 45% width. 20% margin left, 35% margin right.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    Wide. 97% width. 1% margin left, 2% right.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    Naturally, a <tabular> can be placed inside a <table> , earning a number and a title.   Natural Width    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     A little narrower, but still centered by default.   Width of 60%, automatic centering    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     Very narrow, asymmetric margins.   Width of 30%, 30% left margin, 40% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     Wider than necessary, asymmetric margins.   Width of 90%, 8% left margin, 2% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     The next table is purposely much too wide. In we make no attempt to control the width, and so it will extend into the margins. In we have simple added the attribute width=\"auto\" . This attempt to use layout control will cause an automatic reduction in width and a smaller apparent font size. Adjusting margins providing an explicit percentage width, or placing the tabular as a panel of <sidebyside> will have the same effect. In we have set the width explicity to 100% and so it should be identical to the automatic width case just prior.   Tabular too wide, no layout control    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles      Tabular too wide, scale to automatic width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles      Tabular too wide, scale to 100% width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles     Now into <sidebyside> in various ways and with various sizes. First, two <tabular> as panels with widths at 60% and 30%. Note that in latex \/PDF\/print the tabular of functional values does not need the full 30% width, so it is at its natural size and centered within its panel.     State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850          3  9.734    5  2.175     Let's do that again, but with widths experimentally set to make font sizes match (approximately).     State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850          3  9.734    5  2.175     Same tabular, which fills roughly 80% by itself, packed into a single <sidebyside> with just a 2% gap, and no side margins.         State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850          State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     Natural widths, but now as a pair of tables.    West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Function Values        3  9.734    5  2.175      Finally, as two individual <table> , grouped and laid out via a <sidebyside> , and collected as a <figure> . Which causes sub-numbering of the two enclosed <table> .   Geography and Mathematics    West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Function Values        3  9.734    5  2.175          Advanced Numbering   This section demonstrates the numbering numbering patterns used throughout PreTeXt . There are five subsections. Two intermediate subsections each have two subsubsections. This creates a total of seven divisions that are leaves of the document tree. In each leaf we have placed two numbered theorems, for a total of fourteen. There is no real content, this is just a demonstration.  Use values of 0 through 3 for the numbering.theorems.level parameter to see how these numbers change accordingly. It is easiest to compare if you use chunk.level < 2 so the theorems all land on the same page if you are previewing in HTML.    One  A document leaf.   First Theorem  Cauchy  No statement.      Second Theorem  Bunyakovsky  No statement.     Two  Further subdivided.   Uno  A document leaf.   First Theorem!  Schwarz  No statement.    Second Theorem?  Inequality  No statement.     Dos  A document leaf.   First Theorem?  No statement.    Second Theorem!  No statement.      Three  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Four   Further subdivided. We include two theorems as numbered items in the introduction to test their numbers, which should always be logical.   Good Numbered Theorem One  No statement.    Good Numbered Theorem Two  No statement.     Uno  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Dos  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Conclusion now. We include two theorems as numbered items in the conclusion to test their numbers, which are sometimes totally illogical and are inconsistent across output formats. To see the effect, set the level for numbering theorems to 3 . See this GitHub Issue #139 for details.   Bad Numbered Theorem One  No statement.    Bad Numbered Theorem Two  No statement.      Five  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Theorems in This Section  We have a lot of theorems in this section, so we illustrate including an automatic list of these here. We use the elements attribute to limit the list to theorem elements, and we use the scope attribute to limit the list to this section . You can use an introductory p like this one, or not. The list gets no title or visual separation, so use the usual subdivision elements to make that happen. The elements attribute can be a space-delimited list of many different elements. This list should not include the Fundamental Theorem of Calculus, Theorem . See a slightly different example in .     A Title with ] a Right Bracket  latex has trouble with brackets that end up inside optional arguments, so this subsection title is only a check on the defense against that. And now an <exercise> with a title that could really be a problem.   A Right Brace } and a Right Bracket]   The right brace is is used as a grouping character in latex so this is just a test of its behavior in titles.    A faux hint to get this exercise to migrate into a <solutions> .      A Title with } a Right Brace  And now a right brace in a division title.    A Title with a Math Right Bracket  And now a right bracket within math in a division title.  We do not test a right brace within math, since it should be escaped, as is normal latex practice.    Just an Exercise   An Extraneous Exercise   This exercise is here just as a test of the <solutions> division coming next. So it is serving a purpose, even if it is not apparent.    A hint, so this exercise looks identical in structure to the one in the previous subsection.       This is a <solutions> division, which will be a peer of the other <subsection> in this <section> . The default behavior is to look to the parent division (a <section> here) and collect all the hints, answers, and solutions from every <exercise> (and friends) inside this containing division. (There are just two, similar inline <exercise> .)  But instead of the default, we employ a scope attribute to define the parent division of the exercises whose solutions will be shown. In this example we specify the <subsection> that is two back, the one which tests brackets in titles.      Customizations   Renaming Document Parts, Plus This Is A Really Long Title So That We Can Test How Well It Reacts To The Right Margin And Wraps Around To Form A Couple Of Lines, Plus How It Sits Relative To The Number Of The Subsection  Names name for various parts of a document are determined exactly once for each language, ensuring consistency and saving you the bother of always typing them in.  However, you may want to have Conundrum s conundrum repurposed from proposition in your document and you have no use for any Proposition s. conundrum repurposed from proposition  rename an environment conundrum So you can repurpose the proposition tag to render a different name. Or you might have a Lab Manual and want to rename subsection as Activity . See the docinfo portion of this sample article to see how this is done, in concert with the example below. Note that you may provide versions for different languages by specifying a xml:lang attribute.   Smith   Aah, this is confusing!     Important Notes  If you are renaming many parts of your document, then you may not understand the design philosophy of PreTeXt . In particular, you should not be doing a wholesale shuffle of part , chapter , section , This feature is intended for very limited use and is not considered best practice .  This feature could also be abused to provide a comprehensive suite of translations into a language not yet supported. If so, please contact us about moving your translations into PreTeXt for the benefit of all. Thanks.     Customizing Phrases  There is a facility for providing alternate text for small or short phrases, or other components of a paragraph. Here we just provide some tests. Each is inside of a block quote to identify it clearly.  We have two auxiliary files of custom elements, so you need to adjust the publisher file to specify the second one during testing. First, a very simple string as the variation.   This is an article about alligators.   Now a string which is partially text and partially simple markup.   We like to write with feeling , since it is more fun.   And a mildly more complicated structure (a list) as the variable text.    Some of our favorite colors are  Red  Blue  Green     A cross-reference to test, since context is critical.   See also .   The URLs used as a replacement have the visual attribute which is also managed by the assembly pre-processor to provide a footnote. So this is a good test of the organization of the multiple passes employed by the pre-processor.   A URL that should have a footnote: .      Ancillaries  Once your content is in place, you can begin thinking about various useful derivative works. A natural example for a textbook is an Instructor's Version . Various switches for hints, answers, and solutions to exercises would allow you to include more of these for the use of just an instructor. Here we also demonstrate the <commentary> element. It is similar in many ways to a <paragraphs> in that it can be placed within any division and must be titled. The main difference is that it is not displayed by default, so you must set the string parameter commentary to the value yes . Other distinctions are:  Since it is elective, you need to be careful about cross-references to and from a <commentary> . It is highly likely that you will want to make cross-references within a <commentary>  pointing to other portions of your text, and this is always a good idea. You will want to avoid making cross-references to a <commentary> from other parts of the text, with the exception of a cross-reference that originates within some <commentary> .  Numbered items are prohibited within a <commentary> , such as a <figure> or a <theorem> . Doing so would disrupt consecutive numbering in different versions, with or without, <commentary> included. Numbered equations are not prohibited in the schema, but should definitely be avoided anyway.   After some nonsense text in a paragraph, there is a <commentary> with two paragraphs. For the online version of this sample article, we have enabled commentaries. But if you are experimenting yourself, you will want to be aware if you are enabling these or not.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio orci, ullamcorper eget quam et, viverra tristique magna. Integer auctor arcu a sapien pulvinar elementum. Mauris porta, nulla id molestie dignissim, urna dolor rutrum ligula, eu elementum odio nisl sed libero. Nulla nec libero sem.  Sed justo ex, efficitur dictum risus nec, eleifend consequat nibh. Proin rutrum mi id metus viverra blandit. In vel ligula a nibh aliquam pellentesque. Duis placerat purus et ligula sollicitudin, sodales consectetur ante viverra.  Mauris fringilla nulla arcu, sagittis ultrices quam malesuada eleifend. Proin tristique elit eu bibendum tincidunt. Donec commodo lorem in magna egestas, vitae malesuada velit ornare. Pellentesque finibus neque in venenatis tristique. In id blandit est, in euismod urna. Donec commodo sagittis ligula, in venenatis nulla porttitor in. Donec nec tortor sit amet felis posuere ultricies. Suspendisse euismod quis ex eu placerat.    Worksheets   About Worksheets  This is a section full of worksheets. Each is a division of its own, via the <worksheet> element. This is an optional <introduction> to the current <section> . In practice you might want to rip out all the worksheets of an entire book and bundle them up as an activity book.  If you make PDF output you will notice an increased amount of control over layout. Also, if the publication file elects latex draft mode, then there will be visual indicators of prescribed whitespace.    A Geometric Prelude     Practice visualizing vector addition  Use vectors without explicit coordinates     This two-page worksheet was generously donated to the sample article by Dave Rosoff at a CuratedCourses workshop in August 2018. It has the default (skinny) margins.  It was known to Euclid, and probably earlier, that the midpoints of the sides of any quadrilateral all lie in the same plane (even if the vertices of the quadrilateral do not). In fact, these midpoints are the vertices of a parallelogram, as pictured in .    The midpoints of the sides of a quadrilateral are the vertices of a parallelogram.       The sides of a triangle presented as vectors.       The medians of the triangle are , , and .       In this exercise, we'll use vectors to show that the medians of any triangle ( ) intersect at a point. Recall that medians are the lines connecting the vertices of the triangle to the midpoints of their opposite edges, as in the figure. We'll do this in a few steps.      What is the value of ?      from the previous page is reproduced for your convenience.   The medians of the triangle are , , and .         Show that .    Use .      To show that the point exists (as the common intersection of the ), show that .      If you have time, try to devise a vector proof of Euclid's result presented at the beginning of the workshop. Recall that a parallelogram is a four-sided polygon whose opposite sides are parallel.     Wrap-up  It's possible to do interesting things with vector arithmetic in a coordinate-free way: we didn't specify an origin, or any entries of any vectors in the examples.     Networks Worksheet    Basic laws for electrical circuits  This two-page worksheet was generously donated to the sample article by Virgil Pierce at a CuratedCourses workshop in August 2018. It has default (skinny) left and right margins, but we have specified longer top and bottom margins, with the top being the larger of the two.   Ohms Law  The current through a resistor is proportional to the ratio of the Voltage to the Resistance  Or for our purposes     Kirchoffs Current Law  The sum of the currents in a network meeting at a point is zero.     Kirchoff's Current Law  For the circuit below .       Kirchoffs Voltage Law  The sum of the voltages around any closed circuit (or subcircuit) is zero.    Kirchoffs Current Law and Kirkoffs Voltage Law combined with Ohms Law gives for any circuit of resistors and sources a linear system that may (or may not) determine the currents.         For the simple network pictured, calculuate the amperage in each part of the network by setting up a system of linear equations for the amperages.         Compare it with a parallel circuit network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.          Now for a more complicated network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.           Now generalize these ideas to a context outside of electrical circuits. Consider the network of streets given in the diagram (with one-way directions as indicated).     A traffic engineer counts the hourly flow of cars into and out of this network at the entrances. They get (EB = East Bound; WB = West Bound):   Estimated hourly traffic flow for the road network      EB Winooski  WB Winooski  Shelburne St  Willow  Jay    into  50  400  0  10  50    out of  55  390  20  15  30     Use a variable for each segment inside of the network and set up a system of linear equations restricting the flow. Solve the system. Note that you should not get a unique solution as traffic should be able to flow through the network in various ways.        This is a mock one-page worksheet for testing purposes. We have specified an overall margin just slightly less than the default.       Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.      Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.     A two-line paragraph interspersed to check on spacing, breaks and all that.   A full-width exercise   Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.    Another two-line paragraph interspersed to check on spacing, breaks and all that.     Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.       Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.      Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.      A Mock Activity   The problem, as we see it.    A worksheet could have hints, no? But no spacing. Note row below has widths set to balance the heights.       Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.       Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.      Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.        Dot products and projection      Let , , , . Find the values of the following expressions:                Are any of these vectors perpendicular to each other?      The vectors and are pictured below. Derive the formula for projection on a line and use it to find the projection of on the line spanned by . Also compute the length of the residual vector.   two vectors in a Cartesian plane           Consider the vector equation .    Check that there is no solution that makes the equation true.    Use projection to find the best approximation .    Compute .    Compute the residual vector.    Compute the length of the residual vector and explain what it means.      Consider the system of equations .    Write the system in vector form.    Find the best estimate, , of using projection.    Compute the length of the residual vector.           Just a simple activity here.      Here is a second activity.          This is going to be an activity with tasks.     Here is the first task.      Here is the second task.      Here is the third task.     This is a conclusion that comes after the last task.         This is a mock worksheet for testing the use of workspace for <exercise> within an <exercisegroup> .      Do things to the following.     Apple      Banana      Cherry      Durian      Elderberry (with workspace override)      Fig      Guava      Habanero      I can't think of an I fruit.      Jackfruit         Now with one column, do things to the following.     Apple      Banana      Cherry      Durian      Elderberry (with workspace override)      Fig      Guava      Habanero      I can't think of an I fruit.      Jackfruit         Exercises, One Subsection  This <section> of the sample article demonstrates an unstructured division. There are no <subsection> , you are just reading the first two paragraphs, followed by some nonsense text. Then there is a single  <exercises> division. Note that this division is not numbered (since it is unique within the <section> ). And a cross-reference to one of the contained <exercise> will be numbered as a member of the <section> , .  If you use the unstructured form of a division, and have both inline and divisional exercises, there is a potential to form ambiguous cross-references. To wit, check that and are really different exercises (which you are unable to do if you are reading this in print!). The solution is to include the type of exercise in the reference, which will assist everybody, but especially your print readers: and .  Compare this section with the similar , next. The following text is mostly nonsense, just for testing purposes.   Inline One   Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.    Pellentesque nec condimentum ligula, quis interdum mauris. Ut sed urna lacinia, aliquam arcu id, faucibus nisi. Suspendisse potenti. Curabitur in erat ultricies, condimentum mi nec, vehicula mauris. Duis faucibus risus fermentum velit hendrerit, non laoreet massa maximus. Donec bibendum elit ac lectus lobortis luctus. Ut finibus, dolor ut euismod tristique, ligula tortor tempus arcu, finibus semper purus erat ut ligula. Aenean accumsan ut ante vel euismod.   Inline Two  Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.    Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.    Inline Three   Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.     Exercise Collection   Drill One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present     A side-by-side in a figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present and to test the numbering of the panels in a solutions manual    First Panel, subcaptioned     Second Panel, subcaptioned        First Panel, not subcaptioned     Second Panel, not subcaptioned        Drill Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering, figure in a <exercise> in an un-numbered <exercises>       Drill Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.     Challenging One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.      An introduction to an exercisegroup . This is here to attempt to interrupt the flow of the counting from this division to the next.    Challenging Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Challenging Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.      Impossible One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     Impossible Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Impossible Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.      More Reading   Left intentionally blank, just checking sectioning.   David C. Lay, Subspaces and Echelon Forms . The College Mathematics Journal , January 1993, 24  1 , 57 62.     Exercise Section, Structured   A collection of exercises, in a top-level <exercises> division, structured with <subexercises> .    Easy Exercises   Arithmetic   Compute .        Trigonometry   Compute .      Hard Problems   Number Theory   Prove Fermat's Last Theorem.     Millenial   Find general solutions to the Navier-Stokes equation.      With an Exercise Group    This is an exercise group, and this is its introduction.    One      Subtract.     Two        Outside exercisegroup, inside subexercises   6+5       Exercises, Multiple Subsections   This <section> of the sample article demonstrates a structured division. You are reading the introduction to the division, then there is a faux <subsection> , followed by three <exercises> divisions. Note that the three are numbered as if they are also fellow <subsection> . And a cross-reference to one of the contained <exercise> will be numbered use the number of the <subsection> , .  Compare this section with the similar , previous. The following text is mostly nonsense, just for testing purposes.    Faux Subsection   Inline One   Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.    Pellentesque nec condimentum ligula, quis interdum mauris. Ut sed urna lacinia, aliquam arcu id, faucibus nisi. Suspendisse potenti. Curabitur in erat ultricies, condimentum mi nec, vehicula mauris. Duis faucibus risus fermentum velit hendrerit, non laoreet massa maximus. Donec bibendum elit ac lectus lobortis luctus. Ut finibus, dolor ut euismod tristique, ligula tortor tempus arcu, finibus semper purus erat ut ligula. Aenean accumsan ut ante vel euismod.   Inline Two   Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.     Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.    Inline Three   Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.      Drill Exercises   Drill One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in a structured division to test that it is numbered with consideration of the containing <exercises>       Drill Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Drill Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.      Challenging Exercises   Challenging One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.      An introduction to an exercisegroup . This is here to attempt to interrupt the flow of the counting from this division to the next.    Challenging Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Challenging Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.       Impossible Exercises   Impossible One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     Impossible Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Impossible Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.      Layout challenge    A multicolumn exercisegroup with layout challenges. The first two should be on one row. The next two should be on one row until the hint is opened. Then one that takes up an entire row. The final row should always have two exercises.                       OPEN ME!                       More Reading   Left intentionally blank, just checking sectioning.   David C. Lay, Subspaces and Echelon Forms . The College Mathematics Journal , January 1993, 24  1 , 57 62.     Exercises, Top-Level    This <exercises> of the sample article is a peer of all the preceding <section> and is the only such <exercises> . As such, it is not numbered, and contains only <exercise> , but for this <introduction> you are reading. The <exercises> contained within will be numbered in cross-references according to the enclosing division, in this case the entire article and so without any qualification, to wit, .    Drill One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     Drill Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering in a <exercises> without a number       Drill Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.     Challenging One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.      An introduction to an exercisegroup . This is here to attempt to interrupt the flow of the counting from this division to the next.    Challenging Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Challenging Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.      Impossible One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     Impossible Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.     Impossible Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.     An Exercise in a Section   Exercises can appear in a section of their own. You need to give the section a title, even if it seems obvious what to call it. Individual exercises may have titles, as you choose. Problem: How should we hide solutions?    Maybe a global switch should be used to suppress solutions, while a separate processing regime could use them as part of a solutions manual.     An Exercise with a Hard-Coded Problem Number   Compute the definite integral , not as an approximate value from a Riemann sum, but as an exact value based of the limit by using the Fundamental Theorem.    An antiderivative of is , so by the FTC, !?! This is indeed an exciting result, but we are mostly interested in seeing that the sentence-ending punctuation is absorbed properly into the displayed equation.      Can you prove Corollary directly? If not consider that a problem could have several parts, which should be formatted as a second-level list, since the problems normally get numbered at the top level.  Why is this result a Corollary?  Could you interchange the Theorem and Corollary?      MVT  Consider the definite integral as an area function and employ the Mean Value Theorem.     Motivator  Think harder!     Helpful   It follows easily.  Yes.      We could prove either result first, then obtain the other as an easy consequence.      Reference   Notation  This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.  This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.   This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.  This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.    Solutions to Selected Exercises  solutions as an appendix   This is an introduction, where you might explain that this division of the back matter contains various hints, answers, solutions of inline exercises, divisional exercises, project-like blocks, worksheet exercises, and\/or reading questions. See the source to see just how this solutions division was built.     And a conclusion to this solutions division, which may not be readily apparent as distinct from the final division's worth of solutions, but since it is not prefixed with a number, it may be different enough.     Solutions to a Single Exercises Division  solutions for one group of exercises   Sometimes you may want the solutions to exercises within a single <exercises> division (or similar, like a <worksheet> ). Default behavior in this situation can produce two titles, when just one would be sufficient. Here we have used the scope attribute to point to a specific <exercises> , and provided a (single) very specific <title> .      All Solutions that are Answers  solutions all answers   The back matter solutions appendix requests every <answer> , and only <answer> , of all types of exercises: inline, divisional, worksheet, reading questions, and projects. Now, as observed by Bruce Yoshiwara, it gets a bit tedious to see the Answer heading over and over in print, when every entry has that heading. So we squelch it for you in print\/PDF output. (For HTML output we use knowls and need to have something to click on. But perhaps for EPUB we should be more careful?) Note that you might want to use a <title> , or an <introduction> , that explains which component of the exercises is being displayed, so there is no confusion.      All Solutions that are Answers to Odd Exercises  solutions all even answers   This should be identical to the previous collection of answers, except only exercises with an even number are reported (via the admit attribute).      List of Results  We had an automatic list of theorems for just one section, back in . Here we expand to include corollary in our space-delimited list of elements and we request divisions (headings) at each subsection and section . The default scope is the entire document, which is appropriate here in the backmatter. There are many subsections with no results, so we set the empty attribute to no to suppress them, though this is the default behavior ( yes being the other option to see divisions with no list items). These lists are most valuable if you are in the practice of giving items titles.     Lists of Exercises  Since <exercise> come in several flavors, we use pseudo-elements to specify the distinct types. There are not many reading questions but here is a list of all of them, by section, using a readingquestion pseudo-element.   And now a list of all the inline exercises, and including the title of every <section> , even if there is no inline exercise contained inside it. The pseudo-element is inlineexercise .     glossary   A glossary may have a <headnote> , perhaps with some explanation. This glossary is placed in the back matter. Placement as a specialized division is another option, see .    bar  A part of foobar . See .    foobar  A synonym for the acronym FUBAR .     Multiple References   Multiple Specialized References  You might want to have lists of references, in the back, but with multiple such lists. Make an <appendix> to hold them, give it some structure (for an <article> , a leading <subsection> , such as the one you are reading right now), then follow with multiple <references> divisions. A typical citation will then look like: .    General References  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.    Specialized References  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.       References  Tom Judson, Abstract Algebra: Theory and Applications . Another online, open-source offering.   David C. Lay, Subspaces and Echelon Forms . The College Mathematics Journal , January 1993, 24  1 , 57 62.     This article was authored in, and produced with, PreTeXt . It is typeset with the Latin Modern font.    "
},
{
  "id": "theorem-FTC",
  "level": "2",
  "url": "#theorem-FTC",
  "type": "Theorem",
  "number": "1.1",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then test: buried in theorem\/statement\/p    Left to the reader.   "
},
{
  "id": "definition-indefinite-integral",
  "level": "2",
  "url": "#definition-indefinite-integral",
  "type": "Definition",
  "number": "1.2",
  "title": "",
  "body": " indefinite integral integral indefinite integral    indefinite integral of    Suppose that . Then the indefinite integral of is and is written as .   "
},
{
  "id": "objectives-structures",
  "level": "2",
  "url": "#objectives-structures",
  "type": "Objectives",
  "number": "3",
  "title": "Fundamental Structures",
  "body": " Fundamental Structures   This is an <objectives> element you are reading, and this is its introduction. This early section has really grown and tries to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More.  Evermore.    This concludes the (incomplete) objectives for this section, so now we can carry-on as before.   "
},
{
  "id": "corollary-FTC-derivative",
  "level": "2",
  "url": "#corollary-FTC-derivative",
  "type": "Corollary",
  "number": "3.1",
  "title": "",
  "body": " Leibniz, Newton  Fundamental Theorem of Calculus Corollary   Suppose is a continuous function. Then .    We simply take the indicated derivative, applying Theorem at .    A justification, which is one of the variants of a proof.         Alternate Proof  You can have multiple proofs, and they can have titles which replace the word Proof as a heading. Here we just exercise displayed math with no automatic numbering, and an elective number on the middle equation.   "
},
{
  "id": "example-mysterious",
  "level": "2",
  "url": "#example-mysterious",
  "type": "Example",
  "number": "3.2",
  "title": "A Mysterious Derivative!",
  "body": " A Mysterious Derivative!  So if we define a function with its variable employed as a limit of integration, like so then we get the derivative of that function so easily it seems like a mystery, . That's it.  For testing purposes, there is a simple Sage Cell here, buried inside an example that should be a knowl (embedded in the page).   We test a Sage cell inside a knowl, which should set the value of a variable that will be available to subsequent cells within the knowl.    Even if you ran the cell at the top of this page, within this knowl the value of the variable c is not known, so the next cell will cause an error.   "
},
{
  "id": "claim-with-cases",
  "level": "2",
  "url": "#claim-with-cases",
  "type": "Claim",
  "number": "3.3",
  "title": "An Equivalent Claim.",
  "body": " An Equivalent Claim   This claim is an equivalence: it is true if and only if it is correct.    Our purpose here is to show how you can structure a proof with cases, such as an equivalence structured with the arrows typically used to demonstrate the two directions involved in the proof, by using the direction attribute on a <case> element.   Nulla non lectus suscipit, bibendum leo quis, dignissim justo. In urna turpis, tincidunt id elementum id, faucibus ac tellus.    Quisque auctor ligula turpis, ut aliquam urna consectetur hendrerit. Aenean porta dolor et justo facilisis feugiat in sed sapien. Nullam porta ex et commodo semper.    Case 3b: The inductive step  A case may also have a title , whose formatting and structure is entirely up to the author. This then becomes the text of a cross-reference, as well.    Why Not Try This?  A <case> (or any other element with a default title) did not always handle title-ending punctuation correctly. So we try an example title with a question mark.    Necessity  If you like, you can have both indications.    No direction, no title, then just a generic title.     Exciting Proof!  We test here that punctuation at the end of the title of a proof is handled correctly.    Exact Proof  This proof should fill exactly three lines (as of defaults in place 2018-12-31) and so the tombstone\/Halmos should be on a fourth line, and then flush right . xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx.   "
},
{
  "id": "claim-with-tfae-cases",
  "level": "2",
  "url": "#claim-with-tfae-cases",
  "type": "Claim",
  "number": "3.4",
  "title": "A List of Equivalent Statements.",
  "body": " A List of Equivalent Statements   The following are equivalent.  This statement is equivalent to all those below.  This statement is equivalent to the statement above and to all those below.  This statement is equivalent to the two statements above and to the statement below.  This statement is equivalent to all those above.      Our purpose here is to show how you can structure a proof with cases to address the circular logic required to prove the equivalence of a list of statements, by using the direction attribute on a <case> element. You should order the list of statements in the order that you would like to prove ``this statement implies the next.''   Here we would prove that the first statement implies the second.    Here we would prove that the second statement implies the third.    The trickiest case  This time we include a title to describe the nature of this case. But we would still need to prove that the third statement implies the last.    Wrap-around  Finally, we would complete the cycle of logic by proving that the last statement implies the first.    "
},
{
  "id": "subsection-second-FTC-15",
  "level": "2",
  "url": "#subsection-second-FTC-15",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " Once again we will prove that the four statements in are equivalent.   Another argument that the first statement implies the second.    And another argument that the second statement implies the third.    Not so tricky this time  Why did we find it so difficult before to prove that the third statement implies the last?    Wrap-around  And once more we complete the cycle of logic.   "
},
{
  "id": "another-claim-with-tfae-cases",
  "level": "2",
  "url": "#another-claim-with-tfae-cases",
  "type": "Claim",
  "number": "3.5",
  "title": "Another List of Equivalent Statements.",
  "body": " Another List of Equivalent Statements   The <ol> that creates the list below does not have marker .  This statement is equivalent to the two below.  This statement is equivalent to both the statement above and to the statement below.  This statement is equivalent to the two above.      You know the drill by now.   Does the first statement imply the second?    The middle case  Does the second statement imply the third?    And finally, does the third imply the first?    "
},
{
  "id": "subsection-second-FTC-19",
  "level": "2",
  "url": "#subsection-second-FTC-19",
  "type": "Proof",
  "number": "3.1.2",
  "title": "",
  "body": "  Does the first statement imply the second?    The middle case  Does the second statement imply the third?    And finally, does the third imply the first?   "
},
{
  "id": "subsection-second-FTC-21",
  "level": "2",
  "url": "#subsection-second-FTC-21",
  "type": "Proof",
  "number": "3.1.3",
  "title": "",
  "body": "  Does the first statement imply the second?    And finally, does the second imply the first?   "
},
{
  "id": "exercise-essay",
  "level": "2",
  "url": "#exercise-essay",
  "type": "Checkpoint",
  "number": "3.6",
  "title": "Essay Question: Compare and Contrast.",
  "body": " Essay Question: Compare and Contrast   Write a short paragraph which compares, and contrasts, the definite and indefinite integral. This is an exercise which sits in the midst of the narrative, so is formatted more like an example or a remark. It can have a hint and a solution, but this one does not. It can have a title, which this one does.    Start writing!     "
},
{
  "id": "example-structured",
  "level": "2",
  "url": "#example-structured",
  "type": "Example",
  "number": "3.7",
  "title": "An Example of Structure.",
  "body": " An Example of Structure   This is an example of an example with a bit more structure. Specifically, the example has a title , as usual, but then has a statement , which is separate from the solution . Why did we implement an example in two ways?    Authors asked for it and it seemed a very natural thing to do, even if we only had an unstructured version for a long time.   "
},
{
  "id": "sample-question",
  "level": "2",
  "url": "#sample-question",
  "type": "Question",
  "number": "3.8",
  "title": "An Example of a Question.",
  "body": " An Example of a Question   Any kind of question can be marked as such with <question> . Or similarly, as a <problem> . They behave identically to example s, such as the one preceding and are numbered along with theorems, examples. etc.    You can have a solution. Or several, even if you don't ask a question.    See?   "
},
{
  "id": "inline-exercise",
  "level": "2",
  "url": "#inline-exercise",
  "type": "Checkpoint",
  "number": "3.9",
  "title": "An Inline Exercise.",
  "body": " An Inline Exercise   There are lots of exercises in this sample article, but mostly they are in special exercise sections. Sometimes you just want to sprinkle some exercises through the narrative. We call these inline exercises , in contrast to divisional exercises . The inline exercises look a bit more like a theorem or definition, with titles and fully-qualified numbers.  These may also have hints, answers and solutions.    A good hint.    42.    If your exercise feels like proving a theorem, then you might want to make some comments, but also clearly delineate which part of the solution is a the complete proof.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.      "
},
{
  "id": "example-math-title",
  "level": "2",
  "url": "#example-math-title",
  "type": "Example",
  "number": "3.10",
  "title": "An Example of with <span class=\"process-math\">\\(\\frac12\\)<\/span> math formula <span class=\"process-math\">\\(\\displaystyle{\\int e^x \\, dx}\\)<\/span> in the title.",
  "body": " An Example of with math formula in the title   Just for testing math in knowls, and also extra whitespace in a <p> .   "
},
{
  "id": "section-interesting-corollary-5-3-8",
  "level": "2",
  "url": "#section-interesting-corollary-5-3-8",
  "type": "Project",
  "number": "3.1",
  "title": "Start Exploring PreTeXt.",
  "body": " Start Exploring PreTeXt  You could grab the minimal.xml file from the examples\/minimal directory and experiment with that.  Projects get their own independent numbering scheme, since they may be central to your textbook, workbook, or lab manual. If you process this sample article with level for project numbering set to 0 then you will get consecutive numbers from the beginning of your book, starting with 1.  "
},
{
  "id": "section-interesting-corollary-5-3-9",
  "level": "2",
  "url": "#section-interesting-corollary-5-3-9",
  "type": "Exploration",
  "number": "3.2",
  "title": "Exploring Explorations.",
  "body": " Exploring Explorations   This is an <exploration> . exploration Other similar possibilities are <project> project , <activity> activity , <task> task , and <investigation> investigation .  Note that projects, activities, explorations, tasks and investigations share the independent numbering scheme, so it is really only intended you use one of these. If you want a variant of the name (  Directed Activity ) you can use the <rename> rename an environment facility ( ).    This is a solution to the exploration. In practice, you might choose to not make this visible for students, but instead include it as part of some guidance you might provide to instructors ( an Instructor's Manual ).   "
},
{
  "id": "activity-with-hint-answer-solution",
  "level": "2",
  "url": "#activity-with-hint-answer-solution",
  "type": "Activity",
  "number": "3.3",
  "title": "Hints, Answers, Solutions.",
  "body": " Hints, Answers, Solutions   This is quite the activity upcoming. This is a prelude authored within the activity element, but visually just prior.    Another variant of these project-like items is to possibly include a <hint> and an <answer> before the <solution> .    Just a little help.    The result, but no help in getting there.    Everything to get it all done, in detail.    This was quite the activity just now. This is a postlude authored within the activity element, but visually just after.   "
},
{
  "id": "note-remark",
  "level": "2",
  "url": "#note-remark",
  "type": "Note",
  "number": "3.11",
  "title": "A Note on Remarks.",
  "body": " A Note on Remarks  <remark> , <convention> , <note> , <observation> and <warning> are designed to hold very simple contents, with no additional structure (no proofs, no solutions, ).  But they do carry a title and a number, can be the target of a cross-reference, and may be optionally knowlized in HTML with the html.knowl.remark processing switch.  And distinctly different from a <note> in a <biblio> A gratuitous footnote to test prior bug confusing this with a <note> in a <biblio> . .  "
},
{
  "id": "exercise-structured",
  "level": "2",
  "url": "#exercise-structured",
  "type": "Checkpoint",
  "number": "3.12",
  "title": "A very structured exercise.",
  "body": " A very structured exercise   This is an over-arching introduction to the whole exercise. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    A super-simple task  This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    A title of a task that has a subtask with an <answer> for the Solutions   This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    A task with a title and an <answer> for the Solutions   A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.    With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.      A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      Three simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First subsubtask. Short paragraph.    A second three-deep subsubtask!  Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First answer. In interdum suscipit ullamcorper.    Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     This is a conclusion where you could summarize the exercise. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   "
},
{
  "id": "project-structured",
  "level": "2",
  "url": "#project-structured",
  "type": "Project",
  "number": "3.4",
  "title": "A very structured project.",
  "body": " A very structured project   The next block is a project, demonstrating the use of the task element to structure its parts. You are reading the prelude now. The project has lots of nonsense words, so we can test spacing the nested items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This is an over-arching introduction to the whole project. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.    With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.      A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      Two simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First subsubtask. Short paragraph.    Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.        Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.      This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    First answer. In interdum suscipit ullamcorper.    Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     This is a conclusion where you could summarize the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This postlude appears visually outside the project, but is authored within, to make clear its attachment to the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   "
},
{
  "id": "example-structured-with-task",
  "level": "2",
  "url": "#example-structured-with-task",
  "type": "Example",
  "number": "3.13",
  "title": "Notation mathématique 2.",
  "body": " Notation mathématique 2   The following <example> , from Elise Desgreniers, is structured with <task> .    Écrivez chacun des exemples suivants avec les conditions pertinentes.     Soit l'ensemble .  On constate que cet ensemble contient uniquement des entiers positifs allant de 1 à 5.  Donc, on peut écrire .         Ce sont des multiples de 3.            Ce sont des nombres impairs.            Ce sont des nombres premiers.            Ce sont des carrés parfaits.            Ce sont des cubes parfaits.       "
},
{
  "id": "section-interesting-corollary-5-3-19",
  "level": "2",
  "url": "#section-interesting-corollary-5-3-19",
  "type": "Technology",
  "number": "3.14",
  "title": "Sample Use of Sage.",
  "body": " Sample Use of Sage  This would be a good place to talk about Sage, including a cell or two.   But you might want to describe how to use some other calculator, or maybe some numerical method.  "
},
{
  "id": "section-interesting-corollary-5-3-20-3",
  "level": "2",
  "url": "#section-interesting-corollary-5-3-20-3",
  "type": "Project",
  "number": "3.5",
  "title": "",
  "body": "  A simple project, no tasks, just an answer.    Here's the answer we are looking for.   "
},
{
  "id": "exercise-test-number",
  "level": "2",
  "url": "#exercise-test-number",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": "  This is an exercise in an Exercises subdivision at the level of a subsubsection. There is no question other than if the numbering is appropriate. Here is a self-referential link: Exercise .  The subsubsection has no title in the source, so one is provided automatically, and will adjust according to the language of the document.    This solution will migrate to a list of solutions in the backmatter. We include a sidebyside as a test.   This is a skinny paragraph which should be just 30% of the width.  And another skinny paragraph which should also be just 30% of the width.    "
},
{
  "id": "exercise-with-tasks",
  "level": "2",
  "url": "#exercise-with-tasks",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": "  An <exercise> can be structured with parts, called <task> . This is the <introduction> .    Do this.    And the other thing.   "
},
{
  "id": "first-reading",
  "level": "2",
  "url": "#first-reading",
  "type": "Reading Question",
  "number": "3.2.4.1",
  "title": "",
  "body": " This is a reading question that you might have a student answer prior to a class session, based on reading part of the book. A quick glance before class can help you tailor class time to the specific needs of your students. The perfect reading question will reveal whether the student has read and understood the material, and will be difficult to answer if they have not. What do you think of that?  "
},
{
  "id": "section-interesting-corollary-5-5-3",
  "level": "2",
  "url": "#section-interesting-corollary-5-5-3",
  "type": "Reading Question",
  "number": "3.2.4.2",
  "title": "",
  "body": " And a second one, with a cross-reference to the first, as a check on numbering: . Reading questions are allowed to have answers, but providing answers misses the point of a reading question, and the answer knowl interacts poorly with the mechanism used to allow students to answer directly in the book. Do you think the schema should ban answers to reading questions?  "
},
{
  "id": "glossary-specialized-3-2",
  "level": "2",
  "url": "#glossary-specialized-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "foobar "
},
{
  "id": "principle-principle",
  "level": "2",
  "url": "#principle-principle",
  "type": "Principle",
  "number": "3.15",
  "title": "The Title Principle.",
  "body": " The Title Principle   It is a fundamental principle that many elements can have a title. Try it and see. If you get better formatting, then it is being recognized. If it looks very plain, check the documentation and perhaps make a feature request.   "
},
{
  "id": "subsection-intro-conclude-4-3",
  "level": "2",
  "url": "#subsection-intro-conclude-4-3",
  "type": "Checkpoint",
  "number": "3.16",
  "title": "",
  "body": "  An inline exercise to examine any clash with divisional exercises below.    An answer so there is something to appear in a <solutions> .   "
},
{
  "id": "subsection-intro-conclude-4-4-2",
  "level": "2",
  "url": "#subsection-intro-conclude-4-4-2",
  "type": "Reading Question",
  "number": "3.6.2.1",
  "title": "",
  "body": "  A mock exercise to appease validation.    An answer so there is something to appear in a <solutions> .   "
},
{
  "id": "subsection-intro-conclude-4-4-3",
  "level": "2",
  "url": "#subsection-intro-conclude-4-4-3",
  "type": "Reading Question",
  "number": "3.6.2.2",
  "title": "",
  "body": "  And a second to help with formatting the division heading.   "
},
{
  "id": "subsection-intro-conclude-4-5-1",
  "level": "2",
  "url": "#subsection-intro-conclude-4-5-1",
  "type": "Exercise",
  "number": "3.6.2.1",
  "title": "",
  "body": "  A mock exercise to appease validation.    An answer so there is something to appear in a <solutions> .   "
},
{
  "id": "subsection-intro-conclude-4-5-2",
  "level": "2",
  "url": "#subsection-intro-conclude-4-5-2",
  "type": "Exercise",
  "number": "3.6.2.2",
  "title": "",
  "body": "  And a second to help with formatting the division heading.   "
},
{
  "id": "outcomes-structures",
  "level": "2",
  "url": "#outcomes-structures",
  "type": "Outcomes",
  "number": "3",
  "title": "Fundamental Structures, Revisited",
  "body": " Fundamental Structures, Revisited   This is a <outcomes> element you are reading, and this is its introduction. This early section has really grown and we have tried to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More, and this is what the cross-references above are pointing to.  Evermore.    This concludes the (incomplete) outcomes for this section, so now we can carry-on to the next section.   "
},
{
  "id": "section-facts-figures-4",
  "level": "2",
  "url": "#section-facts-figures-4",
  "type": "Remark",
  "number": "4.1",
  "title": "",
  "body": " You can Third test footnote gain a greater understanding of derivatives by studying the graphs of functions with their derivatives. Can Fourth test footnote you discern the derivative antiderivative Fifth test footnote relationship in Figure ?  "
},
{
  "id": "figure-function-derivative",
  "level": "2",
  "url": "#figure-function-derivative",
  "type": "Figure",
  "number": "4.2",
  "title": "",
  "body": " A function and its derivative   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes   "
},
{
  "id": "derivatives-8-8",
  "level": "2",
  "url": "#derivatives-8-8",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " Buggy sub-tables    First   One     Second   Two     "
},
{
  "id": "table-euler1",
  "level": "2",
  "url": "#table-euler1",
  "type": "Table",
  "number": "5.2",
  "title": "Euler’s approximation for Duffing’s Equation with <span class=\"process-math\">\\(h = 0.2\\)<\/span>",
  "body": " Euler's approximation for Duffing's Equation with          0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900   "
},
{
  "id": "section-mathematics-4-9",
  "level": "2",
  "url": "#section-mathematics-4-9",
  "type": "Example",
  "number": "6.1",
  "title": "Excessive Display Mathematics.",
  "body": " Excessive Display Mathematics  In print versions, a long run of displayed equations often needs to be broken across pages. If you are reading some other version of this, then there is nothing to see here. But for latex output it could be interesting. First, with no extra effort, this page-long display should break naturally, no matter how the preceding material changes. .  In this version we have turned off page breaking for the entire display, but then allowed a break at every fourth equation, so you should see a reasonably attractive page break right after one of the equations. .  So. Do not take any extra steps and let latex figure out the breaks. If you do not like a break, modify the md or mdn to go back to the AMSmath default behavior and not break at all. Ever. Or rather, go further and modify an individual mrow to suggest that it is a good place for a break.  "
},
{
  "id": "block-samples-3",
  "level": "2",
  "url": "#block-samples-3",
  "type": "Objectives",
  "number": "7",
  "title": "Our goals",
  "body": " Our goals  A minimal <objective> .   Stress test HTML themes  Locally, test objectives   "
},
{
  "id": "block-samples-remark-like-2",
  "level": "2",
  "url": "#block-samples-remark-like-2",
  "type": "Remark",
  "number": "7.1",
  "title": "A title.",
  "body": " A title  A minimal <remark> .  "
},
{
  "id": "block-samples-remark-like-3",
  "level": "2",
  "url": "#block-samples-remark-like-3",
  "type": "Convention",
  "number": "7.2",
  "title": "A title.",
  "body": " A title  A minimal <convention> .  "
},
{
  "id": "block-samples-remark-like-4",
  "level": "2",
  "url": "#block-samples-remark-like-4",
  "type": "Note",
  "number": "7.3",
  "title": "A title.",
  "body": " A title  A minimal <note> .  "
},
{
  "id": "block-samples-remark-like-5",
  "level": "2",
  "url": "#block-samples-remark-like-5",
  "type": "Observation",
  "number": "7.4",
  "title": "A title.",
  "body": " A title  A minimal <observation> .  "
},
{
  "id": "block-samples-remark-like-6",
  "level": "2",
  "url": "#block-samples-remark-like-6",
  "type": "Warning",
  "number": "7.5",
  "title": "A title.",
  "body": " A title  A minimal <warning> .  "
},
{
  "id": "block-samples-remark-like-7",
  "level": "2",
  "url": "#block-samples-remark-like-7",
  "type": "Insight",
  "number": "7.6",
  "title": "A title.",
  "body": " A title  A minimal <insight> .  "
},
{
  "id": "block-samples-example-like-2",
  "level": "2",
  "url": "#block-samples-example-like-2",
  "type": "Example",
  "number": "7.7",
  "title": "A title.",
  "body": " A title  A minimal <example> .  "
},
{
  "id": "block-samples-example-like-3",
  "level": "2",
  "url": "#block-samples-example-like-3",
  "type": "Example",
  "number": "7.8",
  "title": "A title.",
  "body": " A title  A structured <example> .    A structured <example> .   A <hint>  An <answer>  A <solution>   The <conclusion> .  "
},
{
  "id": "block-samples-example-like-4",
  "level": "2",
  "url": "#block-samples-example-like-4",
  "type": "Question",
  "number": "7.9",
  "title": "A title.",
  "body": " A title  A minimal <question> .  "
},
{
  "id": "block-samples-example-like-5",
  "level": "2",
  "url": "#block-samples-example-like-5",
  "type": "Problem",
  "number": "7.10",
  "title": "A title.",
  "body": " A title  A minimal <problem> .  "
},
{
  "id": "block-samples-example-like-6",
  "level": "2",
  "url": "#block-samples-example-like-6",
  "type": "Observation",
  "number": "7.11",
  "title": "A title.",
  "body": " A title  A minimal <observation> .  "
},
{
  "id": "block-samples-example-like-7",
  "level": "2",
  "url": "#block-samples-example-like-7",
  "type": "Warning",
  "number": "7.12",
  "title": "A title.",
  "body": " A title  A minimal <warning> .  "
},
{
  "id": "block-samples-example-like-8",
  "level": "2",
  "url": "#block-samples-example-like-8",
  "type": "Insight",
  "number": "7.13",
  "title": "A title.",
  "body": " A title  A minimal <insight> .  "
},
{
  "id": "block-samples-theorem-like-2",
  "level": "2",
  "url": "#block-samples-theorem-like-2",
  "type": "Theorem",
  "number": "7.14",
  "title": "A title.",
  "body": " A title  A minimal <theorem> .  "
},
{
  "id": "block-samples-theorem-like-3",
  "level": "2",
  "url": "#block-samples-theorem-like-3",
  "type": "Theorem",
  "number": "7.15",
  "title": "A title.",
  "body": " A title  A theorem with a proof.   The proof of the theorem.   "
},
{
  "id": "block-samples-theorem-like-4",
  "level": "2",
  "url": "#block-samples-theorem-like-4",
  "type": "Corollary",
  "number": "7.16",
  "title": "A title.",
  "body": " A title  A minimal <corollary> .  "
},
{
  "id": "block-samples-theorem-like-5",
  "level": "2",
  "url": "#block-samples-theorem-like-5",
  "type": "Lemma",
  "number": "7.17",
  "title": "A title.",
  "body": " A title  A minimal <lemma> .  "
},
{
  "id": "block-samples-theorem-like-6",
  "level": "2",
  "url": "#block-samples-theorem-like-6",
  "type": "Algorithm",
  "number": "7.18",
  "title": "A title.",
  "body": " A title  A minimal <algorithm> .  "
},
{
  "id": "block-samples-theorem-like-7",
  "level": "2",
  "url": "#block-samples-theorem-like-7",
  "type": "Conundrum",
  "number": "7.19",
  "title": "A title.",
  "body": " A title  A minimal <proposition> .  "
},
{
  "id": "block-samples-theorem-like-8",
  "level": "2",
  "url": "#block-samples-theorem-like-8",
  "type": "Claim",
  "number": "7.20",
  "title": "A title.",
  "body": " A title  A minimal <claim> .  "
},
{
  "id": "block-samples-theorem-like-9",
  "level": "2",
  "url": "#block-samples-theorem-like-9",
  "type": "Fact",
  "number": "7.21",
  "title": "A title.",
  "body": " A title  A minimal <fact> .  "
},
{
  "id": "block-samples-theorem-like-10",
  "level": "2",
  "url": "#block-samples-theorem-like-10",
  "type": "Identity",
  "number": "7.22",
  "title": "A title.",
  "body": " A title  A minimal <identity> .  "
},
{
  "id": "block-samples-theorem-like-11",
  "level": "2",
  "url": "#block-samples-theorem-like-11",
  "type": "Proof",
  "number": "7.3.1",
  "title": "A title.",
  "body": " A title  A stand-alone proof.  "
},
{
  "id": "block-samples-axiom-like-2",
  "level": "2",
  "url": "#block-samples-axiom-like-2",
  "type": "Axiom",
  "number": "7.23",
  "title": "A title.",
  "body": " A title  A minimal <axiom> .  "
},
{
  "id": "block-samples-axiom-like-3",
  "level": "2",
  "url": "#block-samples-axiom-like-3",
  "type": "Conjecture",
  "number": "7.24",
  "title": "A title.",
  "body": " A title  A minimal <conjecture> .  "
},
{
  "id": "block-samples-axiom-like-4",
  "level": "2",
  "url": "#block-samples-axiom-like-4",
  "type": "Principle",
  "number": "7.25",
  "title": "A title.",
  "body": " A title  A minimal <principle> .  "
},
{
  "id": "block-samples-axiom-like-5",
  "level": "2",
  "url": "#block-samples-axiom-like-5",
  "type": "Heuristic",
  "number": "7.26",
  "title": "A title.",
  "body": " A title  A minimal <heuristic> .  "
},
{
  "id": "block-samples-axiom-like-6",
  "level": "2",
  "url": "#block-samples-axiom-like-6",
  "type": "Hypothesis",
  "number": "7.27",
  "title": "A title.",
  "body": " A title  A minimal <hypothesis> .  "
},
{
  "id": "block-samples-axiom-like-7",
  "level": "2",
  "url": "#block-samples-axiom-like-7",
  "type": "Assumption",
  "number": "7.28",
  "title": "A title.",
  "body": " A title  A minimal <assumption> .  "
},
{
  "id": "block-samples-definition-like-2",
  "level": "2",
  "url": "#block-samples-definition-like-2",
  "type": "Definition",
  "number": "7.29",
  "title": "A title.",
  "body": " A title  A minimal <definition> .  "
},
{
  "id": "block-samples-computation-like-2",
  "level": "2",
  "url": "#block-samples-computation-like-2",
  "type": "Computation",
  "number": "7.30",
  "title": "A title.",
  "body": " A title  A minimal <computation> .  "
},
{
  "id": "block-samples-computation-like-3",
  "level": "2",
  "url": "#block-samples-computation-like-3",
  "type": "Technology",
  "number": "7.31",
  "title": "A title.",
  "body": " A title  A minimal <technology> .  "
},
{
  "id": "block-samples-computation-like-4",
  "level": "2",
  "url": "#block-samples-computation-like-4",
  "type": "Data",
  "number": "7.32",
  "title": "A title.",
  "body": " A title  A minimal <data> .  "
},
{
  "id": "block-samples-project-like-2",
  "level": "2",
  "url": "#block-samples-project-like-2",
  "type": "Project",
  "number": "7.1",
  "title": "A title.",
  "body": " A title  A minimal <project> .  "
},
{
  "id": "block-samples-project-like-3",
  "level": "2",
  "url": "#block-samples-project-like-3",
  "type": "Activity",
  "number": "7.2",
  "title": "A title.",
  "body": " A title  A minimal <activity> .  "
},
{
  "id": "block-samples-project-like-4",
  "level": "2",
  "url": "#block-samples-project-like-4",
  "type": "Exploration",
  "number": "7.3",
  "title": "A title.",
  "body": " A title  A minimal <exploration> .  "
},
{
  "id": "block-samples-project-like-5",
  "level": "2",
  "url": "#block-samples-project-like-5",
  "type": "Investigation",
  "number": "7.4",
  "title": "A title.",
  "body": " A title  A minimal <investigation> .  "
},
{
  "id": "exercises-null-problem",
  "level": "2",
  "url": "#exercises-null-problem",
  "type": "Exercise",
  "number": "8.2.1",
  "title": "",
  "body": "  No problem here, but the next two are in an exercise group with an introduction and a conclusion, along with an optional title. The two problems of the exercise group should be indented some to indicate the grouping.  N.B. An <exercisegroup> is meant to hold a collection of (short) exercises with common, shared, instructions. Do not use this structure to subdivide an <exercises> division, as you will eventually be disappointed. Instead, use the available, but under development as of 2019-11-02, <subexercises> , which requires a <title> .   "
},
{
  "id": "exercisegroup-two-problems-4",
  "level": "2",
  "url": "#exercisegroup-two-problems-4",
  "type": "Exercise",
  "number": "8.2.2",
  "title": "",
  "body": " , . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line.  We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : .  "
},
{
  "id": "exercises-cosine-derivative",
  "level": "2",
  "url": "#exercises-cosine-derivative",
  "type": "Exercise",
  "number": "8.2.3",
  "title": "",
  "body": " derivative cosine   , .   "
},
{
  "id": "section-further-reading-3-4",
  "level": "2",
  "url": "#section-further-reading-3-4",
  "type": "Exercise",
  "number": "8.2.4",
  "title": "",
  "body": " This isn't really an exercise, but an explanation that the next <exercisegroup> has a title and no <introduction> , which once resulted in some aberrant formatting in latex output.  "
},
{
  "id": "exercisegroup-two-more-problems-3",
  "level": "2",
  "url": "#exercisegroup-two-more-problems-3",
  "type": "Exercise",
  "number": "8.2.5",
  "title": "",
  "body": " , . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line.  We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : .  "
},
{
  "id": "exercisegroup-two-more-problems-4",
  "level": "2",
  "url": "#exercisegroup-two-more-problems-4",
  "type": "Exercise",
  "number": "8.2.6",
  "title": "",
  "body": "  , .   "
},
{
  "id": "section-further-reading-3-6",
  "level": "2",
  "url": "#section-further-reading-3-6",
  "type": "Exercise",
  "number": "8.2.7",
  "title": "",
  "body": " Compute .  "
},
{
  "id": "section-further-reading-3-7",
  "level": "2",
  "url": "#section-further-reading-3-7",
  "type": "Exercise",
  "number": "8.2.8",
  "title": "",
  "body": "  One of the few things you can place inside of mathematics is a fill-in blank. fill-in blank We demonstrate a few scenarios here. See details on syntax in the use is identical within mathematics.  Inside inline math (short, space for ):  Inside inline math (default, space for ):  Inside exponents and subscripts (each is space for the string 12 ). In this case, be sure to wrap your exponents and subscripts in braces, as would be good latex practice anyway:  Inside inline math (too long for this line probably, 40 characters long):  So use inside a displayed equation like this one.  Inside the second line of a multi-line display:  This fillin has the historical characters attribute for a fillin inside math: , which may be more convenient, but may not side properly in places like subscripts, superscripts, fractions, limits of integrals, and so on.    "
},
{
  "id": "exercises-section-multiple-2",
  "level": "2",
  "url": "#exercises-section-multiple-2",
  "type": "Exercise",
  "number": "8.3.1",
  "title": "",
  "body": "  This is not a real exercise, we just want to explain that this is another subsection of exercises, which has two consecutive exercise groups.   "
},
{
  "id": "exercises-section-multiple-3-2",
  "level": "2",
  "url": "#exercises-section-multiple-3-2",
  "type": "Exercise",
  "number": "8.3.2",
  "title": "",
  "body": " Only exercise of first group.  "
},
{
  "id": "exercises-section-multiple-4-2",
  "level": "2",
  "url": "#exercises-section-multiple-4-2",
  "type": "Exercise",
  "number": "8.3.3",
  "title": "",
  "body": " First exercise of second group.  "
},
{
  "id": "exercises-section-multiple-4-3",
  "level": "2",
  "url": "#exercises-section-multiple-4-3",
  "type": "Exercise",
  "number": "8.3.4",
  "title": "",
  "body": " Second exercise of second group.  "
},
{
  "id": "exercises-section-multiple-5-2",
  "level": "2",
  "url": "#exercises-section-multiple-5-2",
  "type": "Exercise",
  "number": "8.3.5",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-3",
  "level": "2",
  "url": "#exercises-section-multiple-5-3",
  "type": "Exercise",
  "number": "8.3.6",
  "title": "",
  "body": "  Addition is associative.   First, add and to get , then add to arrive at .  "
},
{
  "id": "exercises-section-multiple-5-4",
  "level": "2",
  "url": "#exercises-section-multiple-5-4",
  "type": "Exercise",
  "number": "8.3.7",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-5",
  "level": "2",
  "url": "#exercises-section-multiple-5-5",
  "type": "Exercise",
  "number": "8.3.8",
  "title": "",
  "body": " Add seven to eight.   "
},
{
  "id": "exercises-section-multiple-5-6",
  "level": "2",
  "url": "#exercises-section-multiple-5-6",
  "type": "Exercise",
  "number": "8.3.9",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-7",
  "level": "2",
  "url": "#exercises-section-multiple-5-7",
  "type": "Exercise",
  "number": "8.3.10",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-8",
  "level": "2",
  "url": "#exercises-section-multiple-5-8",
  "type": "Exercise",
  "number": "8.3.11",
  "title": "",
  "body": "  Addition is associative.    First, add and to get , then add to arrive at .   A simple argument.   And a bit more.   "
},
{
  "id": "exercises-section-multiple-5-9",
  "level": "2",
  "url": "#exercises-section-multiple-5-9",
  "type": "Exercise",
  "number": "8.3.12",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-10",
  "level": "2",
  "url": "#exercises-section-multiple-5-10",
  "type": "Exercise",
  "number": "8.3.13",
  "title": "",
  "body": " Add seven to eight.   "
},
{
  "id": "exercises-section-multiple-5-11",
  "level": "2",
  "url": "#exercises-section-multiple-5-11",
  "type": "Exercise",
  "number": "8.3.14",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-12",
  "level": "2",
  "url": "#exercises-section-multiple-5-12",
  "type": "Exercise",
  "number": "8.3.15",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-13",
  "level": "2",
  "url": "#exercises-section-multiple-5-13",
  "type": "Exercise",
  "number": "8.3.16",
  "title": "",
  "body": "  Addition is associative.   First, add and to get , then add to arrive at .  "
},
{
  "id": "exercises-section-multiple-5-14",
  "level": "2",
  "url": "#exercises-section-multiple-5-14",
  "type": "Exercise",
  "number": "8.3.17",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-15",
  "level": "2",
  "url": "#exercises-section-multiple-5-15",
  "type": "Exercise",
  "number": "8.3.18",
  "title": "",
  "body": " Add seven to eight.   "
},
{
  "id": "exercises-section-multiple-5-16",
  "level": "2",
  "url": "#exercises-section-multiple-5-16",
  "type": "Exercise",
  "number": "8.3.19",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-17",
  "level": "2",
  "url": "#exercises-section-multiple-5-17",
  "type": "Exercise",
  "number": "8.3.20",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-18",
  "level": "2",
  "url": "#exercises-section-multiple-5-18",
  "type": "Exercise",
  "number": "8.3.21",
  "title": "",
  "body": "  Addition is associative.   First, add and to get , then add to arrive at .  "
},
{
  "id": "exercises-section-multiple-5-19",
  "level": "2",
  "url": "#exercises-section-multiple-5-19",
  "type": "Exercise",
  "number": "8.3.22",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-5-20",
  "level": "2",
  "url": "#exercises-section-multiple-5-20",
  "type": "Exercise",
  "number": "8.3.23",
  "title": "",
  "body": " Add seven to eight.   "
},
{
  "id": "exercises-section-multiple-5-21",
  "level": "2",
  "url": "#exercises-section-multiple-5-21",
  "type": "Exercise",
  "number": "8.3.24",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-section-multiple-6",
  "level": "2",
  "url": "#exercises-section-multiple-6",
  "type": "Exercise",
  "number": "8.3.25",
  "title": "",
  "body": "  Make a table and a graph for the function .                                "
},
{
  "id": "biblio-beezer-fcla-2",
  "level": "2",
  "url": "#biblio-beezer-fcla-2",
  "type": "Note",
  "number": "8.4.3.1",
  "title": "",
  "body": "An online, open-source A gratuitous footnote to test prior bug confusing this with a REMARK-LIKE <note> . offering. "
},
{
  "id": "section-lists-2-18",
  "level": "2",
  "url": "#section-lists-2-18",
  "type": "Definition",
  "number": "9.1",
  "title": "Group.",
  "body": " Group  Group   group definition paragraph initial list  There is a binary operation, denoted .  The operation is associative.  There is an identity element, .  For every element , there is an element (the inverse), such that .   If these conditions are met for a set , then we say is a group .   "
},
{
  "id": "test-second-4",
  "level": "2",
  "url": "#test-second-4",
  "type": "List",
  "number": "9.2",
  "title": "A list of items, some of which contain math",
  "body": " A list of items, some of which contain math    A first list item, containing some text. The next list item will contain only math, with the m tag inline with the li tag.   A list item with text and math , not in a paragraph.    The next two list items will contain, respectively, a list item containing only math, where the math is on a new line, then the same again, but with two new lines, and a list item containing math within a p , first inline, and then after a line break.                "
},
{
  "id": "list-colors-rainbow",
  "level": "2",
  "url": "#list-colors-rainbow",
  "type": "List",
  "number": "9.3",
  "title": "Colors of the Rainbow",
  "body": " Colors of the Rainbow   Because the colors are always in the same order, an ordered list is natural here. The colors change continuously, but are often divided up into large ranges that human perception can easily distinguish.    Red  Orange  Yellow  Green  Blue  Indigo  Violet    So some people use the acronym ROY-G-BIV to remember this sequence.   "
},
{
  "id": "list-to-reference",
  "level": "2",
  "url": "#list-to-reference",
  "type": "List",
  "number": "9.4",
  "title": "A named list of targets",
  "body": " A named list of targets   This is the introduction to this named list, which references an item within, via the hybrid text attribute: . At one time this paragraph was inadvertently centered that bug has been fixed.       A and i  A and ii  A and iii        B and a  B and b  B and c (target of some cross-references)        The next three cross-references point to a list item, just above. It is interesting because the list is named, hence numbered. The global reference uses the full number, while the local reference uses the number from within the list. The hybrid reference recognizes that the target is within the same named list, so the number can be shorter. An identical hybrid cross-reference appears within the <introduction> to this list, an immediately following, but outside the <list> .  Cross-reference within named list ( global ):  Cross-reference within named list ( hybrid ):  Cross-reference within named list ( local ):     C and bullet and 1  C and bullet and 2  C and bullet and 3     C and bullet  C and bullet      "
},
{
  "id": "section-lists-11-2",
  "level": "2",
  "url": "#section-lists-11-2",
  "type": "Exercise",
  "number": "9.10.1",
  "title": "",
  "body": "  This exercise should have several parts, and labels should follow the defaults for second-level lists (since the exercise is numbered according to the top-level default).  Exercise 1, first part.  Exercise 1, second part.  Exercise 1, second part, first refinement.    Exercise 1, third part.    "
},
{
  "id": "section-lists-11-3",
  "level": "2",
  "url": "#section-lists-11-3",
  "type": "Exercise",
  "number": "9.10.2",
  "title": "",
  "body": "   Table Alignment Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC     This exercise (a list item really) has a table first. Default latex aligns it vertically above the exercise number. Placement here tests correcting that alignment.   "
},
{
  "id": "biblio-undetermined-1",
  "level": "2",
  "url": "#biblio-undetermined-1",
  "type": "Note",
  "number": "9.11.1.1",
  "title": "",
  "body": " Here is the annotation and an ordered list as part of that annotation.  Book 1, first part.  Book 1, second part.  Book 1, third part.   "
},
{
  "id": "section-table-calisthenics-5",
  "level": "2",
  "url": "#section-table-calisthenics-5",
  "type": "Table",
  "number": "10.1",
  "title": "Some Colors",
  "body": " Some Colors    Red  Green Green can be a very sick looking color.  Yellow    Blue  White  Pink    "
},
{
  "id": "section-table-calisthenics-8",
  "level": "2",
  "url": "#section-table-calisthenics-8",
  "type": "Figure",
  "number": "10.2",
  "title": "",
  "body": " Polynomial Long Division                                                                "
},
{
  "id": "section-table-calisthenics-10",
  "level": "2",
  "url": "#section-table-calisthenics-10",
  "type": "Table",
  "number": "10.3",
  "title": "Horizontal Alignment Example",
  "body": " Horizontal Alignment Example          1234567890  1234567890  1234567890  1234567890       [First  Second  Third  Fourth     A  B  C  D     1  2  3  4     "
},
{
  "id": "horizontal-rules-table",
  "level": "2",
  "url": "#horizontal-rules-table",
  "type": "Table",
  "number": "10.4",
  "title": "Horizontal Rules Example",
  "body": " Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4     "
},
{
  "id": "section-table-calisthenics-16",
  "level": "2",
  "url": "#section-table-calisthenics-16",
  "type": "Table",
  "number": "10.5",
  "title": "Vertical Rules Example",
  "body": " Vertical Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4     "
},
{
  "id": "section-table-calisthenics-17",
  "level": "2",
  "url": "#section-table-calisthenics-17",
  "type": "Table",
  "number": "10.6",
  "title": "Progressively Thicker Rules Example",
  "body": " Progressively Thicker Rules Example        1111  2222  3333    aaaa  bbbb  cccc    AAAA  BBBB  CCCC    "
},
{
  "id": "section-table-calisthenics-18",
  "level": "2",
  "url": "#section-table-calisthenics-18",
  "type": "Table",
  "number": "10.7",
  "title": "Column Span Example",
  "body": " Column Span Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC    "
},
{
  "id": "section-table-calisthenics-20-1-1-1",
  "level": "2",
  "url": "#section-table-calisthenics-20-1-1-1",
  "type": "Table",
  "number": "10.8",
  "title": "Table Alignment Example",
  "body": " Table Alignment Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC    "
},
{
  "id": "section-table-calisthenics-21",
  "level": "2",
  "url": "#section-table-calisthenics-21",
  "type": "Example",
  "number": "10.9",
  "title": "Example Environment with Leading Table.",
  "body": " Example Environment with Leading Table    Column Spans, No col Elements, Nine Columns     1  2+3  4  5+6+7  8+9    1  2  3  4  5  6  7+8  9    1  2  3  4  5  6  7  8  9     This example tests several things. In latex output, figures, tables, listings and side-by-sides are floats whose placement can migrate, but we have tries to supress this behavior. However, a float that is the first item of an environment (like a theorem or an example) can still float to a position before its title. If that does not happen here, then our additional defenses are working.  This example also checks that the total number of columns is correctly computed from the first row, which features several colspan attributes.  "
},
{
  "id": "table-minimal",
  "level": "2",
  "url": "#table-minimal",
  "type": "Table",
  "number": "10.11",
  "title": "One entry table",
  "body": " One entry table    One    "
},
{
  "id": "table-time-units",
  "level": "2",
  "url": "#table-time-units",
  "type": "Table",
  "number": "10.12",
  "title": "Time Units",
  "body": " Time Units        Unit  Stands For  Definition  Roughly     second  the duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom  an extraneous paragraph just to demonstrate the inter-paragraph formatting.  the time it takes you to say the phrase differential calculus     minute  exactly seconds  how long it takes to microwave a full dinner plate from the refrigerator     hour  exactly seconds; exaclty minutes  the length of one episode of a premium cable television show    "
},
{
  "id": "table-multiline-cells",
  "level": "2",
  "url": "#table-multiline-cells",
  "type": "Table",
  "number": "10.13",
  "title": "<abbr class=\"abbreviation\">Dr.<\/abbr> Seuss lines",
  "body": " Dr. Seuss lines     One Fish  Two Fish  Red Fish  Blue Fish    I am the Lorax.  I speak for the trees.  Self-referential:    Look at me!  Look at me!  Look at me NOW!  It is fun to have fun.  But you have  to know how.     "
},
{
  "id": "section-table-calisthenics-29",
  "level": "2",
  "url": "#section-table-calisthenics-29",
  "type": "Table",
  "number": "10.14",
  "title": "Table Torture Test",
  "body": " Table Torture Test                     Cell too wide     Lf md  Lef mid par cel  Rt md  Rig mid par cel  Cn md  Cen mid par cel  Js md  Jus mid par cel jus mid par cel     Colspan=2 lef mid with lines  Colspan=3 rig mid  Lines Between Par  Lines Between No Par  Par in row with lines     L t  Lef top par cel  R t  Rig top par cel  C t  Cen top par cel  J t  Jus top par cel jus top par cel     L b  Lef bot par cel  R b  Rig bot par cel  C b  Cen bot par cel  J b  Jus bot par cel jus bot par cel     Colspan=3 lef bot  Colspan=2 rig bot with lines  Lines Under Par  Lines Under No Par  Par in row with lines     "
},
{
  "id": "table-consitution-text",
  "level": "2",
  "url": "#table-consitution-text",
  "type": "Figure",
  "number": "10.15",
  "title": "",
  "body": " Some text from the US Constitution       A1.S1  All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.  Should be 50% of 45% except perhaps on small screens.        A1.S2.C1  The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.  Should be 50% of 55% except perhaps on small screens.     "
},
{
  "id": "table-latex-problems",
  "level": "2",
  "url": "#table-latex-problems",
  "type": "Table",
  "number": "10.16",
  "title": "Problematic Table Cells for <span class=\"latex-logo\">L<span class=\"A\">a<\/span>T<span class=\"E\">e<\/span>X<\/span>",
  "body": " Problematic Table Cells for latex    1  09az%-._~:\/?#[]@!$&'()*+,;=  09az%-._~:\/?#[]@!$&'()*+,;=    2  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=    3      "
},
{
  "id": "section-table-calisthenics-35",
  "level": "2",
  "url": "#section-table-calisthenics-35",
  "type": "Table",
  "number": "10.17",
  "title": "No Headers",
  "body": " No Headers    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-36",
  "level": "2",
  "url": "#section-table-calisthenics-36",
  "type": "Table",
  "number": "10.18",
  "title": "One Row Header",
  "body": " One Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-37",
  "level": "2",
  "url": "#section-table-calisthenics-37",
  "type": "Table",
  "number": "10.19",
  "title": "One Row Header, Multiline",
  "body": " One Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-38",
  "level": "2",
  "url": "#section-table-calisthenics-38",
  "type": "Table",
  "number": "10.20",
  "title": "Two Row Headers",
  "body": " Two Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-39",
  "level": "2",
  "url": "#section-table-calisthenics-39",
  "type": "Table",
  "number": "10.21",
  "title": "One Vertical Row Header",
  "body": " One Vertical Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-40",
  "level": "2",
  "url": "#section-table-calisthenics-40",
  "type": "Table",
  "number": "10.22",
  "title": "One Vertical Row Header, Multiline",
  "body": " One Vertical Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-41",
  "level": "2",
  "url": "#section-table-calisthenics-41",
  "type": "Table",
  "number": "10.23",
  "title": "Two Vertical Row Headers",
  "body": " Two Vertical Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-42",
  "level": "2",
  "url": "#section-table-calisthenics-42",
  "type": "Table",
  "number": "10.24",
  "title": "One Row Header, with Rules",
  "body": " One Row Header, with Rules    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-43",
  "level": "2",
  "url": "#section-table-calisthenics-43",
  "type": "Table",
  "number": "10.25",
  "title": "One Row Header, Multiline, with Rules",
  "body": " One Row Header, Multiline, with Rules    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-45",
  "level": "2",
  "url": "#section-table-calisthenics-45",
  "type": "Table",
  "number": "10.26",
  "title": "Two Row Header, Many Rules",
  "body": " Two Row Header, Many Rules        State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-49",
  "level": "2",
  "url": "#section-table-calisthenics-49",
  "type": "Table",
  "number": "10.27",
  "title": "A Lot of Colors",
  "body": " A Lot of Colors    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    "
},
{
  "id": "section-table-calisthenics-54",
  "level": "2",
  "url": "#section-table-calisthenics-54",
  "type": "Table",
  "number": "10.28",
  "title": "A Lot of Colors, Breaking",
  "body": " A Lot of Colors, Breaking    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    "
},
{
  "id": "horizontal-rules-breakable-table",
  "level": "2",
  "url": "#horizontal-rules-breakable-table",
  "type": "Table",
  "number": "10.29",
  "title": "Horizontal Rules Example",
  "body": " Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4     "
},
{
  "id": "program-activecode-python",
  "level": "2",
  "url": "#program-activecode-python",
  "type": "Listing",
  "number": "11.1",
  "title": "An interactive Python program, using <span class=\"booktitle\">Runestone<\/span>",
  "body": " An interactive Python program, using Runestone   print(\"Hello, World!\")   "
},
{
  "id": "program-activecode-python-no-codelens",
  "level": "2",
  "url": "#program-activecode-python-no-codelens",
  "type": "Listing",
  "number": "11.2",
  "title": "An interactive Python program without codelens.",
  "body": " An interactive Python program without codelens.   print(\"Hello, World!\")   "
},
{
  "id": "program-codelens-python",
  "level": "2",
  "url": "#program-codelens-python",
  "type": "Listing",
  "number": "11.3",
  "title": "A Python program, stepable with CodeLens",
  "body": " A Python program, stepable with CodeLens   print('Hello, World!')   "
},
{
  "id": "coding-exercise-partial-two",
  "level": "2",
  "url": "#coding-exercise-partial-two",
  "type": "Activity",
  "number": "11.1",
  "title": "Activity Coding Exercise.",
  "body": " Activity Coding Exercise   Similar to above, but now as a complete Python program inside an <activity> . This demonstrates the possibility to use any project-like block ( <project> , <activity> , <exploration> , <investigation> ), but not in the case when structured with <task> .    for i in range(10): print(i)   We're still not really sure.  "
},
{
  "id": "self-referential-tabular-xref",
  "level": "2",
  "url": "#self-referential-tabular-xref",
  "type": "Table",
  "number": "12.1",
  "title": "Self-referential Xref In a table",
  "body": " Self-referential Xref In a table    A  B  C  D     B  C  D    "
},
{
  "id": "section-cross-referencing-26",
  "level": "2",
  "url": "#section-cross-referencing-26",
  "type": "Figure",
  "number": "12.2",
  "title": "",
  "body": " Xref Inside MathJAX     "
},
{
  "id": "section-internationalization-6-3",
  "level": "2",
  "url": "#section-internationalization-6-3",
  "type": "Table",
  "number": "13.1",
  "title": "Basic Latin, Regular",
  "body": " Basic Latin, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~    "
},
{
  "id": "section-internationalization-7-3",
  "level": "2",
  "url": "#section-internationalization-7-3",
  "type": "Table",
  "number": "13.2",
  "title": "Latin-1 Supplement, Regular",
  "body": " Latin-1 Supplement, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_   ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ   "
},
{
  "id": "section-internationalization-8-3",
  "level": "2",
  "url": "#section-internationalization-8-3",
  "type": "Table",
  "number": "13.3",
  "title": "Basic Latin, Monospace",
  "body": " Basic Latin, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~    "
},
{
  "id": "section-internationalization-8-6",
  "level": "2",
  "url": "#section-internationalization-8-6",
  "type": "Table",
  "number": "13.4",
  "title": "Latin-1 Supplement, Monospace",
  "body": " Latin-1 Supplement, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_  ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ   "
},
{
  "id": "section-internationalization-10",
  "level": "2",
  "url": "#section-internationalization-10",
  "type": "Table",
  "number": "13.5",
  "title": "Alignment Test",
  "body": " Alignment Test   0123456789  9876543210  iiiiiiiiii  mmmmmmmmmm   "
},
{
  "id": "listing-c-hello",
  "level": "2",
  "url": "#listing-c-hello",
  "type": "Listing",
  "number": "15.1",
  "title": "C Version of “Hello, World!”",
  "body": " C Version of Hello, World!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "program-line-numbers",
  "level": "2",
  "url": "#program-line-numbers",
  "type": "Listing",
  "number": "15.2",
  "title": "A static Java program with line numbers",
  "body": " A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "program-highlight-lines",
  "level": "2",
  "url": "#program-highlight-lines",
  "type": "Listing",
  "number": "15.3",
  "title": "A static Java program with line numbers",
  "body": " A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "algorithm-sieve-eratosthenes",
  "level": "2",
  "url": "#algorithm-sieve-eratosthenes",
  "type": "Algorithm",
  "number": "15.4",
  "title": "Sieve of Eratosthenes.",
  "body": " Sieve of Eratosthenes   On input of a positive integer n this algorithm will compute all the prime numbers up to, and including, n . It was named for Eratosthenes of Cyrene ( 276 BC 195\/194 BC) by Nicomachus ( 60 120 CE) in Introduction to Arithmetic . ( Wikipedia , 2015)  Input: n  Form the list of all integers from 2 to n  Set p = 2  While p < sqrt(n)  If present, remove from the list multiples 2p, 3p, ...  If p is now the last element of the list, stop  Otherwise, set p to the element of the list immediately after current p    Output: the remaining elements of the list     Any element removed is a non-trivial product of two integers and hence composite. So no prime is is ever removed from the list.  Each composite number is a multiple of some prime, and since no prime is ever removed, each composite will be removed. Hence the removed elements are precisely the set of composite numbers in the list and thus the remainder are precisely the primes on the list.   "
},
{
  "id": "theorem-detached",
  "level": "2",
  "url": "#theorem-detached",
  "type": "Theorem",
  "number": "15.5",
  "title": "",
  "body": "  This is a spurious theorem to break up the run of consecutive listing so we might test the effect.   "
},
{
  "id": "section-programs-26",
  "level": "2",
  "url": "#section-programs-26",
  "type": "Proof",
  "number": "15.1",
  "title": "",
  "body": " This is a proof that is authored detached. It is not associated with the theorem above in a way other than simply following it.  "
},
{
  "id": "console-raspberry-pi",
  "level": "2",
  "url": "#console-raspberry-pi",
  "type": "Listing",
  "number": "15.6",
  "title": "Console Session: <code class=\"code-inline tex2jax_ignore\">int<\/code> and <code class=\"code-inline tex2jax_ignore\">float<\/code>",
  "body": " Console Session: int and float   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "console-raspberry-pi-multi",
  "level": "2",
  "url": "#console-raspberry-pi-multi",
  "type": "Listing",
  "number": "15.7",
  "title": "Console Session: <code class=\"code-inline tex2jax_ignore\">int<\/code> and <code class=\"code-inline tex2jax_ignore\">float<\/code> (multi-line input)",
  "body": " Console Session: int and float (multi-line input)   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "section-programs-37",
  "level": "2",
  "url": "#section-programs-37",
  "type": "Listing",
  "number": "15.8",
  "title": "Console Session: problematic <span class=\"latex-logo\">L<span class=\"A\">a<\/span>T<span class=\"E\">e<\/span>X<\/span> characters",
  "body": " Console Session: problematic latex characters   A backslash \\ here  A backslash \\ here  A begin group { here  A begin group { here  An end group } here  An end group } here  An open escape sequence (* here  An open escape sequence (* here  An end escape sequence *) here  An end escape sequence *) here  Some quotation marks ` ' \" here  Some quotation marks ` ' \" here  The rest & % $ # _ ~ ^ of LaTeX  The rest & % $ # _ ~ ^ of LaTeX  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß   "
},
{
  "id": "section-programs-39",
  "level": "2",
  "url": "#section-programs-39",
  "type": "Listing",
  "number": "15.9",
  "title": "A longer program listing",
  "body": " A longer program listing   @ structPass2.s @ Allocates two structs and assigns a value to each field @ in each struct, then displays the values. @ Bob Plantz - 6 July 2016 @ Constants for assembler .include \"theTag_struct.s\" @ theTag struct defs. .equ y,-28 @ y struct .equ x,-16 @ x struct .equ locals,28 @ space for the structs @ Constant program data .section .rodata .align 2 displayX: .asciz \"x fields:\\n\" displayY: .asciz \"y fields:\\n\" dispAChar: .asciz \" aChar = \" dispAnInt: .asciz \" anInt = \" dispOtherChar: .asciz \" anotherChar = \" @ The program .text .align 2 .global main .type main, %function main: stmfd sp!, {r4, fp, lr} @ save caller's info add fp, sp, #8 @ our frame pointer sub sp, sp, #locals @ for the structs @ fill the x struct add r0, fp, #x @ address of x struct mov r1, #'1 mov r2, #456 mov r3, #'2 bl loadStruct @ fill the y struct add r0, fp, #y @ address of y struct mov r1, #'a mov r2, #123 mov r3, #'b bl loadStruct @ display x struct add r4, fp, #x @ address of x struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine @ display y struct add r4, fp, #y @ address of y struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine mov r0, #0 @ return 0; sub sp, fp, #8 @ restore sp ldmfd sp!, {r4, fp, pc} @ restore and return .align 2 @ addresses of messages displayXaddr: .word displayX displayYaddr: .word displayY dispACharAddr: .word dispAChar dispAnIntAddr: .word dispAnInt dispOtherCharAddr: .word dispOtherChar   "
},
{
  "id": "section-side-by-side-2-2",
  "level": "2",
  "url": "#section-side-by-side-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "panels "
},
{
  "id": "fig-sidebyside-global",
  "level": "2",
  "url": "#fig-sidebyside-global",
  "type": "Figure",
  "number": "17.1",
  "title": "",
  "body": " Side-by-Side, with figures as children, automatic margin      a white square outlined in blue covered by a black X         "
},
{
  "id": "section-side-by-side-3-7",
  "level": "2",
  "url": "#section-side-by-side-3-7",
  "type": "Figure",
  "number": "17.2",
  "title": "",
  "body": " Side-by-Side, with figures as children, margin set to zero    width=50%     width=25%      "
},
{
  "id": "section-side-by-side-3-8",
  "level": "2",
  "url": "#section-side-by-side-3-8",
  "type": "Figure",
  "number": "17.3",
  "title": "",
  "body": " Widths calculated automatically, all defaults                "
},
{
  "id": "regular-figure",
  "level": "2",
  "url": "#regular-figure",
  "type": "Figure",
  "number": "17.4",
  "title": "",
  "body": " Interior figure   "
},
{
  "id": "another-regular-figure",
  "level": "2",
  "url": "#another-regular-figure",
  "type": "Figure",
  "number": "17.5",
  "title": "",
  "body": " Regular numbering   "
},
{
  "id": "yet-another-regular-figure",
  "level": "2",
  "url": "#yet-another-regular-figure",
  "type": "Figure",
  "number": "17.6",
  "title": "",
  "body": " Regular numbering   "
},
{
  "id": "figure-double-image",
  "level": "2",
  "url": "#figure-double-image",
  "type": "Figure",
  "number": "17.7",
  "title": "",
  "body": " Two equally-spaced (identical) images      "
},
{
  "id": "section-side-by-side-5-3",
  "level": "2",
  "url": "#section-side-by-side-5-3",
  "type": "Table",
  "number": "17.8",
  "title": "<code class=\"code-inline tex2jax_ignore\">sidebyside<\/code> and <code class=\"code-inline tex2jax_ignore\">figure<\/code> interactions",
  "body": " sidebyside and figure interactions    Outer Figure Inner Figure Effect    Absent Absent Layout only, no numbers nor captions    Absent Present Numbers and captions on figure(s)    Present Absent Number and overall caption    Present Present Number and overall caption, sub-numbers and captions on figure(s)    "
},
{
  "id": "section-side-by-side-6-3-1",
  "level": "2",
  "url": "#section-side-by-side-6-3-1",
  "type": "Figure",
  "number": "17.9",
  "title": "",
  "body": " Middle   "
},
{
  "id": "section-side-by-side-6-3-2",
  "level": "2",
  "url": "#section-side-by-side-6-3-2",
  "type": "Figure",
  "number": "17.10",
  "title": "",
  "body": " Top   "
},
{
  "id": "section-side-by-side-6-3-3",
  "level": "2",
  "url": "#section-side-by-side-6-3-3",
  "type": "Figure",
  "number": "17.11",
  "title": "",
  "body": " Middle   "
},
{
  "id": "text-next-to-figure",
  "level": "2",
  "url": "#text-next-to-figure",
  "type": "Figure",
  "number": "17.12",
  "title": "",
  "body": " Text next to a figure   "
},
{
  "id": "section-side-by-side-8-5-2",
  "level": "2",
  "url": "#section-side-by-side-8-5-2",
  "type": "Figure",
  "number": "17.13",
  "title": "",
  "body": " tex Work Flow            "
},
{
  "id": "table-sidebyside-global",
  "level": "2",
  "url": "#table-sidebyside-global",
  "type": "Figure",
  "number": "17.14",
  "title": "",
  "body": " Side-by-Side, with tables as children    width=50%        1111  2222    aaaa  bbbb    AAAA  BBBB      width=25%        1111  2222    aaaa  bbbb    AAAA  BBBB      "
},
{
  "id": "section-side-by-side-9-4",
  "level": "2",
  "url": "#section-side-by-side-9-4",
  "type": "Figure",
  "number": "17.15",
  "title": "",
  "body": " Widths can be calculated automatically    Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB      Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB      "
},
{
  "id": "table-regular-fig1",
  "level": "2",
  "url": "#table-regular-fig1",
  "type": "Table",
  "number": "17.16",
  "title": "",
  "body": "        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "table-regular-fig2",
  "level": "2",
  "url": "#table-regular-fig2",
  "type": "Table",
  "number": "17.17",
  "title": "",
  "body": "        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "table-regular-fig3",
  "level": "2",
  "url": "#table-regular-fig3",
  "type": "Table",
  "number": "17.18",
  "title": "",
  "body": "        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "table-next-figure",
  "level": "2",
  "url": "#table-next-figure",
  "type": "Table",
  "number": "17.19",
  "title": "Table next to a Figure",
  "body": " Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "figure-next-table",
  "level": "2",
  "url": "#figure-next-table",
  "type": "Figure",
  "number": "17.20",
  "title": "",
  "body": " Figure next to a Table   "
},
{
  "id": "figure-table-captioned",
  "level": "2",
  "url": "#figure-table-captioned",
  "type": "Figure",
  "number": "17.21",
  "title": "",
  "body": " Figure and Table, with overall caption, hence sub-captioned    Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB       Figure next to a Table     "
},
{
  "id": "section-side-by-side-11-3-1",
  "level": "2",
  "url": "#section-side-by-side-11-3-1",
  "type": "Table",
  "number": "17.22",
  "title": "Table next to text",
  "body": " Table next to text        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "section-side-by-side-13-3",
  "level": "2",
  "url": "#section-side-by-side-13-3",
  "type": "Figure",
  "number": "17.23",
  "title": "",
  "body": " Two named lists    Sea Life   Dr. Seuss again.    One fish  Two fish Not fishes  Red fish  Blue fish     Color Shades  colors shades   Blue in many shades  Light  Navy  Royal   Red  Maroon  Pink  Shocking     This ends our example.     "
},
{
  "id": "section-side-by-side-13-5-1",
  "level": "2",
  "url": "#section-side-by-side-13-5-1",
  "type": "List",
  "number": "17.24",
  "title": "Sea Life",
  "body": " Sea Life   Dr. Seuss again.    One fish No more fishes  Two fish  Red fish  Blue fish   "
},
{
  "id": "color-list-as-panel-in-sbs",
  "level": "2",
  "url": "#color-list-as-panel-in-sbs",
  "type": "List",
  "number": "17.25",
  "title": "Color Shades",
  "body": " Color Shades  colors shades   Blue  Light  Navy  Royal   Red a really nice color  Maroon  Pink  Shocking     This ends our example.   "
},
{
  "id": "stacking-side-by-side-11",
  "level": "2",
  "url": "#stacking-side-by-side-11",
  "type": "Figure",
  "number": "17.26",
  "title": "",
  "body": " Experimental results collected in a figure           0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900     This set of values and this plot have nothing to do with each other. You'll recognize that they've been liberated from earlier in this work.  Step back and simply examine how the pieces all fit together within a <figure> .    "
},
{
  "id": "subsection-sbs-other-panels-7",
  "level": "2",
  "url": "#subsection-sbs-other-panels-7",
  "type": "Figure",
  "number": "17.27",
  "title": "",
  "body": " Hello, World! in Pascal and C++    program HelloWorld;  begin  WriteLn('Hello, world!');  end.   #include int main() { std::cout << \"Hello, world!\"; return 0; }   "
},
{
  "id": "subsection-sbs-other-panels-8",
  "level": "2",
  "url": "#subsection-sbs-other-panels-8",
  "type": "Figure",
  "number": "17.28",
  "title": "",
  "body": " A graph defined by data (from Keller and Trotter's Applied Combinatorics )   graph1.txt 9 6 2 1 5 1 7 6 8 9 1 4 3 5 7 1 3 5 9 7 9    "
},
{
  "id": "subsection-sbsgroup-3",
  "level": "2",
  "url": "#subsection-sbsgroup-3",
  "type": "Figure",
  "number": "17.29",
  "title": "",
  "body": " Overall SBS Group    One.  Two.  Three.    Four.  Five.  Six.    "
},
{
  "id": "subsection-sbsgroup-8-1-1",
  "level": "2",
  "url": "#subsection-sbsgroup-8-1-1",
  "type": "Figure",
  "number": "17.30",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-1-2",
  "level": "2",
  "url": "#subsection-sbsgroup-8-1-2",
  "type": "Figure",
  "number": "17.31",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-1-3",
  "level": "2",
  "url": "#subsection-sbsgroup-8-1-3",
  "type": "Figure",
  "number": "17.32",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-1-4",
  "level": "2",
  "url": "#subsection-sbsgroup-8-1-4",
  "type": "Figure",
  "number": "17.33",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-1",
  "level": "2",
  "url": "#subsection-sbsgroup-8-2-1",
  "type": "Figure",
  "number": "17.34",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-2",
  "level": "2",
  "url": "#subsection-sbsgroup-8-2-2",
  "type": "Figure",
  "number": "17.35",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-3",
  "level": "2",
  "url": "#subsection-sbsgroup-8-2-3",
  "type": "Figure",
  "number": "17.36",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-4",
  "level": "2",
  "url": "#subsection-sbsgroup-8-2-4",
  "type": "Figure",
  "number": "17.37",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-1",
  "level": "2",
  "url": "#subsection-sbsgroup-8-3-1",
  "type": "Figure",
  "number": "17.38",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-2",
  "level": "2",
  "url": "#subsection-sbsgroup-8-3-2",
  "type": "Figure",
  "number": "17.39",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-3",
  "level": "2",
  "url": "#subsection-sbsgroup-8-3-3",
  "type": "Figure",
  "number": "17.40",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-4",
  "level": "2",
  "url": "#subsection-sbsgroup-8-3-4",
  "type": "Figure",
  "number": "17.41",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-10",
  "level": "2",
  "url": "#subsection-sbsgroup-10",
  "type": "Figure",
  "number": "17.42",
  "title": "",
  "body": " Twelve images, arranged in a grid                                                          "
},
{
  "id": "subsection-sbsgroup-12-1-1",
  "level": "2",
  "url": "#subsection-sbsgroup-12-1-1",
  "type": "Figure",
  "number": "17.43",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-1-2",
  "level": "2",
  "url": "#subsection-sbsgroup-12-1-2",
  "type": "Figure",
  "number": "17.44",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-1-3",
  "level": "2",
  "url": "#subsection-sbsgroup-12-1-3",
  "type": "Figure",
  "number": "17.45",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-1-4",
  "level": "2",
  "url": "#subsection-sbsgroup-12-1-4",
  "type": "Figure",
  "number": "17.46",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-1",
  "level": "2",
  "url": "#subsection-sbsgroup-12-2-1",
  "type": "Figure",
  "number": "17.47",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-2",
  "level": "2",
  "url": "#subsection-sbsgroup-12-2-2",
  "type": "Figure",
  "number": "17.48",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-3",
  "level": "2",
  "url": "#subsection-sbsgroup-12-2-3",
  "type": "Figure",
  "number": "17.49",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-4",
  "level": "2",
  "url": "#subsection-sbsgroup-12-2-4",
  "type": "Figure",
  "number": "17.50",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-1",
  "level": "2",
  "url": "#subsection-sbsgroup-12-3-1",
  "type": "Figure",
  "number": "17.51",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-2",
  "level": "2",
  "url": "#subsection-sbsgroup-12-3-2",
  "type": "Figure",
  "number": "17.52",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-3",
  "level": "2",
  "url": "#subsection-sbsgroup-12-3-3",
  "type": "Figure",
  "number": "17.53",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-4",
  "level": "2",
  "url": "#subsection-sbsgroup-12-3-4",
  "type": "Figure",
  "number": "17.54",
  "title": "",
  "body": "   "
},
{
  "id": "tabelle_classi_di_resto",
  "level": "2",
  "url": "#tabelle_classi_di_resto",
  "type": "Figure",
  "number": "17.55",
  "title": "",
  "body": " Tabelle delle operazioni per                                    "
},
{
  "id": "section-side-by-side-18-3",
  "level": "2",
  "url": "#section-side-by-side-18-3",
  "type": "Activity",
  "number": "17.1",
  "title": "",
  "body": "   Here is text block 1  Here is text block 2    "
},
{
  "id": "section-side-by-side-18-4",
  "level": "2",
  "url": "#section-side-by-side-18-4",
  "type": "Example",
  "number": "17.56",
  "title": "",
  "body": "   Here is text block 1  Here is text block 2    "
},
{
  "id": "section-side-by-side-18-6",
  "level": "2",
  "url": "#section-side-by-side-18-6",
  "type": "Example",
  "number": "17.57",
  "title": "",
  "body": "    Here is text block 1  Here is text block 2    Here is text block 3  Here is text block 4     "
},
{
  "id": "figure-traditional",
  "level": "2",
  "url": "#figure-traditional",
  "type": "Figure",
  "number": "17.58",
  "title": "",
  "body": " A traditional figure   "
},
{
  "id": "section-open-problems-3",
  "level": "2",
  "url": "#section-open-problems-3",
  "type": "Open Problem",
  "number": "M.N",
  "title": "",
  "body": "  Solve the Riemann Hypothesis Footnotes were once incomplete on open problems.  and provide a short proof of Fermat's Last Theorem.   "
},
{
  "id": "section-atomic-items-2-1",
  "level": "2",
  "url": "#section-atomic-items-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "atomic "
},
{
  "id": "atomic-image-12",
  "level": "2",
  "url": "#atomic-image-12",
  "type": "Figure",
  "number": "20.1",
  "title": "",
  "body": " New Zealand Landscape   "
},
{
  "id": "atomic-image-14",
  "level": "2",
  "url": "#atomic-image-14",
  "type": "Figure",
  "number": "20.2",
  "title": "",
  "body": " New Zealand Landscape   "
},
{
  "id": "atomic-image-16-1",
  "level": "2",
  "url": "#atomic-image-16-1",
  "type": "Figure",
  "number": "20.3",
  "title": "",
  "body": " NZ Landscape   "
},
{
  "id": "atomic-image-16-2",
  "level": "2",
  "url": "#atomic-image-16-2",
  "type": "Figure",
  "number": "20.4",
  "title": "",
  "body": " New Zealand Terrascape   "
},
{
  "id": "atomic-image-18",
  "level": "2",
  "url": "#atomic-image-18",
  "type": "Figure",
  "number": "20.5",
  "title": "",
  "body": " Amalgamation of Scapes    NZ Landscape     New Zealand Terrascape     "
},
{
  "id": "atomic-image-21",
  "level": "2",
  "url": "#atomic-image-21",
  "type": "Figure",
  "number": "20.6",
  "title": "",
  "body": " Rotated Images    rotate=\"180\"     rotate=\"15\"    "
},
{
  "id": "propulsion_system2",
  "level": "2",
  "url": "#propulsion_system2",
  "type": "Figure",
  "number": "20.7",
  "title": "",
  "body": " This landscape figure will be rotated so the long edge is vertical, and will appear on its own page in print PDF output.   "
},
{
  "id": "rotated-fig-with-sbs",
  "level": "2",
  "url": "#rotated-fig-with-sbs",
  "type": "Figure",
  "number": "20.8",
  "title": "",
  "body": " Wide figure containing a sidebyside containing a rotated image. This will be rotated and appear on its own page in print PDF output.    Quack     Propulsion System     "
},
{
  "id": "atomic-image-25",
  "level": "2",
  "url": "#atomic-image-25",
  "type": "Checkpoint",
  "number": "20.9",
  "title": "",
  "body": "           "
},
{
  "id": "atomic-image-26-1",
  "level": "2",
  "url": "#atomic-image-26-1",
  "type": "Exercise",
  "number": "20.1.1",
  "title": "",
  "body": "           "
},
{
  "id": "atomic-image-26-2-1",
  "level": "2",
  "url": "#atomic-image-26-2-1",
  "type": "Exercise",
  "number": "20.1.2",
  "title": "",
  "body": "    "
},
{
  "id": "atomic-image-26-2-2",
  "level": "2",
  "url": "#atomic-image-26-2-2",
  "type": "Exercise",
  "number": "20.1.3",
  "title": "",
  "body": "    "
},
{
  "id": "atomic-video-19",
  "level": "2",
  "url": "#atomic-video-19",
  "type": "Figure",
  "number": "20.10",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "atomic-video-21",
  "level": "2",
  "url": "#atomic-video-21",
  "type": "Figure",
  "number": "20.11",
  "title": "",
  "body": " Pre-Roll Countdown   "
},
{
  "id": "atomic-video-23",
  "level": "2",
  "url": "#atomic-video-23",
  "type": "Figure",
  "number": "20.12",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "atomic-video-25",
  "level": "2",
  "url": "#atomic-video-25",
  "type": "Figure",
  "number": "20.13",
  "title": "",
  "body": " Pre-Roll Countdown   "
},
{
  "id": "atomic-video-27-1",
  "level": "2",
  "url": "#atomic-video-27-1",
  "type": "Figure",
  "number": "20.14",
  "title": "",
  "body": " Pre-Roll Countdown   "
},
{
  "id": "atomic-video-27-2",
  "level": "2",
  "url": "#atomic-video-27-2",
  "type": "Figure",
  "number": "20.15",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "atomic-video-29",
  "level": "2",
  "url": "#atomic-video-29",
  "type": "Figure",
  "number": "20.16",
  "title": "",
  "body": " Amalgamation of Videos    Pre-Roll Countdown     University of Puget Sound Promotional Video     "
},
{
  "id": "atomic-program-18",
  "level": "2",
  "url": "#atomic-program-18",
  "type": "Listing",
  "number": "20.17",
  "title": "Hello, World! in C",
  "body": " Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "atomic-program-19",
  "level": "2",
  "url": "#atomic-program-19",
  "type": "Listing",
  "number": "20.18",
  "title": "A console session on a Raspberry Pi",
  "body": " A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "atomic-program-21",
  "level": "2",
  "url": "#atomic-program-21",
  "type": "Listing",
  "number": "20.19",
  "title": "Hello, World! in C",
  "body": " Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "atomic-program-22",
  "level": "2",
  "url": "#atomic-program-22",
  "type": "Listing",
  "number": "20.20",
  "title": "A console session on a Raspberry Pi",
  "body": " A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "atomic-program-26",
  "level": "2",
  "url": "#atomic-program-26",
  "type": "Figure",
  "number": "20.21",
  "title": "",
  "body": " Some Code Samples    \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means    "
},
{
  "id": "atomic-program-28-1",
  "level": "2",
  "url": "#atomic-program-28-1",
  "type": "Listing",
  "number": "20.22",
  "title": "Hello!",
  "body": " Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "atomic-program-28-2",
  "level": "2",
  "url": "#atomic-program-28-2",
  "type": "Listing",
  "number": "20.23",
  "title": "Raspberry Pi",
  "body": " Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "atomic-program-30",
  "level": "2",
  "url": "#atomic-program-30",
  "type": "Figure",
  "number": "20.24",
  "title": "",
  "body": " Two Code Listings    Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188      "
},
{
  "id": "atomic-tabular-15",
  "level": "2",
  "url": "#atomic-tabular-15",
  "type": "Table",
  "number": "20.25",
  "title": "Natural Width",
  "body": " Natural Width    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-17",
  "level": "2",
  "url": "#atomic-tabular-17",
  "type": "Table",
  "number": "20.26",
  "title": "Width of 60%, automatic centering",
  "body": " Width of 60%, automatic centering    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-19",
  "level": "2",
  "url": "#atomic-tabular-19",
  "type": "Table",
  "number": "20.27",
  "title": "Width of 30%, 30% left margin, 40% right margin",
  "body": " Width of 30%, 30% left margin, 40% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-21",
  "level": "2",
  "url": "#atomic-tabular-21",
  "type": "Table",
  "number": "20.28",
  "title": "Width of 90%, 8% left margin, 2% right margin",
  "body": " Width of 90%, 8% left margin, 2% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "natural-too-wide",
  "level": "2",
  "url": "#natural-too-wide",
  "type": "Table",
  "number": "20.29",
  "title": "Tabular too wide, no layout control",
  "body": " Tabular too wide, no layout control    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles    "
},
{
  "id": "scale-down-auto",
  "level": "2",
  "url": "#scale-down-auto",
  "type": "Table",
  "number": "20.30",
  "title": "Tabular too wide, scale to automatic width",
  "body": " Tabular too wide, scale to automatic width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles    "
},
{
  "id": "scale-down-100",
  "level": "2",
  "url": "#scale-down-100",
  "type": "Table",
  "number": "20.31",
  "title": "Tabular too wide, scale to 100% width",
  "body": " Tabular too wide, scale to 100% width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles    "
},
{
  "id": "atomic-tabular-33-1",
  "level": "2",
  "url": "#atomic-tabular-33-1",
  "type": "Table",
  "number": "20.32",
  "title": "West Coast",
  "body": " West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-33-2",
  "level": "2",
  "url": "#atomic-tabular-33-2",
  "type": "Table",
  "number": "20.33",
  "title": "Function Values",
  "body": " Function Values        3  9.734    5  2.175    "
},
{
  "id": "atomic-tabular-35",
  "level": "2",
  "url": "#atomic-tabular-35",
  "type": "Figure",
  "number": "20.34",
  "title": "",
  "body": " Geography and Mathematics    West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Function Values        3  9.734    5  2.175      "
},
{
  "id": "theorem-number-01",
  "level": "2",
  "url": "#theorem-number-01",
  "type": "Theorem",
  "number": "21.1",
  "title": "First Theorem.",
  "body": " First Theorem  Cauchy  No statement.  "
},
{
  "id": "theorem-number-02",
  "level": "2",
  "url": "#theorem-number-02",
  "type": "Theorem",
  "number": "21.2",
  "title": "Second Theorem.",
  "body": " Second Theorem  Bunyakovsky  No statement.  "
},
{
  "id": "theorem-number-03",
  "level": "2",
  "url": "#theorem-number-03",
  "type": "Theorem",
  "number": "21.3",
  "title": "First Theorem!",
  "body": " First Theorem!  Schwarz  No statement.  "
},
{
  "id": "theorem-number-04",
  "level": "2",
  "url": "#theorem-number-04",
  "type": "Theorem",
  "number": "21.4",
  "title": "Second Theorem?",
  "body": " Second Theorem?  Inequality  No statement.  "
},
{
  "id": "theorem-number-05",
  "level": "2",
  "url": "#theorem-number-05",
  "type": "Theorem",
  "number": "21.5",
  "title": "First Theorem?",
  "body": " First Theorem?  No statement.  "
},
{
  "id": "theorem-number-06",
  "level": "2",
  "url": "#theorem-number-06",
  "type": "Theorem",
  "number": "21.6",
  "title": "Second Theorem!",
  "body": " Second Theorem!  No statement.  "
},
{
  "id": "theorem-number-07",
  "level": "2",
  "url": "#theorem-number-07",
  "type": "Theorem",
  "number": "21.7",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-08",
  "level": "2",
  "url": "#theorem-number-08",
  "type": "Theorem",
  "number": "21.8",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "theorem-good-one",
  "level": "2",
  "url": "#theorem-good-one",
  "type": "Theorem",
  "number": "21.9",
  "title": "Good Numbered Theorem One.",
  "body": " Good Numbered Theorem One  No statement.  "
},
{
  "id": "theorem-good-two",
  "level": "2",
  "url": "#theorem-good-two",
  "type": "Theorem",
  "number": "21.10",
  "title": "Good Numbered Theorem Two.",
  "body": " Good Numbered Theorem Two  No statement.  "
},
{
  "id": "theorem-number-09",
  "level": "2",
  "url": "#theorem-number-09",
  "type": "Theorem",
  "number": "21.11",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-10",
  "level": "2",
  "url": "#theorem-number-10",
  "type": "Theorem",
  "number": "21.12",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "theorem-number-11",
  "level": "2",
  "url": "#theorem-number-11",
  "type": "Theorem",
  "number": "21.13",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-12",
  "level": "2",
  "url": "#theorem-number-12",
  "type": "Theorem",
  "number": "21.14",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "theorem-bad-one",
  "level": "2",
  "url": "#theorem-bad-one",
  "type": "Theorem",
  "number": "21.15",
  "title": "Bad Numbered Theorem One.",
  "body": " Bad Numbered Theorem One  No statement.  "
},
{
  "id": "theorem-bad-two",
  "level": "2",
  "url": "#theorem-bad-two",
  "type": "Theorem",
  "number": "21.16",
  "title": "Bad Numbered Theorem Two.",
  "body": " Bad Numbered Theorem Two  No statement.  "
},
{
  "id": "theorem-number-13",
  "level": "2",
  "url": "#theorem-number-13",
  "type": "Theorem",
  "number": "21.17",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-14",
  "level": "2",
  "url": "#theorem-number-14",
  "type": "Theorem",
  "number": "21.18",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "exercise-difficult-title",
  "level": "2",
  "url": "#exercise-difficult-title",
  "type": "Checkpoint",
  "number": "21.19",
  "title": "A Right Brace } and a Right Bracket].",
  "body": " A Right Brace } and a Right Bracket]   The right brace is is used as a grouping character in latex so this is just a test of its behavior in titles.    A faux hint to get this exercise to migrate into a <solutions> .   "
},
{
  "id": "section-advanced-numbering-12-2",
  "level": "2",
  "url": "#section-advanced-numbering-12-2",
  "type": "Checkpoint",
  "number": "21.20",
  "title": "An Extraneous Exercise.",
  "body": " An Extraneous Exercise   This exercise is here just as a test of the <solutions> division coming next. So it is serving a purpose, even if it is not apparent.    A hint, so this exercise looks identical in structure to the one in the previous subsection.   "
},
{
  "id": "proposition-as-conundrum",
  "level": "2",
  "url": "#proposition-as-conundrum",
  "type": "Conundrum",
  "number": "22.1",
  "title": "",
  "body": " Smith   Aah, this is confusing!   "
},
{
  "id": "objectives",
  "level": "2",
  "url": "#objectives",
  "type": "Objectives",
  "number": "24.1",
  "title": "",
  "body": "  Practice visualizing vector addition  Use vectors without explicit coordinates   "
},
{
  "id": "figure-midpoints-of-quadrilateral",
  "level": "2",
  "url": "#figure-midpoints-of-quadrilateral",
  "type": "Figure",
  "number": "24.1",
  "title": "",
  "body": " The midpoints of the sides of a quadrilateral are the vertices of a parallelogram.     "
},
{
  "id": "figure-triangle-cyclic-vectors",
  "level": "2",
  "url": "#figure-triangle-cyclic-vectors",
  "type": "Figure",
  "number": "24.2",
  "title": "",
  "body": " The sides of a triangle presented as vectors.     "
},
{
  "id": "figure-triangle-cyclic-medians",
  "level": "2",
  "url": "#figure-triangle-cyclic-medians",
  "type": "Figure",
  "number": "24.3",
  "title": "",
  "body": " The medians of the triangle are , , and .     "
},
{
  "id": "ex-cyclic",
  "level": "2",
  "url": "#ex-cyclic",
  "type": "Worksheet Exercise",
  "number": "24.1.1",
  "title": "",
  "body": "  What is the value of ?   "
},
{
  "id": "figure-triangle-cyclic-medians-copy",
  "level": "2",
  "url": "#figure-triangle-cyclic-medians-copy",
  "type": "Figure",
  "number": "24.4",
  "title": "",
  "body": " The medians of the triangle are , , and .     "
},
{
  "id": "exercise-vector-addition",
  "level": "2",
  "url": "#exercise-vector-addition",
  "type": "Worksheet Exercise",
  "number": "24.1.2",
  "title": "",
  "body": "  Show that .    Use .   "
},
{
  "id": "worksheet-geometric-prelude-5-3-2",
  "level": "2",
  "url": "#worksheet-geometric-prelude-5-3-2",
  "type": "Worksheet Exercise",
  "number": "24.1.3",
  "title": "",
  "body": "  To show that the point exists (as the common intersection of the ), show that .   "
},
{
  "id": "worksheet-geometric-prelude-5-4",
  "level": "2",
  "url": "#worksheet-geometric-prelude-5-4",
  "type": "Worksheet Exercise",
  "number": "24.1.4",
  "title": "",
  "body": " If you have time, try to devise a vector proof of Euclid's result presented at the beginning of the workshop. Recall that a parallelogram is a four-sided polygon whose opposite sides are parallel.  "
},
{
  "id": "worksheet-networks-2-3",
  "level": "2",
  "url": "#worksheet-networks-2-3",
  "type": "Theorem",
  "number": "24.5",
  "title": "Ohms Law.",
  "body": " Ohms Law  The current through a resistor is proportional to the ratio of the Voltage to the Resistance  Or for our purposes   "
},
{
  "id": "worksheet-networks-2-4",
  "level": "2",
  "url": "#worksheet-networks-2-4",
  "type": "Theorem",
  "number": "24.6",
  "title": "Kirchoffs Current Law.",
  "body": " Kirchoffs Current Law  The sum of the currents in a network meeting at a point is zero.   "
},
{
  "id": "worksheet-networks-2-5",
  "level": "2",
  "url": "#worksheet-networks-2-5",
  "type": "Example",
  "number": "24.7",
  "title": "Kirchoff’s Current Law.",
  "body": " Kirchoff's Current Law  For the circuit below .     "
},
{
  "id": "worksheet-networks-2-6",
  "level": "2",
  "url": "#worksheet-networks-2-6",
  "type": "Theorem",
  "number": "24.8",
  "title": "Kirchoffs Voltage Law.",
  "body": " Kirchoffs Voltage Law  The sum of the voltages around any closed circuit (or subcircuit) is zero.   "
},
{
  "id": "worksheet-networks-4-1-1",
  "level": "2",
  "url": "#worksheet-networks-4-1-1",
  "type": "Worksheet Exercise",
  "number": "24.2.1",
  "title": "",
  "body": "  For the simple network pictured, calculuate the amperage in each part of the network by setting up a system of linear equations for the amperages.      "
},
{
  "id": "worksheet-networks-4-1-2",
  "level": "2",
  "url": "#worksheet-networks-4-1-2",
  "type": "Worksheet Exercise",
  "number": "24.2.2",
  "title": "",
  "body": "  Compare it with a parallel circuit network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.      "
},
{
  "id": "worksheet-networks-4-2",
  "level": "2",
  "url": "#worksheet-networks-4-2",
  "type": "Worksheet Exercise",
  "number": "24.2.3",
  "title": "",
  "body": "  Now for a more complicated network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.      "
},
{
  "id": "worksheet-networks-5-1",
  "level": "2",
  "url": "#worksheet-networks-5-1",
  "type": "Worksheet Exercise",
  "number": "24.2.4",
  "title": "",
  "body": "  Now generalize these ideas to a context outside of electrical circuits. Consider the network of streets given in the diagram (with one-way directions as indicated).     A traffic engineer counts the hourly flow of cars into and out of this network at the entrances. They get (EB = East Bound; WB = West Bound):   Estimated hourly traffic flow for the road network      EB Winooski  WB Winooski  Shelburne St  Willow  Jay    into  50  400  0  10  50    out of  55  390  20  15  30     Use a variable for each segment inside of the network and set up a system of linear equations restricting the flow. Solve the system. Note that you should not get a unique solution as traffic should be able to flow through the network in various ways.   "
},
{
  "id": "worksheet-testing-2-1-1",
  "level": "2",
  "url": "#worksheet-testing-2-1-1",
  "type": "Worksheet Exercise",
  "number": "24.3.1",
  "title": "",
  "body": "  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.   "
},
{
  "id": "worksheet-testing-2-1-2",
  "level": "2",
  "url": "#worksheet-testing-2-1-2",
  "type": "Worksheet Exercise",
  "number": "24.3.2",
  "title": "",
  "body": "  Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.   "
},
{
  "id": "worksheet-testing-2-3",
  "level": "2",
  "url": "#worksheet-testing-2-3",
  "type": "Worksheet Exercise",
  "number": "24.3.3",
  "title": "A full-width exercise.",
  "body": " A full-width exercise   Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.   "
},
{
  "id": "worksheet-testing-2-5-1",
  "level": "2",
  "url": "#worksheet-testing-2-5-1",
  "type": "Worksheet Exercise",
  "number": "24.3.4",
  "title": "",
  "body": "  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.   "
},
{
  "id": "worksheet-testing-2-5-2",
  "level": "2",
  "url": "#worksheet-testing-2-5-2",
  "type": "Worksheet Exercise",
  "number": "24.3.5",
  "title": "",
  "body": "   Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.   "
},
{
  "id": "worksheet-testing-2-5-3",
  "level": "2",
  "url": "#worksheet-testing-2-5-3",
  "type": "Worksheet Exercise",
  "number": "24.3.6",
  "title": "",
  "body": "  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.   "
},
{
  "id": "worksheet-testing-2-6",
  "level": "2",
  "url": "#worksheet-testing-2-6",
  "type": "Activity",
  "number": "24.1",
  "title": "A Mock Activity.",
  "body": " A Mock Activity   The problem, as we see it.    A worksheet could have hints, no? But no spacing. Note row below has widths set to balance the heights.   "
},
{
  "id": "worksheet-testing-2-7-1",
  "level": "2",
  "url": "#worksheet-testing-2-7-1",
  "type": "Worksheet Exercise",
  "number": "24.3.7",
  "title": "",
  "body": "  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.   "
},
{
  "id": "worksheet-testing-2-7-2",
  "level": "2",
  "url": "#worksheet-testing-2-7-2",
  "type": "Worksheet Exercise",
  "number": "24.3.8",
  "title": "",
  "body": "   Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.   "
},
{
  "id": "worksheet-testing-2-7-3",
  "level": "2",
  "url": "#worksheet-testing-2-7-3",
  "type": "Worksheet Exercise",
  "number": "24.3.9",
  "title": "",
  "body": "  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.   "
},
{
  "id": "worksheet-dot-products-2-1-1",
  "level": "2",
  "url": "#worksheet-dot-products-2-1-1",
  "type": "Worksheet Exercise",
  "number": "24.4.1",
  "title": "",
  "body": "  Let , , , . Find the values of the following expressions:                Are any of these vectors perpendicular to each other?   "
},
{
  "id": "worksheet-dot-products-2-1-2",
  "level": "2",
  "url": "#worksheet-dot-products-2-1-2",
  "type": "Worksheet Exercise",
  "number": "24.4.2",
  "title": "",
  "body": "  The vectors and are pictured below. Derive the formula for projection on a line and use it to find the projection of on the line spanned by . Also compute the length of the residual vector.   two vectors in a Cartesian plane    "
},
{
  "id": "worksheet-dot-products-3-1-1",
  "level": "2",
  "url": "#worksheet-dot-products-3-1-1",
  "type": "Worksheet Exercise",
  "number": "24.4.3",
  "title": "",
  "body": "  Consider the vector equation .    Check that there is no solution that makes the equation true.    Use projection to find the best approximation .    Compute .    Compute the residual vector.    Compute the length of the residual vector and explain what it means.   "
},
{
  "id": "worksheet-dot-products-3-1-2",
  "level": "2",
  "url": "#worksheet-dot-products-3-1-2",
  "type": "Worksheet Exercise",
  "number": "24.4.4",
  "title": "",
  "body": "  Consider the system of equations .    Write the system in vector form.    Find the best estimate, , of using projection.    Compute the length of the residual vector.   "
},
{
  "id": "worksheet-activity-no-task-1-1",
  "level": "2",
  "url": "#worksheet-activity-no-task-1-1",
  "type": "Activity",
  "number": "24.2",
  "title": "",
  "body": "  Just a simple activity here.   "
},
{
  "id": "worksheet-activity-no-task-1-2",
  "level": "2",
  "url": "#worksheet-activity-no-task-1-2",
  "type": "Activity",
  "number": "24.3",
  "title": "",
  "body": "  Here is a second activity.   "
},
{
  "id": "worksheet-activity-with-task-1-1",
  "level": "2",
  "url": "#worksheet-activity-with-task-1-1",
  "type": "Activity",
  "number": "24.4",
  "title": "",
  "body": "  This is going to be an activity with tasks.     Here is the first task.      Here is the second task.      Here is the third task.     This is a conclusion that comes after the last task.   "
},
{
  "id": "worksheet-exercisegroup-2-1-2",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-2",
  "type": "Worksheet Exercise",
  "number": "24.7.1",
  "title": "",
  "body": "  Apple   "
},
{
  "id": "worksheet-exercisegroup-2-1-3",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-3",
  "type": "Worksheet Exercise",
  "number": "24.7.2",
  "title": "",
  "body": "  Banana   "
},
{
  "id": "worksheet-exercisegroup-2-1-4",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-4",
  "type": "Worksheet Exercise",
  "number": "24.7.3",
  "title": "",
  "body": "  Cherry   "
},
{
  "id": "worksheet-exercisegroup-2-1-5",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-5",
  "type": "Worksheet Exercise",
  "number": "24.7.4",
  "title": "",
  "body": "  Durian   "
},
{
  "id": "worksheet-exercisegroup-2-1-6",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-6",
  "type": "Worksheet Exercise",
  "number": "24.7.5",
  "title": "",
  "body": "  Elderberry (with workspace override)   "
},
{
  "id": "worksheet-exercisegroup-2-1-7",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-7",
  "type": "Worksheet Exercise",
  "number": "24.7.6",
  "title": "",
  "body": "  Fig   "
},
{
  "id": "worksheet-exercisegroup-2-1-8",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-8",
  "type": "Worksheet Exercise",
  "number": "24.7.7",
  "title": "",
  "body": "  Guava   "
},
{
  "id": "worksheet-exercisegroup-2-1-9",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-9",
  "type": "Worksheet Exercise",
  "number": "24.7.8",
  "title": "",
  "body": "  Habanero   "
},
{
  "id": "worksheet-exercisegroup-2-1-10",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-10",
  "type": "Worksheet Exercise",
  "number": "24.7.9",
  "title": "",
  "body": "  I can't think of an I fruit.   "
},
{
  "id": "worksheet-exercisegroup-2-1-11",
  "level": "2",
  "url": "#worksheet-exercisegroup-2-1-11",
  "type": "Worksheet Exercise",
  "number": "24.7.10",
  "title": "",
  "body": "  Jackfruit   "
},
{
  "id": "worksheet-exercisegroup-3-1-2",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-2",
  "type": "Worksheet Exercise",
  "number": "24.7.11",
  "title": "",
  "body": "  Apple   "
},
{
  "id": "worksheet-exercisegroup-3-1-3",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-3",
  "type": "Worksheet Exercise",
  "number": "24.7.12",
  "title": "",
  "body": "  Banana   "
},
{
  "id": "worksheet-exercisegroup-3-1-4",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-4",
  "type": "Worksheet Exercise",
  "number": "24.7.13",
  "title": "",
  "body": "  Cherry   "
},
{
  "id": "worksheet-exercisegroup-3-1-5",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-5",
  "type": "Worksheet Exercise",
  "number": "24.7.14",
  "title": "",
  "body": "  Durian   "
},
{
  "id": "worksheet-exercisegroup-3-1-6",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-6",
  "type": "Worksheet Exercise",
  "number": "24.7.15",
  "title": "",
  "body": "  Elderberry (with workspace override)   "
},
{
  "id": "worksheet-exercisegroup-3-1-7",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-7",
  "type": "Worksheet Exercise",
  "number": "24.7.16",
  "title": "",
  "body": "  Fig   "
},
{
  "id": "worksheet-exercisegroup-3-1-8",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-8",
  "type": "Worksheet Exercise",
  "number": "24.7.17",
  "title": "",
  "body": "  Guava   "
},
{
  "id": "worksheet-exercisegroup-3-1-9",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-9",
  "type": "Worksheet Exercise",
  "number": "24.7.18",
  "title": "",
  "body": "  Habanero   "
},
{
  "id": "worksheet-exercisegroup-3-1-10",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-10",
  "type": "Worksheet Exercise",
  "number": "24.7.19",
  "title": "",
  "body": "  I can't think of an I fruit.   "
},
{
  "id": "worksheet-exercisegroup-3-1-11",
  "level": "2",
  "url": "#worksheet-exercisegroup-3-1-11",
  "type": "Worksheet Exercise",
  "number": "24.7.20",
  "title": "",
  "body": "  Jackfruit   "
},
{
  "id": "section-exercises-single-5",
  "level": "2",
  "url": "#section-exercises-single-5",
  "type": "Checkpoint",
  "number": "25.1",
  "title": "Inline One.",
  "body": " Inline One   Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.   "
},
{
  "id": "duplicate-inline",
  "level": "2",
  "url": "#duplicate-inline",
  "type": "Checkpoint",
  "number": "25.2",
  "title": "Inline Two.",
  "body": " Inline Two  Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.  "
},
{
  "id": "section-exercises-single-8",
  "level": "2",
  "url": "#section-exercises-single-8",
  "type": "Theorem",
  "number": "25.3",
  "title": "Major Result.",
  "body": " Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.  "
},
{
  "id": "section-exercises-single-9",
  "level": "2",
  "url": "#section-exercises-single-9",
  "type": "Checkpoint",
  "number": "25.4",
  "title": "Inline Three.",
  "body": " Inline Three   Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.   "
},
{
  "id": "exercise-collection-2",
  "level": "2",
  "url": "#exercise-collection-2",
  "type": "Exercise",
  "number": "25.1",
  "title": "Drill One.",
  "body": " Drill One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present     A side-by-side in a figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present and to test the numbering of the panels in a solutions manual    First Panel, subcaptioned     Second Panel, subcaptioned        First Panel, not subcaptioned     Second Panel, not subcaptioned      "
},
{
  "id": "duplicate-divisional",
  "level": "2",
  "url": "#duplicate-divisional",
  "type": "Exercise",
  "number": "25.2",
  "title": "Drill Two.",
  "body": " Drill Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering, figure in a <exercise> in an un-numbered <exercises>     "
},
{
  "id": "exercise-collection-4",
  "level": "2",
  "url": "#exercise-collection-4",
  "type": "Exercise",
  "number": "25.3",
  "title": "Drill Three.",
  "body": " Drill Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercise-challenging-one-unstructured",
  "level": "2",
  "url": "#exercise-challenging-one-unstructured",
  "type": "Exercise",
  "number": "25.4",
  "title": "Challenging One.",
  "body": " Challenging One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "exercise-collection-6-2",
  "level": "2",
  "url": "#exercise-collection-6-2",
  "type": "Exercise",
  "number": "25.5",
  "title": "Challenging Two.",
  "body": " Challenging Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "exercise-collection-6-3",
  "level": "2",
  "url": "#exercise-collection-6-3",
  "type": "Exercise",
  "number": "25.6",
  "title": "Challenging Three.",
  "body": " Challenging Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercise-collection-7",
  "level": "2",
  "url": "#exercise-collection-7",
  "type": "Exercise",
  "number": "25.7",
  "title": "Impossible One.",
  "body": " Impossible One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "exercise-collection-8",
  "level": "2",
  "url": "#exercise-collection-8",
  "type": "Exercise",
  "number": "25.8",
  "title": "Impossible Two.",
  "body": " Impossible Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "exercise-collection-9",
  "level": "2",
  "url": "#exercise-collection-9",
  "type": "Exercise",
  "number": "25.9",
  "title": "Impossible Three.",
  "body": " Impossible Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercises-structured-3-2",
  "level": "2",
  "url": "#exercises-structured-3-2",
  "type": "Exercise",
  "number": "26.1",
  "title": "Arithmetic.",
  "body": " Arithmetic   Compute .      "
},
{
  "id": "exercises-structured-3-3",
  "level": "2",
  "url": "#exercises-structured-3-3",
  "type": "Exercise",
  "number": "26.2",
  "title": "Trigonometry.",
  "body": " Trigonometry   Compute .   "
},
{
  "id": "hard-subexercises-2",
  "level": "2",
  "url": "#hard-subexercises-2",
  "type": "Exercise",
  "number": "26.3",
  "title": "Number Theory.",
  "body": " Number Theory   Prove Fermat's Last Theorem.   "
},
{
  "id": "hard-subexercises-3",
  "level": "2",
  "url": "#hard-subexercises-3",
  "type": "Exercise",
  "number": "26.4",
  "title": "Millenial.",
  "body": " Millenial   Find general solutions to the Navier-Stokes equation.   "
},
{
  "id": "exercises-structured-5-2-2",
  "level": "2",
  "url": "#exercises-structured-5-2-2",
  "type": "Exercise",
  "number": "26.5",
  "title": "One.",
  "body": " One      Subtract.   "
},
{
  "id": "exercises-structured-5-2-3",
  "level": "2",
  "url": "#exercises-structured-5-2-3",
  "type": "Exercise",
  "number": "26.6",
  "title": "Two.",
  "body": " Two     "
},
{
  "id": "exercises-structured-5-3",
  "level": "2",
  "url": "#exercises-structured-5-3",
  "type": "Exercise",
  "number": "26.7",
  "title": "Outside exercisegroup, inside subexercises.",
  "body": " Outside exercisegroup, inside subexercises   6+5   "
},
{
  "id": "section-exercises-multiple-3-2",
  "level": "2",
  "url": "#section-exercises-multiple-3-2",
  "type": "Checkpoint",
  "number": "27.1",
  "title": "Inline One.",
  "body": " Inline One   Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.   "
},
{
  "id": "section-exercises-multiple-3-4",
  "level": "2",
  "url": "#section-exercises-multiple-3-4",
  "type": "Checkpoint",
  "number": "27.2",
  "title": "Inline Two.",
  "body": " Inline Two   Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.   "
},
{
  "id": "section-exercises-multiple-3-5",
  "level": "2",
  "url": "#section-exercises-multiple-3-5",
  "type": "Theorem",
  "number": "27.3",
  "title": "Major Result.",
  "body": " Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.  "
},
{
  "id": "exercise-duplicate-inline",
  "level": "2",
  "url": "#exercise-duplicate-inline",
  "type": "Checkpoint",
  "number": "27.4",
  "title": "Inline Three.",
  "body": " Inline Three   Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.   "
},
{
  "id": "exercises-drill-2",
  "level": "2",
  "url": "#exercises-drill-2",
  "type": "Exercise",
  "number": "27.2.1",
  "title": "Drill One.",
  "body": " Drill One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in a structured division to test that it is numbered with consideration of the containing <exercises>     "
},
{
  "id": "exercises-drill-3",
  "level": "2",
  "url": "#exercises-drill-3",
  "type": "Exercise",
  "number": "27.2.2",
  "title": "Drill Two.",
  "body": " Drill Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "exercises-drill-4",
  "level": "2",
  "url": "#exercises-drill-4",
  "type": "Exercise",
  "number": "27.2.3",
  "title": "Drill Three.",
  "body": " Drill Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercise-challenging-one-structured",
  "level": "2",
  "url": "#exercise-challenging-one-structured",
  "type": "Exercise",
  "number": "27.3.1",
  "title": "Challenging One.",
  "body": " Challenging One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "section-exercises-multiple-5-3-2",
  "level": "2",
  "url": "#section-exercises-multiple-5-3-2",
  "type": "Exercise",
  "number": "27.3.2",
  "title": "Challenging Two.",
  "body": " Challenging Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "section-exercises-multiple-5-3-3",
  "level": "2",
  "url": "#section-exercises-multiple-5-3-3",
  "type": "Exercise",
  "number": "27.3.3",
  "title": "Challenging Three.",
  "body": " Challenging Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "section-exercises-multiple-6-2",
  "level": "2",
  "url": "#section-exercises-multiple-6-2",
  "type": "Exercise",
  "number": "27.4.1",
  "title": "Impossible One.",
  "body": " Impossible One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "section-exercises-multiple-6-3",
  "level": "2",
  "url": "#section-exercises-multiple-6-3",
  "type": "Exercise",
  "number": "27.4.2",
  "title": "Impossible Two.",
  "body": " Impossible Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "section-exercises-multiple-6-4",
  "level": "2",
  "url": "#section-exercises-multiple-6-4",
  "type": "Exercise",
  "number": "27.4.3",
  "title": "Impossible Three.",
  "body": " Impossible Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "section-exercises-multiple-7-2-2",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-2",
  "type": "Exercise",
  "number": "27.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "section-exercises-multiple-7-2-3",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-3",
  "type": "Exercise",
  "number": "27.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "section-exercises-multiple-7-2-4",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-4",
  "type": "Exercise",
  "number": "27.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "section-exercises-multiple-7-2-5",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-5",
  "type": "Exercise",
  "number": "27.5.4",
  "title": "",
  "body": "     OPEN ME!    "
},
{
  "id": "section-exercises-multiple-7-2-6",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-6",
  "type": "Exercise",
  "number": "27.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "section-exercises-multiple-7-2-7",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-7",
  "type": "Exercise",
  "number": "27.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "section-exercises-multiple-7-2-8",
  "level": "2",
  "url": "#section-exercises-multiple-7-2-8",
  "type": "Exercise",
  "number": "27.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-top-level-3",
  "level": "2",
  "url": "#exercises-top-level-3",
  "type": "Exercise",
  "number": "28.1",
  "title": "Drill One.",
  "body": " Drill One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "exercises-top-level-4",
  "level": "2",
  "url": "#exercises-top-level-4",
  "type": "Exercise",
  "number": "28.2",
  "title": "Drill Two.",
  "body": " Drill Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering in a <exercises> without a number     "
},
{
  "id": "exercises-top-level-5",
  "level": "2",
  "url": "#exercises-top-level-5",
  "type": "Exercise",
  "number": "28.3",
  "title": "Drill Three.",
  "body": " Drill Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercise-challenging-one-top",
  "level": "2",
  "url": "#exercise-challenging-one-top",
  "type": "Exercise",
  "number": "28.4",
  "title": "Challenging One.",
  "body": " Challenging One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "exercises-top-level-7-2",
  "level": "2",
  "url": "#exercises-top-level-7-2",
  "type": "Exercise",
  "number": "28.5",
  "title": "Challenging Two.",
  "body": " Challenging Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "exercises-top-level-7-3",
  "level": "2",
  "url": "#exercises-top-level-7-3",
  "type": "Exercise",
  "number": "28.6",
  "title": "Challenging Three.",
  "body": " Challenging Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercises-top-level-8",
  "level": "2",
  "url": "#exercises-top-level-8",
  "type": "Exercise",
  "number": "28.7",
  "title": "Impossible One.",
  "body": " Impossible One   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   "
},
{
  "id": "exercises-top-level-9",
  "level": "2",
  "url": "#exercises-top-level-9",
  "type": "Exercise",
  "number": "28.8",
  "title": "Impossible Two.",
  "body": " Impossible Two   Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   "
},
{
  "id": "exercises-top-level-10",
  "level": "2",
  "url": "#exercises-top-level-10",
  "type": "Exercise",
  "number": "28.9",
  "title": "Impossible Three.",
  "body": " Impossible Three   Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   "
},
{
  "id": "exercises-top-level-11",
  "level": "2",
  "url": "#exercises-top-level-11",
  "type": "Exercise",
  "number": "28.10",
  "title": "An Exercise in a Section.",
  "body": " An Exercise in a Section   Exercises can appear in a section of their own. You need to give the section a title, even if it seems obvious what to call it. Individual exercises may have titles, as you choose. Problem: How should we hide solutions?    Maybe a global switch should be used to suppress solutions, while a separate processing regime could use them as part of a solutions manual.   "
},
{
  "id": "exercise-with-hardcoded-number",
  "level": "2",
  "url": "#exercise-with-hardcoded-number",
  "type": "Exercise",
  "number": "28.42a",
  "title": "An Exercise with a Hard-Coded Problem Number.",
  "body": " An Exercise with a Hard-Coded Problem Number   Compute the definite integral , not as an approximate value from a Riemann sum, but as an exact value based of the limit by using the Fundamental Theorem.    An antiderivative of is , so by the FTC, !?! This is indeed an exciting result, but we are mostly interested in seeing that the sentence-ending punctuation is absorbed properly into the displayed equation.   "
},
{
  "id": "exercises-top-level-13",
  "level": "2",
  "url": "#exercises-top-level-13",
  "type": "Exercise",
  "number": "28.12",
  "title": "",
  "body": "  Can you prove Corollary directly? If not consider that a problem could have several parts, which should be formatted as a second-level list, since the problems normally get numbered at the top level.  Why is this result a Corollary?  Could you interchange the Theorem and Corollary?      MVT  Consider the definite integral as an area function and employ the Mean Value Theorem.     Motivator  Think harder!     Helpful   It follows easily.  Yes.      We could prove either result first, then obtain the other as an easy consequence.   "
},
{
  "id": "appendix-exercise-lists-2",
  "level": "2",
  "url": "#appendix-exercise-lists-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pseudo-elements "
},
{
  "id": "glossary-backmatter-3-2",
  "level": "2",
  "url": "#glossary-backmatter-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "foobar "
},
{
  "id": "note-judson-AATA",
  "level": "2",
  "url": "#note-judson-AATA",
  "type": "Note",
  "number": "1.1",
  "title": "",
  "body": "Another online, open-source offering. "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
