enyo.kind({
  name: "markdownView",
  kind: "HtmlContent",
  content: "Type above for it to be previewed here",
  renderContent: function(text) {
    console.log("markdownView#renderContent");
    console.log("text: " + text)
    // todo: Stylize
    this.content = "fred"
    console.log(this);
  }
})
