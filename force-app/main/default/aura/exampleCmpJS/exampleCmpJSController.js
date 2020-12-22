({
    setup: function (component, event, helper) {
        _myLib.appendHello(component.find('myEl').getElement());
    }
});
