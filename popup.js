// Get selected text
/*function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }
  return "";
}
// Get selected text and replace with link
function replaceSelectedText(link) {
  if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount) {
      var range = selection.getRangeAt(0);
      range.deleteContents();
      var el = document.createElement("a");
      el.appendChild(document.createTextNode(link));
      el.href = link;
      el.target = "_blank";
      range.insertNode(el);
    }
  } else if (document.selection) {
    var range = document.selection.createRange();
    range.text = link;
  }
}
chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString();",
  },
  function (selection) {
    document.getElementById("output").value = selection[0];
  }
);
document.getElementById("uppercase").addEventListener("click", function () {
  // var text = getSelectedText();
  // replaceSelectedText(text.toUpperCase());
  console.log("uppercase");
  console.log(getSelectedText());
});
// console.log(getSelectedText());*/
// on clicking crtl+shift+l execute the code
// document.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.shiftKey && e.key == "l") {
//     console.log("ctrl+shift+l");
//     chrome.tabs.executeScript(
//       {
//         code: "window.getSelection().toString().toUpperCase();",
//       },
//       function (selection) {
//         console.log(selection[0]);
//       }
//     );
//   }
// }),
// chrome tabs execute script log the selected text on console on ctrl+shift+l

