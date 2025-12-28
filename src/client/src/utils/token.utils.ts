// token.utils.ts removed functionality — stubbed per cleanup request.
// Use `authService` from services/auth.service.ts for production behavior.

export const tokenUtils = {
  saveToken: (_token: string): void => undefined,
  getToken: (): string | null => null,
  removeToken: (): void => undefined,
  decodeToken: (_token: string): null => null,
  isTokenExpired: (_token: string): boolean => true,
  isAuthenticated: (): boolean => false,
};
