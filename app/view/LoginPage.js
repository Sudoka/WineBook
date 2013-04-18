/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/15/13
 * Time: 12:53 AM
 */

Ext.define("WineBook.view.LoginPage",{

    extend: 'Ext.tab.Panel',
    requires: ['Ext.form.Panel' , 'Ext.TitleBar'],
    id: 'login-view-id',

    config :{

        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Login',
                xtype: 'formpanel',
                iconCls: 'user',
                scrollable: true,

                items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to WineBook'
                    },
                    {
                        cls: 'Login-Introduction',
                        html:[
                            '<br>' +
                            '<p class="login-message">' +
                            'Search for any kind of wine and enjoy the fun facts. ' +
                            'Tell the world your thoughts on a specific wine or about your latest trip to a local winery. ' +
                            'Build your own wine collection and share it with your friends. Etc.</p>',

                        ].join("")
                    },
                    {
                        xtype: 'loginForm'
                    }
                ]
            }
        ]
    }
})
