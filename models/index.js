const User = require('./User');
const Medication = require('./Medication');
const Coupon = require('./Coupon');

Medication.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
}); 

User.hasMany(Medication, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Coupon.belongsTo(Medication, {
    foreignKey: "medication_id",
    onDelete: "CASCADE"
});

Medication.hasOne(Coupon, {
    foreignKey: "medication_id",
    onDelete: "CASCADE"
})


module.exports = { User, Medication, Coupon };
