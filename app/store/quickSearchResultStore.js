/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/20/13
 * Time: 2:48 AM
 */
Ext.define('WineBook.store.quickSearchResultStore', {
    extend: 'Ext.data.TreeStore',   //for the nested list
    requires: 'WineBook.model.quickSearchResultModel',

    config: {
        model: 'WineBook.model.quickSearchResultModel',
        autoLoad: false,
        defaultRootProperty: 'text',
        proxy:{
            type: 'ajax',
            url:  'http://localhost/~huypham612/WineBook/server/quickSearch.php',
            reader: {
                type: 'json'
            }
        }

    }
});