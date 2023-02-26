import { Body, Controller, Post } from '@nestjs/common';
import { SessionRequest } from 'src/interfaces/auth.interface';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: SessionRequest): Promise<object> {
    return this.authService.session(body.username, body.password);
  }
}
