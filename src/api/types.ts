// src/api/types.ts

/**
 * Standard API Response wrapper
 * Backend responses are wrapped in this format
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp?: string;
}

/**
 * Standard API Error format
 * Used by error interceptor to normalize all errors
 */
export interface ApiError {
  message: string;
  statusCode: number;
  isNetworkError: boolean;
  originalError?: unknown;
}

/**
 * Pagination metadata for list endpoints
 * Use when API returns paginated data
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

/**
 * Paginated response wrapper
 * Use for endpoints that return lists
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}

// ============ AUTH TYPES ============

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken?: string; // May not be present with httpOnly cookies
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  user: User;
  accessToken?: string;
}

export interface VerifyEmailRequest {
  token: string;
}

export interface VerifyEmailResponse {
  message: string;
  user: User;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
  user: User;
}

export interface GetMeResponse {
  user: User;
}

// ============ UTILITY TYPES ============

/**
 * Async state for queries/mutations
 * Tracks loading, error, and data states
 */
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}
