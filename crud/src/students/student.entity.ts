import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsOptional, IsDefined, IsEmail, Length, MaxLength } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { University } from '../universities/university.entity';
import { IsEmailUnique } from './students.validator';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity({ name: 'students' })
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Length(4, 100)
  @IsOptional({ groups: [UPDATE] })
  @Column({ nullable: true, length: 100 })
  name: string;

  @IsEmail()
  @MaxLength(100)
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsEmailUnique({ message: 'email already registered' })
  @Column({ nullable: false, unique: true, length: 100 })
  email: string;

  @ManyToOne(type => University, university => university.students)
  @JoinColumn({ name: 'id_university' })
  university: University;
}
