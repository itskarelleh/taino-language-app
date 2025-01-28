import { Controller, Get, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
    constructor(private readonly lessonService: LessonsService) {}
    
    @Get('/')
    getLessons() {
        return this.lessonService.getLessons();
    }

    @Get('/:id')
    async getLessonById(@Param('id') id: string) {
        
        return this.lessonService.getLessonById(id);
    }
}
