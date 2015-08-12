/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function (require){

    var indexController = require('ctrl/IndexController');

    function init(container){
       indexController.init(container);
    }

    return {
        init : init
    };
});


