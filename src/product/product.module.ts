import { Module } from '@nestjs/common';
import { AppController } from './product.controller';
import { AppService } from './product.service';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
