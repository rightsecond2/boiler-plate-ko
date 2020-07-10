const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//mongoose에서 가져온 메소드 //유저 모델에 유저 정보를 저장하기 전에 행동 ex) 암호화
userSchema.pre('save', function (next) {

    var user = this;
    //password가 변경될때만 암호화 해줌.
    if (user.isModified('password')) {
        //salt를 만듬
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash;
                next();
            });
        })
    }


});

const User = mongoose.model('User', userSchema);

module.exports = { User };