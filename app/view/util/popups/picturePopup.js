/**
 * Created with JetBrains PhpStorm.
 * User: huypham612
 * Date: 9/27/12
 * Time: 1:37 AM
 */
Ext.define("WineBook.view.util.popups.picturePopup",{
    extend: 'Ext.Panel',
    xtype:  'picturePopup',
    id:     'picturePopup-id',
    config: {

        floating: true,
        centered: true,
        modal:    true,
        hideOnMaskTap: true,
        scrollable: false,
        height:   '60%',
        width:    '60%',
        showAnimation: {type: 'pop'},
        fullscreen: true,
        layout: 'hbox',
        items: [
            {
                xtype: 'image',
                id: 'popup-picture-id',
                flex: 1
            }

        ]
    }
});
