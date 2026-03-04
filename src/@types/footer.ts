// src/types/footer.ts
import { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export interface StatusTagProps {
  icon: LucideIcon;
  label: string;
}
