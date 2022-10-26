"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//definition of routes
router.post('/signup', signup);
router.post('/signin', signin);
exports.default = router;
//# sourceMappingURL=auth.js.map