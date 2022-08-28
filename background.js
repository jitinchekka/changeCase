chrome.runtime.onInstalled.addListener(function () {
  console.log("onInstalled");
  chrome.contextMenus.create({
    title: "Uppercase",
    contexts: ["selection"],
    onclick: function (info, tab) {
      chrome.tabs.executeScript(
        {
          code: "window.getSelection().toString()",
        },
        function (selection) {
          // Convert the selection to uppercase
          var text = selection[0];
          var uppercase = text.toUpperCase();
          // Replace the selection with the uppercase text
          chrome.tabs.executeScript(
            {
              code: "document.getSelection().toString()",
            },
            function (selection) {
              chrome.tabs.executeScript(
                {
                  code: "document.execCommand('insertText', false, '" + uppercase + "')",
                },
                function (selection) {
                  console.log(selection);
                }
              );
            }
          );
        }
      );
    },
    id: "uppercase",
  });
})
