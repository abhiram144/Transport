Ext.define( 'project.view.eLibrary', {
	extend	: 'Ext.form.Panel',
	//mixins:['Ext.tab.Panel'],
	//requires: [ 'Ext.MessageBox' ],
	xtype	: 'elibrary',
	config:{
		//tabBarPosition:'bottom',
		items	: [

			{
				xtype	: 'titlebar',
				title	: 'eLibrary',
			},
	        {
				xtype	: 'fieldset',
				title	: 'Details',
				items	: [
				    {
				    	xtype		: 'textfield',
				    	id 			:'name',
				    	name		: 'name',		// a must for field to be included when form is submitted
				    	label		: 'Name',
				    	labelAlign	: 'left', 
				    	placeHolder : 'name',
				    	required	: true,
				    },
				    {
				    	xtype		: 'numberfield',
				    	name		: 'contact',
				    	id 			:'contact',
				    	label		: 'contact',
				    	labelAlign	: 'left',
				    	placeHolder : 'Contact',
				    	maxLength   : 10,
				    	required	: true
				    },
				    {
				    	xtype		: 'textfield',
				    	name		: 'address',
				    	id 			:'address',
				    	label		: 'Address',
				    	placeHolder : 'Address',
				    	labelAlign	: 'left', 
				    	required	: true
				    }]
				},
				{
					xtype	: 'fieldset',
					title	: 'Book Specifications',
					items	: [
				    	{
				    	xtype:'sliderfield',
						label:'Rate<=3',
						id 	:'rate',
						name:'rate',
           				required:true,
            			minValue:1,
            			maxValue:5,
            			value:3

				    	},
				    	{
				    	xtype		: 'spinnerfield',
				    	name		: 'issue',
				    	id 			:'issue',
				    	label		: 'Issues per week',
				    	labelAlign	: 'left',
				    	minValue	: 1,
				    	maxValue	: 5,
				    	cycle		: true,
				    	required	: true,
				    	increment   : 1,
				    	value:3
				   	 }]

					},
					{
						xtype:'button',
						id:'registerbtn',
						text:'register',
						ui:'confirm'
					}
		
					
				    ]
				}


})