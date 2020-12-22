window._myLib = (function() {
    return {
        appendHello: function(element) {
            var childElement = document.createElement('div');
            childElement.innerText="Hello world!";
            element.appendChild(childElement)
        }
    };
}());
