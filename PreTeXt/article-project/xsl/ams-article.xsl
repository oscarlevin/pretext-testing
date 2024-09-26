<?xml version='1.0'?>


<!-- Conveniences for classes of similar elements -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<!-- Import standard conversion templates to be overridden as needed -->
<xsl:import href="./core/pretext-latex.xsl" />


<!-- An article, LaTeX structure -->
<!--     One page, full of sections (with abstract, references)                    -->
<!--     Or, one page, totally unstructured, just lots of paragraphs, widgets, etc -->
<xsl:template match="article">
    <xsl:call-template name="converter-blurb-latex" />
    <xsl:call-template name="snapshot-package-info"/>
    <xsl:text>\documentclass[</xsl:text>
    <xsl:call-template name="sidedness"/>
    <xsl:text>,</xsl:text>
    <xsl:value-of select="$font-size" />
    <xsl:text>,</xsl:text>
    <xsl:if test="$b-latex-draft-mode" >
        <xsl:text>draft,</xsl:text>
    </xsl:if>
    <xsl:text>]{amsart}&#xa;&#xa;</xsl:text>

    <xsl:call-template name="latex-preamble-generic" />
    <!-- parameterize preamble template with "page-geometry" template conditioned on self::article etc -->
    <xsl:call-template name="title-page-info-article" />
    <xsl:text>\begin{document}&#xa;&#xa;</xsl:text>

    <xsl:call-template name="topmatter-amsart"/>
        
    <xsl:text>\maketitle&#xa;</xsl:text>


    <xsl:apply-templates />

    <xsl:text>\end{document}&#xa;$#xa;</xsl:text>
</xsl:template>




<!-- LaTeX preamble is common for both books, articles, memos and letters -->
<!-- Except: title info allows an "event" for an article (presentation)   -->
<xsl:template name="latex-preamble-generic">
    <xsl:text>%% Custom Preamble Entries, early (use latex.preamble.early)&#xa;</xsl:text>
    <xsl:if test="$latex.preamble.early != ''">
        <xsl:value-of select="$latex.preamble.early" />
        <xsl:text>&#xa;</xsl:text>
    </xsl:if>
    <xsl:choose>
        <xsl:when test="($b-latex-two-sides) or ($latex-open-odd = 'add-blanks')">
            <!-- Redefines \cleardoublepage as suggested, plus empty page style on blanks: -->
            <!-- https://tex.stackexchange.com/questions/185821/openright-in-oneside-book  -->
            <xsl:text>%% sided-ness and open odd not implement yet&#xa;</xsl:text>
            <xsl:text>%% Always open on odd page&#xa;</xsl:text>
            <xsl:text>%%   The following adjusts cleardoublepage to remove twosided&#xa;</xsl:text>
            <xsl:text>%%   check so that we open on odd pages even in one-sided mode&#xa;</xsl:text>
            <xsl:text>%%   by adding an extra blank page on the preceding even page.&#xa;</xsl:text>
            <!-- <xsl:text>\makeatletter%&#xa;</xsl:text>
            <xsl:text>\def\cleardoublepage{%&#xa;</xsl:text>
            <xsl:text>\clearpage\ifodd\c@page\else\thispagestyle{empty}\hbox{}\newpage\if@twocolumn\hbox{}\newpage\fi\fi%&#xa;</xsl:text>
            <xsl:text>}&#xa;</xsl:text>
            <xsl:text>\makeatother%&#xa;</xsl:text> -->
        </xsl:when>
        <xsl:when test="not($b-latex-two-sides) and ($latex-open-odd = 'skip-pages')">
            <xsl:text>%% sided-ness and open odd not implement yet&#xa;</xsl:text>
            <xsl:text>%% Always open on odd page&#xa;</xsl:text>
            <xsl:text>%%   The following adjusts cleardoublepage to remove twosided&#xa;</xsl:text>
            <xsl:text>%%   check so that we open on odd pages even in one-sided mode&#xa;</xsl:text>
            <xsl:text>%%   by incrementing the page number to skip over the preceding&#xa;</xsl:text>
            <xsl:text>%%   even page.&#xa;</xsl:text>
            <!-- <xsl:text>\makeatletter%&#xa;</xsl:text>
            <xsl:text>\def\cleardoublepage{%&#xa;</xsl:text>
            <xsl:text>\clearpage\ifodd\c@page\else\addtocounter{page}{1}\fi%&#xa;</xsl:text>
            <xsl:text>}&#xa;</xsl:text>
            <xsl:text>\makeatother%&#xa;</xsl:text> -->
        </xsl:when>
    </xsl:choose>


    <!-- #################################### -->
    <!-- Theorem environments                 -->
    <!-- #################################### -->
    
    <xsl:call-template name="latex-theorem-environments"/>

<!--     
    <xsl:text>%% Default LaTeX packages&#xa;</xsl:text>
    <xsl:text>%%   1.  always employed (or nearly so) for some purpose, or&#xa;</xsl:text>
    <xsl:text>%%   2.  a stylewriter may assume their presence&#xa;</xsl:text>
    <xsl:text>\usepackage{geometry}&#xa;</xsl:text>
    <xsl:text>%% Some aspects of the preamble are conditional,&#xa;</xsl:text>
    <xsl:text>%% the LaTeX engine is one such determinant&#xa;</xsl:text>
    <xsl:text>\usepackage{ifthen}&#xa;</xsl:text>
    <xsl:text>%% etoolbox has a variety of modern conveniences&#xa;</xsl:text>
 -->


    <!-- e.g, \notblank -->
    
<!--     
    <xsl:text>\usepackage{etoolbox}&#xa;</xsl:text>
    <xsl:text>\usepackage{ifxetex,ifluatex}&#xa;</xsl:text>
    <xsl:text>%% Raster graphics inclusion&#xa;</xsl:text>
    <xsl:text>\usepackage{graphicx}&#xa;</xsl:text>
    <xsl:text>%% Color support, xcolor package&#xa;</xsl:text>
    <xsl:text>%% Always loaded, for: add/delete text, author tools&#xa;</xsl:text>
    <xsl:text>%% Here, since tcolorbox loads tikz, and tikz loads xcolor&#xa;</xsl:text> 
-->


    <!-- Avoid option conflicts causing errors: -->
    <!-- http://tex.stackexchange.com/questions/57364/option-clash-for-package-xcolor -->
    <!-- svg later will clobber dvips?  See starred versions in xcolor documentation  -->
    <!-- TODO: usenames may be obsolete? -->

    <!--     
    <xsl:text>\PassOptionsToPackage{usenames,dvipsnames,svgnames,table}{xcolor}&#xa;</xsl:text>
    <xsl:text>\usepackage{xcolor}&#xa;</xsl:text> 
    -->


    <!-- This tempalte for defining colors is provisional, and subject to change -->

    <!--
    <xsl:text>%% begin: defined colors, via xcolor package, for styling&#xa;</xsl:text>
    <xsl:call-template name="xcolor-style"/>
    <xsl:text>%% end: defined colors, via xcolor package, for styling&#xa;</xsl:text>
    <xsl:text>%% Colored boxes, and much more, though mostly styling&#xa;</xsl:text>
    <xsl:text>%% skins library provides "enhanced" skin, employing tikzpicture&#xa;</xsl:text>
    <xsl:text>%% boxes may be configured as "breakable" or "unbreakable"&#xa;</xsl:text>
    <xsl:text>%% "raster" controls grids of boxes, aka side-by-side&#xa;</xsl:text>
    <xsl:text>\usepackage{tcolorbox}&#xa;</xsl:text>
    <xsl:text>\tcbuselibrary{skins}&#xa;</xsl:text>
    <xsl:text>\tcbuselibrary{breakable}&#xa;</xsl:text>
    <xsl:text>\tcbuselibrary{raster}&#xa;</xsl:text>
    <xsl:text>%% We load some "stock" tcolorbox styles that we use a lot&#xa;</xsl:text>
    <xsl:text>%% Placement here is provisional, there will be some color work also&#xa;</xsl:text>
    <xsl:text>%% First, black on white, no border, transparent, but no assumption about titles&#xa;</xsl:text>
    <xsl:text>\tcbset{ bwminimalstyle/.style={size=minimal, boxrule=-0.3pt, frame empty,&#xa;</xsl:text>
    <xsl:text>colback=white, colbacktitle=white, coltitle=black, opacityfill=0.0} }&#xa;</xsl:text>
    <xsl:text>%% Second, bold title, run-in to text/paragraph/heading&#xa;</xsl:text>
    <xsl:text>%% Space afterwards will be controlled by environment,&#xa;</xsl:text>
    <xsl:text>%% independent of constructions of the tcb title&#xa;</xsl:text>
    <xsl:text>%% Places \blocktitlefont onto many block titles&#xa;</xsl:text>
    <xsl:text>\tcbset{ runintitlestyle/.style={fonttitle=\blocktitlefont\upshape\bfseries, attach title to upper} }&#xa;</xsl:text>
    <xsl:text>%% Spacing prior to each exercise, anywhere&#xa;</xsl:text>
    <xsl:text>\tcbset{ exercisespacingstyle/.style={before skip={1.5ex plus 0.5ex}} }&#xa;</xsl:text>
    <xsl:text>%% Spacing prior to each block&#xa;</xsl:text>
    <xsl:text>\tcbset{ blockspacingstyle/.style={before skip={2.0ex plus 0.5ex}} }&#xa;</xsl:text>
    <xsl:text>%% xparse allows the construction of more robust commands,&#xa;</xsl:text>
    <xsl:text>%% this is a necessity for isolating styling and behavior&#xa;</xsl:text>
    <xsl:text>%% The tcolorbox library of the same name loads the base library&#xa;</xsl:text>
    <xsl:text>\tcbuselibrary{xparse}&#xa;</xsl:text>
    <xsl:text>%% The tcolorbox library loads TikZ, its calc package is generally useful,&#xa;</xsl:text>
    <xsl:text>%% and is necessary for some smaller documents that use partial tcolor boxes&#xa;</xsl:text>
    <xsl:text>%% See:  https://github.com/PreTeXtBook/pretext/issues/1624&#xa;</xsl:text>
    <xsl:text>\usetikzlibrary{calc}&#xa;</xsl:text>
    <xsl:text>%% We use some more exotic tcolorbox keys to restore indentation to parboxes&#xa;</xsl:text>
    <xsl:text>\tcbuselibrary{hooks}&#xa;</xsl:text>
    -->

    <!-- This should save-off the indentation used for the first line of  -->
    <!-- a paragraph, in effect for the chosen document class.  Then the  -->
    <!-- "parbox" used by "tcolorbox" can restore indentation rather than -->
    <!-- run with none.  Part of                                          -->
    <!-- https://tex.stackexchange.com/questions/250165/                  -->
    <!-- normal-body-text-within-tcolorbox                                -->
    <!-- In a similar fashion we save/restore the parskip, only should    -->
    <!-- an ambitious publisher try to set it globally                    -->

<!-- 
    <xsl:text>%% Save default paragraph indentation and parskip for use later, when adjusting parboxes&#xa;</xsl:text>
    <xsl:text>\newlength{\normalparindent}&#xa;</xsl:text>
    <xsl:text>\newlength{\normalparskip}&#xa;</xsl:text>
    <xsl:text>\AtBeginDocument{\setlength{\normalparindent}{\parindent}}&#xa;</xsl:text>
    <xsl:text>\AtBeginDocument{\setlength{\normalparskip}{\parskip}}&#xa;</xsl:text>
    <xsl:text>\newcommand{\setparstyle}{\setlength{\parindent}{\normalparindent}\setlength{\parskip}{\normalparskip}}</xsl:text>
    <xsl:text>%% Hyperref should be here, but likes to be loaded late&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% Inline math delimiters, \(, \), need to be robust&#xa;</xsl:text>
    <xsl:text>%% 2016-01-31:  latexrelease.sty  supersedes  fixltx2e.sty&#xa;</xsl:text>
    <xsl:text>%% If  latexrelease.sty  exists, bugfix is in kernel&#xa;</xsl:text>
    <xsl:text>%% If not, bugfix is in  fixltx2e.sty&#xa;</xsl:text>
    <xsl:text>%% See:  https://tug.org/TUGboat/tb36-3/tb114ltnews22.pdf&#xa;</xsl:text>
    <xsl:text>%% and read "Fewer fragile commands" in distribution's  latexchanges.pdf&#xa;</xsl:text>
    <xsl:text>\IfFileExists{latexrelease.sty}{}{\usepackage{fixltx2e}}&#xa;</xsl:text>
     -->

     <!-- could condition on "subfigure-reps" -->

<!-- 
     <xsl:if test="$b-has-sidebyside">
        <xsl:text>%% shorter subnumbers in some side-by-side require manipulations&#xa;</xsl:text>
        <xsl:text>\usepackage{xstring}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$document-root//fn|$document-root//part">
        <xsl:text>%% Footnote counters and part/chapter counters are manipulated&#xa;</xsl:text>
        <xsl:text>%% April 2018:  chngcntr  commands now integrated into the kernel,&#xa;</xsl:text>
        <xsl:text>%% but circa 2018/2019 the package would still try to redefine them,&#xa;</xsl:text>
        <xsl:text>%% so we need to do the work of loading conditionally for old kernels.&#xa;</xsl:text>
        <xsl:text>%% From version 1.1a,  chngcntr  should detect defintions made by LaTeX kernel.&#xa;</xsl:text>
        <xsl:text>\ifdefined\counterwithin&#xa;</xsl:text>
        <xsl:text>\else&#xa;</xsl:text>
        <xsl:text>    \usepackage{chngcntr}&#xa;</xsl:text>
        <xsl:text>\fi&#xa;</xsl:text>

        
        <xsl:if test="$parts = 'structural'">  
            <xsl:text>%% Structural chapter numbers reset within parts&#xa;</xsl:text>
            <xsl:text>%% Starred form will not prefix part number&#xa;</xsl:text>
            <xsl:text>\counterwithin*{chapter}{part}&#xa;</xsl:text>
        </xsl:if>
    </xsl:if>
     -->

     <!-- Determine height of text block, assumes US letterpaper (11in height) -->
    <!-- Could react to document type, paper, margin specs                    -->

<!--     
    <xsl:variable name="text-height">
        <xsl:text>9.0in</xsl:text>
    </xsl:variable>
     -->
    
    <!-- Bringhurst: 30x => 66 chars, so 34x => 75 chars -->

