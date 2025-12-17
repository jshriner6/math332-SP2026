var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "labs",
  "level": "1",
  "url": "labs.html",
  "type": "Article",
  "number": "",
  "title": "Portfolio",
  "body": " Portfolio   You are encouraged to use a typesetting application (like LaTeX or PreTeXt) for your final versions of your portfolio. Below are templates that can be copied of the questions that should be included from each chapter.          "
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
