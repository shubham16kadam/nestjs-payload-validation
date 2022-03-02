import { Injectable } from '@nestjs/common';
import { EmployeeDetails } from './dto/employee-details.dto';

@Injectable()
export class AppService {
  setEmployeeDetails(employeeDetails: EmployeeDetails): Record<string, string> {
    console.log(employeeDetails);
    // store employee details in db/file
    return { msg: 'Employee details added successfuly' };
  }
}
