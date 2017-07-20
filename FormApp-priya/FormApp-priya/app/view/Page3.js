Ext.define( 'FormApp.view.Page3', {
	extend	: 'Ext.form.Panel',
	requires: ['Ext.MessageBox'],
	xtype	: 'myform2',
	
	config	: {
		scrollable	: true,
		items		: [
			{
				xtype:'button',
				ui:'confirm',
				id:'btn3',
				width:'25%',
				text:'logout',
				align:'right'

			},// close of title page
			{
				xtype:'panel',
				styleHtmlContent:true,
				margin:10,
				tpl:new Ext.XTemplate(
					'<h1><center>Show details</center></h1>',
					'<hr/>',
					'<p> Name: {userdetails.name}</p><br/>',
					'<p> Email: {userdetails.email}</p><br/>',
					'<p> Phone Number: {userdetails.phno}</p><br/>',
					'<p> Gender: {userdetails.gender}</p><br/>',
					'<p> Salary: {userdetails.slider}</p><br/>',

					'<p> confirm: {userdetails.confirm}</p><br/>',
					'<hr/>'
					),//clos eof tpl
				listeners:{
					initialize:function(){
						this.getTpl().overwrite(this.element,{
							userdetails:JSON.parse(localStorage.getItem('myDetails')),
						});

					}
				}
			}

			]// close of item
	}// clsoe of config
}//close of properties
);// cloae of defn