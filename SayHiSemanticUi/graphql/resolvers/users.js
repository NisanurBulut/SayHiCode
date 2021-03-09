const User = require('../../models/User');

module.exports = {
    Mutation: {
        register(parent, args, context, info){
             // TODO: Validate user data
             // TODO: Make sure user doesnt already exist
             // TODO: hash password and create an auth token
        }
    }
}