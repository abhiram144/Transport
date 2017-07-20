Ext.define('ListApplication.view.MyTeam3',{
	extend:'Ext.Panel',
	xtype:'myteam3',

	requires:['Ext.Button'],
	config:
	{
		scrollable:true,	
		items:[
			{
			xtype	:'panel',
		    styleHtmlContent: true,
		   	margin: 100,
		   	tpl	: new Ext.XTemplate(
		   		'<h2>Player Details</h2>',
		   		'<hr/>',
		   		'<p>Name     : {details.Name}</p></br>',
		   		'<p>Score    : {details.Score}</p></br>',
		   		'<p>Wickets : {details.Wickets}</p></br>',
		   		'<p>Type Of Player : {details.typeofplayer}</p></br>',
		   		'<hr/>'
		   		),
		   	listeners:
		   	{
		   		initialize	: function()
		   		 {
		   			var addedUsers=JSON.parse(localStorage.details);
		   			recentlyAdded=addedUsers[addedUsers.length - 1];
		   			this.getTpl().overwrite( this.element, {
		   			details	: recentlyAdded
		   			});
		   		}
		   	}
		}

		]
	}
});