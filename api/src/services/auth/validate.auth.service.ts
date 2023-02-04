import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ApiService } from 'src/app.service';
import { Payload } from 'src/interfaces/auth.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private clientService: ApiService) {
    super({
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
    });
  }

  async validate(payload: Payload): Promise<any> {
    const client = await this.clientService.client.findUnique({
      where: { username: payload.username },
      select: {
        id: true,
        username: true,
      },
    });
    if (!client) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}
