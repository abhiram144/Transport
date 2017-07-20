Ext.define('Mock.view.Login',{
	xtype : 'loginview',
	extend : 'Ext.NavigationView',
	mixins : ['Ext.form.Panel'],
	config : {
		items :[
			{	
				title : 'Apaquese Product Management',
			items : [
			{
				xtype : 'textfield',
				label : 'User Name',
				id : 'uname',
				name : 'username',
				required : 'true',
			},
			{
				xtype : 'passwordfield',
				label : 'Password',
				name : 'password',
				required : 'true',
			},
			{
				xtype : 'button',
				text : 'Login',
				ui : 'action',
				id : 'login',
			},
			]
		}]
	}

})