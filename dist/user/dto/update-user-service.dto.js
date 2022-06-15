"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserServiceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_service_dto_1 = require("./create-user-service.dto");
class UpdateUserServiceDto extends mapped_types_1.PartialType(create_user_service_dto_1.CreateUserServiceDto) {
}
exports.UpdateUserServiceDto = UpdateUserServiceDto;
//# sourceMappingURL=update-user-service.dto.js.map