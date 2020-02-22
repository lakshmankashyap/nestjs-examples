import { ValidatorConstraintInterface, ValidatorConstraint, ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';
import { getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUniqueConstraint implements ValidatorConstraintInterface {
  async validate(email: any, args: ValidationArguments) {
    const result = await getManager().query(`SELECT * FROM students WHERE email = '${email}'`) as any[];

    if (result.length) {
      return false;
    }

    return true;
  }
}

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueConstraint,
    });
  };
}
