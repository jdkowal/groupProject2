const User = require('./User');
const Coupon = require('./Coupon');

User.hasMany(Coupon, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Coupon.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});


module.exports = { User, Coupon };
