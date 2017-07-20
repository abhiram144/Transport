Ext.define('project.controller.libraryController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            register:'#registerbtn',
            view1:'elibrary'
            
        },
        control: {
            register:{
                tap:function(){
                    console.log("a");
                     nav=this.getView1();
                     registerpage=nav.getValues();
                     //console.log(loginpage.username);
                     modelobj=Ext.create('project.model.libraryModel',registerpage);
                     var errors=modelobj.validate();
                     if(errors.isValid())
                        {
                        Ext.Viewport.removeAll(false);
                        Ext.Viewport.add(Ext.create('project.view.selectbook'));
                        }
                        else
                        {
                             Ext.Msg.alert("Name cannot be null");
                            Ext.Msg.alert("contact is 10 digit");
                            Ext.Msg.alert("Address cannot be null");
                           

                            for(var i=0;i<errors.items.length;i++)
                            {

                                console.log(errors.items[i].getField()+" "+errors.items[i].getMessage());
                             }
                         }

                }
            }
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    
});
