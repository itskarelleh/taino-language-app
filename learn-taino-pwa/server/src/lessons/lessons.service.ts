import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class LessonsService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  
  async getLessonById(id: string) {

    const cachedRow = await this.cacheManager.get(`lesson_${id}`);
    if (cachedRow) {
      return cachedRow; // Return cached data if available
    }

    // If not in cache, fetch from the database
    const row = await this.prisma.lessons.findUnique({ where: { id } });

    // Store the fetched data in the cache
    await this.cacheManager.set(`lesson_${id}`, row);

    return row; // Return the fetched data
  }

  async getLessons() {
    return this.prisma.lessons.findMany();
  }
}