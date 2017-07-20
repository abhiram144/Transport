Ext.define('FormApp.controller.MyController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            log:"#btn1",
            add:'#btn2',
            xname:'myform1',
            logout:'#btn3',
            form1:'myform'
        },// clsoe of refs
        control: {
            log:{
                tap:function(){
                        f1values=this.getForm1().getValues();
                        f1models=Ext.create('FormApp.model.AppModel1',f1values);
                        var errors1=f1models.validate();
                        if(errors1.isValid())
                     { 
                         Ext.Msg.alert("Login Successful");
                         this.redirectTo('pagetwo');
                    }//CLOSE OF IF 
                    else
                     {
                         for(var i=0;i<errors1.items.length;i++)
                         {
                             console.log(errors1.items[i].getField()+" "+errors1.items[i].getMessage());
                         }
                         Ext.Msg.alert("Enter Correct Details");
                     }//close of else 
                    
                }//close of tap
            },//close of log
            add:{
                tap:function(){
                    
                    var formval=this.getXname().getValues();
                    formModel=Ext.create('FormApp.model.AppModel',formval)
                    
                    var errors=formModel.validate();
                    console.log(errors);
                    console.log(errors.isValid());
                     if(errors.isValid())
                     { 
                    localStorage.setItem("myDetails",JSON.stringify(formval));
                    this.redirectTo('pagethree');
                }//close of if 
                else
                     {
                         for(var i=0;i<errors.items.length;i++)
                         {
                             console.log(errors.items[i].getField()+" "+errors.items[i].getMessage());
                         }
                         Ext.Msg.alert("Enter Correct Details");
                     }
                }//close of tap
            },// close of add
            logout:{
                tap:function(){
                    //Ext.Viewport.removeAll('false');
                    //Ext.Viewport.add(Ext.create('FormApp.view.Page1'));
                    this.redirectTo('pageone');
                }//tap
            }//logout
        },// close of control
    routes:{
        pagetwo:'moveToTwo',
        pagethree:'moveToThree',
        pageone:'moveToOne'
        
    }
    },//close of config
    moveToTwo:function(){
        console.log("hi");
        Ext.Viewport.removeAll(false);
        Ext.Viewport.add(Ext.create('FormApp.view.Page2'));

    },
    moveToThree:function(){
        console.log("hi");
       // Ext.Viewport.removeAll('false');
        //Ext.Viewport.add(Ext.create('FormApp.view.Page3'));
        this.getXname().push(Ext.create('FormApp.view.Page3',{title:'Emp Manager'}));
    },
    moveToOne:function(){
        Ext.Viewport.removeAll(false,false);
        Ext.Viewport.add(Ext.create('FormApp.view.Page1'));
        window.location.href="";
    }
}// close of prop
);//close of defn
