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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const config_1 = __importDefault(require("../../app/config"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductServices.createProductIntoDB(productData);
        //send response
        res.status(200).json({
            success: true,
            message: 'Product is create successfully',
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTermQuery = req.query.searchTerm;
        // if searchTerm has
        if (searchTermQuery) {
            const searchTerm = searchTermQuery.trim().replace(/\s+/g, ' ');
            const searchResult = yield product_service_1.ProductServices.getProductsBySearchTermFromDB(searchTerm);
            if (searchResult.length === 0) {
                res.status(404).json({
                    message: 'Products not found',
                    success: false,
                });
            }
            else {
                res.status(200).json({
                    message: 'Products retrieved successfully',
                    success: true,
                    data: searchResult,
                });
            }
        }
        // if no searchTerm
        else {
            const result = yield product_service_1.ProductServices.getProductsFromDB();
            if (result.length === 0) {
                res.status(404).json({
                    message: 'Product collection is empty',
                    success: false,
                });
            }
            else {
                res.send({
                    message: 'Products retrieved successfully',
                    status: true,
                    data: result,
                });
            }
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.send({
                message: 'Something went wrong',
                status: false,
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
const getSingleProudct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        if (result === null) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
        }
        else {
            res.send({
                message: 'Product retrieved successfully',
                status: true,
                data: result,
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.send({
                message: 'Something went wrong',
                status: false,
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = yield product_service_1.ProductServices.updateProductFromDB(productId, productData);
        if (result === null) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
        }
        else {
            res.send({
                message: 'Product updated successfully',
                status: true,
                result,
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.send({
                message: 'Something went wrong',
                status: false,
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        if (result === null) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
            });
        }
        else {
            res.send({
                message: 'Product deleted successfully',
                status: true,
                data: {},
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.send({
                message: 'Something went wrong',
                status: false,
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
exports.ProductControllers = {
    createProduct,
    getProducts,
    getSingleProudct,
    updateProduct,
    deleteProduct,
};
