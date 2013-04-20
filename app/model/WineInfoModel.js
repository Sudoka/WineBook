/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/19/13
 * Time: 12:30 AM
 */

Ext.define('WineBook.model.WineInfoModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'winery',  type: 'string'},
            {name: 'varietal',    type: 'string'},
            {name: 'varietal type',    type: 'string'},
            {name: 'vintage',    type: 'string'},
            {name: 'release price',    type: 'string'},
            {name: 'cases made',    type: 'string'}
        ]
    }
});