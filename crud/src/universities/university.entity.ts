import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsOptional, IsDefined, Length } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Student } from '../students/student.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity({ name: 'universities' })
export class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Length(1, 100)
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @Column({ nullable: false, length: 100 })
  name: string;

  @OneToMany(type => Student, student => student.university)
  students: Student[];
}
