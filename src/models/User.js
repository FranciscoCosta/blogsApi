module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
    tableName: 'users',
    },
    {
        timestamps: false,
    });


    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'user_post' });
    };
    return User;
    }