

var crypto = require('crypto');


exports.createSalt = function(){
    return crypto.randomBytes(128).toString('base64');

}

exports.hashPwd = function(salt, pwd){
    // HMAC : Hash Messgae Authentication Code
    // sha1 : Secure Hash Algorithm 1 on 160 bits
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}