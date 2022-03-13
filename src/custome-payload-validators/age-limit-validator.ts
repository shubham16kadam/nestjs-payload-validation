import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'CustomAgeLimitValidator', async: false })
export class CustomAgeLimitValidator implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    if (value < 18 || value > 65) return false;
    return true;
  }
}
