Ext.define('Frontend.model.UserRequest', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'date', type: 'date', defaultValue: new Date(),}, 
        {name: 'name', type: 'string'},
        {name: 'organization', type: 'string'},
        {name: 'role', type: 'string'},
        {name: 'email', type: 'string'}
    ],
    validators: {
        Name: {type: 'presence', message: 'This field is mandatory'},
        Organization: {type: 'presence', message: 'This field is mandatory'},    
        Role: {type: 'presence', message: 'This field is mandatory'},    
        Email: [
            {type: 'presence', message: 'This field is mandatory'},
            {
                type: 'format',
                matcher: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                message: 'Wrong Email Format'
            },
        ]    
    },
    proxy: {
        type: 'rest',
        url: 'https://localhost:44362/api/userrequests',
        appendId: true,
        pageParam: '',
        sortParam: '',
        limitParam: '',
        startParam: '',
        noCache: false,
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    },
});