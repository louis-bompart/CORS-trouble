({
  doInit: function (component, event, helper) {
    var basepath = $A.get("$Resource.test");
    var req = new XMLHttpRequest();
    req.open("GET", basepath + "/json/data.json");
    req.addEventListener(
      "load",
      $A.getCallback(function () {
        component.set("v.dataJson", req.response);
      })
    );
    req.send();
  }
});
