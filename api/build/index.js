/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/db/assocs.ts":
/*!*********************************!*\
  !*** ./src/config/db/assocs.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst model_1 = __importDefault(__webpack_require__(/*! ../../modules/author/model */ \"./src/modules/author/model.ts\"));\r\nconst model_2 = __importDefault(__webpack_require__(/*! ../../modules/category/model */ \"./src/modules/category/model.ts\"));\r\nconst model_3 = __importDefault(__webpack_require__(/*! ../../modules/films/model */ \"./src/modules/films/model.ts\"));\r\nmodel_3.default.belongsTo(model_1.default, {\r\n    foreignKey: \"authorId\",\r\n    as: \"author\"\r\n});\r\nmodel_3.default.belongsTo(model_2.default, {\r\n    foreignKey: \"categoryId\",\r\n    as: \"category\"\r\n});\r\nmodel_1.default.hasMany(model_3.default, {\r\n    foreignKey: \"authorId\",\r\n    as: \"film\"\r\n});\r\nmodel_2.default.hasMany(model_3.default, {\r\n    foreignKey: \"categoryId\",\r\n    as: \"film\"\r\n});\r\n\n\n//# sourceURL=webpack://api/./src/config/db/assocs.ts?");

/***/ }),

/***/ "./src/config/db/db.ts":
/*!*****************************!*\
  !*** ./src/config/db/db.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv_1.default.config();\r\nconst { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;\r\nconst sequelize = new sequelize_1.Sequelize(DB_NAME || \"database\", DB_USERNAME || \"root\", DB_PASSWORD || \"\", {\r\n    host: DB_HOST || \"localhost\",\r\n    dialect: \"mysql\" /* one of  | 'mariadb' | 'postgres' | 'mssql' */,\r\n});\r\nexports[\"default\"] = sequelize;\r\n\n\n//# sourceURL=webpack://api/./src/config/db/db.ts?");

/***/ }),

/***/ "./src/config/schema/index.ts":
/*!************************************!*\
  !*** ./src/config/schema/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst querys_1 = __importDefault(__webpack_require__(/*! ./querys */ \"./src/config/schema/querys.ts\"));\r\nconst mutations_1 = __importDefault(__webpack_require__(/*! ./mutations */ \"./src/config/schema/mutations.ts\"));\r\nconst schema = new graphql_1.GraphQLSchema({\r\n    query: querys_1.default,\r\n    mutation: mutations_1.default\r\n});\r\nexports[\"default\"] = schema;\r\n\n\n//# sourceURL=webpack://api/./src/config/schema/index.ts?");

/***/ }),

/***/ "./src/config/schema/mutations.ts":
/*!****************************************!*\
  !*** ./src/config/schema/mutations.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst user = __importStar(__webpack_require__(/*! ../../modules/users/mutation */ \"./src/modules/users/mutation.ts\"));\r\nconst film = __importStar(__webpack_require__(/*! ../../modules/films/mutation */ \"./src/modules/films/mutation.ts\"));\r\nconst author = __importStar(__webpack_require__(/*! ../../modules/author/mutation */ \"./src/modules/author/mutation.ts\"));\r\nconst category = __importStar(__webpack_require__(/*! ../../modules/category/mutation */ \"./src/modules/category/mutation.ts\"));\r\nconst mutation = new graphql_1.GraphQLObjectType({\r\n    name: \"mutations\",\r\n    fields: Object.assign(Object.assign(Object.assign(Object.assign({}, user), film), author), category),\r\n});\r\nexports[\"default\"] = mutation;\r\n\n\n//# sourceURL=webpack://api/./src/config/schema/mutations.ts?");

/***/ }),

