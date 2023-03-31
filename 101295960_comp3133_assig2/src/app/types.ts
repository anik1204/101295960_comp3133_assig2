export interface User {
    id: string;
    username: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    status: number;
    message?: string;
    user?: User;
  }