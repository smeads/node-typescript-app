"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 8080; // default port to listen
// define a rout handler fo rthe default home page
app.get("/", (req, res) => {
    res.send("Hello World");
});
// start the Express server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map