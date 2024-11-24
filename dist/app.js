"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./modules/products/product.route"));
const order_route_1 = __importDefault(require("./modules/orders/order.route"));
const app = (0, express_1.default)();
//perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//applicaiton routes
app.use('/api', product_route_1.default);
app.use('/api', order_route_1.default);
app.get('/', (req, res) => {
    res.send('Welcom to Stationery Shop api service');
});
exports.default = app;
