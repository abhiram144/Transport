Ext.define('Mock.controller.ProductsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            pick : '#pick',

        },
        control: {
            pick : {

                change : function(picker, values, slot){  
                        var date1 = new Date(Ext.Date.now());
                        today = date1.toDateString();
                        obj1 ={};
                        obj1.name = values.productname;
                        obj1.manufacturer = values.manufact;
                        obj1.qty = values.quantity; 
                        obj1.date = today;
                        id1 = ++counter;
                        obj1.id = id1;
                        console.log(obj1);
                        orderObj = Ext.create('Mock.model.OrderedProductsModel',obj1);
                        var errors = orderObj.validate();
                            if(errors.isValid()){
                                orderObj.save();
                                Ext.getStore('OrderStore').load();
                            }
                    else{
                        console.log("error");
                    }
                },
                hide : function(){
                    Ext.ComponentQuery.query('picktype')[0].show();
                }
            },
        }
    },
    
    //called when the Application is launched, remove if not needed
    // launch: function(app) {
        
    // }
});
