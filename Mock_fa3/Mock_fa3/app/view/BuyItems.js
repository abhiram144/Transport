Ext.define('Mock.view.BuyItems',{
	xtype : 'buyitems',
    extend : 'Ext.form.Panel',
    requires : ['Ext.TitleBar'],

    config : {
        scrollable : true, 
    items   : [
      {
        xtype : 'titlebar',
        title : 'Buy Items',
        
          items :[
          {
            xtype : 'button',
            text : 'Logout',
            id : 'logout',
            docked : 'left',
          }
          ]
      },
        
        {
        xtype :'panel',
        styleHtmlContent: true,
        margin: 100,
        tpl : new Ext.XTemplate(

        '<h2>Item Details</h2>',
        '<hr/>',
        '<tpl for="list">',
              '<span>Item No: {#}</span><br/>',
              '<span>Name: {name}<br/>',
              'Manufacturer: {manufacturer}</br>',
              'CP: {cp}<br/>',
              'MRP : {mrp}<br/>',
              'Quantity: {qty}<br/></span>',
              '<hr/>',
            '</tpl>'
         //'<p>Name     : {list.name}</p></br>', 
        //'<p>manufacturer    : {list.manufacturer}</p></br>',
        // '<p>cp : {list.cp}</p></br>',
        // '<p>mrp   : {list.mrp}</p></br>',
        // '<p>qty   : {list.qty}</p></br>',
        
        ),
    listeners:
       {
       initialize : function()
       {
           var addedUsers=JSON.parse(localStorage.list);
           console.log(addedUsers);
           this.getTpl().overwrite( this.element, {
           list : addedUsers
   });
  }
  }
}] ,

       
    }
});