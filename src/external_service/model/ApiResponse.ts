export interface ApiResponse<T> {
  status: string;
  code: number;
  data?: T;         // El símbolo '?' indica que este campo es opcional
  message?: string; // El símbolo '?' indica que este campo es opcional
}