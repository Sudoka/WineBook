/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/24/13
 * Time: 1:31 AM
 */
Ext.define('WineBook.controller.quickSearchResultControl',{ //control the quick search result page
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.TreeStore'],
    config:{
        stores: ['UserProfileStore' , 'quickSearchResultStore'],

        refs:{
            menuPage:    '#menu-id',
            quickSearch:    '#quickSearchResult-id'
        },
        control:
        {

            "searchfield[action=quickSearchResultPage_SearchFiled]": {
                action: 'onSearchQueryChanged',
                clearicontap: 'onSearchReset'
            }
        }
    },
    onSearchQueryChanged: function(field){
        var me = this;
        var searchKey = field._value;
        var quickSearch = me.getQuickSearch();
        if(searchKey){  //only search if input is valid
            var mask = {masked: {
                xtype: 'loadmask',
                message: 'Searching for Wine'
            }};
            quickSearch.setConfig(mask);
            quickSearch.setMasked(true);
            var nestedListData = [];
            Ext.getStore('quickSearchResultStore').getProxy().setExtraParams({wineName:searchKey});
            var store = Ext.getStore('quickSearchResultStore');

            store.load({
                callback: function(records, operation) {
                    if(operation._records.length > 0){

                        for(var i = 0; i < records.length; i++){
                            nestedListData.push({text : records[i].data.text + " " + records[i].data.year, id:records[i].data.id, year:records[i].data.year });
                        }
                        var resultStore = Ext.create('Ext.data.TreeStore', {
                            model: 'WineBook.model.quickSearchResultModel',
                            defaultRootProperty: 'text',
                            root: {text : nestedListData}
                        });
                        quickSearch.setStore(resultStore);
                        quickSearch.setMasked(false);

                    }
                    else{
                        quickSearch.setMasked(false);
                        Ext.Msg.alert('No Result');
                        return;
                    }
                }
            });//end loading
        }
    },
    onSearchReset: function(field){  //empty the searchfield
        field.reset();
    }
})