/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/20/13
 * Time: 2:20 AM
 */
Ext.define('WineBook.view.quickSearchResult', { //display quick search results.
    extend: 'Ext.NestedList',
    //requires: ['Ext.TitleBar', 'Ext.layout.*', 'Ext.field.Search'],
    id:  'quickSearchResult-id',
    config: {
        scrollable: true,
        fullscreen: true,
        title: 'Quick Search',
        displayField: 'text',
        backButton: {
            ui: 'back',
            iconCls: 'arrow_left'
        },
        useTitleAsBackText: false,
        backText: '',
        toolbar:
        {
                items:[
                    {
                        ui: 'back',
                        xtype: 'button',
                        iconCls: 'arrow_left'
                    }
                ]
        }
    }
});