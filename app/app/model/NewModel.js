Ext.define( 'project.model.NewModel', {
	extend	: 'Ext.data.Model',
	config	: {
		
		fields	: [	
		     { name : 'title' 		 , type : 'string' 	},
		     { name : 'rating' , type : 'int' 	},
		     { name : 'discount' 		 , type : 'int' },	// qty is assigned 0 if the config supplied at the time of model instantiation is missing qty
			 { name : 'cost' 		 , type : 'int' 	},
			 { name : 'paperback' 		 , type : 'int' 	},
			 { name : 'cover' 		 , type : 'string' 	},
		],

		
		//idProperty	: 'id',
		
		proxy	: { 
			type	: 'ajax',
			url		: 'data/books.json',
			reader	: {
				type	: 'json',
				rootProperty:'books'
			}
		}
	},
	
	
});