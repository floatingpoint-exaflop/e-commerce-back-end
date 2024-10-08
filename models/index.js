const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
})


// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: {
      model: ProductTag,
      unique: false
  }, as: 'products_tags'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: {
      model: ProductTag,
      unique: false
  }, as: 'tags_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
