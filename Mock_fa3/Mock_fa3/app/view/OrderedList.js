Ext.define('Mock.view.OrderedList',{
	xtype:'orderlist',
	extend : 'Ext.dataview.List',
	mixins : ['Ext.form.Panel'],

	config : {
		store : 'OrderStore',
		//grouped				: true,
		//indexBar			: true,	// adds an index bar (alphabetical index)
		pinHeaders			: false, // default is true (gives native iPhone experience)
		onItemDisclosure	: true,	// adds disclosure icon
		preventSelectionOnDisclose	: false,	// select event is not fired when disclosure icon is clicked
		itemTpl				: '<span>{name} {manufacturer} {date}</span>',
		
		listeners			: {
			initialize : function(){
				Ext.getStore('OrderStore').load();
			},
	}
}

})