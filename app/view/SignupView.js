/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 9/22/12
 * Time: 2:16 AM
 */
Ext.define("WineBook.view.SignupView",{
    extend: 'Ext.tab.Panel',
    requires: ['Ext.form.Panel', 'Ext.TitleBar'],
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
                        xtype: 'titlebar',
                        docked: 'top',

                        title: 'New User Account'
                        //ui:     'light',
//                        items:[
//                                {
//                                    xtype: 'button',
//                                    iconCls: 'arrow_left',
//                                    iconMask: true,
//                                    ui:    'back',
//                                    action: 'signup-backButton-id'
//                                }
//                        ]
                    },
                    {html: ['<br><br>'].join("")},   //To put space between title bar and the form
                    {
                        xtype: 'signupForm'
                    }

                ]
            }
        ]
    }
});