/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/16/13
 * Time: 9:19 PM
 */
Ext.define('WineBook.store.UserProfileStore', {
    extend: 'Ext.data.Store',
    requires: 'WineBook.model.UserProfile',

    config: {
        model: 'WineBook.model.UserProfile',
        autoLoad: false,
        proxy:{
            type: 'ajax',
            url:  'http://localhost/~huypham612/WineBook/server/getProfile.php',
            reader: {
                type: 'json'
            }
        }

    }
});