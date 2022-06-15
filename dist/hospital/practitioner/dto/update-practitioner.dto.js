"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePractitionerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_practitioner_dto_1 = require("./create-practitioner.dto");
class UpdatePractitionerDto extends mapped_types_1.PartialType(create_practitioner_dto_1.CreatePractitionerDto) {
}
exports.UpdatePractitionerDto = UpdatePractitionerDto;
//# sourceMappingURL=update-practitioner.dto.js.map