/***/ "./src/config/schema/querys.ts":
/*!*************************************!*\
  !*** ./src/config/schema/querys.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst user = __importStar(__webpack_require__(/*! ../../modules/users/query */ \"./src/modules/users/query.ts\"));\r\nconst film = __importStar(__webpack_require__(/*! ../../modules/films/query */ \"./src/modules/films/query.ts\"));\r\nconst author = __importStar(__webpack_require__(/*! ../../modules/author/query */ \"./src/modules/author/query.ts\"));\r\nconst category = __importStar(__webpack_require__(/*! ../../modules/category/query */ \"./src/modules/category/query.ts\"));\r\nconst query = new graphql_1.GraphQLObjectType({\r\n    name: \"query\",\r\n    fields: Object.assign(Object.assign(Object.assign(Object.assign({}, user), film), author), category),\r\n});\r\nexports[\"default\"] = query;\r\n\n\n//# sourceURL=webpack://api/./src/config/schema/querys.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst db_1 = __importDefault(__webpack_require__(/*! ./config/db/db */ \"./src/config/db/db.ts\"));\r\nconst express_graphql_1 = __webpack_require__(/*! express-graphql */ \"express-graphql\");\r\nconst schema_1 = __importDefault(__webpack_require__(/*! ./config/schema */ \"./src/config/schema/index.ts\"));\r\nconst authentication_1 = __importDefault(__webpack_require__(/*! ./utils/authentication */ \"./src/utils/authentication.ts\"));\r\n__webpack_require__(/*! ./config/db/assocs */ \"./src/config/db/assocs.ts\");\r\nclass App {\r\n    constructor() {\r\n        this.app = (0, express_1.default)();\r\n        this.plugins();\r\n        this.connectDB();\r\n        this.GraphQL();\r\n    }\r\n    plugins() {\r\n        this.app.use((0, cors_1.default)());\r\n        this.app.use((0, helmet_1.default)({\r\n            contentSecurityPolicy:  false ? 0 : false,\r\n        }));\r\n        this.app.use(express_1.default.json());\r\n        this.app.use(express_1.default.static(path_1.default.join(__dirname, \"public\")));\r\n        dotenv_1.default.config();\r\n    }\r\n    connectDB() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield db_1.default.sync({ alter: true });\r\n        });\r\n    }\r\n    GraphQL() {\r\n        this.app.use(\"/graphql\", (0, express_graphql_1.graphqlHTTP)((request) => __awaiter(this, void 0, void 0, function* () {\r\n            return ({\r\n                schema: schema_1.default,\r\n                graphiql: true,\r\n                context: {\r\n                    auth: authentication_1.default.decodeToken(request.headers.authorization || \"token\"),\r\n                }\r\n            });\r\n        })));\r\n    }\r\n}\r\nconst app = new App().app;\r\napp.listen(5000, () => {\r\n    console.log(\"success\");\r\n});\r\n\n\n//# sourceURL=webpack://api/./src/index.ts?");

/***/ }),

/***/ "./src/modules/author/model.ts":
/*!*************************************!*\
  !*** ./src/modules/author/model.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst db_1 = __importDefault(__webpack_require__(/*! ../../config/db/db */ \"./src/config/db/db.ts\"));\r\nclass Author extends sequelize_1.Model {\r\n}\r\nAuthor.init({\r\n    id: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n        allowNull: false,\r\n    },\r\n    name: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    }\r\n}, { sequelize: db_1.default, tableName: \"Authors\" });\r\nexports[\"default\"] = Author;\r\n\n\n//# sourceURL=webpack://api/./src/modules/author/model.ts?");

/***/ }),

/***/ "./src/modules/author/mutation.ts":
/*!****************************************!*\
  !*** ./src/modules/author/mutation.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.authorDelete = exports.authorUpdate = exports.authorCreate = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst resolver_1 = __webpack_require__(/*! ./resolver */ \"./src/modules/author/resolver.ts\");\r\nconst authorCreate = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        name: { type: graphql_1.GraphQLString },\r\n    },\r\n    resolve: resolver_1.create,\r\n};\r\nexports.authorCreate = authorCreate;\r\nconst authorUpdate = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt },\r\n        name: { type: graphql_1.GraphQLString },\r\n    },\r\n    resolve: resolver_1.update,\r\n};\r\nexports.authorUpdate = authorUpdate;\r\nconst authorDelete = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt },\r\n    },\r\n    resolve: resolver_1.remove,\r\n};\r\nexports.authorDelete = authorDelete;\r\n\n\n//# sourceURL=webpack://api/./src/modules/author/mutation.ts?");

