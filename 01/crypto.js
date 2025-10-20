// const { createHmac } = require('node:crypto')
// const secret = 'abcdefg'
// const hash = createHmac('sha256', secret)
//             .update('Crypto lwarning')
//             .digest('hex')
// console.log(hash);



// const crypto = require('crypto');
// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// // console.log("::::::KEY", key);
// const iv = crypto.randomBytes(16)
// // console.log(":::::::iv", iv);
// const text = 'Hello, Crypto!'
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let encrypted = cipher.update(text, 'utf8', 'hex')
// encrypted += cipher.final('hex')
// console.log('Encrypted:', encrypted);

// const decipher = crypto.createDecipheriv(algorithm, key, iv)
// let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8')
// console.log('Decrypted:', decrypted);



// const { generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');
// const { publicKey, privateKey } = generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// });

// const message = "Hello, RSA!";
// // Encrypt with public key
// const encrypted = publicEncrypt(publicKey, Buffer.from(message));
// console.log('Encrypted:', encrypted.toString('base64'));

// // Decrypt with private key
// const decrypted = privateDecrypt(privateKey, encrypted);
// console.log('Decrypted:', decrypted.toString());

// const crypto = require('crypto');
// const message = 'Hello, Hash!';
// const hash = crypto.createHash('sha256').update(message).digest('hex');
// console.log('SHA-256 Hash:', hash);


// const secret = 'mysecret';
// const data = 'Hello, HMAC!';
// const hmac = crypto.createHmac('sha256', secret).update(data).digest('hex');
// console.log('HMAC:', hmac);


