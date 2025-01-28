import { LessonsService } from './lessons.service';
export declare class LessonsController {
    private readonly lessonService;
    constructor(lessonService: LessonsService);
    getLessons(): Promise<{
        id: string;
        title: string;
        description: string | null;
        thumbnail: string | null;
        introduction: import("@prisma/client/runtime/library").JsonValue | null;
        activities: import("@prisma/client/runtime/library").JsonValue | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getLessonById(id: string): Promise<unknown>;
}
