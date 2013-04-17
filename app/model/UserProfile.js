/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/16/13
 * Time: 9:14 PM
 */
Ext.define('WineBook.model.UserProfile', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'username',  type: 'string'},
            {name: 'WineTasted',    type: 'string'},
            {name: 'WineToTaste',    type: 'string'},
            {name: 'WineryVisited',    type: 'string'},
            {name: 'WineryToVisit',    type: 'string'},
            {name: 'Reviews',    type: 'string'},
            {name: 'Friends',    type: 'string'}

        ]
    }
});