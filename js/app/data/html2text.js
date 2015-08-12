/**
 * Created by shenlei2 on 2015/8/12.
 */
define({
    'index' : 'welcome<br/> <p id="toLogin"> to login </p>',

    'login' : ['<h1>Welcome</h1>',
        '<div class="login-form">',
        ' <div class="close"></div>',
        '	<div class="head-info">',
        '	 <label class="lbl-1"> </label>',
        '	 <label class="lbl-2"> </label>',
        '	 <label class="lbl-3"> </label>',
        '	</div>',
        '	<div class="clear"> </div>',
        '	<form>',
        '    <input type="text" class="text" value="Username" onfocus="this.value = \'\';" onblur="if (this.value == \'\') {this.value = \'Username\';}" >',
        '	 <div class="key">',
        '     <input type="password" value="Password" onfocus="this.value = \'\';" onblur="if (this.value == \'\') {this.value = \'Password\';}">',
        '    </div>',
        '	</form>',
        '	<div class="signin">',
        '		<input type="submit" value="Login" >',
        '	</div>',
        '</div>'].join("")
});