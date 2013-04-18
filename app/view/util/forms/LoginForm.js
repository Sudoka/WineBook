/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/15/13
 * Time: 12:50 AM
 */


Ext.define("WineBook.view.util.forms.LoginForm",{

    extend: 'Ext.form.FieldSet',
    xtype:  'loginForm',
    requires: ['Ext.form.FieldSet','Ext.field.Password' ],

    config:{
        id:  'loginForm-id',
        items: [
            {
                xtype: 'textfield',
                name:  'username',
                placeHolder: 'Username',
                value: 'huy'
            },
            {
                xtype: 'passwordfield',
                name:  'password',
                placeHolder: 'Password',
                value: '1234567'
            },
            {
                xtype:  'button',
                text:   'Login',
                ui:     'confirm',
                action: 'loginForm-loginButton-id'
            },
            {
                xtype: 'button',
                text:  'Signup',
                ui:    'action',
                action:'loginForm-signupButton-id'
            }

        ]
    }

})