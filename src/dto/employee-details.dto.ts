import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  ValidateNested,
  IsNumber,
  Validate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CustomAgeLimitValidator } from '../custome-payload-validators/age-limit-validator';

export class Address {
  @IsString()
  @IsNotEmpty()
  @Matches('^[a-zA-Z\\s]+$')
  @MaxLength(15)
  country: string;

  @IsString()
  @IsNotEmpty()
  @Matches('^[a-zA-Z\\s]+$')
  @MaxLength(15)
  state: string;

  @IsString()
  @IsNotEmpty()
  @Matches('^[a-zA-Z\\s]+$')
  @MaxLength(15)
  city: string;

  @IsString()
  @IsNotEmpty()
  @Matches('^[a-zA-Z\\s]+$')
  @MaxLength(20)
  street: string;

  @IsInt()
  @IsNotEmpty()
  flatNo: number;
}

export class WorkExperience {
  @IsString()
  @IsNotEmpty()
  @Matches('^[a-zA-Z0-9\\s]+$')
  @MaxLength(30)
  orgName: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  exp: number;
}

export class EmployeeDetails {
  @IsNotEmpty()
  @IsString()
  @Matches('^[a-zA-Z\\s]+$')
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Validate(CustomAgeLimitValidator)
  age: number;

  @ValidateNested()
  @Type(() => Address)
  @IsNotEmpty()
  address: Address;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @Matches('^[a-zA-Z0-9\\s]+$', undefined, { each: true })
  @MaxLength(30, { each: true })
  projects: string[];

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => WorkExperience)
  workExperience: WorkExperience[];
}
