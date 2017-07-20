Ext.define( 'ListApplication.store.PlayerStore', {
	extend	: 'Ext.data.Store',
	config	: {
		storeId		: 'storename', 
		model		: 'ListApplication.model.PlayerModel',
		autoLoad	: true,
		autoSync	:true,

	},
	filterplayer	: Ext.create( 'Ext.util.Filter', {
    	filterFn	: function( model ) {
    		return model.get('typeofplayer')==this.typeofplayer;	
    	}
    }),   
}); 