/***/ }),

/***/ "./src/modules/author/query.ts":
/*!*************************************!*\
  !*** ./src/modules/author/query.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.authorGets = exports.authorGet = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst resolver_1 = __webpack_require__(/*! ./resolver */ \"./src/modules/author/resolver.ts\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ./type */ \"./src/modules/author/type.ts\"));\r\nconst authorGet = {\r\n    type: type_1.default,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt },\r\n    },\r\n    resolve: resolver_1.get,\r\n};\r\nexports.authorGet = authorGet;\r\nconst authorGets = {\r\n    type: new graphql_1.GraphQLList(type_1.default),\r\n    resolve: resolver_1.gets,\r\n};\r\nexports.authorGets = authorGets;\r\n\n\n//# sourceURL=webpack://api/./src/modules/author/query.ts?");

/***/ }),

/***/ "./src/modules/author/resolver.ts":
/*!****************************************!*\
  !*** ./src/modules/author/resolver.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.remove = exports.update = exports.create = exports.gets = exports.get = void 0;\r\nconst model_1 = __importDefault(__webpack_require__(/*! ../films/model */ \"./src/modules/films/model.ts\"));\r\nconst model_2 = __importDefault(__webpack_require__(/*! ./model */ \"./src/modules/author/model.ts\"));\r\n//get author by id\r\nfunction get(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findOne({\r\n                where: { id: args.id },\r\n                include: { model: model_1.default, as: \"film\" }\r\n            });\r\n            if (result) {\r\n                return result;\r\n            }\r\n            else {\r\n                return \"Not found\";\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.get = get;\r\n//get author all\r\nfunction gets(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findAll({\r\n                include: { model: model_1.default, as: \"film\" }\r\n            });\r\n            if (result) {\r\n                return result;\r\n            }\r\n            else {\r\n                throw new Error(\"Not found\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.gets = gets;\r\n//create author\r\nfunction create(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.create(Object.assign({}, args));\r\n            if (result) {\r\n                return \"Create success\";\r\n            }\r\n            else {\r\n                throw new Error(\"Create fail\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.create = create;\r\n//update author\r\nfunction update(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findOne({\r\n                where: { id: args.id },\r\n            });\r\n            if (result) {\r\n                result.update(Object.assign({}, args));\r\n                result.save();\r\n                return \"Update success\";\r\n            }\r\n            else {\r\n                throw new Error(\"Update fail\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.update = update;\r\nfunction remove(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findOne({\r\n                where: { id: args.id },\r\n            });\r\n            if (result) {\r\n                result.destroy();\r\n                return \"Delete succes\";\r\n            }\r\n            else {\r\n                throw new Error(\"Delete fail\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.remove = remove;\r\n\n\n//# sourceURL=webpack://api/./src/modules/author/resolver.ts?");

/***/ }),

/***/ "./src/modules/author/type.ts":
/*!************************************!*\
  !*** ./src/modules/author/type.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ../films/type */ \"./src/modules/films/type.ts\"));\r\nconst TypeAuthor = new graphql_1.GraphQLObjectType({\r\n    name: \"author\",\r\n    fields: () => ({\r\n        id: { type: graphql_1.GraphQLInt },\r\n        name: { type: graphql_1.GraphQLString },\r\n        film: { type: new graphql_1.GraphQLList(type_1.default) },\r\n    }),\r\n});\r\nexports[\"default\"] = TypeAuthor;\r\n\n\n//# sourceURL=webpack://api/./src/modules/author/type.ts?");

/***/ }),

