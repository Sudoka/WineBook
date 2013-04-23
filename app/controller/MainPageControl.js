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
        var mask = {masked: {
            xtype: 'loadmask',
                message: 'Searching for Wine'
        }};
        mainPage.setConfig(mask);
        mainPage.setMasked(true);
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
            callback: function(records, operation) {
                if(operation._records.length > 0){
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
                    mainPage.setMasked(false);
                    mainPage.hide();
                    Ext.Viewport.add(quickSearchResult);
                    Ext.Viewport.setActiveItem(quickSearchResult);
                }
                else{
                    mainPage.setMasked(false);
                    Ext.Msg.alert('No Result');
                    return;
                }


            }
        });//end loading
    },
    onSearchReset: function(field){  //empty the searchfield
        field.reset();
    }
})