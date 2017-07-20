Ext.define('Mock.view.Picker',{
	
	xtype : 'picktype', 
	extend : 'Ext.Picker',

	config : {
		useTitles	: true,
		doneButton	: 'Order',
		width		: '100%',
		//left		: '30%',
		//stretchX : true,
		slots : [
		{
			name	: 'productname',
			title	: 'Name',
			store : 'UserStore',
			displayField : 'name',
			valueField : 'name',
		},
		{
			name	: 'manufact',
			title	: 'Manufacturer',
			store : 'UserStore',
			displayField : 'manufacturer',
			valueField : 'manufacturer',
		},
		{
			name	: 'quantity',
			title	: 'Quantity',
			store : 'UserStore',
			displayField : 'qty',
			valueField : 'qty',
		}
		]
	}

})
