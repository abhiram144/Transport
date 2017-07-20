Ext.define('ListApplication.model.PlayerModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'Name', type: 'String' },
            { name: 'Score', type: 'int' },
            { name: 'Wickets', type: 'int' },
            { name: 'typeofplayer', type: 'String' }

        ],
        validation:
        [
	        {field:'Name',type:'presence',message:'Name Compulsary'},
	        {field:'Score',type:'presence',message:'Score Compulsary'},
	        {field:'Wickets',type:'presence',message:'Wickets Compulsary'},
	        {field:'typeofplayer',type:'inclusion',list:['Wickets','Bowler','BatsMan','Type Of Player']},

        ],
        proxy:
                {
                    type:'localstorage',
                    reader:
                    {
                        type:'json'
                    }
                }
    }
});
