sap.ui.define([
  "sap/ui/core/mvc/ControllerExtension",
  "sap/ui/core/mvc/OverrideExecution",
  "sap/ui/model/json/JSONModel"
], (ControllerExtension, OverrideExecution, JSONModel) => {
  "use strict";

  return ControllerExtension.extend("my.adaptation.demo.controller.Extension", {
    overrides: {

      onInit: function () {
        console.log("EXTENSION:  onInit");
        this._mainModel = new JSONModel()
        this.getView().setModel(this._mainModel)
        

        let publicMethods = this.base.getMetadata().getPublicMethods()
        console.log("Public Methods: ", publicMethods)
      },
      onBeforeRendering: function () {
        console.log("EXTENSION:  onBeforeRendering");
      },
      onAfterRendering: function () {
        console.log("EXTENSION:  onAfterRendering");
      },
      onExit: function () {
        console.log("EXTENSION:  onExit");
      },
      loadProducts: function () {
        console.log("EXTENSION:  loadProducts");
        this._mainModel.loadData("model/products.json");
      }
    },

    onCloseButtonPress: function() {
      this._mainModel.setProperty("/products", null)
      this.getView().byId("myExtensionDialog").close();
    },

  });
});