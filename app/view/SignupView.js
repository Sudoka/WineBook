/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 9/22/12
 * Time: 2:16 AM
 */
Ext.define("WineBook.view.SignupView",{
    extend: 'Ext.tab.Panel',
    requires: ['Ext.form.Panel'],
    id: 'signup-view-id',
    xtype: 'signup-page',
    config :{

        showAnimation: {
            type:     'pop',
            duration: 250
        },
        fullscreen: true,
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Signup',
                xtype: 'formpanel',
                iconCls: 'user',
                scrollable: true,

                items:[
                    {
                        xtype:  'toolbar',
                        docked: 'top',
                        ui:     'light',
                        items:[
                            {
                                xtype: 'button',
                                //text:  'Back',
                                iconCls: 'arrow_left',
                                iconMask: true,
                                ui:    'back',
                                action: 'signup-backButton-id'
                            }
                        ]
                    },
                    {
                        cls: 'Main-welcomeMessage',
                        html: [
                            '<h2 class="Login-welcome">New User Account</h2><br>'
                        ].join("")
                    },
                    {
                        xtype: 'signupForm'
                    }

                ]
            }
        ]
    }
});