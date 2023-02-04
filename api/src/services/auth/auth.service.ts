import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { ApiService } from 'src/app.service';

@Injectable()
export class AuthService {
  constructor(private prisma: ApiService, private jwtService: JwtService) {}

  async session(username: string, pass: string): Promise<object> {
    const client = await this.prisma.client.findUnique({
      where: {
        username: username,
      },
    });

    if (!client) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const passwordHashed = await bcryptjs.compare(pass, client.password);

    if (!passwordHashed) {
      throw new UnauthorizedException('Invalid username or password');
    }
    const token = {
      access_token: this.jwtService.sign(
        { username: client.username },
        {
          secret: process.env.SECRET_KEY,
          expiresIn: '24',
          subject: client.id,
        },
      ),
    };

    if (!token) {
      throw new UnauthorizedException();
    }
    return token;
  }
}
