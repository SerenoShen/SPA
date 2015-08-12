/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var $ = require('jquery');

    function initLoginFormListener(){
        $('.login-close').on('click', function(c){
            $('.login-form').fadeOut('slow', function(c){
                $('.login-form').remove();
            });
        });
    }

    return {
        initListener : initLoginFormListener
    };

});