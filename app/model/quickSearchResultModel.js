/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/20/13
 * Time: 2:47 AM
 */
Ext.define('WineBook.model.quickSearchResultModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'text',  type: 'string'},  //wine name
            {name: 'id',  type: 'string'},
            {name: 'year',      type: 'string'}
        ]
    }
});