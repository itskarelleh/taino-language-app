import { PrismaService } from 'src/prisma/prisma.service';
import { Cache } from 'cache-manager';
export declare class LessonsService {
    private prisma;
    private cacheManager;
    constructor(prisma: PrismaService, cacheManager: Cache);
    getLessonById(id: string): Promise<unknown>;
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
}
