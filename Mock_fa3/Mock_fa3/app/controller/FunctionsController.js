Ext.define('Mock.controller.FunctionsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            sort : '#sort',
            add : '#add',
            filter : '#filter',
            buy : '#buy',
            view : 'availableproduct',
            logout : '#logout',
        },
        control: {
            sort : {
                tap : function(){
                    var data = Ext.getStore('UserStore');
                    data.sort([{property:'mrp',direction:'ASC'}]);
                }
            },
            filter : {
                tap : function(){
                    Ext.Msg.prompt ('Filter','Enter Manufacturer Name',function(btn,val){
                        if(btn=='ok'){
                            var myData=Ext.getStore('UserStore');
                            myData.clearFilter();
                            myData.filterPlayer.setScope({value1:val});       
                            myData.filter(myData.filterPlayer);
                        }
                        // else if(btn=='cancel'){
                        //     Ext.Msg.alert("No Manufacturer Found!");
                        // }
                    })
                }    
                
            },
            view : {
                select     : function( listview, record ){
                    obj2 = [];
                    if(localStorage.list){
                        obj2 = JSON.parse(localStorage.list);
                        obj2.push(record.raw);
                        localStorage.setItem("list",JSON.stringify(obj2));
                    }
                    else{
                        obj2.push(record.raw);
                        localStorage.setItem("list",JSON.stringify(obj2));
                    }
                }

                },

            add : {
                tap : function(){
                    local = JSON.parse(localStorage.list);
                    len = local.length;
                    btn1=this.getAdd();
                    btn1.setBadgeText(len);
                },
            },

            buy : {
                tap :function(){
                    Ext.Viewport.removeAll(false,true);
                    Ext.Viewport.add(Ext.create('Mock.view.BuyItems'));
                }
            },
            logout : {
                tap : function(){
                    Ext.Viewport.removeAll(false,true);
                    Ext.Viewport.add(Ext.create('Mock.view.Login'));
                }
            }
            }
        }    
   
});
