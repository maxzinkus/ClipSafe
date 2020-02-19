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
  },
  function(error) {
    console.error("ClipSafe Error: " + error);
  });
}

handlePermission();

/* TODO
 * handle Permission API .request() method once it becomes available :(
 * Ugh do I need to deal with contenteditable? execCommand copy to clear the cb?
 * Double ugh, do I need to be a background script to make content editable?
 * So unclear & inconsistent - there's definitely a lot of churn around this
 * feature set right now. Probably best to wait until that cools down.
 */
