Ext.define('Mock.view.OrderProducts',{
	xtype : 'orderproducts',
	extend : 'Ext.Panel',
	config :{
		layout : 'hbox',
		items : [
		{
			xtype : 'panel',
			flex : 1,
			id : 'panel1',
			items : [
			{
				xtype : 'picktype',
				id : 'pick',
					
			}
			]
		},
		
		{
			xtype : 'orderlist',
			flex:3
		},
			
		
		]
	}
})