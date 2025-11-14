export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

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
  token: string;
  user: User;
  expiresIn: number;
}

export interface TokenPayload {
  userId: string;
  email: string;
  exp: number;
  iat: number;
}
