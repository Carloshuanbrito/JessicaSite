import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum AreaType {
  FAMILY = 'FAMILY',
  BUSINESS = 'BUSINESS'
}