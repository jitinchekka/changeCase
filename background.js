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
  // add another context menu item lowercase
  chrome.contextMenus.create({
    title: "Lowercase",
    contexts: ["selection"],
    onclick: function (info, tab) {
      chrome.tabs.executeScript(
        {
          code: "window.getSelection().toString()",
        },
        function (selection) {
          // Convert the selection to uppercase
          var text = selection[0];
          var lowercase = text.toLowerCase();
          // Replace the selection with the uppercase text
          chrome.tabs.executeScript(
            {
              code: "document.getSelection().toString()",
            },
            function (selection) {
              chrome.tabs.executeScript(
                {
                  code: "document.execCommand('insertText', false, '" + lowercase + "')",
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
    id: "lowercase", 
  });
  // Add another context menu item to change the case of the selected text to Sentence case
  chrome.contextMenus.create({
    title: "Sentence case",
    contexts: ["selection"],
    onclick: function (info, tab) {
      chrome.tabs.executeScript(
        {
          code: "window.getSelection().toString()",
        },
        function (selection) {
          // Convert the selection to uppercase
          var text = selection[0];
          // Split the text into sentences by splitting on periods followed by a space
          var sentences = text.split(/\.\s/);
          // Loop through the sentences and capitalize the first letter of each sentence
          for (var i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase();
          }
          // Join the sentences back together with a period
          var sentenceCase = sentences.join(". ");
          // var sentenceCase = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
          // Replace the selection with the uppercase text
          chrome.tabs.executeScript(
            {
              code: "document.getSelection().toString()",
            },
            function (selection) {
              chrome.tabs.executeScript(
                {
                  code: "document.execCommand('insertText', false, '" + sentenceCase + "')",
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
    id: "sentencecase",
  });
})
