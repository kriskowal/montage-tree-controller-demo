
require("joey")
.common()
.handleHtmlFragmentResponses()
.handleJsonResponses()
.listDirectories()
.directoryIndex()
.fileTree(__dirname)
.listen(0)
.then(function (server) {
    require("opener")("http://localhost:" + server.address().port);
})
.done();

