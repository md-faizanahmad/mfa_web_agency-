export interface NavLink {
  name: string;
  href: string;
}

export const technicalSolutions: NavLink[] = [
  { name: "Next.js Web Systems", href: "/services/web-development" },
  { name: "E-Commerce Architecture", href: "/services/ecommerce" },
  { name: "Technical SEO", href: "/services/seo" },
  { name: "Fast UI/UX Design", href: "/services/ui-ux" },
  { name: "Cloud Maintenance", href: "/services/maintenance" },
];

export const companyLinks: NavLink[] = [
  { name: "Our Work", href: "/work" },
  { name: "Our Method", href: "/process" },
  { name: "Contact", href: "/contact" },
];