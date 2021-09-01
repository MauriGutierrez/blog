import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Configuring the Backend to comunicate with the Frontend!';
  }
}
