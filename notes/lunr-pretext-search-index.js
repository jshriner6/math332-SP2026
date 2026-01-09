var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction",
  "body": " Introduction    Why?   Mathematical structures can seem abstract, but they are often motivated by our desire to describe     How?  Let's note the subtleties to be considered, all of which contribute to the difficulty of PDE's:      Pre-Req Group Activity (Calculus)   For each vocabulary word below, discuss   an informal definition of each word, and    what you remember about its importance in previous classes.          Trigonometric Functions    Derivative Functions    Partial Derivative Functions    Integrals    Series Representations      Pre-Req Group Activity (ODEs)   For each vocabulary word below, discuss   an informal definition of each word, and    what you remember about its importance in previous classes.          First-order ODE    Separable ODE    Linear first and second-order ODEs    Integrating Factor    Characteristic polynomial    Homogeneous ODE      "
},
{
  "id": "xr-why",
  "level": "2",
  "url": "intro.html#xr-why",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Why?",
  "body": " Why?   Mathematical structures can seem abstract, but they are often motivated by our desire to describe   "
},
{
  "id": "xr-how",
  "level": "2",
  "url": "intro.html#xr-how",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "How?",
  "body": " How?  Let's note the subtleties to be considered, all of which contribute to the difficulty of PDE's:  "
},
{
  "id": "xr-set-stage",
  "level": "2",
  "url": "intro.html#xr-set-stage",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Pre-Req Group Activity (Calculus).",
  "body": " Pre-Req Group Activity (Calculus)   For each vocabulary word below, discuss   an informal definition of each word, and    what you remember about its importance in previous classes.      "
},
{
  "id": "intro-3-3",
  "level": "2",
  "url": "intro.html#intro-3-3",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Pre-Req Group Activity (ODEs).",
  "body": " Pre-Req Group Activity (ODEs)   For each vocabulary word below, discuss   an informal definition of each word, and    what you remember about its importance in previous classes.      "
},
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.1 \/ 1.2\\text{:}\\)<\/span> Linear First-Order PDEs with Constant Coefficients",
  "body": " : Linear First-Order PDEs with Constant Coefficients    Motivation: First-Order PDEs        Order   Recall, an order ODE is an equation       Definition: Linear   A linear first-order PDE has the form     Definition: Quasilinear   A quasilinear first-order PDE has the form       Review: Integrating Factors   The general form of a first-order linear ODE is given by .       Linear First-Orde PDEs with Constant Coefficients   The general form of a first-order linear PDE is given by , where .       Example: General Solutions to First-Order PDEs with constant coefficients   Find the general solution to .     Identify the values of .      Re-write the PDE under the transformation , .      Identify the integrating factor to be used to solve the previous PDE.      Write down a version of the solution containing an integral.      Solve the integral .      Write down a version of the solution containing no integrals.      Write down the solution .      "
},
{
  "id": "sec-1-1-2-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-2-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: First-Order PDEs.",
  "body": " Motivation: First-Order PDEs      "
},
{
  "id": "sec-1-1-2-2",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-2-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Order.",
  "body": " Order   Recall, an order ODE is an equation   "
},
{
  "id": "sec-1-1-3-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-3-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Definition: Linear.",
  "body": " Definition: Linear   A linear first-order PDE has the form   "
},
{
  "id": "sec-1-1-3-2",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-3-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Definition: Quasilinear.",
  "body": " Definition: Quasilinear   A quasilinear first-order PDE has the form   "
},
{
  "id": "sec-1-1-4-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-4-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Review: Integrating Factors.",
  "body": " Review: Integrating Factors   The general form of a first-order linear ODE is given by .   "
},
{
  "id": "sec-1-1-5-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Linear First-Orde PDEs with Constant Coefficients.",
  "body": " Linear First-Orde PDEs with Constant Coefficients   The general form of a first-order linear PDE is given by , where .   "
},
{
  "id": "sec-1-1-6-1",
  "level": "2",
  "url": "sec-1-1.html#sec-1-1-6-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Example: General Solutions to First-Order PDEs with constant coefficients.",
  "body": " Example: General Solutions to First-Order PDEs with constant coefficients   Find the general solution to .     Identify the values of .      Re-write the PDE under the transformation , .      Identify the integrating factor to be used to solve the previous PDE.      Write down a version of the solution containing an integral.      Solve the integral .      Write down a version of the solution containing no integrals.      Write down the solution .    "
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
