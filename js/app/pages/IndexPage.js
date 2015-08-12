/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var $ = require('jquery');
    var h2t = require('data/html2text');
    var loginController = require('ctrl/LoginController');

    function init(container){
        $(container).html(h2t['index']);
        initListener();
    }

    function initListener(){
        $("#index-toLogin").on('click', function(c){
            loginController.init('#container');
        });
    }

    return {
        init : init
    }
});