/***/ "./src/modules/category/model.ts":
/*!***************************************!*\
  !*** ./src/modules/category/model.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst db_1 = __importDefault(__webpack_require__(/*! ../../config/db/db */ \"./src/config/db/db.ts\"));\r\nclass Category extends sequelize_1.Model {\r\n}\r\nCategory.init({\r\n    id: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n        allowNull: false,\r\n    },\r\n    name: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    }\r\n}, {\r\n    sequelize: db_1.default, tableName: \"categorys\"\r\n});\r\nexports[\"default\"] = Category;\r\n\n\n//# sourceURL=webpack://api/./src/modules/category/model.ts?");

/***/ }),

/***/ "./src/modules/category/mutation.ts":
/*!******************************************!*\
  !*** ./src/modules/category/mutation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.categoryUpdate = exports.categoryDelete = exports.categoryCreate = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst resolver_1 = __webpack_require__(/*! ./resolver */ \"./src/modules/category/resolver.ts\");\r\nconst categoryCreate = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        name: { type: graphql_1.GraphQLString }\r\n    },\r\n    resolve: resolver_1.create\r\n};\r\nexports.categoryCreate = categoryCreate;\r\nconst categoryUpdate = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt },\r\n        name: { type: graphql_1.GraphQLString }\r\n    },\r\n    resolve: resolver_1.update\r\n};\r\nexports.categoryUpdate = categoryUpdate;\r\nconst categoryDelete = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt }\r\n    },\r\n    resolve: resolver_1.remove\r\n};\r\nexports.categoryDelete = categoryDelete;\r\n\n\n//# sourceURL=webpack://api/./src/modules/category/mutation.ts?");

/***/ }),

/***/ "./src/modules/category/query.ts":
/*!***************************************!*\
  !*** ./src/modules/category/query.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.categoryGets = exports.categoryGet = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst graphql_2 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst resolver_1 = __webpack_require__(/*! ./resolver */ \"./src/modules/category/resolver.ts\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ./type */ \"./src/modules/category/type.ts\"));\r\nconst categoryGet = {\r\n    type: type_1.default,\r\n    args: {\r\n        id: { type: graphql_2.GraphQLInt }\r\n    },\r\n    resolve: resolver_1.get\r\n};\r\nexports.categoryGet = categoryGet;\r\nconst categoryGets = {\r\n    type: new graphql_1.GraphQLList(type_1.default),\r\n    resolve: resolver_1.gets\r\n};\r\nexports.categoryGets = categoryGets;\r\n\n\n//# sourceURL=webpack://api/./src/modules/category/query.ts?");

/***/ }),

/***/ "./src/modules/category/resolver.ts":
/*!******************************************!*\
  !*** ./src/modules/category/resolver.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.remove = exports.create = exports.update = exports.gets = exports.get = void 0;\r\nconst model_1 = __importDefault(__webpack_require__(/*! ../films/model */ \"./src/modules/films/model.ts\"));\r\nconst model_2 = __importDefault(__webpack_require__(/*! ./model */ \"./src/modules/category/model.ts\"));\r\n//get by id\r\nfunction get(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findOne({\r\n                where: { id: args.id },\r\n                include: { model: model_1.default, as: \"film\" }\r\n            });\r\n            if (result) {\r\n                return result;\r\n            }\r\n            else {\r\n                throw new Error(\"Not found\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.get = get;\r\n//get all\r\nfunction gets(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findAll({\r\n                include: { model: model_1.default, as: \"film\" }\r\n            });\r\n            if (result) {\r\n                return result;\r\n            }\r\n            else {\r\n                throw new Error(\"Not found\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.gets = gets;\r\n//create category\r\nfunction create(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.create(Object.assign({}, args));\r\n            if (result) {\r\n                return \"Create success\";\r\n            }\r\n            else {\r\n                throw new Error(\"Create fail\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.create = create;\r\n//update category\r\nfunction update(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findOne({\r\n                where: { id: args.id },\r\n            });\r\n            if (result) {\r\n                result.update(Object.assign({}, args));\r\n                result.save();\r\n                return \"Update success\";\r\n            }\r\n            else {\r\n                throw new Error(\"Update fail\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.update = update;\r\n//delete\r\nfunction remove(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_2.default.findOne({\r\n                where: { id: args.id },\r\n            });\r\n            if (result) {\r\n                result.destroy();\r\n                return \"Delete success\";\r\n            }\r\n            else {\r\n                throw new Error(\"Delete fail\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            throw new Error(e);\r\n        }\r\n    });\r\n}\r\nexports.remove = remove;\r\n\n\n//# sourceURL=webpack://api/./src/modules/category/resolver.ts?");

