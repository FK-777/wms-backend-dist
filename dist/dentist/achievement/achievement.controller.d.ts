/// <reference types="mongoose" />
import { CreateAchievementDto, GetAchievementDto, UpdateAchievementDto } from './dto';
import { AchievementService } from './achievement.service';
import { DentistIdRequiredDto, IdRequiredDto } from 'src/shared/dto';
export declare class AchievementController {
    private readonly achievementService;
    constructor(achievementService: AchievementService);
    create({ DentistId }: DentistIdRequiredDto, createAchievementDto: CreateAchievementDto): Promise<string>;
    findAll({ DentistId }: DentistIdRequiredDto, getAchievementDto: GetAchievementDto): any[] | import("mongoose").Aggregate<any[]>;
    update({ DentistId }: DentistIdRequiredDto, { id }: IdRequiredDto, updateAchievementDto: UpdateAchievementDto): Promise<string>;
    remove({ DentistId }: DentistIdRequiredDto, { id }: IdRequiredDto): Promise<string>;
}
