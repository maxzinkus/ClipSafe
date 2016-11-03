var self = require("sdk/self");
require("sdk/tabs").on("ready", runClipSafe);
let { Cc, Ci } = require("chrome");

const gClipboardHelper = Cc['@mozilla.org/widget/clipboardhelper;1']
                            .getService(Ci.nsIClipboardHelper);

function clipsafe() {
    gClipboardHelper.copyString("");
    console.log("Clipboard cleared by ClipSafe");
}

function runClipSafe(tab) {
    var worker = tab.attach({
        contentScriptFile: self.data.url("content-script.js")
    });
    worker.port.on("clipsafe trigger", function(payload) { clipsafe(); });
}

