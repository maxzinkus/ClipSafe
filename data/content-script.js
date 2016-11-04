
function sweep() {
    var hcol = document.getElementsByTagName("input");
    for (x = 0; x < hcol.length; x++) {
        if (hcol[x].onpaste === null && hcol[x].type === "password") {
            hcol[x].addEventListener("paste", function() {
                self.port.emit("clipsafe trigger", navigator.userAgent);
            });
        }
    }
}

sweep();
setInterval(sweep, 250);
