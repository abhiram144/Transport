Ext.define('Mock.model.OrderedProductsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name', type: 'String' },
            { name: 'manufacturer', type: 'String' },
            { name: 'qty', type: 'int' },
            { name: 'date', type: 'String'}

        ],
        validations : [
        	{field : 'qty', type : 'presence' }
        ],
        proxy:{
            type:'localstorage',
            reader:{
                type:'json'
            }
        },
        idProperty:'id',
        identifier:'uuid'
    }
});
