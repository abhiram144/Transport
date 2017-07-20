Ext.define('Mock.store.OrderListStore', {
	extend	: 'Ext.data.Store',
	config	: {
		storeId		: 'OrderStore', 
		model		: 'Mock.model.OrderedProductsModel',
		autoLoad	: true,
		autoSync	: true,
		// sorters		: [
  //                       {property:'manufacturer',direction:'ASC'},
  //                       {property:'name',direction:'DESC'}
  //                   ],
  //       grouper	: {	
		// 	groupFn			: function( record ) {
		// 		return record.get( 'manufacturer' );
		// 	} 
		// }
	},
});

