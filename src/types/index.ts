export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number }>;
}

export type ThemeMode = 'light' | 'dark';