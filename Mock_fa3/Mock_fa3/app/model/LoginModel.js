Ext.define('Mock.model.LoginModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'username', type: 'String' },
            { name: 'password', type: 'auto' }
        ],
        validations : [
        	{field : 'username', type : 'presence', type : 'inclusion', list : ['User','SMgr'], message : 'Enter Valid Username'},
        	{field : 'password', type : 'presence', type : 'inclusion', list : ['stock@123'], message: 'Enter Valid Password'}
        
        ],
        idProperty:'username',
        identifier:'uuid'
    }
});
