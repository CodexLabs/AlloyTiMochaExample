require('ti-mocha');


var view = Ti.UI.createView({
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    backgroundColor: 'pink',
    id: 'myView'
});
$.index.add(view);

// run tests after window opens to ensure UI is initialized
$.index.addEventListener('open', function() {
    require('test/app_test')($.index, view);
});

$.index.open();
