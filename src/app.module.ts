import { AppController } from './app.controller';
//import { AuthModule } from './resolvers/auth/auth.module';
//import { AppResolver } from './resolvers/app.resolver';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { PrismaService } from './services/prisma.service';
import config from './configs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
