var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "hw-1",
  "level": "1",
  "url": "hw-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 1",
  "body": " Homework 1    Find the general solution to the following PDEs, using transformation of variables when necessary. Verify your general solution by taking partial derivatives.                     "
},
{
  "id": "hw-1-2",
  "level": "2",
  "url": "hw-1.html#hw-1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the general solution to the following PDEs, using transformation of variables when necessary. Verify your general solution by taking partial derivatives.                    "
},
{
  "id": "hw-2",
  "level": "1",
  "url": "hw-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 2",
  "body": " Homework 2    Find the solutions to the following PDEs, using the method of characteristics. Verify your solutions by taking partial derivatives (note you should use technology to verify your answer for part (c)).         ,      , (use technology to verify this solution!)         Consider the problem , , . For each initial condition below,   Find and plot the characteristic curves in the -plane.    Use your plot to estimate the breaking time.    Determine the exact breaking time analytically.                     "
},
{
  "id": "hw-2-2",
  "level": "2",
  "url": "hw-2.html#hw-2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the solutions to the following PDEs, using the method of characteristics. Verify your solutions by taking partial derivatives (note you should use technology to verify your answer for part (c)).         ,      , (use technology to verify this solution!)      "
},
{
  "id": "hw-2-3",
  "level": "2",
  "url": "hw-2.html#hw-2-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider the problem , , . For each initial condition below,   Find and plot the characteristic curves in the -plane.    Use your plot to estimate the breaking time.    Determine the exact breaking time analytically.                    "
},
{
  "id": "hw-3",
  "level": "1",
  "url": "hw-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 3",
  "body": " Homework 3    Solve the heat equation using separation of variables for satisfying the boundary conditions and .      Solve the wave equation using separation of variables for satisfying the boundary conditions and .      Solve Laplace's equation using separation of variables on the unit square satisfying the boundary conditions , , , and .      Classify the following equations as either hyperbolic, parabolic, or elliptic. It is possible an equation has different classifications on different pieces of its domain.                                 Derive a solution similar to d'Alembert's solution (factoring) for the equation . Do you expect the solution to behave more like solutions to the heat, wave, or Laplace's equation? Why?    "
},
{
  "id": "hw-3-2",
  "level": "2",
  "url": "hw-3.html#hw-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Solve the heat equation using separation of variables for satisfying the boundary conditions and .   "
},
{
  "id": "hw-3-3",
  "level": "2",
  "url": "hw-3.html#hw-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Solve the wave equation using separation of variables for satisfying the boundary conditions and .   "
},
{
  "id": "hw-3-4",
  "level": "2",
  "url": "hw-3.html#hw-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Solve Laplace's equation using separation of variables on the unit square satisfying the boundary conditions , , , and .   "
},
{
  "id": "hw-3-5",
  "level": "2",
  "url": "hw-3.html#hw-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Classify the following equations as either hyperbolic, parabolic, or elliptic. It is possible an equation has different classifications on different pieces of its domain.                              "
},
{
  "id": "hw-3-6",
  "level": "2",
  "url": "hw-3.html#hw-3-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Derive a solution similar to d'Alembert's solution (factoring) for the equation . Do you expect the solution to behave more like solutions to the heat, wave, or Laplace's equation? Why?   "
},
{
  "id": "hw-4",
  "level": "1",
  "url": "hw-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 4",
  "body": " Homework 4    Show that is an orthogonal set on .      Let on .   Draw or use technology to graph the odd extension of on .    Determine the Fourier sine series for the odd extension of , and use technology to graph the first several terms of your series.    Draw or use technology to graph the even extension of on .    Determine the Fourier cosine series for the even extension of , and use technology to graph the first several terms of your series.    Determine the Fourier series for on . Use technology to graph the first several terms of your series.         Determine the Fourier series for on . Use technology to graph the first several terms of your series.    "
},
{
  "id": "hw-4-2",
  "level": "2",
  "url": "hw-4.html#hw-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Show that is an orthogonal set on .   "
},
{
  "id": "hw-4-3",
  "level": "2",
  "url": "hw-4.html#hw-4-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let on .   Draw or use technology to graph the odd extension of on .    Determine the Fourier sine series for the odd extension of , and use technology to graph the first several terms of your series.    Draw or use technology to graph the even extension of on .    Determine the Fourier cosine series for the even extension of , and use technology to graph the first several terms of your series.    Determine the Fourier series for on . Use technology to graph the first several terms of your series.      "
},
{
  "id": "hw-4-4",
  "level": "2",
  "url": "hw-4.html#hw-4-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Determine the Fourier series for on . Use technology to graph the first several terms of your series.   "
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
