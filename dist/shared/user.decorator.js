"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = common_1.createParamDecorator((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const tokenUser = request.user;
    if (!tokenUser && !tokenUser.data) {
        return null;
    }
    const user = tokenUser.data;
    return key ? user === null || user === void 0 ? void 0 : user[key] : user;
});
//# sourceMappingURL=user.decorator.js.map