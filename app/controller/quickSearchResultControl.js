/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/24/13
 * Time: 1:31 AM
 */
Ext.define('WineBook.controller.quickSearchResultControl',{ //control the quick search result page
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.TreeStore', 'Ext.Img','Ext.XTemplateCompiler'],
    config:{
        stores: ['UserProfileStore' , 'quickSearchResultStore', 'WineInfoStore'],

        refs:{
            menuPage:    '#menu-id',
            quickSearch:    '#quickSearchResult-id',
            main:   '#mainPage-id',
            picturePopup: {  //the image popup panel
                selector:   '#picturePopup-id',
                xtype:      'picturePopup',
                autoCreate: true  //will create if formpanel does not exist!!!
            },
            imagePopup: '#popup-picture-id',  //the image inside the picturePopup panel
            winePicture: '#wineInfo-picture-id'


        },
        control:
        {

            "searchfield[action=quickSearchResultPage_SearchFiled]": {
                action: 'onSearchQueryChanged',
                clearicontap: 'onSearchReset'
            },
            "button[action=quickSearchResult-backButton]": {
                tap: 'showMenu'
            },
            "quickSearchNestedList":{  //when user click back on the info page
                itemtap: 'showWineInfo',
                back:'showQuickSearchResult'
            },
            winePicture:{  //controller for the referenced winePicture in wineInfoPage
                tap: 'showPopupPicture'
            }
        }
    },
    showPopupPicture: function(pic, e, eOpts ){
        var me = this;
        var src = pic.getSrc();

        var popup = me.getPicturePopup();
        var image = me.getImagePopup();
        image.setSrc(src);
        Ext.Viewport.add(popup);
        popup.show();
    },
    showQuickSearchResult: function(view, node, lastActiveList, detailCardActive, eOpts ){
        var me = this;
        var quickSearch = me.getQuickSearch();
        quickSearch.setToolbar({ title:'Quick Search'});

        Ext.getCmp('quickSearchResult-backButton-id').show();
        Ext.getCmp('quickSearchResultPage_SearchFiled_id').show();
        Ext.getCmp('quickSearch_container_id').hide();

    },
    showWineInfo: function(view,list,index,target,record,e,eOpts){
        var me = this;
        //console.log( record);
        var wineName = record.data.text;
        var quickSearch = me.getQuickSearch();

        quickSearch.setToolbar({ title:'Wine Info'});
        quickSearch.setBackButton({text: 'Search'});
        quickSearch.setScrollable(false);
        Ext.getCmp('quickSearchResult-backButton-id').hide();
        Ext.getCmp('quickSearchResultPage_SearchFiled_id').hide();
        Ext.getCmp('quickSearch_container_id').show();


        var picture = Ext.ComponentQuery.query('#wineInfo-picture-id')[0];
        var infoTemp = Ext.getCmp('wineInfo-template-id');

        var tpl = new Ext.XTemplate(
            '<tpl for=".">',
            '<table class=\"wineInfoTable\">',
            '<caption><b>{wineName}</b></caption>',
            '<tr><td class=\"leftSideofTable\">Winery:          </td> <td class=\"rightSideofTable\">{winery}             </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Varietal:        </td> <td class=\"rightSideofTable\">{varietal}           </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Type:            </td> <td class=\"rightSideofTable\">{varietalType}       </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Vintage:         </td> <td class=\"rightSideofTable\">{vintage}            </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Release Price:   </td> <td class=\"rightSideofTable\">{releasePrice}       </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Cases Made:      </td> <td class=\"rightSideofTable\">{casesMade}          </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Enthusiast Score:</td> <td class=\"rightSideofTable\">{wineEnthusiastScore}</td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Spectator Score: </td><td class=\"rightSideofTable\">{wineSpectatorScore}  </td>  </tr>',
            '<tr><td class=\"leftSideofTable\">Advocate Score:  </td> <td class=\"rightSideofTable\">{wineAdvocateScore}  </td>  </tr>',
            '</table>',
            '</tpl>',
            '<i>Data collected from iwinedb.com</i>'
        );

        Ext.getStore('WineInfoStore').getProxy().setExtraParams({wineId:record.data.id});
        var store = Ext.getStore('WineInfoStore');
        store.load({
            callback: function(records, operation, successful) {
                if(records){
                    //console.log('result:  ' , records[0].data);
                    //var info = [{wineName: wineName}].concat([records[0].data]);
                    var info = Ext.apply({wineName: wineName}, records[0].data);
                    //console.log('info ', info);
                    infoTemp.updateHtml(tpl.applyTemplate(info));

                    if(records[0].data.picture != ''){ //when there is an image
                        picture.setSrc(records[0].data.picture.replace(/\\/g,""));
                        picture.setHidden(false);
                    }
                    else{
                        picture.setHidden(true);
                    }
                }
            }
        });//end loading
        //console.log('detail ', quickSearch.getDetailCard());


    },

    showMenu: function(){
        var me = this;
        var main = me.getMain();
        var quickSearch = me.getQuickSearch();
        var menuPage = me.getMenuPage();

        main.setShowAnimation({duration: 250, type :'slide',direction : 'right'});
        //main.show();
        menuPage.show();
        quickSearch.destroy();
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
                            nestedListData.push({text : records[i].data.text + " " + records[i].data.year, id:records[i].data.id, year:records[i].data.year, leaf: true });
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