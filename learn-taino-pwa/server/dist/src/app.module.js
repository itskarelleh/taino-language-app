"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const cache_manager_1 = require("@nestjs/cache-manager");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const lessons_controller_1 = require("./lessons/lessons.controller");
const lessons_service_1 = require("./lessons/lessons.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register({
                max: 100,
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env', '.env.development', '.env.production'],
                isGlobal: true,
            }),
        ],
        controllers: [app_controller_1.AppController, lessons_controller_1.LessonsController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, lessons_service_1.LessonsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map