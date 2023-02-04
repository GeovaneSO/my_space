import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApiService } from 'src/app.service';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { JwtStrategy } from 'src/services/auth/validate.auth.service';
import { GetOneClientService } from 'src/services/client/getOne.client.service';
import { AuthService } from '../services/auth/auth.service';
@Module({
  imports: [PassportModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, GetOneClientService, JwtStrategy, ApiService],
})
export class AuthModule {}
