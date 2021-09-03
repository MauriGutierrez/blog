import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { ReturningStatementNotSupportedError } from 'typeorm';
const bcrypt = require('bcrypt')

@Injectable()
export class AuthService {

  constructor(private readonly jwtService: JwtService) { }
  
  generateJWT(payload: Object): Observable <string> {
    return from(this.jwtService.signAsync({ user: payload }));
  }

  hashPassword(password: string):Observable <string>{
    return from<string>(bcrypt.hash(password, 12))  // the 12 represents the amount of salt rounds(cost factor)
                                                    // meaning how much time is needed to calculate a single BCrypt hash
                                              // the higher the value, the harder it is to brute force a password crack
  }

  comparePasswords(newPassword: string, passwordHash: string): Observable<any | boolean>{
    
    return of<any | boolean>(bcrypt.compare(newPassword, passwordHash));
    

  }
}
