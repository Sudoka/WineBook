/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 9/22/12
 * Time: 1:04 AM
 */
Ext.define("WineBook.view.util.forms.SignupForm",{
    extend: 'Ext.Panel',
    xtype: 'signupForm',
    requires: [ 'Ext.form.FieldSet',
                'Ext.field.Password'
              ],
    config:{

        items: [
            {
                xtype: 'fieldset',
                id:    'signupForm-id',
                items:[
                    {
                        xtype: 'textfield',
                        name:  'username',
                        placeHolder: 'Username'
                    },
                    {
                        xtype: 'passwordfield',
                        name:  'password',
                        placeHolder: 'Password: Minimum of 6 chars'
                    },
                    {
                        xtype: 'passwordfield',
                        name:  'verify',
                        placeHolder: 'Verify Password'
                    },
                    {
                        xtype: 'button',
                        text:  'Submit',
                        cls:   'submitButton-cls',
                        ui:    'confirm',
                        action:'submitButton-id'
                    },
                    {
                        xtype: 'button',
                        text:  'Cancel',
                        ui:    'action',
                        action:'SignupForm-cancelButton-id'
                    }
                ]
            }


        ]
    }
});