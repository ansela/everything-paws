import pic from "./img/cat.jpg"
export interface Page {
  title: string
  link: string
  exact?: boolean
}

export const pages: Page[] = [
  { title: "Home", link: "/", exact: true },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Gallery", link: "/gallery" },
  { title: "Boarding", link: "/boarding" },
  { title: "Daycare", link: "/daycare" },
  { title: "Grooming", link: "/grooming" },
  { title: "Training", link: "/training" },
  { title: "FAQ", link: "/faq" },
  { title: "Contact", link: "/contact" },
]

export const getHelpfulLinks = (): Page[] => {
  const links = [
    "Boarding",
    "Daycare",
    "Grooming",
    "Training",
    "FAQ",
    "Contact",
  ]

  return pages.filter((page: Page) => links.includes(page.title))
}

export const getHeaderLinks = (): Page[] => {
  const links = ["Home", "Services", "Gallery", "FAQ", "Contact"]

  return pages.filter((page: Page) => links.includes(page.title))
}

export const getGalleryPics = () => {
  const tiles = []
  for (let i = 0; i < 20; i++) {
    tiles.push({ src: pic, width: 1, height: 1, title: "kitty" })
  }
  return tiles
}
