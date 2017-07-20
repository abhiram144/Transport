Ext.define('FormApp.model.AppModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'name', type: 'String' },
            {name:'email',type:'auto'},
            //{ name: 'phno', type: 'int' },
            { name: 'gender', type: 'String' },
            { name: 'slider', type: 'int',defaultValue:'15000'},
            { name: 'confirm', type: 'auto' }

        ],//close of fields
        idProperty:'email',
        identifier:'uuid',
        validations:[
        { field:'name',type:'presence',message:'Name is mandatory'},
        {field:'name',type:'length', max:15,message:'length exceded'},
        {field:'name',type:'format',matcher:/[a-zA-Z]+/},

        { field:'email',type:'presence',message:'Email is mandatory'},
        {field:'email',type:'format',matcher:/^[a-zA-Z][a-zA-Z0-9]+@[a-z]+.[a-z]+/},
        
        //{field:'phno',type:'presence', message:'Phone number is mandatory'},
        //{field:'phno',type:'format',matcher:/\d{10}/},
        //{field:'phno',type:'length', max:10,min:10, message:'length should be 10'},

        {field:'gender', type:'presence', message:'Gender is mandatory'},
        
        //{field:'slider', type:'presence', message:'Salary is mandatory'},
        {field:'confirm', type:'presence', message:'Confirm is mandatory'},
        ],
        proxy:{
            type:'ajax',
            reader:{
                type:'json'
            }
        }//close of proxy

    }// close of configs
});//close of define
