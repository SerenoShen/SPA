/**
 * Created by shenlei2 on 2015/8/12.
 */
requirejs.config({

    baseUrl : 'js',

    paths : {
        app    : 'app',
        data   : 'app/data',
        ctrl   : 'app/controller',
        domain : 'app/domain',
        layout : 'app/layout',
        jquery : 'jquery/jquery2'
    }

});

require(['jquery', 'app/spa'], function($, spa){

    spa.init('#container');
});

