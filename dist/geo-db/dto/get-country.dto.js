"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCountryDto = void 0;
const dto_1 = require("../../shared/dto");
class GetCountryDto extends dto_1.GetApiDto {
    constructor() {
        super();
        this.sb = "name";
        this.sd = "1";
    }
}
exports.GetCountryDto = GetCountryDto;
//# sourceMappingURL=get-country.dto.js.map