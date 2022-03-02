import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmployeeDetails } from './dto/employee-details.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() employeeDetails: EmployeeDetails): Record<string, string> {
    return this.appService.setEmployeeDetails(employeeDetails);
  }
}