/***/ }),

/***/ "./src/modules/category/type.ts":
/*!**************************************!*\
  !*** ./src/modules/category/type.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ../films/type */ \"./src/modules/films/type.ts\"));\r\nconst TypeCategory = new graphql_1.GraphQLObjectType({\r\n    name: \"category\",\r\n    fields: () => ({\r\n        id: { type: graphql_1.GraphQLInt },\r\n        name: { type: graphql_1.GraphQLString },\r\n        film: { type: new graphql_1.GraphQLList(type_1.default) }\r\n    })\r\n});\r\nexports[\"default\"] = TypeCategory;\r\n\n\n//# sourceURL=webpack://api/./src/modules/category/type.ts?");

/***/ }),

/***/ "./src/modules/films/model.ts":
/*!************************************!*\
  !*** ./src/modules/films/model.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst db_1 = __importDefault(__webpack_require__(/*! ../../config/db/db */ \"./src/config/db/db.ts\"));\r\nclass Film extends sequelize_1.Model {\r\n}\r\nFilm.init({\r\n    id: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n        allowNull: false,\r\n    },\r\n    name: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    categoryId: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        //   allowNull: false,\r\n    },\r\n    description: {\r\n        type: sequelize_1.DataTypes.TEXT,\r\n        allowNull: false,\r\n    },\r\n    publicYear: {\r\n        type: sequelize_1.DataTypes.INTEGER,\r\n        allowNull: false,\r\n    },\r\n    authorId: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        //   allowNull: false,\r\n    },\r\n}, { sequelize: db_1.default, tableName: \"films\" });\r\nexports[\"default\"] = Film;\r\n\n\n//# sourceURL=webpack://api/./src/modules/films/model.ts?");

/***/ }),

/***/ "./src/modules/films/mutation.ts":
/*!***************************************!*\
  !*** ./src/modules/films/mutation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.filmRemove = exports.filmUpdate = exports.filmCreate = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst reslover_1 = __webpack_require__(/*! ./reslover */ \"./src/modules/films/reslover.ts\");\r\nexports.filmCreate = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        name: { type: graphql_1.GraphQLString },\r\n        categoryId: { type: graphql_1.GraphQLInt },\r\n        description: { type: graphql_1.GraphQLString },\r\n        publicYear: { type: graphql_1.GraphQLInt },\r\n        authorId: { type: graphql_1.GraphQLInt }\r\n    },\r\n    resolve: reslover_1.Create\r\n};\r\nexports.filmUpdate = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt },\r\n        name: { type: graphql_1.GraphQLString },\r\n        categoryId: { type: graphql_1.GraphQLInt },\r\n        description: { type: graphql_1.GraphQLString },\r\n        publicYear: { type: graphql_1.GraphQLInt },\r\n        authorId: { type: graphql_1.GraphQLInt }\r\n    },\r\n    resolve: reslover_1.Update\r\n};\r\nexports.filmRemove = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt },\r\n    },\r\n    resolve: reslover_1.Remove\r\n};\r\n\n\n//# sourceURL=webpack://api/./src/modules/films/mutation.ts?");

/***/ }),

