Ext.define('project.model.libraryModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'name', type: 'String' },
            { name: 'contact', type: 'int' },
            { name: 'address', type: 'String' },            


        ],
        validations : [
			{field : 'name', type : 'presence',  message:'Name cannot be null'},
			{ field : 'contact', type : 'length'    , max : 10,message:'number should be length 10' },
            {field : 'address', type : 'presence', message:'adrress cannot be null' },

        ]
    }
});
