module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
    });
    
    Category.associate = (models) => {
        Category.hasMany(models.BlogPost, {
            foreignKey: 'categoryId',
            as: 'blogPosts',
        })
    }

    return Category;
}
