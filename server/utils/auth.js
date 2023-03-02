const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    // function for our authenticated routes
    authMiddleWare: function ({ req }) {
        // this will allow token to be sent via req.query or headers
        let token = req.body.token || req.query.token || req.headers.authorizaiton;
        
        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorizaiton) {
            token = token.split(' ').pop().trim();
        }
        console.log('authmiddleware', token)
        if (!token) {
            return req;
        }
        
        // verify token and get user data out of it
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return the request object so it can be passed to the resolver as `context`
        return req;

    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};