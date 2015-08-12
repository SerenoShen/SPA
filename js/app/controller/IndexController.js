/**
 * Created by shenlei2 on 2015/8/12.
 */
define(function(require){

    var $ = require('jquery');
    var h2t = require('data/html2text');

    function initListener(){
        $("#index-toLogin").on('click', function(c){
            $('#container').html(h2t['login']);
        });
    }

    return {
        initListener : initListener
    };
});