Ext.define('Frontend.view.userrequest.UserRequest', {
    extend: 'Ext.panel.Panel',
    xtype: 'userRequest',
    requires: [
        'Frontend.view.userrequest.UserRequestGrid',
        'Frontend.view.userrequest.UserRequestModel',
        'Frontend.view.userrequest.UserRequestController'
    ],
    controller: 'userRequest_controller',
    viewModel: {
        type: 'userRequest_model'
    },
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'userrequest-grid',
            flex: 1
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    listeners: {
                        click: 'onAdd'
                    } 
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    listeners: {
                        click: 'onEdit'
                    }, 
                    bind: {
                        disabled: '{!userRrequestGrid.selection}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    listeners: {
                        click: 'onDelete'
                    }, 
                    bind: {
                        disabled: '{!userRrequestGrid.selection}'
                    } 
                },
            ]
        }
    ]
})