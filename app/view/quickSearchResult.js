/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/20/13
 * Time: 2:20 AM
 */
Ext.define('WineBook.view.quickSearchResult', {
    extend: 'Ext.NestedList',
    requires: ['Ext.TitleBar', 'Ext.layout.*', 'Ext.field.Search'],
    id:  'quickSearchResult-id',
    config: {
        scrollable: true,
        fullscreen: true,
        title: 'Quick Search',
        displayField: 'text',
        backButton: {
            ui: 'back'
        }
    }
});