


export const tokenUtils = {
  saveToken: (_token: string): void => undefined,
  getToken: (): string | null => null,
  removeToken: (): void => undefined,
  decodeToken: (_token: string): null => null,
  isTokenExpired: (_token: string): boolean => true,
  isAuthenticated: (): boolean => false,
};
