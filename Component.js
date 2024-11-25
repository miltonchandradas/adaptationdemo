sap.ui.define(["sap/ui/core/UIComponent"], (UIComponent) => {
  "use strict";

  return UIComponent.extend("my.adaptation.demo.Component", {
    metadata: {
      manifest: "json",
      interfaces: ["sap.ui.core.IAsyncContentCreation"],
    },
  });
});
