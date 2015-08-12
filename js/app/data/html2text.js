/**
 * Created by shenlei2 on 2015/8/12.
 */
define({
    'index' : 'welcome<br/> <p id="index-toLogin"> to login </p>',

    'login' : ['<h1>Welcome</h1>',
        '<div class="login-form">',
        ' <div class="login-close"></div>',
        ' <div class="login-head-info">',
        '	<label class="login-label-1"> </label>',
        '	<label class="login-label-2"> </label>',
        '	<label class="login-label-3"> </label>',
        ' </div>',
        ' <div class="login-clear"></div>',
        ' <form>',
        '   <input type="text" class="text" value="Username" onfocus="this.value = \'\';" onblur="if (this.value == \'\') {this.value = \'Username\';}" >',
        '	<div class="key">',
        '    <input type="password" value="Pass" onfocus="if (this.value == \'Pass\') {this.value = \'\';}" onblur="if (this.value == \'\') {this.value = \'Pass\';}">',
        '   </div>',
        ' </form>',
        ' <div class="sign-in">',
        '	<input type="submit" value="Login" >',
        ' </div>',
        '</div>'].join("")
});