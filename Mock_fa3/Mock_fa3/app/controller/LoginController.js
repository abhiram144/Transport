Ext.define('Mock.controller.LoginController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            view1 : 'loginview',
            loginbtn : '#login',
        },
        control: {
            loginbtn : {
                tap : function(){
                    logForm = this.getView1();
                    logValues = logForm.getValues();
                    loginObj = Ext.create('Mock.model.LoginModel',logValues);
                    var errors = loginObj.validate();
                    if(errors.isValid()){
                        var user1 = Ext.ComponentQuery.query('#uname')[0].getValue();
                        if(user1=='SMgr')
                        {
                            logForm.push(Ext.create('Mock.view.StockManagerView',{title : 'StockManager'}));
                        }
                        else if(user1=='User'){
                           Ext.Viewport.removeAll(false,true);
                           Ext.Viewport.add(Ext.create('Mock.view.UserView'));
                        }
                    }
                    else{
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
    // launch: function(app) {
        
    // }
});
