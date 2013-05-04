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
        detailCard:{ //when the leaf item is click ---> show wineInfo.
            xtype: 'panel',
            styleHtmlContent: true,
            fullscreen: true,
            layout: 'vbox',
            scrollable: true,
            margin: '40 0 0 0',
            items:[
                {
                    xtype: 'image',
                    id: 'wineInfo-picture-id',
                    hidden: true,
                    //mode: 'd',
                    flex: 1,
                    margin: '0 0 5 0'
                },
                {
                    //template for wineInfo: will get updated by quickSearchResultControl.js
                    id: 'wineInfo-template-id',
                    cls:'wineInfo-template-cls',
                    flex: 2
                }
            ]
        },
        items:[
            {
                xtype: 'container',
                hidden: true,
                scrollable: false,
                height: '10%',
                width: '100%',
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

            }
//            {
//                xtype: 'container',
//                layout: {
//                    type: 'vbox'
//                    //align: 'middle'
//                },
//                id: 'wineInfo-vbox-id',
//                hidden: true,
//                items:[
//                    {
//                        xtype: 'image',
//                        hidden: true,
//                        id: 'wineInfo-picture-id',
//                        flex:.5
//                    },
//                    {
//                        //template for wineInfo: will get updated by quickSearchResultControl.js
//                        styleHtmlContent:true,
//                        id: 'wineInfo-template-id',
//                        cls:'wineInfo-template-cls',
//                        //hidden: true,
//                        flex: 1.4
//                    }
//                ]
//            }
        ]
    }
});