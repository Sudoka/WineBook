/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/20/13
 * Time: 2:20 AM
 */
Ext.define('WineBook.view.quickSearchResult', { //display quick search results.
    extend: 'Ext.NestedList',
    //requires: ['Ext.TitleBar', 'Ext.layout.*', 'Ext.field.Search'],
    alias : 'widget.quickSearchNestedList',  //TO have control of this list in the controller
    id: 'quickSearchResult-id',
    config: {
        scrollable: true,
        fullscreen: true,
        title: 'Quick Search',
        displayField: 'text',
        styleHtmlContent: true,
        useTitleAsBackText: false,
        updateTitleText: false,
        backButton:{
            cls: 'backBt',
            text: 'Search'
        },
        toolbar:
        {
            docked: 'top',
            //cls: 'toolbarCls',
            //title: 'Wine Info',

            items:[
                { //back to main menu page
                    ui: 'back',
                    xtype: 'button',
                    text: 'Menu',
                    action: 'quickSearchResult-backButton',
                    id: 'quickSearchResult-backButton-id',
                    cls: 'backBt'
                }
            ]
        },
        items:[
            {
                xtype: 'container',
                hidden: true,

                id: 'quickSearch_container_id',
                layout: {
                    type: 'hbox',
                    align: 'top'
                },
                margin: '0 0 3 0',
                defaults: {
                    cls:'wineInfo-btCls'
                },
                items:[
                    {
                        xtype: 'button',
                        iconCls: 'star',
                        flex: 1,
                        text: 'Favorite',
                        ui: 'round'

                    },
                    {
                        xtype: 'button',
                        iconCls: 'compose',
                        flex: 1,
                        text: 'Review',
                        ui: 'round'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'organize',
                        flex: 1,
                        text: 'Save',
                        ui: 'round'
                    }
                ]

            },
            {
                //template for the latest BMI: will get updated by Signup.js
                id: 'wineInfo-template-id',
                cls:'wineInfo-template-cls',
                hidden: true
            }
        ]

    }
});