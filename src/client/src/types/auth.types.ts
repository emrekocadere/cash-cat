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
  surname: string;
  name?: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface TokenPayload {
  userId: string;
  email: string;
  exp: number;
  iat: number;
}
