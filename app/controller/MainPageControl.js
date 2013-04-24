/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/18/13
 * Time: 11:42 PM
 */

Ext.define('WineBook.controller.MainPageControl',{ //control the menu page
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.TreeStore'],
    config:{
        stores: ['UserProfileStore'],

        refs:{
            menuPage:    '#menu-id'
        },
        control:
        {
            "searchfield[action=menuPageSearchFiled]": {
                action: 'onSearchQueryChanged',
                clearicontap: 'onSearchReset'
            }
        }
    },
    onSearchQueryChanged: function(field){
        var me = this;
        var menuPage = me.getMenuPage();


        var searchKey = field._value;
        if(searchKey){  //only search if input is valid
            var mask = {masked: {
                xtype: 'loadmask',
                message: 'Searching for Wine'
            }};
            menuPage.setConfig(mask);
            menuPage.setMasked(true);
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
                        menuPage.setMasked(false);
                        menuPage.hide();
                        Ext.Viewport.add(quickSearchResult);
                        Ext.Viewport.setActiveItem(quickSearchResult);
                    }
                    else{
                        menuPage.setMasked(false);
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