Ext.define('Mock.store.ProductsStore', {
	extend	: 'Ext.data.Store',
	config	: {
		storeId		: 'UserStore', 
		model		: 'Mock.model.ProductsModel',
		autoLoad	: true,
		autoSync	: true,
		// sorters		: [
  //                       {property:'manufacturer',direction:'ASC'},
  //                       {property:'name',direction:'DESC'}
  //                   ],
        grouper	: {	
			groupFn			: function( record ) {
				return record.get( 'manufacturer' );
			} 
		}
	},

	filterPlayer		: Ext.create( 'Ext.util.Filter', {
    	filterFn	: function( model ) {
    		return model.get( 'manufacturer' ) == this.value1;	// The scope for this filter is to be set with minMrp property before calling it
    	}
    }),
});

