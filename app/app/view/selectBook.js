Ext.define('project.view.selectBook',{
	xtype:'selectbook',
	extend:'Ext.dataview.List',
	//requires:['mock.store.ProductsStore'],
	mixins : ['Ext.form.Panel'],
	config : {
		xtype:'titlebar',
		title:'Pick Your Book',
		store : 'UserStore',
		//indexBar			: true,	// adds an index bar (alphabetical index)
		pinHeaders			: false, // default is true (gives native iPhone experience)
		onItemDisclosure	: true,	// adds disclosure icon
		//grouped:true,
		preventSelectionOnDisclose	: false,	// select event is not fired when disclosure icon is clicked
		itemTpl				: '<img src="resources/images/{cover}"></img></br><span>title:{title}</span></br><span>cost:{cost}</br><span>rating:{rating}</span></br><span>discount:{discount}</span>',
		listeners:{
			initialize:function(){
				Ext.getStore('UserStore').load();
			}
		}
		
	}
})