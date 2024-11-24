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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const config_1 = __importDefault(require("../../app/config"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.OrderServices.createOrderIntoDB(orderData);
        res.send({
            message: 'Order created successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.send({
                message: error.message,
                status: false,
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.calculateRevenueInDB();
        const total = result.length > 0 ? result[0].totalRevenue : 0;
        const totalRevenue = {
            totalRevenue: total,
        };
        res.send({
            message: 'Revenue calculated successfully',
            status: true,
            data: totalRevenue,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.send({
                status: false,
                message: 'Something went wrong',
                error,
                stack: config_1.default.node_env ? error.stack : undefined,
            });
        }
    }
});
exports.OrderController = {
    createOrder,
    calculateRevenue,
};
