"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(product);
    return result;
});
const getProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
});
const getProductsBySearchTermFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    return product_model_1.default.find({
        $or: [
            { name: { $regex: `^${searchTerm}$`, $options: 'i' } },
            { brand: { $regex: `^${searchTerm}$`, $options: 'i' } },
            { category: { $regex: `^${searchTerm}$`, $options: 'i' } },
        ],
    });
});
const updateProductFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.quantity !== undefined) {
        data.inStock = data.quantity > 0;
    }
    const result = yield product_model_1.default.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    getSingleProductFromDB,
    getProductsBySearchTermFromDB,
    updateProductFromDB,
    deleteProductFromDB,
};