/***/ "./src/modules/films/query.ts":
/*!************************************!*\
  !*** ./src/modules/films/query.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.filmGetAll = exports.filmGet = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst reslover_1 = __webpack_require__(/*! ./reslover */ \"./src/modules/films/reslover.ts\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ./type */ \"./src/modules/films/type.ts\"));\r\nexports.filmGet = {\r\n    type: type_1.default,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt }\r\n    },\r\n    resolve: reslover_1.Get\r\n};\r\nexports.filmGetAll = {\r\n    type: new graphql_1.GraphQLList(type_1.default),\r\n    resolve: reslover_1.GetAll\r\n};\r\n\n\n//# sourceURL=webpack://api/./src/modules/films/query.ts?");

/***/ }),

/***/ "./src/modules/films/reslover.ts":
/*!***************************************!*\
  !*** ./src/modules/films/reslover.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Remove = exports.Update = exports.Create = exports.Get = exports.GetAll = void 0;\r\nconst model_1 = __importDefault(__webpack_require__(/*! ../author/model */ \"./src/modules/author/model.ts\"));\r\nconst model_2 = __importDefault(__webpack_require__(/*! ../category/model */ \"./src/modules/category/model.ts\"));\r\nconst model_3 = __importDefault(__webpack_require__(/*! ./model */ \"./src/modules/films/model.ts\"));\r\nfunction GetAll(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_3.default.findAll({\r\n                include: [\r\n                    { model: model_1.default, through: { attributes: [] } },\r\n                    { model: model_2.default, through: { attributes: [] } }\r\n                ]\r\n            });\r\n            return result;\r\n        }\r\n        catch (e) {\r\n            return e;\r\n        }\r\n    });\r\n}\r\nexports.GetAll = GetAll;\r\nfunction Get(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_3.default.findOne({\r\n                where: {\r\n                    id: args.id,\r\n                },\r\n                include: [\r\n                    { model: model_1.default, as: \"author\" },\r\n                    { model: model_2.default, as: \"category\" }\r\n                ]\r\n            });\r\n            return result;\r\n        }\r\n        catch (e) {\r\n            return e;\r\n        }\r\n    });\r\n}\r\nexports.Get = Get;\r\nfunction Create(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_3.default.create(Object.assign({}, args));\r\n            return \"Create success\";\r\n        }\r\n        catch (e) {\r\n            return e;\r\n        }\r\n    });\r\n}\r\nexports.Create = Create;\r\nfunction Update(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_3.default.findOne({\r\n                where: { id: args.id },\r\n            });\r\n            if (result) {\r\n                result.update(Object.assign({}, args));\r\n                result.save();\r\n                return \"Update success\";\r\n            }\r\n            else {\r\n                throw new Error(\"Update Fail!\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            return e;\r\n        }\r\n    });\r\n}\r\nexports.Update = Update;\r\nfunction Remove(parent, args, context) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const result = yield model_3.default.findOne({ where: { id: args.id } });\r\n            if (result) {\r\n                result.destroy();\r\n                return \"Remove success!\";\r\n            }\r\n            else {\r\n                throw new Error(\"Not found\");\r\n            }\r\n        }\r\n        catch (e) {\r\n            return e;\r\n        }\r\n    });\r\n}\r\nexports.Remove = Remove;\r\n\n\n//# sourceURL=webpack://api/./src/modules/films/reslover.ts?");

/***/ }),

/***/ "./src/modules/films/type.ts":
/*!***********************************!*\
  !*** ./src/modules/films/type.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ../author/type */ \"./src/modules/author/type.ts\"));\r\nconst type_2 = __importDefault(__webpack_require__(/*! ../category/type */ \"./src/modules/category/type.ts\"));\r\nconst TypeFilm = new graphql_1.GraphQLObjectType({\r\n    name: \"film\",\r\n    fields: () => ({\r\n        id: { type: graphql_1.GraphQLInt },\r\n        name: { type: graphql_1.GraphQLString },\r\n        category: { type: type_2.default },\r\n        description: { type: graphql_1.GraphQLString },\r\n        publicYear: { type: graphql_1.GraphQLInt },\r\n        author: { type: type_1.default }\r\n    })\r\n});\r\nexports[\"default\"] = TypeFilm;\r\n\n\n//# sourceURL=webpack://api/./src/modules/films/type.ts?");

