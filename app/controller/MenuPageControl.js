/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/18/13
 * Time: 11:42 PM
 */

Ext.define('WineBook.controller.MenuPageControl',{ //control the menu page
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.TreeStore'],
    config:{
        stores: ['UserProfileStore'],

        refs:{
            menuPage:    '#menu-id',
            aboutPage:   '#about-id'
        },
        control:
        {
            "searchfield[action=menuPageSearchFiled]": {
                action: 'onSearchQueryChanged',
                clearicontap: 'onSearchReset'
            },

            //Sam's About Page
            "button[action=Main-aboutUsButton-id]": {
                tap: 'launchAboutUsPage'
            },
            "button[action=About-close-id]": {
                tap: 'closeAboutUsPopup'
            }
            //end Sam's
        }
    },

    //Sam's About Page
    closeAboutUsPopup: function(){
        var me = this;
        me.getAboutPage().hide();
    },

    launchAboutUsPage: function(){
        var me = this;
        var aboutPopup = me.getAboutPage();
        if(aboutPopup){  //in case if the about is already created
            aboutPopup.show();
        }
        else{
            var aboutPopup = Ext.create('WineBook.view.util.popups.About');
            Ext.Viewport.add(aboutPopup);
            aboutPopup.setHeight(Ext.Viewport.getWindowHeight());
            aboutPopup.setWidth(Ext.Viewport.getWindowWidth());
            aboutPopup.show();
        }
    },
    //end Sam's

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

            store.load({
                callback: function(records, operation) {
                    if(operation._records.length > 0){
                        for(var i = 0; i < records.length; i++){
                            nestedListData.push({text : records[i].data.text + " " + records[i].data.year, id:records[i].data.id, year:records[i].data.year, leaf: true });
                        }
                        var resultStore = Ext.create('Ext.data.TreeStore', {
                            model: 'WineBook.model.quickSearchResultModel',
                            defaultRootProperty: 'text',
                            root: {text : nestedListData}
                        });
                        var quickSearchResult = Ext.create('WineBook.view.quickSearchResult');
                        quickSearchResult.setStore(resultStore);
                        quickSearchResult.add({

                            docked: 'top',
                            xtype: 'fieldset',
                            margin: '5 3 5 3',
                            id: 'quickSearchResultPage_SearchFiled_id',
                            items:[{
                                xtype: 'searchfield',
                                autoComplete: true,
                                autoDestroy: true,
                                placeHolder: 'Enter Wine Name',
                                action: 'quickSearchResultPage_SearchFiled'

                            }]
                        });
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