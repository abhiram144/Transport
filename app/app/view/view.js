Ext.define('project.view.view',{
	xtype:'view2',
	extend:'Ext.tab.Panel',
	//requires:['mock.view.AvailableProductView'],
	config:{
		tabBarPosition:'bottom',
			items:[
			{
			title:'register yourself',
			xtype:'elibrary'

		    },
		    
		   {
			title:'select book',
			xtype:'selectbook'
		    }
		   
		]

	}
	

})