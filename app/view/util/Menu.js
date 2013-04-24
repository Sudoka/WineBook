/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/23/13
 * Time: 9:00 PM
 */
Ext.define('WineBook.view.util.Menu', {   //the Menu Page
    extend: 'Ext.form.Panel',
    requires: ['Ext.TitleBar', 'Ext.layout.*', 'Ext.field.Search'],
    id:  'menu-id',
    xtype: 'menu',
    config: {
        items:[
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'WineBook'
            },
            {
                xtype: 'fieldset',
                title: 'Quick Search',
                items: [
                    {
                        xtype: 'searchfield',
                        label: 'Wine',
                        name: 'quicksearch',
                        placeHolder: 'Enter Wine Name',
                        id: 'quicksearch',
                        action: 'menuPageSearchFiled'
                    }
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
                        text:  'Wine Journal',

                        icon: 'resources/icons/myIcons/star26x26.png',
                        iconMask: true,
                        iconAlign: 'top',
                        height: '40%',
                        width: '30%',
                        flex: 3.2,
//                                style: {
//                                    background: '#FCFFFF'
//                                },
                        action:'Main-wineJournalButton-id'
                    },
                    {html:[''].join(""), flex:.5},
                    {
                        xtype: 'button',
                        text:  'Scan Barcode',
//                                style: {
//                                    background: '#FCFFFF'
//                                },
                        icon: 'resources/icons/myIcons/barcode26x26.png',
                        iconMask: true,
                        flex: 3.2,
                        iconAlign: 'top',
                        action:'Main-priceCheckButton-id',
                        height: '40%',
                        width: '30%'
                    },
                    {html:[' '].join(""), flex:.07}
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
                        height: '40%',
                        width: '30%',
                        flex: 3.2,
//                                style: {
//                                    background: '#FCFFFF'
//                                },
                        iconCls: 'search',
                        action:'Main-wineSearchButton-id'
                        //icon: 'resources/icons/myIcons/Coctail.png'
                    },
                    {html:[''].join(""), flex:.5},
                    {
                        xtype: 'button',
                        text:  'BAC Calculator',
                        height: '40%',
                        width: '30%',
                        flex: 3.2,
                        iconAlign: 'top',
//                                style: {
//                                    background: '#FCFFFF'
//                                },
                        action:'Main-bacCalculatorButton-id',
                        icon: 'resources/icons/myIcons/Runner.png'
                    },
                    {html:[' '].join(""), flex:.07}
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
//                                style: {
//                                    background: '#FCFFFF'
//                                },
                        height: '40%',
                        width: '30%',
                        action:'Main-winerySearchButton-id'
                    },
                    {html:[''].join(""), flex:.5},
                    {
                        xtype: 'button',
                        text:  'About WineBook',
//                                style: {
//                                    background: '#FCFFFF'
//                                },
                        iconAlign: 'top',
                        flex: 3.2,
                        icon: 'resources/icons/myIcons/users-alt.png',
                        action:'Main-aboutUsButton-id',
                        height: '40%',
                        width: '30%'
                    },
                    {html:[' '].join(""), flex:.07}
                ]
            }

        ]
    }

})