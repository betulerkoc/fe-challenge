import { ReactElement } from 'react';

export interface MenuItem {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  icon?: ReactElement;
} 