Ext.define( 'ListApplication.view.MyTeam2', {
	extend	: 'Ext.dataview.List',
	xtype	: 'playerlist',
	config	: 
	{
		store				: 'storename',
		itemTpl				: '<p>{Name}</p>',
		onItemDisclosure	: true,
		listeners:
		{
			initialize:function()
			{
				Ext.getStore('storename').load
			},
			itemtap	: function( listview, index, target, record ) 
			{
				obj=record.raw;
				console.log(obj);
				var storedUser=[];
                if(localStorage.details)
                {
                    storedUser=JSON.parse(localStorage.details);
                }
               	storedUser.push(obj);
                localStorage.setItem("details",JSON.stringify(storedUser));
                // myview2id=Ext.ComponentQuery.query('playerlist')[0]
				this.up('navigationview').push(Ext.create('ListApplication.view.MyTeam3',{
					xtype	:'panel',
		    		styleHtmlContent: true,
		   			margin: 100,
					tpl	: new Ext.XTemplate(
		   			'<p>{details.Name}</p>'),
				}))
		}
	},
		items: [
		{
		  	xtype	: 'panel',
		  	items:[{
		  		xtype:'button',
		  		text	: 'Choose Type',
		  		docked	: 'bottom',
		  		handler:function()
		  		{    			
			    	var picker1 = Ext.create('ListApplication.view.MyPicker',
			    	{
			    	    listeners:
			    	    {
				    	    change:function(picker,values,slot)
				    	    {
				    	    	var pickval=values.selectname;
				    	    	console.log(pickval);
				    	    	var myData=Ext.getStore('storename');
              					myData.clearFilter();
              					myData.filterplayer.setScope({
                					typeofplayer:pickval
              					});
              					myData.filter(myData.filterplayer);
				    	   	}
			    	   	}
			    	});
			    picker1.show();
			    }
		  	}]
		}]
	}
});