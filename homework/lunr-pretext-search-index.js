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
