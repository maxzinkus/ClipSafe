function handler(event) {
  if event.target.type.includes("password") {
    navigator.clipboard.writeText("").then(
      function() {
        /* clipboard successfully set */
        event.stopImmediatePropagation();
      },
      function() {
        /* clipboard write failed */
        console.error("ClipSafe: Failed to write clipboard. Have you enabled the clipboard-write permission?");
      });
  }
}

function handlePermission() {
  navigator.permissions.query({name:'clipboard-write'}).then(function(result) {
    if (result.state == 'granted' || result.state == 'prompt') {
      document.addEventListener('paste', handler);
    }
    else if (result.state == 'denied') {
      console.error("ClipSafe: Clipboard write access explicitly denied.");
    }
    else {
      console.error("ClipSafe: Permissions API returned: " + result.state);
    }
    result.onchange = handlePermission;
  });
}

handlePermission();

/* TODO
 * handle Permission API .request() method once it becomes available :(
 */