/***/ }),

/***/ "./src/modules/users/model.ts":
/*!************************************!*\
  !*** ./src/modules/users/model.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nconst db_1 = __importDefault(__webpack_require__(/*! ../../config/db/db */ \"./src/config/db/db.ts\"));\r\nclass User extends sequelize_1.Model {\r\n}\r\nUser.init({\r\n    id: {\r\n        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,\r\n        autoIncrement: true,\r\n        primaryKey: true,\r\n        allowNull: false,\r\n    },\r\n    username: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    password: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    avatar: {\r\n        type: sequelize_1.DataTypes.STRING,\r\n        allowNull: false\r\n    }\r\n}, {\r\n    sequelize: db_1.default,\r\n    tableName: 'users'\r\n});\r\nexports[\"default\"] = User;\r\n\n\n//# sourceURL=webpack://api/./src/modules/users/model.ts?");

/***/ }),

/***/ "./src/modules/users/mutation.ts":
/*!***************************************!*\
  !*** ./src/modules/users/mutation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.logout = exports.signin = exports.signup = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst reslovers_1 = __webpack_require__(/*! ./reslovers */ \"./src/modules/users/reslovers.ts\");\r\nexports.signup = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        username: {\r\n            name: \"username\",\r\n            type: graphql_1.GraphQLString,\r\n        },\r\n        password: {\r\n            name: \"password\",\r\n            type: graphql_1.GraphQLString,\r\n        }\r\n    },\r\n    resolve: reslovers_1.create,\r\n};\r\nexports.signin = {\r\n    type: graphql_1.GraphQLString,\r\n    args: {\r\n        username: {\r\n            name: \"username\",\r\n            type: graphql_1.GraphQLString\r\n        },\r\n        password: {\r\n            name: \"password\",\r\n            type: graphql_1.GraphQLString,\r\n        }\r\n    },\r\n    resolve: reslovers_1.login\r\n};\r\nexports.logout = {\r\n    type: graphql_1.GraphQLString,\r\n    resolve: reslovers_1.logoutUser\r\n};\r\n\n\n//# sourceURL=webpack://api/./src/modules/users/mutation.ts?");

/***/ }),

/***/ "./src/modules/users/query.ts":
/*!************************************!*\
  !*** ./src/modules/users/query.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getById = void 0;\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst reslovers_1 = __webpack_require__(/*! ./reslovers */ \"./src/modules/users/reslovers.ts\");\r\nconst type_1 = __importDefault(__webpack_require__(/*! ./type */ \"./src/modules/users/type.ts\"));\r\nexports.getById = {\r\n    type: type_1.default,\r\n    args: {\r\n        id: { type: graphql_1.GraphQLInt }\r\n    },\r\n    resolve: reslovers_1.show\r\n};\r\n\n\n//# sourceURL=webpack://api/./src/modules/users/query.ts?");

/***/ }),

