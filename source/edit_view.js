enyo.kind({
  name: "editView",
  kind: "BasicScroller",
  published: {
    renderer: null
  },
  components: [
  {
    name: "editInput",
    kind: "RichText",
    value: "To *boldly* _go_...",
    richContent: false,
    alwaysLooksFocused: true,
    changeOnInput: true,
    keypressInputDelay: 100,
    onchange: "contentChanged",
  }],
  contentChanged: function() {
    console.log("editView#contentChanged")
    // if (this.renderer) {
      // this.renderer.renderContent(this.$.editInput.value)
      this.renderer.content = "fred"
      // console.log(this.renderer);
      // console.log(md);
      md.content = "fred"
    // }
  }
})
