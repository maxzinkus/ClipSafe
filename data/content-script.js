
function isPasswordTypeInputField(e){
    return e.type == "password";
}

function clipsafe() {
    self.port.emit("clipsafe trigger", "clipsafe trigger");
}

var hcol = document.getElementsByTagName('input');

for (x = 0; x < hcol.length; x++) {
    var e = hcol[x];
    if (e.type == "password") {
        e.addEventListener("paste", clipsafe);
    }
}
