sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/OverrideExecution",
    "./extension/ExtensionController",
    "sap/m/MessageToast",
  ],
  (Controller, OverrideExecution, CustomExtension, MessageToast) => {
    "use strict";

    return Controller.extend("my.adaptation.demo.controller.Root", {
      metadata: {
        methods: {
          loadProducts: {
            public: true,
            final: false,
            overrideExecution: OverrideExecution.After,
          },
        },
      },
      onInit: function () {
        console.log("BASE:  onInit");
      },
      onBeforeRendering: function () {
        console.log("BASE:  onBeforeRendering");
      },
      onAfterRendering: function () {
        console.log("BASE:  onAfterRendering");
      },
      onExit: function () {
        console.log("BASE:  onExit");
      },

      onPress: function () {
        this.byId("myExtensionDialog").open();
        this.loadProducts();
      },

      myCustomExtension: CustomExtension,

      loadProducts: function() {
        console.log("BASE:  loadProducts");
      }
    });
  }
);
