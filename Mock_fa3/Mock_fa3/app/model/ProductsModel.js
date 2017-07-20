Ext.define('Mock.model.ProductsModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'String' },
            { name: 'manufacturer', type: 'String' },
            { name: 'cp', type: 'int' },
            { name: 'mrp', type: 'int' },
            { name: 'qty', type: 'int' }

        ],
        idProperty  : 'id',
        identifier  : 'uuid',
        proxy   : {
            type    : 'ajax',
            url     : 'data/products.json',
            reader  : {
                type        : "json",
                rootProperty: "products"
            }
        }
    }

});
