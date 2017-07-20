Ext.define( 'FormApp.view.Page2', {
	extend	: 'Ext.NavigationView',
	requires: ['Ext.MessageBox','Ext.Button','Ext.TitleBar','Ext.form.Panel'],
	xtype	: 'myform1',
	
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
					label:'name',
					xtype:'textfield',
					name:'name',
					placeHolder:'Name',
					required:true,
					labelAlign:'left'

				},
				{
					label:'Email',
					xtype		: 'emailfield',
				    name		: 'email',
				    placeHolder:'email',
				    required	: true,
				    labelAlign:'left'

				},
				{
					label:'phnumber',
					xtype		: 'numberfield',
				    name		: 'phno',
				    placeHolder	:'phno',
				    required	: true,
				    labelAlign:'left'
				},
				{
    				xtype:'fieldset',
   					title:'Gender',
   					 defaults:{
    					xtype:'radiofield',
    					labelWidth:'75%',
    					labelWrap:true,
    					name:'gender'
    				},
    				items:[{
    					label:'Male',
    					value:'male',
     					listeners:{
     						change:function(obj,newValue,oldValue,eOpts){
     							if(newValue){
     								console.log("Gender",obj.getValue());
     							}
     						}
     					}
   					},
   					{				
     					label:'Female',
    					value:'female',
     					listeners:{
     						change:function(obj,newValue,oldValue,eOpts){
     							if(newValue){
     								console.log("Gender",obj.getValue());
     							}
     						}
     					}
  					}]
   				},// close of gender
				{
						xtype:'sliderfield',
						label:'Salary',
						name:'slider',
						required:'true',
						Value:1600,
						
						minValue:10000,
						maxValue:50000,
						increment:1000,

						listeners:{
							change:function(me,sl,thumb,newValue,oldValue,eOpts){
								salval=this.getValue();
								console.log("Salary",salval);
								
							}
						}

				},//close of slider
				{
					xtype:'togglefield',
					name:'confirm',
					required:'true',
					label:'confirm',
					labelAlign:'left',
					
				},
				{
					xtype:'button',
					ui:'confirm',
					id:'btn2',
					width:'25%',
					text:'add',
					
				}//close of button item
				
				]// close of inner item

			}
		]//close of  outeritems
	}//close of config
}//close of prop
);//close of define