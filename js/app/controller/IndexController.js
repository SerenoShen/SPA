/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var indexPage = require('page/IndexPage');

    function init(container){
        indexPage.init(container);
    }

    return {
        init : init
    };
});