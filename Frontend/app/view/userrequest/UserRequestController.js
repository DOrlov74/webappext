Ext.define('Frontend.view.userrequest.UserRequestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userRequest_controller',
    requires: [
    ],
    init: function() {
        var me = this;
        store = me.getStore('userrequests');
        store.load();
    },
    onAdd: function(button, e, options){
        this.createDialog(null);
    },
    onEdit: function(button, e, options){
        var me = this,
            records = me.getRecordsSelected();

        if(records[0]){
            me.createDialog(records[0]);
        } else {
            Ext.Msg.show({
                title:'Error!',
                msg: 'Please select a record first',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }
    },  

    createDialog: function(record){
        var me = this,
            view = me.getView();
            viewmod = view.getViewModel();      
        me.dialog = view.add({
            xtype: 'userrequest_form',
            viewModel: {
                data: {
                    title: record ? 'Edit: ' + record.get('name') : 'Add User Request',
                },
            }
        });
        if (record) {
            viewmod.linkTo('currentUserRequest', {
                reference: 'Frontend.model.UserRequest',
                id: record.id
            })
        } else {
            store = me.getStore('userrequests');
            newDate=new Date();
            var maxId = 1;
            if (store.getCount() > 0)
            {       
                maxId = store.getAt(0).get('id'); // initialise to the first record's id value.   
                store.each(function(rec) // go through all the records
                {
                    maxId = Math.max(maxId, rec.get('id'))+1;
                });
            }
            viewmod.linkTo('currentUserRequest', Ext.create('Frontend.model.UserRequest',{'id': maxId, 'date': newDate}));
        }

        me.dialog.show();
    },
    getRecordsSelected: function(){
        var grid = this.lookupReference('userRequestGrid');
        return grid.getSelection();
    },
    onDelete: function(button, e, options){
        var me = this,
            view = me.getView(),
            records = me.getRecordsSelected(),
            store = me.getStore('userrequests');

        if (store.getCount() >= 1 && records.length){
            Ext.Msg.show({
                title:'Delete?',
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (buttonId){
                    if (buttonId == 'yes'){
                        store.remove(records);
                        store.sync();
                        Ext.toast({
                            html: "Successfully delete User Request ",
                            closable: false,
                            align: 't',
                            slideInDuration: 400,
                            minWidth: 400
                        });
                    }
                }
            });
        }
    },
    onSave: function(button, e, options){
        var me = this,
            form = me.lookupReference('form');
        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: '/api/userrequests',
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure',
                headers: { 'Content-Type': 'application/json' },
                jsonData: form.getValues()
            });
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.');
        }
    },
    onSaveSuccess: function(form, action){
        var data = Ext.decode(action.response.responseText);
        var me = this;
        me.onCancel();
        me.refresh();
        Ext.toast({
                html: "Success: " + data.msg,
                closable: false,
                align: 't',
                slideInDuration: 400,
                minWidth: 400
            });
    },
    onSaveFailure: function(form, action){
        var data = Ext.decode(action.response.responseText);
        Ext.Msg.show({
                title:'Error!',
                msg: data.msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
    },
    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },
    refresh: function(button, e, options){
        var me = this,
            store = me.getStore('userrequests');

        store.load();
    }
})