Ext.define('project.store.registStore', {
	extend	: 'Ext.data.Store',
	config	: {
		storeId		: 'UserStore', 
		model		: 'project.model.NewModel',
		autoLoad	: true,
		autoSync	: true,
		//sorters		: 'name',
		//sorters		: [
                        //{property:'name',direction:'ASC'}
                    //],
	},

	filterPlayer		: Ext.create( 'Ext.util.Filter', {
    	filterFn	: function( model ) {
    		return model.get( 'rating' ) == this.rating;	// The scope for this filter is to be set with minMrp property before calling it
    	}
    }),


});