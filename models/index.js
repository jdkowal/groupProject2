const User = require('./User');
const Medication = require('./Medication');
const Coupon = require('./Coupon');

User.hasMany(Coupon, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Coupon.belongsTo(User, {
    foreignKey: "medication_id",
    onDelete: "CASCADE"
});


module.exports = { User, Medication, Coupon };
