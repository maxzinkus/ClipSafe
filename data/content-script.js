
function clipsafe() {
    self.port.emit("clipsafe trigger", "clipsafe trigger");
}

var hcol = document.getElementsByTagName('input');

for (x = 0; x < hcol.length; x++) {
    if (hcol[x].type == "password") {
        hcol[x].addEventListener("paste", clipsafe);
    }
}
