import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@Crud({
  model: {
    type: Student,
  },
  query: {
    join: {
      university: {
        eager: true,
      },
    },
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('students')
export class StudentsController {
  constructor(public service: StudentsService) {}
}
