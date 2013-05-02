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
            {name: 'varietalType',    type: 'string'},
            {name: 'vintage',    type: 'string'},
            {name: 'releasePrice',    type: 'string'},
            {name: 'casesMade',    type: 'string'},
            {name: 'wineEnthusiastScore',    type: 'string'},
            {name: 'wineSpectatorScore',    type: 'string'},
            {name: 'wineAdvocateScoreScore',    type: 'string'},
            {name: 'picture',    type: 'string'}
        ]
    }
});