<!-- 
    <xsl:variable name="text-width">
        <xsl:value-of select="34 * substring-before($font-size, 'pt')" />
        <xsl:text>pt</xsl:text>
    </xsl:variable>
    <xsl:text>%% Text height identically 9 inches, text width varies on point size&#xa;</xsl:text>
    <xsl:text>%% See Bringhurst 2.1.1 on measure for recommendations&#xa;</xsl:text>
    <xsl:text>%% 75 characters per line (count spaces, punctuation) is target&#xa;</xsl:text>
    <xsl:text>%% which is the upper limit of Bringhurst's recommendations&#xa;</xsl:text>
    <xsl:text>\geometry{letterpaper,total={</xsl:text>
    <xsl:value-of select="$text-width" />
    <xsl:text>,</xsl:text>
    <xsl:value-of select="$text-height" />
    <xsl:text>}}&#xa;</xsl:text>
    <xsl:text>%% Custom Page Layout Adjustments (use publisher page-geometry entry)&#xa;</xsl:text>
    <xsl:if test="$latex-page-geometry != ''">
        <xsl:text>\geometry{</xsl:text>
        <xsl:value-of select="$latex-page-geometry" />
        <xsl:text>}&#xa;</xsl:text>
    </xsl:if>
     -->
    
    <!-- Crop marks, as independent of author tools           -->
    <!-- Always *after* geometry package, no driver selected, -->
    <!-- since it should auto-detect.  Tested with xelatex.   -->
    <!-- crop  package suggests explicitly turning off driver -->
    <!-- options for the geometery package.  We don't.        -->

<!--
    <xsl:if test="$b-latex-crop-marks">
        <xsl:text>\usepackage[</xsl:text>
        <xsl:value-of select="$latex-crop-papersize"/>
        <xsl:text>,cam,center]{crop}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$latex-right-alignment = 'ragged'">
        <xsl:text>%% better handing of text alignment&#xa;</xsl:text>
        <xsl:text>\usepackage{ragged2e}&#xa;</xsl:text>
    </xsl:if>
-->
    
    <!--                                  -->
    <!-- Conditional LaTeX engine support -->
    <!-- (exclusive of fonts)             -->
    <!--                                  -->

<!-- 
    <xsl:text>%% This LaTeX file may be compiled with pdflatex, xelatex, or lualatex executables&#xa;</xsl:text>
    <xsl:text>%% LuaTeX is not explicitly supported, but we do accept additions from knowledgeable users&#xa;</xsl:text>
    <xsl:text>%% The conditional below provides  pdflatex  specific configuration last&#xa;</xsl:text>
    <xsl:text>%% begin: engine-specific capabilities&#xa;</xsl:text>
    <xsl:text>\ifthenelse{\boolean{xetex} \or \boolean{luatex}}{%&#xa;</xsl:text>
    <xsl:text>%% begin: xelatex and lualatex-specific default configuration&#xa;</xsl:text>
    <xsl:text>\ifxetex\usepackage{xltxtra}\fi&#xa;</xsl:text>
    <xsl:text>%% realscripts is the only part of xltxtra relevant to lualatex &#xa;</xsl:text>
    <xsl:text>\ifluatex\usepackage{realscripts}\fi&#xa;</xsl:text>
    <xsl:text>%% end:   xelatex and lualatex-specific default configuration&#xa;</xsl:text>
    <xsl:text>}{&#xa;</xsl:text>
    <xsl:text>%% begin: pdflatex-specific default configuration&#xa;</xsl:text>
    <xsl:text>%% We assume a PreTeXt XML source file may have Unicode characters&#xa;</xsl:text>
    <xsl:text>%% and so we ask LaTeX to parse a UTF-8 encoded file&#xa;</xsl:text>
    <xsl:text>%% This may work well for accented characters in Western language,&#xa;</xsl:text>
    <xsl:text>%% but not with Greek, Asian languages, etc.&#xa;</xsl:text>
    <xsl:text>%% When this is not good enough, switch to the  xelatex  engine&#xa;</xsl:text>
    <xsl:text>%% where Unicode is better supported (encouraged, even)&#xa;</xsl:text>
    <xsl:text>\usepackage[utf8]{inputenc}&#xa;</xsl:text>
    <xsl:text>%% end: pdflatex-specific default configuration&#xa;</xsl:text>
    <xsl:text>}&#xa;</xsl:text>
    <xsl:text>%% end:   engine-specific capabilities&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
 -->

    <!--                         -->
    <!-- Font support            -->
    <!-- (conditional on engine) -->
    <!--                         -->

<!-- 
    <xsl:text>%% Fonts.  Conditional on LaTex engine employed.&#xa;</xsl:text>
    <xsl:text>%% Default Text Font: The Latin Modern fonts are&#xa;</xsl:text>
    <xsl:text>%% "enhanced versions of the [original TeX] Computer Modern fonts."&#xa;</xsl:text>
    <xsl:text>%% We use them as the default text font for PreTeXt output.&#xa;</xsl:text>
    <xsl:if test="$b-needs-mono-font">
        <xsl:text>%% Default Monospace font: Inconsolata (aka zi4)&#xa;</xsl:text>
        <xsl:text>%% Sponsored by TUG: http://levien.com/type/myfonts/inconsolata.html&#xa;</xsl:text>
        <xsl:text>%% Loaded for documents with intentional objects requiring monospace&#xa;</xsl:text>
        <xsl:text>%% See package documentation for excellent instructions&#xa;</xsl:text>
        <xsl:text>%% fontspec will work universally if we use filename to locate OTF files&#xa;</xsl:text>
        <xsl:text>%% Loads the "upquote" package as needed, so we don't have to&#xa;</xsl:text>
        <xsl:text>%% Upright quotes might come from the  textcomp  package, which we also use&#xa;</xsl:text>
        <xsl:text>%% We employ the shapely \ell to match Google Font version&#xa;</xsl:text>
        <xsl:text>%% pdflatex: "varl" package option produces shapely \ell&#xa;</xsl:text>
        <xsl:text>%% pdflatex: "var0" package option produces plain zero (not used)&#xa;</xsl:text>
        <xsl:text>%% pdflatex: "varqu" package option produces best upright quotes&#xa;</xsl:text>
        <xsl:text>%% xelatex,lualatex: add OTF StylisticSet 1 for shapely \ell&#xa;</xsl:text>
        <xsl:text>%% xelatex,lualatex: add OTF StylisticSet 2 for plain zero (not used)&#xa;</xsl:text>
        <xsl:text>%% xelatex,lualatex: add OTF StylisticSet 3 for upright quotes&#xa;</xsl:text>
        <xsl:text>%%&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>%% Automatic Font Control&#xa;</xsl:text>
    <xsl:text>%% Portions of a document, are, or may, be affected by defined commands&#xa;</xsl:text>
    <xsl:text>%% These are perhaps more flexible when using  xelatex  rather than  pdflatex&#xa;</xsl:text>
    <xsl:text>%% The following definitions are meant to be re-defined in a style, using \renewcommand&#xa;</xsl:text>
    <xsl:text>%% They are scoped when employed (in a TeX group), and so should not be defined with an argument&#xa;</xsl:text>
    <xsl:text>\newcommand{\divisionfont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\blocktitlefont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\contentsfont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\pagefont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\tabularfont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\xreffont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\titlepagefont}{\relax}&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>\ifthenelse{\boolean{xetex} \or \boolean{luatex}}{%&#xa;</xsl:text>
    <xsl:text>%% begin: font setup and configuration for use with xelatex&#xa;</xsl:text>

    <xsl:text>%% Generally, xelatex is necessary for non-Western fonts&#xa;</xsl:text>
    <xsl:text>%% fontspec package provides extensive control of system fonts,&#xa;</xsl:text>
    <xsl:text>%% meaning *.otf (OpenType), and apparently *.ttf (TrueType)&#xa;</xsl:text>
    <xsl:text>%% that live *outside* your TeX/MF tree, and are controlled by your *system*&#xa;</xsl:text>
    <xsl:text>%% (it is possible that a TeX distribution will place fonts in a system location)&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% The fontspec package is the best vehicle for using different fonts in  xelatex&#xa;</xsl:text>
    <xsl:text>%% So we load it always, no matter what a publisher or style might want&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>\usepackage{fontspec}&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    
    <xsl:text>%% begin: xelatex main font ("font-xelatex-main" template)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-main"/>
    <xsl:text>%% end:   xelatex main font ("font-xelatex-main" template)&#xa;</xsl:text>

    <xsl:text>%% begin: xelatex mono font ("font-xelatex-mono" template)&#xa;</xsl:text>
    <xsl:text>%% (conditional on non-trivial uses being present in source)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-mono"/>
    <xsl:text>%% end:   xelatex mono font ("font-xelatex-mono" template)&#xa;</xsl:text>

    <xsl:text>%% begin: xelatex font adjustments ("font-xelatex-style" template)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-style"/>
    <xsl:text>%% end:   xelatex font adjustments ("font-xelatex-style" template)&#xa;</xsl:text>

    <xsl:if test="$b-has-icon">
        <xsl:text>%% Icons being used, so xelatex needs a system font&#xa;</xsl:text>
        <xsl:text>%% This can only be determined at compile-time&#xa;</xsl:text>
        <xsl:call-template name="xelatex-font-check">
            <xsl:with-param name="font-name" select="'FontAwesome'"/>
        </xsl:call-template>
    </xsl:if>
    <xsl:text>%%&#xa;</xsl:text>
 -->


    <!-- language tags appear in docinfo in renames, so be careful -->
     <!-- Generic will keep these for now (2024-09-24) -->
    <!-- <xsl:text>%% Extensive support for other languages&#xa;</xsl:text>
    <xsl:text>\usepackage{polyglossia}&#xa;</xsl:text>
    <xsl:text>%% Set main/default language based on pretext/@xml:lang value&#xa;</xsl:text>
    <xsl:choose>
        <xsl:when test="$document-language = 'en-US'">
            <xsl:text>%% document language code is "en-US", US English&#xa;</xsl:text>
            <xsl:text>%% usmax variant has extra hypenation&#xa;</xsl:text>
            <xsl:text>\setmainlanguage[variant=usmax]{english}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'el'">
            <xsl:text>%% document language code is "el", Modern Greek (1453-)&#xa;</xsl:text>
            <xsl:text>\setmainlanguage[variant=monotonic]{greek}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'es-ES'">
            <xsl:text>%% document language code is "es-ES", Spanish&#xa;</xsl:text>
            <xsl:text>\setmainlanguage{spanish}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'hu-HU'">
            <xsl:text>%% document language code is "hu-HU", Magyar (Hungarian)&#xa;</xsl:text>
            <xsl:text>\setmainlanguage{magyar}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'ko-KR'">
            <xsl:text>%% document language code is "ko-KR", Korean&#xa;</xsl:text>
            <xsl:text>\setmainlanguage{korean}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'ru-RU'">
            <xsl:text>%% document language code is "ru-RU", Russian&#xa;</xsl:text>
            <xsl:text>\setmainlanguage{russian}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'vi-VN'">
            <xsl:text>%% document language code is "vi-VN", Vietnamese&#xa;</xsl:text>
            <xsl:text>\setmainlanguage{vietnamese}&#xa;</xsl:text>
        </xsl:when>
        <xsl:when test="$document-language = 'it-IT'">
            <xsl:text>%% document language code is "it-IT", Italian&#xa;</xsl:text>
            <xsl:text>\setmainlanguage{italian}&#xa;</xsl:text>
        </xsl:when>
    </xsl:choose> -->
    <!-- <xsl:text>%% Enable secondary languages based on discovery of @xml:lang values&#xa;</xsl:text> -->
    <!-- secondary: so not already "main", and look just beyond $document-root (eg "book") -->
    <!-- <xsl:if test="not($document-language = 'en-US') and ($document-root/*//@xml:lang = 'en-US')">
        <xsl:text>%% document contains language code "en-US", US English&#xa;</xsl:text>
        <xsl:text>%% usmax variant has extra hypenation&#xa;</xsl:text>
        <xsl:text>\setotherlanguage[variant=usmax]{english}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="not($document-language = 'es-ES') and ($document-root/*//@xml:lang = 'es-ES')">
        <xsl:text>%% document contains language code "es-ES", Spanish&#xa;</xsl:text>
        <xsl:text>\setotherlanguage{spanish}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="not($document-language = 'el') and ($document-root/*//@xml:lang = 'el')">
        <xsl:text>%% document contains language code "el", Modern Greek (1453-)&#xa;</xsl:text>
        <xsl:text>\setotherlanguage[variant=monotonic]{greek}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="not($document-language = 'hu-HU') and ($document-root/*//@xml:lang = 'hu-HU')">
        <xsl:text>%% document contains language code "hu-HU", Magyar (Hungarian)&#xa;</xsl:text>
        <xsl:text>\setotherlanguage{magyar}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="not($document-language = 'ko-KR') and ($document-root/*//@xml:lang = 'ko-KR')">
        <xsl:text>%% document contains language code "ko-KR", Korean&#xa;</xsl:text>
        <xsl:text>\setotherlanguage{korean}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="not($document-language = 'ru-RU') and ($document-root/*//@xml:lang = 'ru-RU')">
        <xsl:text>%% document contains language code "ru-RU", Russian&#xa;</xsl:text>
        <xsl:text>\setotherlanguage{russian}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="not($document-language = 'vi-VN') and ($document-root/*//@xml:lang = 'vi-VN')">
        <xsl:text>%% document contains language code "vi-VN", Vietnamese&#xa;</xsl:text>
        <xsl:text>\setotherlanguage{vietnamese}&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>%% Enable fonts/scripts based on discovery of @xml:lang values&#xa;</xsl:text>
    <xsl:text>%% Western languages should be ably covered by Latin Modern Roman&#xa;</xsl:text>
    <xsl:if test="$document-root/*//@xml:lang='el'">
        <xsl:text>%% Font for Modern Greek&#xa;</xsl:text>
        <xsl:text>%% Font families: CMU Serif (Ubuntu fonts-cmu package), Linux Libertine O, GFS Artemisia&#xa;</xsl:text>
        <xsl:text>%% OTF Script needs to be enabled&#xa;</xsl:text>
        <xsl:text>\newfontfamily\greekfont[Script=Greek]{CMU Serif}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$document-root/*//@xml:lang='ko-KR'">
        <xsl:text>%% Font for Hangul&#xa;</xsl:text>
        <xsl:text>%% Font families: alternate - UnBatang with [Script=Hangul]&#xa;</xsl:text>
        <xsl:text>%% Debian/Ubuntu "fonts-nanum" package&#xa;</xsl:text>
        <xsl:text>\newfontfamily\koreanfont{NanumMyeongjo}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$document-root/*//@xml:lang='ru-RU'">
        <xsl:text>%% Font for Cyrillic&#xa;</xsl:text>
        <xsl:text>%% Font families: CMU Serif, Linux Libertine O&#xa;</xsl:text>
        <xsl:text>%% OTF Script needs to be enabled&#xa;</xsl:text>
        <xsl:text>\newfontfamily\russianfont[Script=Cyrillic]{CMU Serif}&#xa;</xsl:text>
    </xsl:if> -->

<!-- 
    <xsl:text>%% end:   font setup and configuration for use with xelatex&#xa;</xsl:text>

    <xsl:text>}{%&#xa;</xsl:text>

    <xsl:text>%% begin: font setup and configuration for use with pdflatex&#xa;</xsl:text>
    
    <xsl:text>%% begin: pdflatex main font ("font-pdflatex-main" template)&#xa;</xsl:text>
    <xsl:call-template name="font-pdflatex-main"/>
    <xsl:text>%% end:   pdflatex main font ("font-pdflatex-main" template)&#xa;</xsl:text>

    <xsl:text>%% begin: pdflatex mono font ("font-pdflatex-mono" template)&#xa;</xsl:text>
    <xsl:text>%% (conditional on non-trivial uses being present in source)&#xa;</xsl:text>
    <xsl:call-template name="font-pdflatex-mono"/>
    <xsl:text>%% end:   pdflatex mono font ("font-pdflatex-mono" template)&#xa;</xsl:text>

    <xsl:text>%% begin: pdflatex font adjustments ("font-pdflatex-style" template)&#xa;</xsl:text>
    <xsl:call-template name="font-pdflatex-style"/>
    <xsl:text>%% end:   pdflatex font adjustments ("font-pdflatex-style" template)&#xa;</xsl:text>

    <xsl:text>%% end:   font setup and configuration for use with pdflatex&#xa;</xsl:text>
    <xsl:text>}&#xa;</xsl:text>
    
     -->
