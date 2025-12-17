var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes",
  "level": "1",
  "url": "notes.html",
  "type": "Article",
  "number": "",
  "title": "Course Notes",
  "body": " Course Notes   The following are guided notes assigned before class and used during class meetings. You are encouraged to print or download them to a device.      "
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
