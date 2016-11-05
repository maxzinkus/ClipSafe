
function onPaste(e) {
    if (e.isTrusted) {
        self.port.emit("clipsafe trigger", null);
    }
}


function sweep() {
    for (let input of document.querySelectorAll('input[type="password"]')) {
        input.addEventListener('paste', onPaste, true);
    }
}

sweep();
setInterval(sweep, 250);
