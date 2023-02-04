export interface SessionRequest {
  username: string;
  password: string;
}

export interface Payload {
  username: string;
  iat: number;
  exp: number;
  sub: string;
}
