import Author from "../../modules/author/model";
import Category from "../../modules/category/model";
import Film from "../../modules/films/model";

Film.belongsTo(Author, {
    foreignKey:"authorId"  ,
    as:"author"
});

Film.belongsTo(Category, {
    foreignKey:"categoryId" ,
    as:"category"
});

Author.hasMany(Film, {
  foreignKey:"authorId" ,
  as:"film"
});

Category.hasMany(Film, {
    foreignKey:"categoryId" ,
    as:"film"
});
