Ext.define('WineBook.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar', 'Ext.layout.*', 'Ext.field.Search'],
    id:  'mainPage-id',
    config: {
        tabBarPosition: 'bottom',

        defaults:{
            styleHtmlContent: true,
            tabBarPosition: 'bottom',
            scrollable: false,
            height: '100%'
        },
        items: [
            {
                xtype: 'menu',
                title: 'Menu',
                iconCls: 'home',
                ui: 'light'
            },
            {
                title: 'Journal',
                iconCls: 'star',
                html: 'Home Screen'
            },
            {
                title: 'User',
                iconCls: 'user',
                html: 'Home Screen'
            }

        ]
    }
});
