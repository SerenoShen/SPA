/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var loginPage = require('page/LoginPage');

    var eventListeners = [];

    function init(container){
        loginPage.init(container);
    }

    function addEventListener(listener){
        eventListeners.push(listener);
    }

    function removeEventListener(){

    }

    function fireEventListener(event){
        var i = 0;

        for (; i < eventListeners.length; i++){
            (eventListeners[i])(event);
        }
    }

    return {
        init : init,
        addEventListener : addEventListener
    };

});