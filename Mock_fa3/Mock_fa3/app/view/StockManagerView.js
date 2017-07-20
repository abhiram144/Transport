Ext.define('Mock.view.StockManagerView', {
    extend: 'Ext.tab.Panel',
    xtype: 'stockmanager',
    requires:['Mock.view.AvailableProductList'],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Available Products',
                xtype : 'availableproduct',   
                iconCls: 'home',
                       
            },
            {
            	xtype : 'orderproducts',
                title: 'Order Products',
                iconCls: 'action',

            }
        ]
    }
});
