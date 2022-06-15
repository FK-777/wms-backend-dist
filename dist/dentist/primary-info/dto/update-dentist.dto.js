"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDentistDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_dentist_dto_1 = require("./create-dentist.dto");
class UpdateDentistDto extends swagger_1.PartialType(create_dentist_dto_1.CreateDentistDto) {
}
exports.UpdateDentistDto = UpdateDentistDto;
//# sourceMappingURL=update-dentist.dto.js.map