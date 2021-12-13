Ext.define('Frontend.store.UserRequest', {
    extend: 'Ext.data.Store',

    alias: 'store.userRequest',

    model: 'Frontend.model.UserRequest',

    autoload: true,

    proxy: {
        type: 'rest',
        url: 'https://localhost:44362/api/userrequests',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
