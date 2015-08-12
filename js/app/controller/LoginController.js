/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var loginPage = require('page/LoginPage');

    function init(container){
        loginPage.init(container);
    }

    return {
        init : init
    };

});