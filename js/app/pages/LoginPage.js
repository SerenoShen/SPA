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
        showSignUpFormListener();
    }

    function removeLoginFormListener(){
        $('#login-2SignUp').on('click', function(c){
            $('#login-sign-in').fadeOut('slow', function(c){
                $('#login-sign-in').remove();
            });
        });
    }

    function showSignUpFormListener(){
        $('#login-2SignUp').on('click', function(c){
            $('#login-sign-in').fadeOut('fast', function(c){
                $('#login-sign-in').remove();
                $('#login-wrapper').html(h2t['sign-up']);
            });
        });
    }

    return {
        init : init
    };

});