/***/ "./src/modules/users/reslovers.ts":
/*!****************************************!*\
  !*** ./src/modules/users/reslovers.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.logoutUser = exports.login = exports.create = exports.show = void 0;\r\nconst authentication_1 = __importDefault(__webpack_require__(/*! ../../utils/authentication */ \"./src/utils/authentication.ts\"));\r\nconst hasPassword_1 = __importDefault(__webpack_require__(/*! ../../utils/hasPassword */ \"./src/utils/hasPassword.ts\"));\r\nconst model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/modules/users/model.ts\"));\r\n//get by id\r\nfunction show(parentValue, agrs, req) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        console.log(req);\r\n        const result = yield model_1.default.findOne({\r\n            where: { id: agrs.id },\r\n        });\r\n        if (!result) {\r\n            throw new Error(\"Not found user!\");\r\n        }\r\n        else {\r\n            return result;\r\n        }\r\n    });\r\n}\r\nexports.show = show;\r\n//create\r\nfunction create(parentValue, agrs) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const { username, password } = agrs;\r\n        const hash = hasPassword_1.default.hashPassword(password);\r\n        const result = yield model_1.default.create({\r\n            username,\r\n            password: hash,\r\n            avatar: `/avatar/${Math.round(Math.random() * 10)}.png`,\r\n        });\r\n        if (!result) {\r\n            throw new Error(\"Not create user!\");\r\n        }\r\n        else {\r\n            return authentication_1.default.signToken(result.username);\r\n        }\r\n    });\r\n}\r\nexports.create = create;\r\n//signin\r\nfunction login(parentValue, agrs) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const { username, password } = agrs;\r\n        const result = yield model_1.default.findOne({\r\n            where: {\r\n                username,\r\n            },\r\n        });\r\n        if (!result) {\r\n            throw new Error(\"Not found!\");\r\n        }\r\n        const compare = hasPassword_1.default.comparePassword(password, result.password);\r\n        if (!compare) {\r\n            throw new Error(\"Incorrect password!\");\r\n        }\r\n        return authentication_1.default.signToken(result.username);\r\n    });\r\n}\r\nexports.login = login;\r\n//logout\r\nfunction logoutUser(parentValue, agrs) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        authentication_1.default.logoutToken();\r\n        return \"Logout success!\";\r\n    });\r\n}\r\nexports.logoutUser = logoutUser;\r\n\n\n//# sourceURL=webpack://api/./src/modules/users/reslovers.ts?");

/***/ }),

/***/ "./src/modules/users/type.ts":
/*!***********************************!*\
  !*** ./src/modules/users/type.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst TypeUser = new graphql_1.GraphQLObjectType({\r\n    name: \"user\",\r\n    fields: () => ({\r\n        id: { type: graphql_1.GraphQLInt },\r\n        username: { type: graphql_1.GraphQLString },\r\n        password: { type: graphql_1.GraphQLString },\r\n        avatar: { type: graphql_1.GraphQLString },\r\n    }),\r\n});\r\nexports[\"default\"] = TypeUser;\r\n\n\n//# sourceURL=webpack://api/./src/modules/users/type.ts?");

/***/ }),

/***/ "./src/utils/authentication.ts":
/*!*************************************!*\
  !*** ./src/utils/authentication.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nclass Authentication {\r\n    static signToken(username) {\r\n        return jsonwebtoken_1.default.sign({ username }, process.env.PRIVATEKEY || \"PRIVATEKEY\");\r\n    }\r\n    static decodeToken(token) {\r\n        try {\r\n            const tokenBearer = token === null || token === void 0 ? void 0 : token.split(\" \")[1];\r\n            var decoded = jsonwebtoken_1.default.verify(tokenBearer || \"token\", process.env.PRIVATEKEY || \"PRIVATEKEY\");\r\n            return true;\r\n        }\r\n        catch (err) {\r\n            return false;\r\n        }\r\n    }\r\n    static logoutToken() {\r\n        return jsonwebtoken_1.default.sign({}, process.env.PRIVATEKEY || \"PRIVATEKEY\", {\r\n            expiresIn: 100, // expires in 24 hours\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = Authentication;\r\n\n\n//# sourceURL=webpack://api/./src/utils/authentication.ts?");

/***/ }),

/***/ "./src/utils/hasPassword.ts":
/*!**********************************!*\
  !*** ./src/utils/hasPassword.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\r\nconst salt = process.env.SALTROUND || \"10\";\r\nclass HashPass {\r\n    static hashPassword(password) {\r\n        return bcrypt_1.default.hashSync(password, Number(salt));\r\n    }\r\n    static comparePassword(password, hash) {\r\n        return bcrypt_1.default.compareSync(password, hash);\r\n    }\r\n}\r\nexports[\"default\"] = HashPass;\r\n\n\n//# sourceURL=webpack://api/./src/utils/hasPassword.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-graphql");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("graphql");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;