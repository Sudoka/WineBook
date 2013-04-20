/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/18/13
 * Time: 11:42 PM
 */

Ext.define('WineBook.controller.MainPageControl',{
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.TreeStore'],
    config:{
        stores: ['UserProfileStore'],

        refs:{
            mainPage:    '#mainPage-id'
        },
        control:
        {
            "searchfield[action=mainPageSearchFiled]": {
                action: 'onSearchQueryChanged',
                clearicontap: 'onSearchReset'
            }
        }
    },
    onSearchQueryChanged: function(field){
        var me = this;
        var mainPage = me.getMainPage();
        var searchKey = field._value;
        var nestedListData = [];
        Ext.getStore('quickSearchResultStore').getProxy().setExtraParams({wineName:searchKey});
        var store = Ext.getStore('quickSearchResultStore');
        Ext.define('ListItem', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    {name: 'text',  type: 'string'}
                ]
            }
        });
        store.load({
            callback: function(records, operation, successful) {
                if(records && records[0]){
                    //console.log(records[0].data);
                    //console.log(records);
                    for(var i = 0; i < records.length; i++){
                        nestedListData.push({text : records[i].data.wineName + " " + records[i].data.year});
                    }
                    var resultStore = Ext.create('Ext.data.TreeStore', {
                        model: 'ListItem',
                        defaultRootProperty: 'text',
                        root: {text : nestedListData}
                    });
                    var quickSearchResult = Ext.create('WineBook.view.quickSearchResult');
                    quickSearchResult.setStore(resultStore);
                    mainPage.hide();
                    Ext.Viewport.add(quickSearchResult);
                    Ext.Viewport.setActiveItem(quickSearchResult);
                }


            }
        });//end loading
    },
    onSearchReset: function(field){  //empty the searchfield
        field.reset();
    }
})