<!--     
    <xsl:text>%% Micromanage spacing, etc.  The named "microtype-options"&#xa;</xsl:text>
    <xsl:text>%% template may be employed to fine-tune package behavior&#xa;</xsl:text>
    <xsl:text>\usepackage</xsl:text>

    <xsl:call-template name="microtype-option-argument"/>
    <xsl:text>{microtype}&#xa;</xsl:text>
 -->

    <!-- <xsl:text>%% Symbols, align environment, commutative diagrams, bracket-matrix&#xa;</xsl:text> -->
    <xsl:text>%% Standard expected ams packages (might not be needed)&#xa;</xsl:text>
 
    <xsl:text>\usepackage{amsmath}&#xa;</xsl:text>
    <xsl:text>\usepackage{amscd}&#xa;</xsl:text>
    <xsl:text>\usepackage{amssymb}&#xa;</xsl:text>

<!-- 
    <xsl:text>%% allow page breaks within display mathematics anywhere&#xa;</xsl:text>
    <xsl:text>%% level 4 is maximally permissive&#xa;</xsl:text>
    <xsl:text>%% this is exactly the opposite of AMSmath package philosophy&#xa;</xsl:text>
    <xsl:text>%% there are per-display, and per-equation options to control this&#xa;</xsl:text>
    <xsl:text>%% split, aligned, gathered, and alignedat are not affected&#xa;</xsl:text>
    <xsl:text>\allowdisplaybreaks[4]&#xa;</xsl:text>
    <xsl:text>%% allow more columns to a matrix&#xa;</xsl:text>
    <xsl:text>%% can make this even bigger by overriding with  latex.preamble.late  processing option&#xa;</xsl:text>
    <xsl:text>\setcounter{MaxMatrixCols}{30}&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:if test="$b-has-latex-front-cover or $b-has-latex-back-cover">
        <xsl:text>%% pdfpages package for front and back covers as PDFs&#xa;</xsl:text>
        <xsl:text>\usepackage[</xsl:text>
        <xsl:choose>
            <xsl:when test="$b-latex-draft-mode">
                <xsl:text>draft</xsl:text>
            </xsl:when>
            <xsl:otherwise>
                <xsl:text>final</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
        <xsl:text>]{pdfpages}&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>%%&#xa;</xsl:text>
 -->



    <!-- ############### -->
    <!-- Semantic Macros -->
    <!-- ############### -->
    <xsl:text>%% Begin: Semantic Macros&#xa;</xsl:text>
    <xsl:text>%% To preserve meaning in a LaTeX file&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% \mono macro for content of "c", "cd", "tag", etc elements&#xa;</xsl:text>
    <xsl:text>%% Also used automatically in other constructions&#xa;</xsl:text>
    <xsl:text>%% Simply an alias for \texttt&#xa;</xsl:text>
    <xsl:text>%% Always defined, even if there is no need, or if a specific tt font is not loaded&#xa;</xsl:text>
    <xsl:text>\newcommand{\mono}[1]{\texttt{#1}}&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% Following semantic macros are only defined here if their&#xa;</xsl:text>
    <xsl:text>%% use is required only in this specific document&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:variable name="one-line-reps" select="
        ($document-root//abbr)[1]|
        ($document-root//acro)[1]|
        ($document-root//init)[1]"/>
    <!-- (after fillin before swung-dash) -->
    <!-- Eventually move explanation of section to condition  -->
    <xsl:for-each select="$one-line-reps">
        <xsl:apply-templates select="." mode="tex-macro"/>
    </xsl:for-each>
    <xsl:if test="$document-root//alert">
        <xsl:text>%% Used for warnings, typically bold and italic&#xa;</xsl:text>
        <xsl:text>\newcommand{\alert}[1]{\textbf{\textit{#1}}}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$document-root//term">
        <xsl:text>%% Used for inline definitions of terms&#xa;</xsl:text>
        <xsl:text>\newcommand{\terminology}[1]{\textbf{#1}}&#xa;</xsl:text>
    </xsl:if>
    <!-- 2018-02-05: "booktitle" deprecated -->
    <xsl:if test="$document-root//pubtitle|$document-root//booktitle">
        <xsl:text>%% Titles of longer works (e.g. books, versus articles)&#xa;</xsl:text>
        <xsl:text>\newcommand{\pubtitle}[1]{\textsl{#1}}&#xa;</xsl:text>
    </xsl:if>
    <!-- http://tex.stackexchange.com/questions/23711/strikethrough-text -->
    <!-- http://tex.stackexchange.com/questions/287599/thickness-for-sout-strikethrough-command-from-ulem-package -->
    <xsl:if test="$document-root//insert|$document-root//delete|$document-root//stale">
        <xsl:text>%% Edits (insert, delete), stale (irrelevant, obsolete)&#xa;</xsl:text>
        <xsl:text>%% Package: underlines and strikethroughs, no change to \emph{}&#xa;</xsl:text>
        <xsl:text>\usepackage[normalem]{ulem}&#xa;</xsl:text>
        <xsl:text>%% Rules in this package reset proportional to fontsize&#xa;</xsl:text>
        <xsl:text>%% NB: *never* reset to package default (0.4pt?) after use&#xa;</xsl:text>
        <xsl:text>%% Macros will use colors for "electronic" version (the default)&#xa;</xsl:text>
        <xsl:if test="$document-root//insert">
            <xsl:text>%% Used for an edit that is an addition&#xa;</xsl:text>
            <xsl:text>\newcommand{\insertthick}{.1ex}&#xa;</xsl:text>
            <xsl:choose>
                <xsl:when test="$b-latex-print">
                    <xsl:text>\newcommand{\inserted}[1]{\renewcommand{\ULthickness}{\insertthick}\uline{#1}}&#xa;</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:text>\newcommand{\inserted}[1]{\renewcommand{\ULthickness}{\insertthick}\textcolor{green}{\uline{#1}}}&#xa;</xsl:text>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
        <xsl:if test="$document-root//delete">
            <xsl:text>%% Used for an edit that is a deletion&#xa;</xsl:text>
            <xsl:text>\newcommand{\deletethick}{.25ex}&#xa;</xsl:text>
            <xsl:choose>
                <xsl:when test="$b-latex-print">
                    <xsl:text>\newcommand{\deleted}[1]{\renewcommand{\ULthickness}{\deletethick}\sout{#1}}&#xa;</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:text>\newcommand{\deleted}[1]{\renewcommand{\ULthickness}{\deletethick}\textcolor{red}{\sout{#1}}}&#xa;</xsl:text>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
        <xsl:if test="$document-root//stale">
            <xsl:text>%% Used for inline irrelevant or obsolete text&#xa;</xsl:text>
            <xsl:text>\newcommand{\stalethick}{.1ex}&#xa;</xsl:text>
            <xsl:text>\newcommand{\stale}[1]{\renewcommand{\ULthickness}{\stalethick}\sout{#1}}&#xa;</xsl:text>
        </xsl:if>
    </xsl:if>
    <xsl:if test="$document-root//fillin[not(parent::m or parent::me or parent::men or parent::mrow)]">
        <xsl:call-template name="fillin-text"/>
    </xsl:if>
    <xsl:if test="$document-root//m/fillin|$document-root//me/fillin|$document-root//men/fillin|$document-root//mrow/fillin">
        <xsl:call-template name="fillin-math"/>
    </xsl:if>
    <!-- http://andrewmccarthy.ie/2014/11/06/swung-dash-in-latex/ -->
    <xsl:if test="$document-root//swungdash">
        <xsl:text>%% A character like a tilde, but different&#xa;</xsl:text>
        <xsl:text>\newcommand{\swungdash}{\raisebox{-2.25ex}{\scalebox{2}{\~{}}}}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$document-root//quantity">
        <xsl:text>%% Used for units and number formatting&#xa;</xsl:text>
        <xsl:text>\usepackage[per-mode=fraction]{siunitx}&#xa;</xsl:text>
        <!-- v2 -> v3 is a major upgrade, we need to accomodate both    -->
        <!-- Eventually we may want to just fail on version 2 and warn. -->
        <!-- Kernel test is actually "equal or later" according to      -->
        <!-- https://tex.stackexchange.com/questions/47743/             -->
        <!--   require-a-certain-or-later-version-of-a-package          -->
        <!-- IfPackageAtLeastTF: maybe only available since 2020-10-01? -->
        <xsl:text>%% v3 dated 2021-05-17, fix major behavior change&#xa;</xsl:text>
        <xsl:text>\makeatletter%&#xa;</xsl:text>
        <xsl:text>\@ifpackagelater{siunitx}{2021/05/17}&#xa;</xsl:text>
        <xsl:text>{%&#xa;</xsl:text>
        <xsl:text>\typeout{PTX: discovered siunitx v3, >= 2021-05-17}%&#xa;</xsl:text>
        <xsl:text>\sisetup{parse-numbers = false}%&#xa;</xsl:text>
        <xsl:text>}&#xa;</xsl:text>
        <xsl:text>{%&#xa;</xsl:text>
        <xsl:text>\typeout{PTX: discovered siunitx v2, &lt; 2021-05-17}%&#xa;</xsl:text>
        <xsl:text>}%&#xa;</xsl:text>
        <xsl:text>\makeatother%&#xa;</xsl:text>
        <xsl:text>\sisetup{inter-unit-product=\cdot}&#xa;</xsl:text>
        <xsl:text>\ifxetex\sisetup{math-micro=\text{µ},text-micro=µ}\fi</xsl:text>
        <xsl:text>\ifluatex\sisetup{math-micro=\text{µ},text-micro=µ}\fi</xsl:text>
        <xsl:text>%% Common non-SI units&#xa;</xsl:text>
        <xsl:for-each select="document('pretext-units.xsl')//base[@siunitx]">
            <xsl:text>\DeclareSIUnit\</xsl:text>
            <xsl:value-of select="@full" />
            <xsl:text>{</xsl:text>
            <xsl:choose>
                <xsl:when test="@siunitx='none'">
                    <xsl:value-of select="@short" />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="@siunitx" />
                </xsl:otherwise>
            </xsl:choose>
            <xsl:text>}&#xa;</xsl:text>
        </xsl:for-each>
    </xsl:if>
    <xsl:if test="$document-root//ol/li/title|$document-root//ul/li/title|$document-root//task/title">
        <!-- Styling: expose this macro to easier overriding for style work -->
        <!-- NB: needs a rename (and duplication) before exposing publicly  -->
        <!-- conditional can be split for list items v. tasks               -->
        <xsl:text>%% Style of a title on a list item, for ordered and unordered lists&#xa;</xsl:text>
        <xsl:text>%% Also "task" of exercise, PROJECT-LIKE, EXAMPLE-LIKE&#xa;</xsl:text>
        <xsl:text>\newcommand{\lititle}[1]{{\slshape#1}}&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>%% End: Semantic Macros&#xa;</xsl:text>



    <!-- <xsl:if test="$document-root//solutions or $b-needs-solution-styles"> -->
        <!-- <xsl:text>%% begin: environments for duplicates in solutions divisions&#xa;</xsl:text> -->
        <!-- Solutions present, check for exercise types     -->
        <!-- This may have false positives, but no real harm -->
        <!--  -->
        <!-- solutions to inline exercises -->
        <!-- <xsl:if test="$document-root//exercise[boolean(&INLINE-EXERCISE-FILTER;)]"> -->
        <!-- <xsl:text>%% Solutions to inline exercises, style and environment&#xa;</xsl:text> -->
            <!-- <xsl:text>\tcbset{ inlinesolutionstyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, after title={\space}, breakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcolorbox{inlinesolution}[4]</xsl:text> -->
            <!-- <xsl:text>{inlinesolutionstyle, title={\hyperref[#4]{#1~#2}\notblank{#3}{\space#3}{}}}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- Division Solution -->
        <!-- Explicitly breakable, run-in title -->
        <!-- <xsl:if test="$document-root//exercises//exercise[not(ancestor::exercisegroup)]|$document-root//worksheet//exercise[not(ancestor::exercisegroup)]|$document-root//reading-questions//exercise[not(ancestor::exercisegroup)]"> -->
            <!-- <xsl:text>%% Solutions to division exercises, not in exercise group&#xa;</xsl:text> -->
            <!-- <xsl:text>\tcbset{ divisionsolutionstyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, after title={\space}, breakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Parameter #1 is type-name and is ignored&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcolorbox{divisionsolution}[4]</xsl:text> -->
            <!-- <xsl:text>{divisionsolutionstyle, title={\hyperlink{#4}{#2}.\notblank{#3}{\space#3}{}}}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- Division Solution, Exercise Group -->
        <!-- Explicitly breakable, run-in title -->
        <!-- <xsl:if test="$document-root//exercisegroup[not(@cols)]"> -->
            <!-- <xsl:text>%% Solutions to division exercises, in exercise group, no columns&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Parameter #1 is type-name and is ignored&#xa;</xsl:text> -->
            <!-- <xsl:text>\tcbset{ divisionsolutionegstyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, after title={\space}, left skip=\egindent, breakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcolorbox{divisionsolutioneg}[4]</xsl:text> -->
            <!-- <xsl:text>{divisionsolutionegstyle, title={\hyperlink{#4}{#2}.\notblank{#3}{\space#3}{}}}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- Division Solution, Exercise Group, Columnar -->
        <!-- Explicity unbreakable, to behave in multicolumn tcbraster -->
        <!-- <xsl:if test="$document-root//exercisegroup/@cols"> -->
            <!-- <xsl:text>%% Solutions to division exercises, in exercise group with columns&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Parameter #1 is type-name and is ignored&#xa;</xsl:text> -->
            <!-- <xsl:text>\tcbset{ divisionsolutionegcolstyle/.style={bwminimalstyle, runintitlestyle,  exercisespacingstyle, after title={\space}, halign=flush left, unbreakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcolorbox{divisionsolutionegcol}[4]</xsl:text> -->
            <!-- <xsl:text>{divisionsolutionegcolstyle, title={\hyperlink{#4}{#2}.\notblank{#3}{\space#3}{}}}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- solutions to PROJECT-LIKE -->
        <!-- "project-rep" variable defined twice (each local) -->
        <!-- <xsl:variable name="project-reps" select=" -->
            <!-- ($document-root//project)[1]| -->
            <!-- ($document-root//activity)[1]| -->
            <!-- ($document-root//exploration)[1]| -->
            <!-- ($document-root//investigation)[1]"/> -->
        <!-- <xsl:for-each select="$project-reps"> -->
            <!-- <xsl:variable name="elt-name"> -->
                <!-- <xsl:value-of select="local-name(.)"/> -->
            <!-- </xsl:variable> -->
            <!-- set the style -->
            <!-- <xsl:text>\tcbset{ </xsl:text> -->
            <!-- <xsl:value-of select="$elt-name"/> -->
            <!-- <xsl:text>solutionstyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, after title={\space}, breakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
            <!-- create the environment -->
            <!-- <xsl:text>\newtcolorbox{</xsl:text> -->
            <!-- <xsl:value-of select="$elt-name"/> -->
            <!-- <xsl:text>solution}[4]</xsl:text> -->
            <!-- <xsl:text>{</xsl:text> -->
            <!-- <xsl:value-of select="$elt-name"/> -->
            <!-- <xsl:text>solutionstyle, title={\hyperref[#4]{#1~#2}\notblank{#3}{\space#3}{}}}&#xa;</xsl:text> -->
        <!-- </xsl:for-each> -->
    <!-- </xsl:if> -->
    <!-- Generic exercise lead-in -->
    <!-- <xsl:if test="$document-root//exercises//exercise|$document-root//worksheet//exercise|$document-root//reading-questions//exercise"> -->
        <!-- <xsl:text>%% Divisional exercises (and worksheet) as LaTeX environments&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Third argument is option for extra workspace in worksheets&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Hanging indent occupies a 5ex width slot prior to left margin&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Experimentally this seems just barely sufficient for a bold "888."&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Division Exercise -->
    <!-- Numbered, styled with a hanging indent -->
    <!-- <xsl:if test="$document-root//exercises//exercise[not(ancestor::exercisegroup)]|$document-root//worksheet//exercise[not(ancestor::exercisegroup)]|$document-root//reading-questions//exercise[not(ancestor::exercisegroup)]"> -->
        <!-- <xsl:text>%% Division exercises, not in exercise group&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ divisionexercisestyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, left=5ex, breakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
        <!-- <xsl:text>\newtcolorbox{divisionexercise}[4]</xsl:text> -->
        <!-- <xsl:text>{divisionexercisestyle, before title={\hspace{-5ex}\makebox[5ex][l]{#1.}}, title={\notblank{#2}{#2\space}{}}, phantom={</xsl:text> -->
        <!-- <xsl:if test="$b-pageref"> -->
            <!-- <xsl:text>\label{#4}</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:text>\hypertarget{#4}{}}, after={\notblank{#3}{\newline\rule{\workspacestrutwidth}{#3}\newline\vfill}{\par}}}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Division Exercise, Exercise Group -->
    <!-- The exercise itself carries the indentation, hence we can use breakable -->
    <!-- boxes and get good page breaks (as these problems could be long)        -->
    <!-- <xsl:if test="$document-root//exercisegroup[not(@cols)]"> -->
        <!-- <xsl:text>%% Division exercises, in exercise group, no columns&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ divisionexerciseegstyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, left=5ex, left skip=\egindent, breakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
        <!-- <xsl:text>\newtcolorbox{divisionexerciseeg}[4]</xsl:text> -->
        <!-- <xsl:text>{divisionexerciseegstyle, before title={\hspace{-5ex}\makebox[5ex][l]{#1.}}, title={\notblank{#2}{#2\space}{}}, phantom={</xsl:text> -->
        <!-- <xsl:if test="$b-pageref"> -->
            <!-- <xsl:text>\label{#4}</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:text>\hypertarget{#4}{}}, after={\notblank{#3}{\newline\rule{\workspacestrutwidth}{#3}\newline\vfill}{\par}}}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Division Exercise, Exercise Group, Columnar -->
    <!-- Explicity unbreakable, to behave in multicolumn tcbraster -->
    <!-- <xsl:if test="$document-root//exercisegroup/@cols"> -->
        <!-- <xsl:text>%% Division exercises, in exercise group with columns&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ divisionexerciseegcolstyle/.style={bwminimalstyle, runintitlestyle, exercisespacingstyle, left=5ex, halign=flush left, unbreakable, before upper app={\setparstyle} } }&#xa;</xsl:text> -->
        <!-- <xsl:text>\newtcolorbox{divisionexerciseegcol}[4]</xsl:text> -->
        <!-- <xsl:text>{divisionexerciseegcolstyle, before title={\hspace{-5ex}\makebox[5ex][l]{#1.}}, title={\notblank{#2}{#2\space}{}}, phantom={</xsl:text> -->
        <!-- <xsl:if test="$b-pageref"> -->
            <!-- <xsl:text>\label{#4}</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:text>\hypertarget{#4}{}}, after={\notblank{#3}{\newline\rule{\workspacestrutwidth}{#3}\newline\vfill}{\par}}}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//exercise[@workspace]"> -->
        <!-- <xsl:text>%% Worksheet exercises may have workspaces&#xa;</xsl:text> -->
        <!-- <xsl:text>\newlength{\workspacestrutwidth}&#xa;</xsl:text> -->
        <!-- <xsl:choose> -->
            <!-- <xsl:when test="$b-latex-draft-mode"> -->
                <!-- <xsl:text>%% LaTeX draft mode, @workspace strut is visible&#xa;</xsl:text> -->
                <!-- <xsl:text>\setlength{\workspacestrutwidth}{2pt}&#xa;</xsl:text> -->
            <!-- </xsl:when> -->
            <!-- <xsl:otherwise> -->
                <!-- <xsl:text>%% @workspace strut is invisible&#xa;</xsl:text> -->
                <!-- <xsl:text>\setlength{\workspacestrutwidth}{0pt}&#xa;</xsl:text> -->
            <!-- </xsl:otherwise> -->
        <!-- </xsl:choose> -->
    <!-- </xsl:if> -->
    <!-- Publishers can start chapter numbering at will.  Chapter 0 for -->
    <!-- the computer scientists, and perhaps a certain chapter number  -->
    <!-- for a book spread across multiple physical valumes.            -->
    <!-- <xsl:if test="$document-root//chapter and not($chapter-start = 1)"> -->
        <!-- <xsl:text>%% Publisher file requests an alternate chapter numbering&#xa;</xsl:text> -->
        <!-- <xsl:text>\setcounter{chapter}{</xsl:text> -->
        <!-- <xsl:value-of select="$chapter-start - 1" /> -->
        <!-- <xsl:text>}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Numbering Equations -->
    <!-- See numbering-equations variable being set in pretext-common.xsl         -->
    <!-- With number="yes|no" on mrow, we must allow for the possibility of an md  -->
    <!-- variant having numbers (we could be more careful, but it is not critical) -->
    <!-- NB: global numbering is level 0 and "level-to-name" is (a) incorrect,     -->
    <!-- and (b) not useful (\numberwithin will fail)                              -->
    <!-- NB: perhaps the chngcntr package should/could be used here                -->
    <!-- <xsl:if test="$document-root//men|$document-root//mdn|$document-root//md"> -->
        <!-- <xsl:text>%% Equation Numbering&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Controlled by  numbering.equations.level  processing parameter&#xa;</xsl:text> -->
        <!-- <xsl:text>%% No adjustment here implies document-wide numbering&#xa;</xsl:text> -->
        <!-- <xsl:if test="not($numbering-equations = 0)"> -->
            <!-- <xsl:text>\numberwithin{equation}{</xsl:text> -->
            <!-- <xsl:call-template name="level-to-name"> -->
                <!-- <xsl:with-param name="level" select="$numbering-equations" /> -->
            <!-- </xsl:call-template> -->
            <!-- <xsl:text>}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//image"> -->
        <!-- <xsl:text>%% "tcolorbox" environment for a single image, occupying entire \linewidth&#xa;</xsl:text> -->
        <!-- <xsl:text>%% arguments are left-margin, width, right-margin, as multiples of&#xa;</xsl:text> -->
        <!-- <xsl:text>%% \linewidth, and are guaranteed to be positive and sum to 1.0&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ imagestyle/.style={bwminimalstyle} }&#xa;</xsl:text> -->
        <!-- <xsl:text>\NewTColorBox{tcbimage}{mmm}{imagestyle,left skip=#1\linewidth,width=#2\linewidth}&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Wrapper environment for tcbimage environment with a fourth argument&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Fourth argument, if nonempty, is a vertical space adjustment&#xa;</xsl:text> -->
        <!-- <xsl:text>%% and implies image will be preceded by \leavevmode\nopagebreak&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Intended use is for alignment with a list marker&#xa;</xsl:text> -->
        <!-- <xsl:text>\NewDocumentEnvironment{image}{mmmm}{\notblank{#4}{\leavevmode\nopagebreak\vspace{#4}}{}\begin{tcbimage}{#1}{#2}{#3}}{\end{tcbimage}%&#xa;}</xsl:text> -->
    <!-- </xsl:if> -->
<!--  -->
    <!-- Tables -->
    <!-- <xsl:if test="$document-root//tabular"> -->
        <!-- <xsl:text>%% For improved tables&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage{array}&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Some extra height on each row is desirable, especially with horizontal rules&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Increment determined experimentally&#xa;</xsl:text> -->
        <!-- <xsl:text>\setlength{\extrarowheight}{0.2ex}&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Define variable thickness horizontal rules, full and partial&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Thicknesses are 0.03, 0.05, 0.08 in the  booktabs  package&#xa;</xsl:text> -->
        <!-- http://tex.stackexchange.com/questions/119153/table-with-different-rule-widths -->
        <!-- <xsl:text>\newcommand{\hrulethin}  {\noalign{\hrule height 0.04em}}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcommand{\hrulemedium}{\noalign{\hrule height 0.07em}}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcommand{\hrulethick} {\noalign{\hrule height 0.11em}}&#xa;</xsl:text> -->
        <!-- http://tex.stackexchange.com/questions/24549/horizontal-rule-with-adjustable-height-behaving-like-clinen-m -->
        <!-- Could preserve/restore \arrayrulewidth on entry/exit to tabular -->
        <!-- But we'll get cleaner source with this built into macros        -->
        <!-- Could condition \setlength debacle on the use of extpfeil       -->
        <!-- arrows (see discussion below)                                   -->
        <!-- <xsl:text>%% We preserve a copy of the \setlength package before other&#xa;</xsl:text> -->
        <!-- <xsl:text>%% packages (extpfeil) get a chance to load packages that redefine it&#xa;</xsl:text> -->
        <!-- <xsl:text>\let\oldsetlength\setlength&#xa;</xsl:text> -->
        <!-- <xsl:text>\newlength{\Oldarrayrulewidth}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcommand{\crulethin}[1]%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\noalign{\global\oldsetlength{\Oldarrayrulewidth}{\arrayrulewidth}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\noalign{\global\oldsetlength{\arrayrulewidth}{0.04em}}\cline{#1}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\noalign{\global\oldsetlength{\arrayrulewidth}{\Oldarrayrulewidth}}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcommand{\crulemedium}[1]%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\noalign{\global\oldsetlength{\Oldarrayrulewidth}{\arrayrulewidth}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\noalign{\global\oldsetlength{\arrayrulewidth}{0.07em}}\cline{#1}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\noalign{\global\oldsetlength{\arrayrulewidth}{\Oldarrayrulewidth}}}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcommand{\crulethick}[1]%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\noalign{\global\oldsetlength{\Oldarrayrulewidth}{\arrayrulewidth}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\noalign{\global\oldsetlength{\arrayrulewidth}{0.11em}}\cline{#1}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\noalign{\global\oldsetlength{\arrayrulewidth}{\Oldarrayrulewidth}}}&#xa;</xsl:text> -->
        <!-- http://tex.stackexchange.com/questions/119153/table-with-different-rule-widths -->
        <!-- <xsl:text>%% Single letter column specifiers defined via array package&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcolumntype{A}{!{\vrule width 0.04em}}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcolumntype{B}{!{\vrule width 0.07em}}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newcolumntype{C}{!{\vrule width 0.11em}}&#xa;</xsl:text> -->
        <!-- naked tabulars work best in a tcolorbox -->
        <!-- <xsl:text>%% tcolorbox to place tabular outside of a sidebyside&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ tabularboxstyle/.style={bwminimalstyle,} }&#xa;</xsl:text> -->
        <!-- <xsl:text>\newtcolorbox{tabularbox}[3]{tabularboxstyle, left skip=#1\linewidth, width=#2\linewidth,}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//cell/line"> -->
        <!-- <xsl:text>\newcommand{\tablecelllines}[3]%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\begin{tabular}[#2]{@{}#1@{}}#3\end{tabular}}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Numbering Footnotes -->
    <!-- <xsl:if test="$document-root//fn"> -->
        <!-- <xsl:text>%% Footnote Numbering&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Specified by numbering.footnotes.level&#xa;</xsl:text> -->
        <!-- <xsl:if test="$b-is-book"> -->
            <!-- <xsl:text>%% Undo counter reset by chapter for a book&#xa;</xsl:text> -->
            <!-- <xsl:text>\counterwithout{footnote}{chapter}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:choose> -->
            <!-- <xsl:when test="$numbering-footnotes = 0"> -->
                <!-- <xsl:text>%% Global numbering, since numbering.footnotes.level = 0&#xa;</xsl:text> -->
            <!-- </xsl:when> -->
            <!-- <xsl:otherwise> -->
                <!-- <xsl:text>\counterwithin*{footnote}{</xsl:text> -->
                <!-- <xsl:call-template name="level-to-name"> -->
                    <!-- <xsl:with-param name="level" select="$numbering-footnotes" /> -->
                <!-- </xsl:call-template> -->
                <!-- <xsl:text>}&#xa;</xsl:text> -->
            <!-- </xsl:otherwise> -->
        <!-- </xsl:choose> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$b-has-icon"> -->
        <!-- <xsl:text>%% Font Awesome icons in a LaTeX package&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage{fontawesome}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Poetry -->
    <xsl:if test="$document-root//poem">
        <xsl:text>%% Poetry Support&#xa;</xsl:text>
        <xsl:text>\newenvironment{poem}{\setlength{\parindent}{0em}}{}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemTitle}[1]{\begin{center}\large\textbf{#1}\end{center}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemIndent}{\hspace{2 em}}&#xa;</xsl:text>
        <xsl:text>\newenvironment{stanza}{\vspace{0.25 em}\hangindent=4em}{\vspace{1 em}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\stanzaTitle}[1]{{\centering\textbf{#1}\par}\vspace{-\parskip}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemauthorleft}[1]{\vspace{-1em}\begin{flushleft}\textit{#1}\end{flushleft}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemauthorcenter}[1]{\vspace{-1em}\begin{center}\textit{#1}\end{center}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemauthorright}[1]{\vspace{-1em}\begin{flushright}\textit{#1}\end{flushright}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemlineleft}[1]{{\raggedright{#1}\par}\vspace{-\parskip}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemlinecenter}[1]{{\centering{#1}\par}\vspace{-\parskip}}&#xa;</xsl:text>
        <xsl:text>\newcommand{\poemlineright}[1]{{\raggedleft{#1}\par}\vspace{-\parskip}}&#xa;</xsl:text>
    </xsl:if>
    <!-- Music -->
    <xsl:if test="$document-root//flat | $document-root//doubleflat | $document-root//sharp | $document-root//doublesharp | $document-root//natural | $document-root//n | $document-root//scaledeg | $document-root//chord">
        <xsl:text>%% Musical Symbol Support&#xa;</xsl:text>
        <xsl:text>%% The musicography package builds on the "musix" fonts and&#xa;</xsl:text>
        <xsl:text>%% provides music notation for use with both pdflatex and xelatex&#xa;</xsl:text>
        <xsl:text>%% For Ubuntu/Debian use the  texlive-music  package&#xa;</xsl:text>
        <!-- Note: package's shorthand macros  \fl, \sh, \na  might conflict with authors' macros? -->
        <xsl:text>\usepackage{musicography}&#xa;</xsl:text>
        <xsl:text>\renewcommand{\flat}{\musFlat}&#xa;</xsl:text>
        <xsl:text>\newcommand{\doubleflat}{\musDoubleFlat}&#xa;</xsl:text>
        <xsl:text>\renewcommand{\sharp}{\musSharp}&#xa;</xsl:text>
        <xsl:text>\newcommand{\doublesharp}{\musDoubleSharp}&#xa;</xsl:text>
        <xsl:text>\renewcommand{\natural}{\musNatural}&#xa;</xsl:text>
        <xsl:text>%%&#xa;</xsl:text>
    </xsl:if>
    <!-- Inconsolata font, sponsored by TUG: http://levien.com/type/myfonts/inconsolata.html            -->
    <!-- As seen on: http://tex.stackexchange.com/questions/50810/good-monospace-font-for-code-in-latex -->
    <!-- "Fonts for Displaying Program Code in LaTeX":  http://nepsweb.co.uk/docs%/progfonts.pdf        -->
    <!-- Fonts and xelatex:  http://tex.stackexchange.com/questions/102525/use-type-1-fonts-with-xelatex -->
    <!--   http://tex.stackexchange.com/questions/179448/beramono-in-xetex -->
    <!-- http://tex.stackexchange.com/questions/25249/how-do-i-use-a-particular-font-for-a-small-section-of-text-in-my-document -->
    <!-- Bitstream Vera Font names within: https://github.com/timfel/texmf/blob/master/fonts/map/vtex/bera.ali -->
    <!-- Coloring listings: http://tex.stackexchange.com/questions/18376/beautiful-listing-for-csharp -->
    <!-- Song and Dance for font changes: http://jevopi.blogspot.com/2010/03/nicely-formatted-listings-in-latex-with.html -->
    <!-- <xsl:if test="$b-has-program or $b-has-console or $b-has-sage"> -->
        <!-- <xsl:text>%% Program listing support: for listings, programs, consoles, and Sage code&#xa;</xsl:text> -->
        <!-- NB: the "listingsutf8" package is not a panacea, as it only       -->
        <!-- cooperates with UTF-8 characters when code snippets are read      -->
        <!-- in from external files.  We do condition on the LaTeX engines     -->
        <!-- since (a) it is easy and (b) the tcolorbox documentation warns    -->
        <!-- about not being careful.  NB: LuaTeX is not tested nor supported. -->
        <!-- <xsl:text>\ifthenelse{\boolean{xetex} \or \boolean{luatex}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>  {\tcbuselibrary{listings}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>  {\tcbuselibrary{listingsutf8}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>%% We define the listings font style to be the default "ttfamily"&#xa;</xsl:text> -->
        <!-- <xsl:text>%% To fix hyphens/dashes rendered in PDF as fancy minus signs by listing&#xa;</xsl:text> -->
        <!-- <xsl:text>%% http://tex.stackexchange.com/questions/33185/listings-package-changes-hyphens-to-minus-signs&#xa;</xsl:text> -->
        <!-- <xsl:text>\makeatletter&#xa;</xsl:text> -->
        <!-- <xsl:text>\lst@CCPutMacro\lst@ProcessOther {"2D}{\lst@ttfamily{-{}}{-{}}}&#xa;</xsl:text> -->
        <!-- <xsl:text>\@empty\z@\@empty&#xa;</xsl:text> -->
        <!-- <xsl:text>\makeatother&#xa;</xsl:text> -->
        <!-- <xsl:text>%% We define a null language, free of any formatting or style&#xa;</xsl:text> -->
        <!-- <xsl:text>%% for use when a language is not supported, or pseudo-code, or consoles&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Not necessary for Sage code, so in limited cases included unnecessarily&#xa;</xsl:text> -->
        <!-- <xsl:text>\lstdefinelanguage{none}{identifierstyle=,commentstyle=,stringstyle=,keywordstyle=}&#xa;</xsl:text> -->
        <!-- <xsl:text>\ifthenelse{\boolean{xetex}}{}{%&#xa;</xsl:text> -->
        <!-- <xsl:text>%% begin: pdflatex-specific listings configuration&#xa;</xsl:text> -->
        <!-- <xsl:text>%% translate U+0080 - U+00F0 to their textmode LaTeX equivalents&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Data originally from https://www.w3.org/Math/characters/unicode.xml, 2016-07-23&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Lines marked in XSL with "$" were converted from mathmode to textmode&#xa;</xsl:text> -->
        <!-- encoding, etc: http://tex.stackexchange.com/questions/24528/ -->
        <!-- Format: {Unicode}{TeX}{rendered-length} Unicode name (in numerical order) -->
        <!-- <xsl:text>\lstset{extendedchars=true}&#xa;</xsl:text> -->
        <!-- <xsl:text>\lstset{literate=</xsl:text> -->
        <!-- <xsl:text>{&#x00A0;}{{~}}{1}</xsl:text> -->    <!--NO-BREAK SPACE-->
        <!-- <xsl:text>{&#x00A1;}{{\textexclamdown }}{1}</xsl:text> -->    <!--INVERTED EXCLAMATION MARK-->
        <!-- <xsl:text>{&#x00A2;}{{\textcent }}{1}</xsl:text> -->    <!--CENT SIGN-->
        <!-- <xsl:text>{&#x00A3;}{{\textsterling }}{1}</xsl:text> -->    <!--POUND SIGN-->
        <!-- <xsl:text>{&#x00A4;}{{\textcurrency }}{1}</xsl:text> -->    <!--CURRENCY SIGN-->
        <!-- <xsl:text>{&#x00A5;}{{\textyen }}{1}</xsl:text> -->    <!--YEN SIGN-->
        <!-- <xsl:text>{&#x00A6;}{{\textbrokenbar }}{1}</xsl:text> -->    <!--BROKEN BAR-->
        <!-- <xsl:text>{&#x00A7;}{{\textsection }}{1}</xsl:text> -->    <!--SECTION SIGN-->
        <!-- <xsl:text>{&#x00A8;}{{\textasciidieresis }}{1}</xsl:text> -->    <!--DIAERESIS-->
        <!-- <xsl:text>{&#x00A9;}{{\textcopyright }}{1}</xsl:text> -->    <!--COPYRIGHT SIGN-->
        <!-- <xsl:text>{&#x00AA;}{{\textordfeminine }}{1}</xsl:text> -->    <!--FEMININE ORDINAL INDICATOR-->
        <!-- <xsl:text>{&#x00AB;}{{\guillemotleft }}{1}</xsl:text> -->    <!--LEFT-POINTING DOUBLE ANGLE QUOTATION MARK-->
        <!-- <xsl:text>{&#x00AC;}{{\textlnot }}{1}</xsl:text> -->    <!--NOT SIGN-->  <!-- $ -->
        <!-- <xsl:text>{&#x00AD;}{{\-}}{1}</xsl:text> -->    <!--SOFT HYPHEN-->
        <!-- <xsl:text>{&#x00AE;}{{\textregistered }}{1}</xsl:text> -->    <!--REGISTERED SIGN-->
        <!-- <xsl:text>{&#x00AF;}{{\textasciimacron }}{1}</xsl:text> -->    <!--MACRON-->
        <!-- <xsl:text>{&#x00B0;}{{\textdegree }}{1}</xsl:text> -->    <!--DEGREE SIGN-->
        <!-- <xsl:text>{&#x00B1;}{{\textpm }}{1}</xsl:text> -->    <!--PLUS-MINUS SIGN-->  <!-- $ -->
        <!-- <xsl:text>{&#x00B2;}{{\texttwosuperior }}{1}</xsl:text> -->    <!--SUPERSCRIPT TWO-->  <!-- $ -->
        <!-- <xsl:text>{&#x00B3;}{{\textthreesuperior }}{1}</xsl:text> -->    <!--SUPERSCRIPT THREE-->   <!-- $ -->
        <!-- <xsl:text>{&#x00B4;}{{\textasciiacute }}{1}</xsl:text> -->    <!--ACUTE ACCENT-->
        <!-- <xsl:text>{&#x00B5;}{{\textmu }}{1}</xsl:text> -->    <!--MICRO SIGN-->  <!-- $ -->
        <!-- <xsl:text>{&#x00B6;}{{\textparagraph }}{1}</xsl:text> -->    <!--PILCROW SIGN-->
        <!-- <xsl:text>{&#x00B7;}{{\textperiodcentered }}{1}</xsl:text> -->    <!--MIDDLE DOT-->  <!-- $ -->
        <!-- <xsl:text>{&#x00B8;}{{\c{}}}{1}</xsl:text> -->    <!--CEDILLA-->
        <!-- <xsl:text>{&#x00B9;}{{\textonesuperior }}{1}</xsl:text> -->    <!--SUPERSCRIPT ONE-->  <!-- $ -->
        <!-- <xsl:text>{&#x00BA;}{{\textordmasculine }}{1}</xsl:text> -->    <!--MASCULINE ORDINAL INDICATOR-->
        <!-- <xsl:text>{&#x00BB;}{{\guillemotright }}{1}</xsl:text> -->    <!--RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK-->
        <!-- <xsl:text>{&#x00BC;}{{\textonequarter }}{1}</xsl:text> -->    <!--VULGAR FRACTION ONE QUARTER-->
        <!-- <xsl:text>{&#x00BD;}{{\textonehalf }}{1}</xsl:text> -->    <!--VULGAR FRACTION ONE HALF-->
        <!-- <xsl:text>{&#x00BE;}{{\textthreequarters }}{1}</xsl:text> -->    <!--VULGAR FRACTION THREE QUARTERS-->
        <!-- <xsl:text>{&#x00BF;}{{\textquestiondown }}{1}</xsl:text> -->    <!--INVERTED QUESTION MARK-->
        <!-- <xsl:text>{&#x00C0;}{{\`{A}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER A WITH GRAVE-->
        <!-- <xsl:text>{&#x00C1;}{{\'{A}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER A WITH ACUTE-->
        <!-- <xsl:text>{&#x00C2;}{{\^{A}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER A WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00C3;}{{\~{A}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER A WITH TILDE-->
        <!-- <xsl:text>{&#x00C4;}{{\"{A}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER A WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00C5;}{{\AA }}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER A WITH RING ABOVE-->
        <!-- <xsl:text>{&#x00C6;}{{\AE }}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER AE-->
        <!-- <xsl:text>{&#x00C7;}{{\c{C}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER C WITH CEDILLA-->
        <!-- <xsl:text>{&#x00C8;}{{\`{E}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER E WITH GRAVE-->
        <!-- <xsl:text>{&#x00C9;}{{\'{E}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER E WITH ACUTE-->
        <!-- <xsl:text>{&#x00CA;}{{\^{E}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER E WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00CB;}{{\"{E}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER E WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00CC;}{{\`{I}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER I WITH GRAVE-->
        <!-- <xsl:text>{&#x00CD;}{{\'{I}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER I WITH ACUTE-->
        <!-- <xsl:text>{&#x00CE;}{{\^{I}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER I WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00CF;}{{\"{I}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER I WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00D0;}{{\DH }}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER ETH-->
        <!-- <xsl:text>{&#x00D1;}{{\~{N}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER N WITH TILDE-->
        <!-- <xsl:text>{&#x00D2;}{{\`{O}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER O WITH GRAVE-->
        <!-- <xsl:text>{&#x00D3;}{{\'{O}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER O WITH ACUTE-->
        <!-- <xsl:text>{&#x00D4;}{{\^{O}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER O WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00D5;}{{\~{O}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER O WITH TILDE-->
        <!-- <xsl:text>{&#x00D6;}{{\"{O}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER O WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00D7;}{{\texttimes }}{1}</xsl:text> -->    <!--MULTIPLICATION SIGN-->
        <!-- <xsl:text>{&#x00D8;}{{\O }}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER O WITH STROKE-->
        <!-- <xsl:text>{&#x00D9;}{{\`{U}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER U WITH GRAVE-->
        <!-- <xsl:text>{&#x00DA;}{{\'{U}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER U WITH ACUTE-->
        <!-- <xsl:text>{&#x00DB;}{{\^{U}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER U WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00DC;}{{\"{U}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER U WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00DD;}{{\'{Y}}}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER Y WITH ACUTE-->
        <!-- <xsl:text>{&#x00DE;}{{\TH }}{1}</xsl:text> -->    <!--LATIN CAPITAL LETTER THORN-->
        <!-- <xsl:text>{&#x00DF;}{{\ss }}{1}</xsl:text> -->    <!--LATIN SMALL LETTER SHARP S-->
        <!-- <xsl:text>{&#x00E0;}{{\`{a}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER A WITH GRAVE-->
        <!-- <xsl:text>{&#x00E1;}{{\'{a}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER A WITH ACUTE-->
        <!-- <xsl:text>{&#x00E2;}{{\^{a}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER A WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00E3;}{{\~{a}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER A WITH TILDE-->
        <!-- <xsl:text>{&#x00E4;}{{\"{a}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER A WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00E5;}{{\aa }}{1}</xsl:text> -->    <!--LATIN SMALL LETTER A WITH RING ABOVE-->
        <!-- <xsl:text>{&#x00E6;}{{\ae }}{1}</xsl:text> -->    <!--LATIN SMALL LETTER AE-->
        <!-- <xsl:text>{&#x00E7;}{{\c{c}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER C WITH CEDILLA-->
        <!-- <xsl:text>{&#x00E8;}{{\`{e}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER E WITH GRAVE-->
        <!-- <xsl:text>{&#x00E9;}{{\'{e}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER E WITH ACUTE-->
        <!-- <xsl:text>{&#x00EA;}{{\^{e}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER E WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00EB;}{{\"{e}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER E WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00EC;}{{\`{\i}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER I WITH GRAVE-->
        <!-- <xsl:text>{&#x00ED;}{{\'{\i}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER I WITH ACUTE-->
        <!-- <xsl:text>{&#x00EE;}{{\^{\i}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER I WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00EF;}{{\"{\i}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER I WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00F0;}{{\dh }}{1}</xsl:text> -->    <!--LATIN SMALL LETTER ETH-->
        <!-- <xsl:text>{&#x00F1;}{{\~{n}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER N WITH TILDE-->
        <!-- <xsl:text>{&#x00F2;}{{\`{o}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER O WITH GRAVE-->
        <!-- <xsl:text>{&#x00F3;}{{\'{o}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER O WITH ACUTE-->
        <!-- <xsl:text>{&#x00F4;}{{\^{o}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER O WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00F5;}{{\~{o}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER O WITH TILDE-->
        <!-- <xsl:text>{&#x00F6;}{{\"{o}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER O WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00F7;}{{\textdiv }}{1}</xsl:text> -->    <!--DIVISION SIGN-->  <!-- $ -->
        <!-- <xsl:text>{&#x00F8;}{{\o }}{1}</xsl:text> -->    <!--LATIN SMALL LETTER O WITH STROKE-->
        <!-- <xsl:text>{&#x00F9;}{{\`{u}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER U WITH GRAVE-->
        <!-- <xsl:text>{&#x00FA;}{{\'{u}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER U WITH ACUTE-->
        <!-- <xsl:text>{&#x00FB;}{{\^{u}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER U WITH CIRCUMFLEX-->
        <!-- <xsl:text>{&#x00FC;}{{\"{u}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER U WITH DIAERESIS-->
        <!-- <xsl:text>{&#x00FD;}{{\'{y}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER Y WITH ACUTE-->
        <!-- <xsl:text>{&#x00FE;}{{\th }}{1}</xsl:text> -->    <!--LATIN SMALL LETTER THORN-->
        <!-- <xsl:text>{&#x00FF;}{{\"{y}}}{1}</xsl:text> -->    <!--LATIN SMALL LETTER Y WITH DIAERESIS-->
        <!-- <xsl:text>}&#xa;</xsl:text> --> <!-- end of literate set -->
        <!-- <xsl:text>%% end: pdflatex-specific listings configuration&#xa;</xsl:text> -->
        <!-- <xsl:text>}&#xa;</xsl:text> -->
        <!-- <xsl:text>%% End of generic listing adjustments&#xa;</xsl:text> -->
        <!-- <xsl:if test="$b-has-program"> -->
            <!-- <xsl:text>%% Program listings via new tcblisting environment&#xa;</xsl:text> -->
            <!-- <xsl:text>%% First a universal color scheme for parts of any language&#xa;</xsl:text> -->
            <!-- <xsl:if test="not($b-latex-print)" > -->
                <!-- <xsl:text>%% Colors match a subset of Google prettify "Default" style&#xa;</xsl:text> -->
                <!-- <xsl:text>%% Full colors for "electronic" version&#xa;</xsl:text> -->
                <!-- <xsl:text>%% http://code.google.com/p/google-code-prettify/source/browse/trunk/src/prettify.css&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{identifiers}{rgb}{0.375,0,0.375}&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{comments}{rgb}{0.5,0,0}&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{strings}{rgb}{0,0.5,0}&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{keywords}{rgb}{0,0,0.5}&#xa;</xsl:text> -->
            <!-- </xsl:if> -->
            <!-- <xsl:if test="$b-latex-print" > -->
                <!-- <xsl:text>%% All-black colors for "print" version&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{identifiers}{rgb}{0,0,0}&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{comments}{rgb}{0,0,0}&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{strings}{rgb}{0,0,0}&#xa;</xsl:text> -->
                <!-- <xsl:text>\definecolor{keywords}{rgb}{0,0,0}&#xa;</xsl:text> -->
            <!-- </xsl:if> -->
            <!-- <xsl:text>%% Options passed to the listings package via tcolorbox&#xa;</xsl:text> -->
            <!-- <xsl:text>\lstdefinestyle{programcodestyle}{identifierstyle=\color{identifiers},commentstyle=\color{comments},stringstyle=\color{strings},keywordstyle=\color{keywords}, breaklines=true, breakatwhitespace=true, columns=fixed, extendedchars=true, aboveskip=0pt, belowskip=0pt}&#xa;</xsl:text> -->
            <!-- This variant style is what will turn on line numbering -->
            <!-- <xsl:text>\lstdefinestyle{programcodenumberedstyle}{style=programcodestyle, numbers=left}&#xa;</xsl:text> -->
            <!-- We want a "program" to be able to break across pages -->
            <!-- 2020-10-07: "breakable" seems ineffective            -->
            <!-- 3 ex left margin moves code off of leftrule by a generous amount -->
            <!-- <xsl:text>\tcbset{ programboxstyle/.style={left=3ex, right=0pt, top=0ex, bottom=0ex, middle=0pt, toptitle=0pt, bottomtitle=0pt, boxsep=0pt, &#xa;</xsl:text> -->
            <!-- <xsl:text>listing only, fontupper=\small\ttfamily,&#xa;</xsl:text> -->
            <!-- <xsl:text>colback=white, sharp corners, boxrule=-0.3pt, leftrule=0.5pt, toprule at break=-0.3pt, bottomrule at break=-0.3pt,&#xa;</xsl:text> -->
            <!-- <xsl:text>breakable,&#xa;</xsl:text> -->
            <!-- <xsl:text>} }&#xa;</xsl:text> -->
            <!-- Repeat the box style, but move numbers out of the margin and past -->
            <!-- the left rule with a 6ex space.  Plenty of room for double-digit  -->
            <!-- line numbers, and should be OK for triple-digits                   -->
            <!-- <xsl:text>%% Overwrite the margin to make room for numbers (up to line 999)&#xa;</xsl:text> -->
            <!-- <xsl:text>\tcbset{ programboxnumberedstyle/.style={programboxstyle, left=6ex} }&#xa;</xsl:text> -->
            <!-- Two "tcblisting" environments for numbered v. not numbered,            -->
            <!-- see switching between them in employment in body                       -->
            <!-- Arguments: language, left margin, width, right margin (latter ignored) -->
            <!-- <xsl:text>\newtcblisting{program}[4]{programboxstyle, left skip=#2\linewidth, width=#3\linewidth, listing options={language=#1, style=programcodestyle}}&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcblisting{programnumbered}[4]{programboxnumberedstyle, left skip=#2\linewidth, width=#3\linewidth, listing options={language=#1, style=programcodenumberedstyle}}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:if test="$document-root//console"> -->
            <!-- <xsl:text>%% Console session with prompt, input, output&#xa;</xsl:text> -->
            <!-- <xsl:text>%% listings allows for escape sequences to enable LateX,&#xa;</xsl:text> -->
            <!-- <xsl:text>%% so we bold the input commands via the following macro&#xa;</xsl:text> -->
            <!-- <xsl:text>\newcommand{\consoleinput}[1]{\textbf{#1}}&#xa;</xsl:text> -->
            <!-- https://tex.stackexchange.com/questions/299401/bold-just-one-line-inside-of-lstlisting/299406 -->
            <!-- Syntax highlighting is not so great for "language=bash" -->
            <!-- Line-breaking off to match old behavior, prebreak option fails inside LaTeX for input -->
            <!-- <xsl:text>\lstdefinestyle{consolecodestyle}{language=none, escapeinside={(*}{*)}, identifierstyle=, commentstyle=, stringstyle=, keywordstyle=, breaklines=true, breakatwhitespace=true, columns=fixed, extendedchars=true, aboveskip=0pt, belowskip=0pt}&#xa;</xsl:text> -->
            <!--  -->
            <!-- <xsl:text>\tcbset{ consoleboxstyle/.style={left=0pt, right=0pt, top=0ex, bottom=0ex, middle=0pt, toptitle=0pt, bottomtitle=0pt, boxsep=0pt,&#xa;</xsl:text> -->
            <!-- <xsl:text>listing only, fontupper=\small\ttfamily,&#xa;</xsl:text> -->
            <!-- <xsl:text>colback=white, boxrule=-0.3pt, toprule at break=-0.3pt, bottomrule at break=-0.3pt,&#xa;</xsl:text> -->
            <!-- <xsl:text>breakable,&#xa;</xsl:text> -->
            <!-- <xsl:text>} }&#xa;</xsl:text> -->
            <!-- Arguments: left margin, width, right margin (latter ignored) -->
            <!-- <xsl:text>\newtcblisting{console}[3]{consoleboxstyle, left skip=#1\linewidth, width=#2\linewidth, listing options={style=consolecodestyle}}&#xa;</xsl:text> -->
       <!-- </xsl:if> -->
        <!-- <xsl:if test="$b-has-sage"> -->
            <!-- <xsl:text>%% The listings package as tcolorbox for Sage code&#xa;</xsl:text> -->
            <!-- <xsl:text>%% We do as much styling as possible with tcolorbox, not listings&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Sage's blue is 50%, we go way lighter (blue!05 would also work)&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Note that we defuse listings' default "aboveskip" and "belowskip"&#xa;</xsl:text> -->
            <!-- NB: tcblisting "forgets" its colors as it breaks across pages, -->
            <!-- and "frame empty" on the output is not sufficient.  So we set  -->
            <!-- the frame color to white.                                      -->
            <!-- See: https://tex.stackexchange.com/questions/240246/           -->
            <!-- problem-with-tcblisting-at-page-break                          -->
            <!-- TODO: integrate into the LaTeX styling schemes -->
            <!-- <xsl:text>\definecolor{sageblue}{rgb}{0.95,0.95,1}&#xa;</xsl:text> -->
            <!-- <xsl:text>\tcbset{ sagestyle/.style={left=0pt, right=0pt, top=0ex, bottom=0ex, middle=0pt, toptitle=0pt, bottomtitle=0pt,&#xa;</xsl:text> -->
            <!-- <xsl:text>boxsep=4pt, listing only, fontupper=\small\ttfamily,&#xa;</xsl:text> -->
            <!-- <xsl:text>breakable, &#xa;</xsl:text> -->
            <!-- <xsl:text>listing options={language=Python,breaklines=true,breakatwhitespace=true, extendedchars=true, aboveskip=0pt, belowskip=0pt}} }&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcblisting{sageinput}{sagestyle, colback=sageblue, sharp corners, boxrule=0.5pt, toprule at break=-0.3pt, bottomrule at break=-0.3pt, }&#xa;</xsl:text> -->
            <!-- <xsl:text>\newtcblisting{sageoutput}{sagestyle, colback=white, colframe=white, frame empty, before skip=0pt, after skip=0pt, }&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//pre|$document-root//cd|$document-root//fragment"> -->
        <!-- <xsl:text>%% Fancy Verbatim for consoles, preformatted, code display, literate programming&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage{fancyvrb}&#xa;</xsl:text> -->
        <!-- <xsl:if test="$document-root//pre|$document-root//fragment"> -->
            <!-- <xsl:text>%% Pre-formatted text, a peer of paragraphs&#xa;</xsl:text> -->
            <!-- <xsl:text>\DefineVerbatimEnvironment{preformatted}{Verbatim}{}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- see commit d2560edd0cc3974c for removal of code for a centered box of verbatim text -->
        <!-- <xsl:if test="$document-root//cd"> -->
            <!-- <xsl:text>%% code display (cd), by analogy with math display (md)&#xa;</xsl:text> -->
            <!-- <xsl:text>%% (a) indented slightly, so a paragraph appears to hang together&#xa;</xsl:text> -->
            <!-- <xsl:text>\DefineVerbatimEnvironment{codedisplay}{Verbatim}{xleftmargin=4ex}&#xa;</xsl:text> -->
            <!-- <xsl:text>%% (b) flush left works well in exceptions like list items, etc&#xa;</xsl:text> -->
            <!-- <xsl:text>\DefineVerbatimEnvironment{codedisplayleft}{Verbatim}{}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
    <!-- </xsl:if> -->
    <!-- TODO:  \showidx package as part of a draft mode, prints entries in margin -->
     <!-- <xsl:if test="$document-root//ol[@cols]|$document-root//ul[@cols]|$document-root//contributors"> -->
        <!-- <xsl:text>%% Multiple column, column-major lists&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage{multicol}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//@landscape"> -->
        <!-- <xsl:text>%% The rotating package provides sidewaysfigure and sidewaystables environments&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage{rotating}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//ol or $document-root//ul or $document-root//task or $document-root//references or $b-has-webwork-var"> -->
        <!-- <xsl:text>%% More flexible list management, esp. for references&#xa;</xsl:text> -->
        <!-- <xsl:text>%% But also for specifying labels (i.e. custom order) on nested lists&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage</xsl:text> -->
        <!-- next test is simpler than necessary, only needed for 'popup' versions of @form -->
        <!-- <xsl:if test="$b-has-webwork-var"> -->
            <!-- <xsl:text>[inline]</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:text>{enumitem}&#xa;</xsl:text> -->
        <!-- <xsl:if test="$document-root//references"> -->
            <!-- <xsl:text>%% Lists of references in their own section, maximum depth 1&#xa;</xsl:text> -->
            <!-- <xsl:text>\newlist{referencelist}{description}{4}&#xa;</xsl:text> -->
            <!-- labelindent defaults to 0, ! means computed -->
            <!-- <xsl:text>\setlist[referencelist]{leftmargin=!,labelwidth=!,labelsep=0ex,itemsep=1.0ex,topsep=1.0ex,partopsep=0pt,parsep=0pt}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//dl"> -->
    <!-- <xsl:text>%% Description lists as tcolorbox sidebyside&#xa;</xsl:text> -->
        <!-- <xsl:text>%% "dli" short for "description list item"&#xa;</xsl:text> -->
        <!-- title widths, gaps, from David Farmer, ~2021-09-15, pretext-support, "inline titles" -->
        <!-- <xsl:text>\newlength{\dlititlewidth}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newlength{\dlimaxnarrowtitle}\setlength{\dlimaxnarrowtitle}{11ex}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newlength{\dlimaxmediumtitle}\setlength{\dlimaxmediumtitle}{18ex}&#xa;</xsl:text> -->
        <!-- "top seam" alignment works better for titles that are display math -->
        <!-- halign applies only to "upper", which is "right" in sidebyside     -->
        <!-- <xsl:text>\tcbset{ dlistyle/.style={sidebyside, sidebyside align=top seam, lower separated=false, bwminimalstyle, bottomtitle=0.75ex, after skip=1.5ex, boxsep=0pt, left=0pt, right=0pt, top=0pt, bottom=0pt} }&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ dlinarrowstyle/.style={dlistyle, lefthand width=\dlimaxnarrowtitle, sidebyside gap=1ex, halign=flush left, righttitle=10ex} }&#xa;</xsl:text> -->
        <!-- <xsl:text>\tcbset{ dlimediumstyle/.style={dlistyle, lefthand width=\dlimaxmediumtitle, sidebyside gap=4ex, halign=flush right} }&#xa;</xsl:text> -->
        <!-- <xsl:text>\NewDocumentEnvironment{descriptionlist}{}{\par\vspace*{1.5ex}}{\par\vspace*{1.5ex}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>%% begin enviroment has an if/then to open the tcolorbox&#xa;</xsl:text> -->
        <!-- <xsl:text>\NewDocumentEnvironment{dlinarrow}{mm}{%&#xa;</xsl:text> -->
        <!-- <xsl:text>\settowidth{\dlititlewidth}{{\textbf{#1}}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>\ifthenelse{\dlititlewidth > \dlimaxnarrowtitle}%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\begin{tcolorbox}[title={\textbf{#1}}, phantom={\hypertarget{#2}{}}, dlinarrowstyle]\tcblower}%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\begin{tcolorbox}[dlinarrowstyle, phantom={\hypertarget{#2}{}}]\textbf{#1}\tcblower}%&#xa;</xsl:text> -->
        <!-- <xsl:text>}%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\end{tcolorbox}}%&#xa;</xsl:text> -->
        <!-- <xsl:text>%% medium option is simpler&#xa;</xsl:text> -->
        <!-- <xsl:text>\NewDocumentEnvironment{dlimedium}{mm}%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\begin{tcolorbox}[dlimediumstyle, phantom={\hypertarget{#2}{}}]\textbf{#1}\tcblower}%&#xa;</xsl:text> -->
        <!-- <xsl:text>{\end{tcolorbox}}%&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root//exercisegroup"> -->
        <!-- <xsl:text>%% Indented groups of "exercise" within an "exercises" division&#xa;</xsl:text> -->
        <!-- <xsl:text>%% Lengths control the indentation (always) and gaps (multi-column)&#xa;</xsl:text> -->
        <!-- <xsl:text>\newlength{\egindent}\setlength{\egindent}{0.05\linewidth}&#xa;</xsl:text> -->
        <!-- <xsl:text>\newlength{\exggap}\setlength{\exggap}{0.05\linewidth}&#xa;</xsl:text> -->
        <!-- <xsl:if test="$document-root//exercisegroup[not(@cols)]"> -->
            <!-- <xsl:text>%% Thin "xparse" environments will represent the entire exercise&#xa;</xsl:text> -->
            <!-- <xsl:text>%% group, in the case when it does not hold multiple columns.&#xa;</xsl:text> -->
            <!-- DO NOT make this a tcolorbox, since we would want it -->
            <!-- to be breakable, and then the individual exercises   -->
            <!-- could not be breakable tcolorbox themselves          -->
            <!-- TODO: add some pre- spacing commands here -->
            <!-- <xsl:text>\NewDocumentEnvironment{exercisegroup}{}&#xa;</xsl:text> -->
            <!-- <xsl:text>{}{}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:if test="$document-root//exercisegroup/@cols"> -->
            <!-- <xsl:text>%% An exercise group with multiple columns is a tcbraster.&#xa;</xsl:text> -->
            <!-- <xsl:text>%% If the contained exercises are explicitly unbreakable,&#xa;</xsl:text> -->
            <!-- <xsl:text>%% the raster should break at rows for page breaks.&#xa;</xsl:text> -->
            <!-- <xsl:text>%% The number of columns is a parameter, passed to tcbraster.&#xa;</xsl:text> -->
            <!-- raster equal height: boxes of same *row* have same height    -->
            <!-- raster left skip: indentation of all exercises               -->
            <!-- raster columns: controls layout, so no line separators, etc. -->
            <!-- <xsl:text>\tcbset{ exgroupcolstyle/.style={raster equal height=rows, raster left skip=\egindent, raster column skip=\exggap} }&#xa;</xsl:text> -->
            <!-- <xsl:text>\NewDocumentEnvironment{exercisegroupcol}{m}&#xa;</xsl:text> -->
            <!-- <xsl:text>{\begin{tcbraster}[exgroupcolstyle,raster columns=#1]}{\end{tcbraster}}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$document-root/backmatter/index-part|$document-root//index-list"> -->
        <!-- See http://tex.blogoverflow.com/2012/09/dont-forget-to-run-makeindex/ for "imakeidx" usage -->
        <!-- <xsl:text>%% Support for index creation&#xa;</xsl:text> -->
        <!-- <xsl:if test="$author-tools-new = 'no'"> -->
            <!-- <xsl:text>%% imakeidx package does not require extra pass (as with makeidx)&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Title of the "Index" section set via a keyword&#xa;</xsl:text> -->
            <!-- <xsl:text>%% Language support for the "see" and "see also" phrases,&#xa;</xsl:text> -->
            <!-- <xsl:text>%% but to do so presumes exactly one "index-list" generator is present&#xa;</xsl:text> -->
            <!-- <xsl:text>\usepackage{imakeidx}&#xa;</xsl:text> -->
            <!-- context for localization is single extant $document-root//index-list -->
            <!-- Restrict to just a single instance, multiple may be unpredictable    -->
            <!-- <xsl:variable name="the-index" select="($document-root/backmatter/index-part|$document-root//index-list)[1]"/> -->
            <!-- NB: multiple indices will require major adjustments here             -->
            <!-- <xsl:text>\makeindex[title=</xsl:text> -->
            <!-- <xsl:apply-templates select="$the-index" mode="type-name"> -->
                <!-- <xsl:with-param name="string-id" select="'index'"/> -->
            <!-- </xsl:apply-templates> -->
            <!-- <xsl:text>, intoc=true]&#xa;</xsl:text> -->
            <!-- <xsl:text>\renewcommand{\seename}{</xsl:text> -->
            <!-- <xsl:apply-templates select="$the-index" mode="type-name"> -->
                <!-- <xsl:with-param name="string-id" select="'see'"/> -->
            <!-- </xsl:apply-templates> -->
            <!-- <xsl:text>}&#xa;</xsl:text> -->
            <!-- <xsl:text>\renewcommand{\alsoname}{</xsl:text> -->
            <!-- <xsl:apply-templates select="$the-index" mode="type-name"> -->
                <!-- <xsl:with-param name="string-id" select="'also'"/> -->
            <!-- </xsl:apply-templates> -->
           <!-- <xsl:text>}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
        <!-- <xsl:if test="$author-tools-new = 'yes'"> -->
            <!-- <xsl:text>%% author-tools = 'yes' activates marginal notes about index&#xa;</xsl:text> -->
            <!-- <xsl:text>%% and supresses the actual creation of the index itself&#xa;</xsl:text> -->
            <!-- <xsl:text>\usepackage{showidx}&#xa;</xsl:text> -->
        <!-- </xsl:if> -->
    <!-- </xsl:if> -->
    <!-- <xsl:if test="$docinfo/logo"> -->
        <!-- <xsl:text>%% Package for precise image placement (for logos on pages)&#xa;</xsl:text> -->
        <!-- <xsl:text>\usepackage{eso-pic}&#xa;</xsl:text> -->
    <!-- </xsl:if> -->
    <!-- Lists are built as "longtable" so they span multiple pages    -->
    <!-- and get "continuation" footers, for example.  It is the       -->
    <!-- "list generator" element which provokes the package inclusion -->
    <!-- An author can elect breakable "tabular" as well                -->
    <xsl:if test="$b-has-long-tabular">
        <xsl:text>%% Package for tables (potentially) spanning multiple pages&#xa;</xsl:text>
        <xsl:text>\usepackage{longtable}&#xa;</xsl:text>
    </xsl:if>
    <!-- This is the place to add part numbers to the numbering, which   -->
    <!-- is *not* the default LaTeX behavior.  The \p@section scheme     -->
    <!-- is complicated, leading to about ten constructions like         -->
    <!--                                                                 -->
    <!-- \ifdefined\p@namedlist\renewcommand{\p@namedlist}{\thepart.}\fi -->
    <!--                                                                 -->
    <!-- Advice is to redefine these *before* loading hyperref           -->
    <!-- https://tex.stackexchange.com/questions/172962                  -->
    <!-- (hyperref-include-part-number-for-cross-references-to-chapters) -->
    <!-- Easier is to just adjust the chapter number, which filters down -->
    <!-- into anything that uses the chapter, though perhaps per-part    -->
    <!-- numbering will still need something?                            -->
    <!--                                                                 -->
    <!-- \renewcommand{\thechapter}{\thepart.\arabic{chapter}}           -->
    <!--                                                                 -->
    <!-- <xsl:call-template name="load-configure-hyperref"/> -->
    <!-- We create counters and numbered  tcolorbox  environments -->
    <!-- *after* loading the  hyperref  package, so as to avoid a -->
    <!-- pdfTeX warning about duplicate identifiers.              -->
    <!-- <xsl:call-template name="create-numbered-tcolorbox"/> -->
    <!-- The "xwatermark" package has way more options, including the -->
    <!-- possibility of putting the watermark onto the foreground     -->
    <!-- (above shaded/colored "tcolorbox").  But on 2018-10-24,      -->
    <!-- xwatermark was at v1.5.2d, 2012-10-23, and draftwatermark    -->
    <!-- was at v1.2, 2015-02-19.                                     -->
    <xsl:if test="$b-watermark or $b-latex-watermark">
        <xsl:text>\usepackage{draftwatermark}&#xa;</xsl:text>
        <xsl:text>\SetWatermarkText{</xsl:text>
        <xsl:value-of select="$watermark-text" />
        <xsl:text>}&#xa;</xsl:text>
        <xsl:text>\SetWatermarkScale{</xsl:text>
        <xsl:value-of select="$watermark-scale" />
        <xsl:text>}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$author-tools-new = 'yes'" >
        <xsl:text>%% Collected author tools options (author-tools='yes')&#xa;</xsl:text>
        <xsl:text>%% others need to be elsewhere, these are simply package additions&#xa;</xsl:text>
        <xsl:text>\usepackage{showkeys}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$latex-image-preamble">
        <xsl:text>%% Graphics Preamble Entries&#xa;</xsl:text>
        <xsl:value-of select="$latex-image-preamble"/>
    </xsl:if>
    <xsl:text>%% If tikz has been loaded, replace ampersand with \amp macro&#xa;</xsl:text>
    <xsl:if test="$document-root//latex-image">
        <xsl:text>\ifdefined\tikzset&#xa;</xsl:text>
        <xsl:text>    \tikzset{ampersand replacement = \amp}&#xa;</xsl:text>
        <xsl:text>\fi&#xa;</xsl:text>
    </xsl:if>


    <!-- I think we need to keep sbs stuff -->
    <xsl:if test="$document-root//sidebyside">
        <!-- "minimal" is no border or spacing at all -->
        <!-- set on $sbsdebug to "tight" with some background    -->
        <!-- From the tcolorbox manual, "center" vs. "flush center":      -->
        <!-- "The differences between the flush and non-flush version     -->
        <!-- are explained in detail in the TikZ manual. The short story  -->
        <!-- is that the non-flush versions will often look more balanced -->
        <!-- but with more hyphenations."                                 -->
        <xsl:choose>
            <xsl:when test="$sbsdebug">
                <xsl:text>%% tcolorbox styles for *DEBUGGING* sidebyside layout&#xa;</xsl:text>
                <xsl:text>%% "tight" -> 0.4pt border, pink background&#xa;</xsl:text>
                <xsl:text>\tcbset{ sbsstyle/.style={raster equal height=rows,raster force size=false} }&#xa;</xsl:text>
                <xsl:text>\tcbset{ sbspanelstyle/.style={size=tight,colback=pink} }&#xa;</xsl:text>
            </xsl:when>
            <xsl:otherwise>
                <xsl:text>%% tcolorbox styles for sidebyside layout&#xa;</xsl:text>
                <!-- "frame empty" is needed to counteract very faint outlines in some PDF viewers -->
                <!-- framecol=white is inadvisable, "frame hidden" is ineffective for default skin -->
                <xsl:text>\tcbset{ sbsstyle/.style={raster before skip=2.0ex, raster equal height=rows, raster force size=false} }&#xa;</xsl:text>
                <xsl:text>\tcbset{ sbspanelstyle/.style={bwminimalstyle, fonttitle=\blocktitlefont} }&#xa;</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
        <xsl:text>%% Enviroments for side-by-side and components&#xa;</xsl:text>
        <xsl:text>%% Necessary to use \NewTColorBox for boxes of the panels&#xa;</xsl:text>
        <xsl:text>%% "newfloat" environment to squash page-breaks within a single sidebyside&#xa;</xsl:text>
        <!-- Main side-by-side environment, given by xparse            -->
        <!-- raster equal height: boxes of same *row* have same height -->
        <!-- raster force size: false lets us control width            -->
        <!-- We do not try here to keep captions attached (when not    -->
        <!-- in a "figure"), unfortunately, this is an un-semantic     -->
        <!-- command inbetween the list of panels and the captions     -->
        <xsl:text>%% "xparse" environment for entire sidebyside&#xa;</xsl:text>
        <xsl:text>\NewDocumentEnvironment{sidebyside}{mmmm}&#xa;</xsl:text>
        <xsl:text>  {\begin{tcbraster}&#xa;</xsl:text>
        <xsl:text>    [sbsstyle,raster columns=#1,&#xa;</xsl:text>
        <xsl:text>    raster left skip=#2\linewidth,raster right skip=#3\linewidth,raster column skip=#4\linewidth]}&#xa;</xsl:text>
        <xsl:text>  {\end{tcbraster}}&#xa;</xsl:text>
        <xsl:text>%% "tcolorbox" environment for a panel of sidebyside&#xa;</xsl:text>
        <xsl:text>\NewTColorBox{sbspanel}{mO{top}}{sbspanelstyle,width=#1\linewidth,valign=#2}&#xa;</xsl:text>
    </xsl:if>


    <!-- Keep everything below here.  -->
    
    <xsl:if test="$document-root//kbd">
        <!-- https://github.com/tweh/menukeys/issues/41 -->
        <xsl:text>%% menukeys package says:&#xa;</xsl:text>
        <xsl:text>%%   Since menukeys uses catoptions, which does some heavy&#xa;</xsl:text>
        <xsl:text>%%   changes on key-value options, it is recommended to load&#xa;</xsl:text>
        <xsl:text>%%   menukeys as the last package (even after hyperref)!&#xa;</xsl:text>
        <xsl:text>\usepackage{menukeys}&#xa;</xsl:text>
        <!-- https://tex.stackexchange.com/questions/96300/how-to-change-the-style-of-menukeys -->
        <xsl:text>\renewmenumacro{\keys}{shadowedroundedkeys}&#xa;</xsl:text>
        <!-- Seemingly extra braces protect comma that kbdkeys package uses -->
        <xsl:text>\newcommand{\kbd}[1]{\keys{{#1}}}&#xa;</xsl:text>
    </xsl:if>


    <!-- N.B. Author-supplied LaTeX macros come *after* the -->
    <!-- late-preamble stringparam in order that an author  -->
    <!-- cannot attempt a conversion-specific redefinition  -->
    <!-- of a macro that has been used used in a less       -->
    <!-- capable conversion, i.e. HTML/MathJax              -->
    <xsl:text>%% Custom Preamble Entries, late (use latex.preamble.late)&#xa;</xsl:text>
    <xsl:if test="$latex.preamble.late != ''">
        <xsl:value-of select="$latex.preamble.late" />
        <xsl:text>&#xa;</xsl:text>
    </xsl:if>
    <!-- "extra" packages specified by the author -->
    <xsl:variable name="latex-packages">
        <xsl:for-each select="$docinfo/math-package">
            <!-- must be specified, but can be empty/null -->
            <xsl:if test="not(normalize-space(@latex-name)) = ''">
                <xsl:text>\usepackage{</xsl:text>
                <xsl:value-of select="@latex-name"/>
                <xsl:apply-templates />
                <xsl:text>}</xsl:text>
                <!-- one per line for readability -->
                <xsl:text>&#xa;</xsl:text>
            </xsl:if>
        </xsl:for-each>
    </xsl:variable>
    <!-- We could use contains() on the 5 types of arrows  -->
    <!-- to really defend against this problematic package -->
    <!-- 2023-10-19: this test is buggy, there is no consideration -->
    <!-- of "men", while "md" and "mrow" are duplicative           -->
    <xsl:if test="$document-root//m|$document-root//md|$document-root//mrow">
        <xsl:choose>
            <xsl:when test="contains($latex-packages, '\usepackage{extpfeil}')">
                <xsl:text>%% You have elected to load the LaTeX "extpfeil" package&#xa;</xsl:text>
                <xsl:text>%% for certain extensible arrows, and it should appear just below.&#xa;</xsl:text>
                <xsl:text>%% This package has numerous shortcomings leading to conflicts with&#xa;</xsl:text>
                <xsl:text>%% packages like "stmaryrd" and our manipulations of lengths to support&#xa;</xsl:text>
                <xsl:text>%% variable thickness of rules in tables.  It should appear late&#xa;</xsl:text>
                <xsl:text>%% in the preamble in an effort to mitigate these shortcomings.&#xa;</xsl:text>
            </xsl:when>
            <!-- 2023-10-19: at the first hint of trouble with automatic loading of this package,     -->
            <!-- feel free to jettison the "otherwise" clause.  Then move the warning (in the "when") -->
            <!-- to simply condition on the appearance in the list of packages being included.        -->
            <!-- Following preserves backward-compatible behavior.                                    -->
            <xsl:otherwise>
                <xsl:text>%% extpfeil package for certain extensible arrows,&#xa;</xsl:text>
                <xsl:text>%% as also provided by MathJax extension of the same name&#xa;</xsl:text>
                <xsl:text>%% NB: this package loads mtools, which loads calc, which redefines&#xa;</xsl:text>
                <xsl:text>%%     \setlength, so it can be removed if it seems to be in the &#xa;</xsl:text>
                <xsl:text>%%     way and your math does not use:&#xa;</xsl:text>
                <xsl:text>%%     &#xa;</xsl:text>
                <xsl:text>%%     \xtwoheadrightarrow, \xtwoheadleftarrow, \xmapsto, \xlongequal, \xtofrom&#xa;</xsl:text>
                <xsl:text>%%     &#xa;</xsl:text>
                <xsl:text>%%     we have had to be extra careful with variable thickness&#xa;</xsl:text>
                <xsl:text>%%     lines in tables, and so also load this package late&#xa;</xsl:text>
                <xsl:text>\usepackage{extpfeil}&#xa;</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:if>


    <xsl:if test="not($latex-packages = '')">
        <xsl:text>%% Begin: Author-provided TeX/LaTeX packages&#xa;</xsl:text>
        <xsl:text>%% (From  docinfo/math-package  elements)&#xa;</xsl:text>
        <xsl:value-of select="$latex-packages"/>
        <xsl:text>%% End: Author-provided TeX/LaTeX packages&#xa;</xsl:text>
    </xsl:if>

    <!-- "extra" macros specified by the author -->
    <xsl:text>%% Begin: Author-provided macros&#xa;</xsl:text>
    <xsl:text>%% (From  docinfo/macros  element)&#xa;</xsl:text>
    <xsl:text>%% Plus three from PTX for XML characters&#xa;</xsl:text>
    <xsl:value-of select="$latex-macros" />
    <xsl:text>%% End: Author-provided macros&#xa;</xsl:text>
    <!-- 2023-10-18: source has \sfrac{}{} macro, but now author needs     -->
    <!-- to specify the LaTeX "xfrac" package in a docinfo/math-package    -->
    <!-- element to continue support.  This is the fallback subpar macro,  -->
    <!-- just like we use in HTML, when author has not loaded the package. -->
    <!-- Perhaps relevant: http://tex.stackexchange.com/questions/3372/    -->
    <xsl:if test="$b-has-sfrac and not(contains($latex-packages, '\usepackage{xfrac}'))">
        <xsl:text>%% Historical (subpar) support for \sfrac macro&#xa;</xsl:text>
        <xsl:text>%% to achieve pleasing slanted (beveled) fractions.&#xa;</xsl:text>
        <xsl:text>%% Add "xfrac" package with a  docinfo/math-package  element&#xa;</xsl:text>
        <xsl:text>%% to achieve superior typesetting in LaTeX/PDF output&#xa;</xsl:text>
        <xsl:text>\newcommand{\sfrac}[2]{{#1}/{#2}}&#xa;</xsl:text>
    </xsl:if>
    <xsl:if test="$document-root//contributors">
        <xsl:text>%% Semantic macros for contributor list&#xa;</xsl:text>
        <xsl:text>\newcommand{\contributor}[1]{\parbox{\linewidth}{#1}\par\bigskip}&#xa;</xsl:text>
        <xsl:text>\newcommand{\contributorname}[1]{\textsc{#1}\\[0.25\baselineskip]}&#xa;</xsl:text>
        <xsl:text>\newcommand{\contributorinfo}[1]{\hspace*{0.05\linewidth}\parbox{0.95\linewidth}{\textsl{#1}}}&#xa;</xsl:text>
    </xsl:if>
</xsl:template>


<!-- Divisions -->

<xsl:template match="section|subsection|subsubsection">
    <xsl:text>\</xsl:text>
    <xsl:value-of select="local-name(.)"/>
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="." mode="title-full"/>
    <xsl:text>}&#xa;&#xa;</xsl:text>
    <xsl:apply-templates/>
    <xsl:text>% end of </xsl:text>
    <xsl:value-of select="local-name(.)"/>
    <xsl:text>: </xsl:text>
    <xsl:apply-templates select="." mode="title-full"/>
    <xsl:text>&#xa;&#xa;</xsl:text>
</xsl:template>

<!-- Includes an "event" for presentations -->
<xsl:template name="topmatter-amsart">
    <xsl:text>%% Top matter information&#xa;&#xa;</xsl:text>
    <xsl:text>\title{</xsl:text>
    <xsl:apply-templates select="." mode="title-full" />
    <xsl:if test="subtitle">
        <xsl:text>\\&#xa;</xsl:text>
        <!-- Trying to match author fontsize -->
        <xsl:text>{\large </xsl:text>
        <xsl:apply-templates select="." mode="subtitle" />
        <xsl:text>}</xsl:text>
    </xsl:if>
    <xsl:text>}&#xa;</xsl:text>
    <xsl:if test="frontmatter/titlepage/author or frontmatter/titlepage/editor">
        <xsl:text>\author{</xsl:text>
        <xsl:apply-templates select="frontmatter/titlepage/author" mode="article-info"/>
        <xsl:apply-templates select="frontmatter/titlepage/editor" mode="article-info"/>
        <xsl:text>}&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>\date{</xsl:text><xsl:apply-templates select="frontmatter/titlepage/date" /><xsl:text>}&#xa;</xsl:text>
</xsl:template>


<!-- Theorems, Proofs, Definitions, Examples, Exercises -->

<!-- Theorems have statement/proof structure                    -->
<!-- Definitions have notation, which is handled elsewhere      -->
<!-- Examples have no structure, or have statement and solution -->
<!-- Exercises have hints, answers and solutions                -->

<!-- For preamble -->
<!-- For now, just include everything -->
<!-- TODO: limit which ones to include by what is in document? -->
<xsl:template name="latex-theorem-environments">
    <xsl:text>%% Theorem-like environments&#xa;</xsl:text>
    <xsl:text>\theoremstyle{plain}&#xa;</xsl:text>
    <xsl:text>\newtheorem{theorem}{Theorem}[section]&#xa;</xsl:text>
    <xsl:text>\newtheorem{lemma}[theorem]{Lemma}&#xa;</xsl:text>
    <xsl:text>\newtheorem{corollary}[theorem]{Corollary}&#xa;</xsl:text>
    <xsl:text>\newtheorem{proposition}[theorem]{Proposition}&#xa;</xsl:text>
    <xsl:text>\newtheorem{claim}[theorem]{Claim}&#xa;</xsl:text>
    <xsl:text>\newtheorem{fact}[theorem]{Fact}&#xa;</xsl:text>
    <xsl:text>\newtheorem{identity}[theorem]{Identity}&#xa;</xsl:text>
    <xsl:text>\newtheorem{conjecture}[theorem]{Conjecture}&#xa;</xsl:text>
    <xsl:text>&#xa;</xsl:text>

    <xsl:text>\theoremstyle{definition}&#xa;</xsl:text>
    <xsl:text>\newtheorem{definition}[theorem]{Definition}&#xa;</xsl:text>
    <xsl:text>\newtheorem{axiom}[theorem]{Axiom}&#xa;</xsl:text>
    <xsl:text>\newtheorem{principle}[theorem]{Principle}&#xa;</xsl:text>
    <xsl:text>\newtheorem{heuristic}[theorem]{Heuristic}&#xa;</xsl:text>
    <xsl:text>\newtheorem{hypothesis}[theorem]{Hypothesis}&#xa;</xsl:text>
    <xsl:text>\newtheorem{assumption}[theorem]{Assumption}&#xa;</xsl:text>
    <xsl:text>\newtheorem{openproblem}[theorem]{Open problem}&#xa;</xsl:text>
    <xsl:text>\newtheorem{openquestion}[theorem]{Open question}&#xa;</xsl:text>
    <xsl:text>\newtheorem{algorithm}[theorem]{Algorithm}&#xa;</xsl:text>
    <xsl:text>\newtheorem{question}[theorem]{Question}&#xa;</xsl:text>
    <xsl:text>\newtheorem{activity}[theorem]{Activity}&#xa;</xsl:text>
    <xsl:text>\newtheorem{exercise}[theorem]{Exercise}&#xa;</xsl:text>
    <xsl:text>\newtheorem{investigation}[theorem]{Investigation}&#xa;</xsl:text>    
    <xsl:text>\newtheorem{exploration}[theorem]{Exploration}&#xa;</xsl:text>
    <xsl:text>\newtheorem{problem}[theorem]{Problem}&#xa;</xsl:text>
    <xsl:text>\newtheorem{example}[theorem]{Example}&#xa;</xsl:text>
    <xsl:text>\newtheorem{project}[theorem]{Project}&#xa;</xsl:text>
    <xsl:text>&#xa;</xsl:text>
    
    <xsl:text>\theoremstyle{remark}&#xa;</xsl:text>
    <xsl:text>\newtheorem{convention}[theorem]{Convention}&#xa;</xsl:text>
    <xsl:text>\newtheorem{warning}[theorem]{Warning}&#xa;</xsl:text>
    <xsl:text>\newtheorem{remark}[theorem]{Remark}&#xa;</xsl:text>
    <xsl:text>\newtheorem{insight}[theorem]{Insight}&#xa;</xsl:text>
    <xsl:text>\newtheorem{note}[theorem]{Note}&#xa;</xsl:text>
    <xsl:text>\newtheorem{observation}[theorem]{Observation}&#xa;</xsl:text>
    <xsl:text>\newtheorem{computation}[theorem]{Computation}&#xa;</xsl:text>
    <xsl:text>\newtheorem{technology}[theorem]{Technology}&#xa;</xsl:text>
    <xsl:text>\newtheorem{data}[theorem]{Data}&#xa;</xsl:text>
    <xsl:text>&#xa;</xsl:text>
</xsl:template>

<!-- In document -->
<xsl:template match="&THEOREM-LIKE;|&AXIOM-LIKE;|&DEFINITION-LIKE;|&REMARK-LIKE;|&COMPUTATION-LIKE;|&OPENPROBLEM-LIKE;|&EXAMPLE-LIKE;|&PROJECT-LIKE;|&ASIDE-LIKE;|exercise[boolean(&INLINE-EXERCISE-FILTER;)]|assemblage" mode="block-options">
    <!-- <xsl:text>{</xsl:text>
    <xsl:apply-templates select="." mode="type-name"/>
    <xsl:text>}</xsl:text> -->
    <xsl:call-template name="env-title"/>

    <!-- <xsl:if test="&THEOREM-FILTER; or &AXIOM-FILTER;">
        <xsl:text>{</xsl:text>
        <xsl:apply-templates select="." mode="creator-full" />
        <xsl:text>}</xsl:text>
    </xsl:if> -->
    <!-- unique-id destined for tcolorbox  phantomlabel=  option -->
    <xsl:text>\label{</xsl:text>
    <xsl:apply-templates select="." mode="unique-id"/>
    <xsl:text>}</xsl:text>
</xsl:template>

<xsl:template name="env-title">
    <xsl:if test="title|creator">
        <xsl:text>[</xsl:text>
        <xsl:if test="title">
            <xsl:apply-templates select="." mode="title-full"/>
        </xsl:if>
        <xsl:if test="(title) and (creator)">
            <xsl:text>&#160;</xsl:text>
        </xsl:if>
        <xsl:if test="creator">
            <xsl:apply-templates select="." mode="creator-full"/>
        </xsl:if>
        <xsl:text>]</xsl:text>
    </xsl:if>
</xsl:template>

<!-- <xsl:template match="&THEOREM-LIKE;|&AXIOM-LIKE;|&DEFINITION-LIKE;|&REMARK-LIKE;|&COMPUTATION-LIKE;|&OPENPROBLEM-LIKE;|&EXAMPLE-LIKE;|&PROJECT-LIKE;|&ASIDE-LIKE;|exercise[boolean(&INLINE-EXERCISE-FILTER;)]|assemblage" mode="block-options"/> -->


</xsl:stylesheet>