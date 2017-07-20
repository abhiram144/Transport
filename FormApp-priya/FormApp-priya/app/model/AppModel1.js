Ext.define('FormApp.model.AppModel1', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'username', type: 'String'},
            { name: 'password', type: 'auto'}],
        //],//close of fields
        idproperty:'username',
        identifier:'uuid',
        validations:
        [
        { field:'username', type:'presence', message:'user name is mandatory'},
        { field:'username', type:'inclusion',list:['admin']},

        {field:'password', type:'presence', message:'password is mandatory'},
        { field:'password', type:'inclusion',list:['admin']},
        ],// close of validations
        proxy:
                 {
                     type:'ajax',
                     reader:
                     {
                         type:'json'
                     }
                 },
                 
    }//close of config
});//close of define
