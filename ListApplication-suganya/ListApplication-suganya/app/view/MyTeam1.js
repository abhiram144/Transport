Ext.define('ListApplication.view.MyTeam1',{
	extend:'Ext.NavigationView',
	mixins:['Ext.form.Panel'],
	requires:['Ext.Button','ListApplication.view.MyTeam2','ListApplication.view.MyPicker'],
	xtype:'myteam1',
	config:{
		items:[{
			title:'My Team',
			items:[
			{
				xtype:'fieldset',
				items:[
				{
					xtype:'textfield',
					name:'Name',
					placeHolder:'Name',
					required:true,
					label:'Name',
					labelAlign:'left',
				},
				{
					xtype:'textfield',
					name:'Score',
					placeHolder:'Score',
					required:true,
					label:'Score',
					labelAlign:'left',
				},
				{
					xtype:'textfield',
					name:'Wickets',
					placeHolder:'Wickets',
					required:true,
					label:'Wickets',
					labelAlign:'left',
				},
				{
						xtype:'textfield',
						label:'Type',
						name:'typeofplayer',
						itemId:'typeofplayer',
						listeners	: 
						{
			    	    	focus	: function( textfield )
			    	    	 {
			    	    		picker = Ext.create('ListApplication.view.MyPicker',{
			    	    		listeners:
			    	    		{
			    	    			change:function(picker,values,slot)
			    	    			{
			    	    				var val=Ext.ComponentQuery.query('#typeofplayer')[0].setValue(values.selectname)
			    	    			}
			    	    		}

			    	    		});
			    	    		picker.show();
			    	    	},
			    	    }
			    	    
				},
				{
					xtype:'button',
					text:'add',
					width:'20%',
					id:'addbut',
					handler:function()
					{
						var forms = Ext.ComponentQuery.query('myteam1')[0];
                    	formValues= forms.getValues();
                    	formmodel=Ext.create('ListApplication.model.PlayerModel',formValues);
                    	formerrors=formmodel.validate();
                    	if(formerrors.isValid())
                    	{
                    		formmodel.save();
                    		console.log("Saved");
                    	}
                    	else
                    	{
                    		console.log("Not Saved");
                    	}
					}
					
				}
					
			]},
			{
				xtype:'toolbar',
				docked:'bottom',

				items:[
				{
					xtype:'button',
					text:'view',
					centered:true,
					handler:function()
					{
						var myData=Ext.getStore('storename');
						myData.clearFilter();
						this.up('myteam1').push(Ext.create('ListApplication.view.MyTeam2',{
							title:'Player List'
						}));
					}
				}]
			}
			],

			
		}]
		

	}
}
);
