export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

//Types klasörü: Projedeki tüm veri tiplerini topladığın yer. Backend'den ne gelir,
//frontend'de ne tutarsın - hepsini burada tanımlarsın.

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: User;
}

export interface TokenPayload {
  userId: string;
  email: string;
  exp: number;
  iat: number;
}
  