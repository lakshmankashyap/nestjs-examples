import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UniversitiesService } from './universities.service';
import { University } from './university.entity';

@Crud({
  model: {
    type: University,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('universities')
export class UniversitiesController {
  constructor(public service: UniversitiesService) {}
}
