/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/16/13
 * Time: 10:30 PM
 */

/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 9/22/12
 * Time: 12:33 AM
 */

Ext.define('WineBook.controller.LoginControl',{
    extend: 'Ext.app.Controller',

    config:{
        stores: ['UserProfileStore'],
        refs:{
            loginView:    '#login-view-id',
            signupView:   '#signup-view-id',
            signupForm:   '#signupForm-id',
            loginForm:    '#loginForm-id'
        },
        control: {
            "button[action=loginForm-loginButton-id]": {
                tap: 'login'
            },
            "button[action=loginForm-signupButton-id]": {
                tap: 'showSignupForm'
            },
            "button[action=submitButton-id]": {
                tap: 'createNewUser'
            },
            "button[action=signup-backButton-id]": {  //back button in SignupView.js
                tap: 'showLoginForm'
            }
        }
    },
    /**
     * Called by createNewUser after user signed up
     * Called by the back button in SignupView.js
     */
    showLoginForm: function(){
        var me = this;
        me.getSignupView().destroy();
        var loginView = me.getLoginView();
        loginView.setShowAnimation({
            type:      'slide',
            direction: 'right',
            duration:  250
        });
        Ext.Viewport.setActiveItem(loginView);  //better than show()

    },
    createNewUser: function(){
        var me = this;
        var signupForm = me.getSignupForm();
        var username = signupForm.items.items[0]._value;
        var pass = signupForm.items.items[1]._value;
        var verify = signupForm.items.items[2]._value;
        if(this.myValidate(username,pass,verify)){
            var params = {
                username: username,
                password: pass
            };
            Ext.Ajax.request({
                url: 'http://localhost/~huypham612/WineBook/server/signup.php',
                params: params,
                success: function(response){
                    var text = response.responseText;
                    if(text === 'Signup Succeeded'){
                        me.showLoginForm();
                        //Ext.Msg.alert(text, 'Please Login')
                    }
                    else{
                        Ext.Msg.alert(text);
                    }
                },
                failure : function(response) {
                    var text = response.responseText;
                    Ext.Msg.alert(text);
                }
            });
        }
        else{
            Ext.Msg.alert('Invalid Signup Information')
        }
    },
    showSignupForm: function(){

        var me = this;
        me.getLoginView().hide();
        var signupView = Ext.create('WineBook.view.SignupView');
        Ext.Viewport.add(signupView);
        Ext.Viewport.setActiveItem(signupView);

    },
    login: function(){
        var me = this;
        var loginForm = me.getLoginForm();
        var username = loginForm.items.items[0]._value;
        var pass = loginForm.items.items[1]._value;
        var name_re = new RegExp("^[a-zA-Z0-9_-]{3,20}$");
        var pass_re = new RegExp("^.{6,20}$");
        if(!name_re.test(username)){
            Ext.Msg.alert('Invalid Username');
        }
        else if(!pass_re.test(pass)){
            Ext.Msg.alert('Invalid Password');
        }
        else{
            console.log(username + ' , ' + pass);
                var params = {
                    username: username,
                    password: pass
                };
           Ext.Ajax.request({
               url: 'http://localhost/~huypham612/WineBook/server/login.php',
               params: params,

               success: function(response){
                   var text = response.responseText;
                   if(text === 'Login Succeeded' || text === 'Login Succeeded but No Profile'){
                       //me.toMainPage(username, text);
                       Ext.Msg.alert("User Pass is valid");
                   }
                   else{
                       Ext.Msg.alert(text);
                   }
               },
               failure : function(response) {
                   var text = response.responseText;
                   Ext.Msg.alert(text);
               }
           });
        }

    },
    /**
     * Return true if username and password are valid.
     * @param username
     * @param pass
     * @param verify
     * @return {Boolean}
     */
    myValidate: function(username,pass,verify){
        var name_re = new RegExp("^[a-zA-Z0-9_-]{3,20}$");
        var pass_re = new RegExp("^.{6,20}$");
        if(username && pass && verify && (pass == verify)){
            if(!name_re.test(username)){return false;}
            if(!pass_re.test(pass)){return false;}
            return true;
        }
        return false;
    },

});
