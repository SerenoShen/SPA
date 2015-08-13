/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var $ = require('jquery');
    var h2t = require('data/html2text');

    function init(container){
        $(container).html(h2t['login']);
        initListener();
    }

    function initListener(){
        $('.login-close').on('click', function(c){
            $('.login-form').fadeOut('slow', function(c){
                $('.login-form').remove();
            });
        });
    }

    return {
        init : init
    };

});