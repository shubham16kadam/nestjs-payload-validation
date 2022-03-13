import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'CustomAgeLimitValidator', async: false })
export class CustomAgeLimitValidator implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    // Add validation logic here
    if (value < 18 || value > 65) return false;
    return true;
  }

  // optional method
  defaultMessage(args: ValidationArguments) {
    // Provide default error message if validation failed
    return `Age value ${args.value} caused age limit violated! Employee age should be between 18 and 65 years`;
  }
}
