Ext.define('Frontend.view.userrequest.UserRequestForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.userrequest_form',
    height: 420,
    width: 600,

    requires: [
        'Frontend.view.userrequest.UserRequestController'
    ],

    layout: {
        type: 'fit'
    },

    bind: {
        title: '{title}'
    },
    closable: false,
    modal: true,
    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 5,
        modelValidation: true,
        //set jsonsubmit to true for CUD operation using form.Submit()
        jsonSubmit: true,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'fieldset',
                flex: 1,
                title: 'User Request Information',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    xtype: 'textfield',
                    msgTarget: 'side',
                    labelWidth: 75,
                    allowBlank: false,
                    validateOnChange: true
                },
                items: [
                    {
                        name: 'id',
                        fieldLabel: 'Id',
                        bind : '{currentUserRequest.id}',
                        readOnly: true,
                        // hidden: true
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Date',
                        name: 'date',
                        format: 'Y-m-j H:i:s',
                        bind : '{currentUserRequest.date}',
                        readOnly: true,
                        // hidden: true
                    },
                    {
                        fieldLabel: 'Name',
                        name: 'name',
                        bind : '{currentUserRequest.name}'
                    },
                    {
                        fieldLabel: 'Organization',
                        name: 'organization',
                        bind : '{currentUserRequest.organization}'
                    },
                    {
                        fieldLabel: 'Role',
                        name: 'role',
                        bind : '{currentUserRequest.role}'
                    },
                    {
                        fieldLabel: 'Email',
                        name: 'email',
                        vtype: 'email',
                        bind : '{currentUserRequest.email}'
                    }
                ]
            }
        ]
    }        
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
})