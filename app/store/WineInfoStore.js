/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/19/13
 * Time: 9:31 PM
 */

Ext.define('WineBook.store.WineInfoStore', {
    extend: 'Ext.data.Store',
    requires: 'WineBook.model.WineInfoModel',

    config: {
        model: 'WineBook.model.WineInfoModel',
        autoLoad: false,
        proxy:{
            type: 'ajax',
            url:  'http://localhost/~huypham612/WineBook/server/quickSearch.php',
            reader: {
                type: 'json'
            }
        }

    }
});