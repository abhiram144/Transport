Ext.define('Mock.view.UserView',{
	xtype : 'userview',
	extend : 'Ext.Panel',
	requires : ['Mock.view.AvailableProductList'],
	config :{
		
		items : [
		{
			xtype : 'titlebar',
			docked : 'top',
				items : [
				{
					xtype : 'button',
					text : 'Sort By MRP Low to High',
					id : 'sort'
				},
				{
					xtype : 'button',
					text : 'Filter By Manufacturer',
					id : 'filter'
				},
				{
					xtype : 'button',
					text : 'Add to Cart',
					badgeText : ' ',
					id : 'add'
				},
				{
					xtype : 'button',
					text : 'Buy',
					id : 'buy'
				},
				

				]
		},
		{
			xtype : 'availableproduct',
			height : '100%',
			width : '90%',
			docked : 'bottom'
		}
		]
	}
})