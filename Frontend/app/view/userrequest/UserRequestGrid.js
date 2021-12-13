Ext.define('Frontend.view.userrequest.UserRequestGrid', {
    extend: 'Ext.grid.Panel',

    alias: 'widget.userrequest-grid',
    reference: 'userRequestGrid',

    bind: {
        store: '{userrequests}'
    },
    // selType: 'checkboxmodel',

    columns: [{
        text: 'Id',
        dataIndex: 'id',
        width: 50,
        filter: {
            type: 'numeric'
        } 
    },{
        text: 'Date',
        dataIndex: 'date',
        width: 220,
        xtype: 'datecolumn',
        format: 'Y-m-j H:i:s',
        filter: true 
    },{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        flex: 1,
        cell: {
            userCls: 'bold'
        },
        editor: {
            allowBlank: false
        },
        filter: {
            type: 'string'
        }
    }, {
        text: 'Organization',
        dataIndex: 'organization',
        width: 150,
        editor: {
            allowBlank: false
        },
        filter: {
            type: 'string'
        } 
    }, {
        text: 'Role',
        dataIndex: 'role',
        width: 150,
        editor: {
            allowBlank: false
        },
        filter: {
            type: 'string'
        } 
    }, { 
        text: 'Email',
        dataIndex: 'email',
        width: 230,
        editor: {
            allowBlank: false
        },
        filter: {
            type: 'string'
        } 
    }],
});