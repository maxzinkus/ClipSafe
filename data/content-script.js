
function clipsafe() {
    self.port.emit("clipsafe trigger", "clipsafe trigger");
}

function sweep() {
    var hcol = document.getElementsByTagName('input');
    for (x = 0; x < hcol.length; x++) {
        if (hcol[x].onpaste === null && hcol[x].type === "password") {
            hcol[x].addEventListener("paste", clipsafe);
        }
    }
}

sweep();
setInterval(sweep, 250);
