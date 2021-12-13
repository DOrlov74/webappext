Ext.define('Frontend.view.userrequest.UserRequestModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userRequest_model',
    stores: {
        userrequests: {
            model: 'Frontend.model.UserRequest',
            
            autoLoad: true
        }
    }
})