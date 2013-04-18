Ext.define('WineBook.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar', 'Ext.layout.*'],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Menu',
                xtype: 'formpanel',
                iconCls: 'home',
                ui: 'light',
                //cls: 'Main-wholePage',

                styleHtmlContent: true,
                scrollable: true,

                items:[

                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'WineBook'
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Quick Search',
                        //cls: 'Main-searchfield',
                        items: [
                            {
                                xtype: 'searchfield',
                                label: 'Wine',
                                name: 'query',
                                placeHolder: 'Enter Wine Name'
                            }
                        ]
                    },
//                    {   //The Go button
//                        xtype: 'container',
//                        layout: {
//                            type: 'hbox',
//                            align: 'middle',
//                        },
//                        items:[
//                            {html:[' '].join(""), flex:3},
//                            {
//                                xtype: 'button',
//                                text:  'Go',
//                                width: '25%',
//                                flex: 1,
//                                style: {
//                                    background: '#FCFFFF'
//                                },
//                                action:'Main-wineJournalButton-id'
//                            },
//                            {html:[' '].join(""), flex:3}
//                        ]
//                    },
                    {html:['<br>'].join("")},
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'middle'
                        },
                        items:[
                            {html:[' '].join(""), flex:.07},
                            {
                                xtype: 'button',
                                text:  'Wine Journal',

                                icon: 'resources/icons/myIcons/star26x26.png',
                                iconMask: true,
                                iconAlign: 'top',
                                height: 48,
                                width: 130,
                                flex: 3.2,
                                style: {
                                    background: '#FCFFFF'
                                },
                                action:'Main-wineJournalButton-id'
                            },
                            {html:[''].join(""), flex:.5},
                            {
                                xtype: 'button',
                                text:  'Price Check',
                                style: {
                                    background: '#FCFFFF'
                                },
                                icon: 'resources/icons/myIcons/Bankaccount.png',
                                iconMask: true,
                                flex: 3.2,
                                iconAlign: 'top',
                                action:'Main-wineToTryButton-id',
                                height: 48,
                                width: 130
                            },
                            {html:[' '].join(""), flex:.07},
                        ]
                    },

                    {html:['<br>'].join("")},
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'middle'
                        },
                        items:[
                            {html:[' '].join(""), flex:.07},
                            {
                                xtype: 'button',
                                text:  'Wine Search',
                                iconAlign: 'top',
                                height: 48,
                                width: 130,
                                flex: 3.2,
                                style: {
                                    background: '#FCFFFF'
                                },
                                iconCls: 'search',
                                action:'Main-wineJournalButton-id',
                                //icon: 'resources/icons/myIcons/Coctail.png'
                            },
                            {html:[''].join(""), flex:.5},
                            {
                                xtype: 'button',
                                text:  'BAC Calculator',
                                height: 48,
                                width: 130,
                                flex: 3.2,
                                iconAlign: 'top',
                                style: {
                                    background: '#FCFFFF'
                                },
                                action:'Main-wineToTryButton-id',
                                icon: 'resources/icons/myIcons/Runner.png'
                            },
                            {html:[' '].join(""), flex:.07},
                        ]
                    },
                    {html:['<br>'].join("")},
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        align: 'middle',
                        items:[
                            {html:[' '].join(""), flex:.07},
                            {
                                xtype: 'button',
                                text:  'Winery Search',
                                iconCls: 'locate',
                                iconAlign: 'top',
                                flex: 3.2,
                                style: {
                                    background: '#FCFFFF'
                                },
                                height: 48,
                                width: 130,
                                action:'Main-wineJournalButton-id'
                            },
                            {html:[''].join(""), flex:.5},
                            {
                                xtype: 'button',
                                text:  'About WineBook',
                                style: {
                                    background: '#FCFFFF'
                                },
                                iconAlign: 'top',
                                flex: 3.2,
                                icon: 'resources/icons/myIcons/users-alt.png',
                                action:'Main-wineToTryButton-id',
                                height: 48,
                                width: 130
                            },
                            {html:[' '].join(""), flex:.07}
                        ]
                    }

                ]
            }
        ]
    }
});
