var md;

enyo.kind({
  name: "MEdit",
  kind: enyo.VFlexBox,
  components: [
      {kind: "PageHeader", components: [
        {kind: enyo.VFlexBox, content: "MEdit", flex: 1},
      ]},
/*      {kind: "Pane", components: [*/
        {kind: "editView"},
        {kind: "markdownView"}
/*      ]}*/
  ],
  create: function() {
    this.inherited(arguments);
    md = this.$.markdownView
    this.$.editView.renderer = this.$.markdownView
  }
});
