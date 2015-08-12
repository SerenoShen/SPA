/**
 * Created by shenlei2 on 2015/8/12.
 */
spa.login = (function(){

    $('.close').on('click', function(c){
        $('.login-form').fadeOut('slow', function(c){
            $('.login-form').remove();
        });
    });

});