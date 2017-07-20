Ext.define('ListApplication.view.MyPicker',{
	extend:'Ext.Picker',
	xtype:'mypicker',
	config:
	{
		useTitles	: true,
		doneButton	: 'select',
		width		: '40%',
		left		: '30%',
		slots	: [
		{
			name	: 'selectname',
			title	: 'Role',
			data	: [
				{ text : 'BatsMan'			, value : 'BatsMan' 	},
				{ text : 'Bowler'		, value : 'Bowler' 	},
				{ text : 'WicketKeeper'		, value : 'WicketKeeper' 	},
				{ text : 'AllRounder', value : 'AllRounder' }
			]
		}], 
		listeners:{
		initialize:function()
		{
		    this.hide();
		}
		}
	}
});
