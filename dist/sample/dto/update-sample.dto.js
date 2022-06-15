"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSampleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_sample_dto_1 = require("./create-sample.dto");
class UpdateSampleDto extends swagger_1.PartialType(create_sample_dto_1.CreateSampleDto) {
}
exports.UpdateSampleDto = UpdateSampleDto;
//# sourceMappingURL=update-sample.dto.js.map