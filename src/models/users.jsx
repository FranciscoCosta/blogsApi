module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        displayName: DataTypes.STRING,
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
        User.hasMany(models.Blogs, { foreignKey: 'userId', as: 'userPost' });
    };
    return User;
    }