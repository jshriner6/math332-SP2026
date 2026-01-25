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
