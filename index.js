var self = require("sdk/self");
var clipboard = require("sdk/clipboard");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*",
    contentScriptFile: self.data.url("content-script.js"),
    onAttach: function(worker) {
        worker.port.on("clipsafe trigger", function(payload) {
                clipboard.set("", "text");
        })
    }
});
