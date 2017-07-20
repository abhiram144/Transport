Ext.define( 'FormApp.view.Page1', {
	extend	: 'Ext.form.Panel',
	requires: ['Ext.TitleBar'],
	xtype	: 'myform',
	
	config	: {
		scrollable	: true,
		items		: [
			{
				xtype	: 'titlebar',
				title	: 'Emp Manager',
			},
			{
				xtype:'fieldset',
				items:[
				{
					xtype:'textfield',
					name:'username',
					placeHolder:'User Name',
					required:true,
					label:'Username',
					listeners :{
					change : function(){
						userval=this.getValue();
						console.log(userval);
					}
				}//close of listener
					

				},
				{
					xtype:'passwordfield',
					name:'password',
					placeHolder:'Passsword',
					required:true,
					label:'Password',
					listeners :{
					change : function(){
						passval=this.getValue();
						console.log(passval);
					}
				}//close of listener
					
				},
				{
					xtype:'button',
					ui:'confirm',
					id:'btn1',
					width:'25%',
					text:'login'
				}
				]//close of inner view

			}]//clsoe of outer view
	}//close of config

}//close of proerites
);//close of define