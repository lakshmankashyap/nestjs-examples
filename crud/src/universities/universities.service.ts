import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { University } from './university.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UniversitiesService extends TypeOrmCrudService<University> {
  constructor(@InjectRepository(University) universityRepository: Repository<University>) {
    super(universityRepository);
  }
}
