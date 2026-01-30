export interface NavLink {
  name: string;
  href: string;
}

export const technicalSolutions: NavLink[] = [
  { name: "Webite Development", href: "/services/web-development" },
  { name: "E-Commerce ", href: "/services/ecommerce" },
  { name: "Technical SEO", href: "/services/seo" },
  { name: "Fast UI/UX Design", href: "/services/ui-ux" },
  { name: "Cloud Maintenance", href: "/services/maintenance" },
  { name: "Hosting and Domain", href: "/services/hosting-domain" },
];

export const companyLinks: NavLink[] = [
  { name: "Our Work", href: "/work" },
  { name: "Our Method", href: "/process" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faqs" },
];
