import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/student.entity';
import { UniversitiesModule } from './universities/universities.module';
import { University } from './universities/university.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Student, University],
      synchronize: true,
      logging: true,
    }),
    StudentsModule,
    UniversitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
