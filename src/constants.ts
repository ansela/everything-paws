export interface Page {
  title: string
  link: string
  exact?: boolean
}

export const pages: Page[] = [
  { title: "Home", link: "/", exact: true },
  { title: "About", link: "/about" },
  { title: "Boarding", link: "/boarding" },
  { title: "Daycare", link: "/daycare" },
  { title: "Grooming", link: "/grooming" },
  { title: "Training", link: "/training" },
  { title: "FAQ", link: "/faq" },
  { title: "Contact", link: "/contact" },
]
