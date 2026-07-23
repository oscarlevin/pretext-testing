var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-math-handoff",
  "level": "1",
  "url": "sec-math-handoff.html",
  "type": "Section",
  "number": "1",
  "title": "The Mathematical Handoff",
  "body": " The Mathematical Handoff  Consider the function , which opens upward. A generic screen-narrator would skip that expression or read glyph soup; here it is spoken inline. Adjacent expressions like and should be separated cleanly, and an equation at the end of a sentence should keep its punctuation close, as with .  Display mathematics becomes its own utterance, with a natural breath before and after: The decimal in must not split the sentence, and neither should the abbreviations in this one: see Dr. Smith, or e.g. Theorem 3.2, or cf. Fig. 4 for details.   A Spoken Theorem   If is an even integer, then is divisible by .    Write for some integer . Then , which is visibly a multiple of four.    "
},
{
  "id": "thm-demo",
  "level": "2",
  "url": "sec-math-handoff.html#thm-demo",
  "type": "Theorem",
  "number": "1.1",
  "title": "A Spoken Theorem.",
  "body": " A Spoken Theorem   If is an even integer, then is divisible by .    Write for some integer . Then , which is visibly a multiple of four.   "
},
{
  "id": "sec-content-policy",
  "level": "1",
  "url": "sec-content-policy.html",
  "type": "Section",
  "number": "2",
  "title": "Announce and Skip",
  "body": " Announce and Skip  The reader voices what a sighted reader would read aloud, and announces what it will not attempt. A list is read item by item:    first, plain prose in a list item;  second, an item with math, namely ;  third, a short closing item.    The table that follows should be announced and skipped, not read cell by cell.   A table the reader skips    Quantity  Value    Speed of sound  343 m\/s     Likewise, the code listing below is announced and skipped.   def square(x): return x * x   Images have their alt text read aloud.   A sample figure containing an image.   A drawing of a circle.  A circle with radius and therefore circumference .     "
},
{
  "id": "table-demo",
  "level": "2",
  "url": "sec-content-policy.html#table-demo",
  "type": "Table",
  "number": "2.1",
  "title": "A table the reader skips",
  "body": " A table the reader skips    Quantity  Value    Speed of sound  343 m\/s    "
},
{
  "id": "ex-fig",
  "level": "2",
  "url": "sec-content-policy.html#ex-fig",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " A sample figure containing an image.   A drawing of a circle.  A circle with radius and therefore circumference .    "
},
{
  "id": "sec-knowls",
  "level": "1",
  "url": "sec-knowls.html",
  "type": "Section",
  "number": "3",
  "title": "Hidden Content and Navigation",
  "body": " Hidden Content and Navigation  Everything below is born hidden, so a sighted reader sees only the titles until they click. The hidden content setting decides what the listener gets: the titles alone, the whole thing, or a pause at each one. Down-arrow dives into the most recent hidden block and up-arrow climbs back out, so the choice can be made block by block without changing the setting.   Even Integers   An integer is even when for some integer .    A paragraph between two hidden blocks, so you can hear where one ends and the next begins. A footnote is hidden content too, and is announced and entered exactly like a knowl.    Squares of Even Integers   If is even, then is divisible by .    This proof is hidden inside a hidden theorem, which is the case worth listening to: skipping the theorem should not announce this proof at all, and entering the theorem should announce it without reading it until you ask.  Write , so .     A Hidden Example   Take . Then , as the theorem promises.    The last paragraph of the section. Reaching it means every hidden block above was either read or stepped over.  "
},
{
  "id": "def-even",
  "level": "2",
  "url": "sec-knowls.html#def-even",
  "type": "Definition",
  "number": "3.1",
  "title": "Even Integers.",
  "body": " Even Integers   An integer is even when for some integer .   "
},
{
  "id": "thm-nested",
  "level": "2",
  "url": "sec-knowls.html#thm-nested",
  "type": "Theorem",
  "number": "3.2",
  "title": "Squares of Even Integers.",
  "body": " Squares of Even Integers   If is even, then is divisible by .    This proof is hidden inside a hidden theorem, which is the case worth listening to: skipping the theorem should not announce this proof at all, and entering the theorem should announce it without reading it until you ask.  Write , so .   "
},
{
  "id": "ex-aside",
  "level": "2",
  "url": "sec-knowls.html#ex-aside",
  "type": "Example",
  "number": "3.3",
  "title": "A Hidden Example.",
  "body": " A Hidden Example   Take . Then , as the theorem promises.   "
},
{
  "id": "sec-ending",
  "level": "1",
  "url": "sec-ending.html",
  "type": "Section",
  "number": "4",
  "title": "The End of the Page",
  "body": " The End of the Page  When the reader finishes the last block it announces the end of the page and offers to continue to the next section. This is the final paragraph, so you should hear that announcement shortly.  "
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
