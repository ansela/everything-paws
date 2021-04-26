import pic from "./img/cat.jpg"
import dogs1 from "./img/dogs1.jpeg"
import dogs2 from "./img/dogs2.jpeg"
import dogs3 from "./img/dogs3.jpeg"
import dogs4 from "./img/dogs4.jpeg"
import dogs5 from "./img/dogs5.jpeg"
import dogs6 from "./img/dogs6.jpeg"
import dogs7 from "./img/dogs7.jpeg"
import dogs8 from "./img/dogs8.jpeg"
import dogs9 from "./img/dogs9.jpeg"
import dogs10 from "./img/dogs10.jpeg"
import dogs11 from "./img/dogs11.jpeg"
import dogs12 from "./img/dogs12.jpeg"
import dogs13 from "./img/dogs13.jpeg"
import dogs14 from "./img/dogs14.jpeg"
import dogs15 from "./img/dogs15.jpeg"
import dogs16 from "./img/dogs16.jpeg"
import family1 from "./img/family1.jpeg"
import everyone1 from "./img/everyone1.jpeg"
import missy1 from "./img/missy1.jpeg"
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
    "Gallery",
    // "Grooming",
    // "Training",
    "FAQ",
    "Contact",
  ]

  return pages.filter((page: Page) => links.includes(page.title))
}

export const getHeaderLinks = (): Page[] => {
  const links = ["Home", "About", "Services", "Gallery", "FAQ", "Contact"]

  return pages.filter((page: Page) => links.includes(page.title))
}

export const getGalleryPics = () => {
  const tiles = []
  for (let i = 0; i < 20; i++) {
    tiles.push({ src: pic, width: 1, height: 1, title: "kitty" })
  }
  return tiles
}

export interface GalleryPic {
  src: string
  width: number
  height: number
  title?: string
}

export const galleryPics: GalleryPic[] = [
  { src: dogs1, width: 1, height: 1 },
  { src: dogs2, width: 1, height: 1 },
  { src: dogs3, width: 1, height: 1 },
  { src: dogs4, width: 1, height: 1 },
  { src: dogs5, width: 1, height: 1 },
  { src: dogs6, width: 1, height: 1 },
  { src: dogs7, width: 1, height: 1 },
  { src: dogs8, width: 1, height: 1 },
  { src: dogs9, width: 1, height: 1 },
  { src: dogs10, width: 1, height: 1 },
  { src: dogs11, width: 1, height: 1 },
  { src: dogs12, width: 1, height: 1 },
  { src: dogs13, width: 1, height: 1 },
  { src: dogs14, width: 1, height: 1 },
  { src: dogs15, width: 1, height: 1 },
  { src: dogs16, width: 1, height: 1 },
  { src: missy1, width: 1, height: 1 },
  { src: everyone1, width: 1, height: 1 },
  { src: family1, width: 1, height: 1 },
]

export const phoneNumber = "(904) 595-2640"
export const emailAddress = "everythingispawsiblejax@gmail.com"

export interface FAQ {
  question: string
  answer: string
}
export const faqs: FAQ[] = [
  {
    question: "What shots are required?",
    answer:
      "Your Dog should be current on Rabies, DHPP and Bordetella (“kennel cough”). We will need written proof of vaccinations. You can bring them with you for us to copy. ",
  },
  {
    question: "Do you require the Bordetella vaccine every 6 months?",
    answer: "We do not. ",
  },
  {
    question:
      "My dog is older and my veterinarian suggests that he doesn’t get certain vaccinations. What can I do?",
    answer:
      "Some Vets will do a titer test and this can show whether a vaccine is necessary or not. If a Vet feels like your dog shouldn’t get the vaccine, have them sign a waiver saying this.",
  },
  {
    question: "Can my dog get SICK at Everything Is Pawsible?",
    answer:
      "Like children at daycare or school, it is always possible your dog can get sick from coming. It is important that your dog is vaccinated before coming to stop any spread of harmful diseases. If any sickness does occur, you will be informed right away.",
  },
  {
    question: "Are all breeds welcome?",
    answer: "Yes all breeds are welcome.",
  },
  {
    question:
      "Why do you require an emergency contact at Everything Is Pawsible?",
    answer:
      "If something were to happen to your pet and you cannot be contacted, an emergency contact will allow us to talk to someone close to you about what you would like to happen.",
  },
  {
    question: "Can I visit your facility before I bring my pet?",
    answer:
      "Sure! You can come take a tour during our open hours! If you want to bring your dog with you, just bring a copy of their vaccinations!",
  },
  {
    question: "How often are Kennels cleaned?",
    answer:
      "Once a day, sometimes more if a dog has a bad accident that needs a full cleaning. Spot cleaning is done after any accident",
  },
  {
    question: "Can I call to check and see how my dog is doing? ",
    answer:
      "Absolutely!! Feel free to call between the opening hours for an update.",
  },
  {
    question: "Can all my pets stay together in the same run?",
    answer:
      "Yes, if they can all fit! If they are large dogs, you may need two kennels.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "The only thing we ask you to bring is your dog’s food. It’s best to keep your dog's diet that he’s used to in order to minimize any digestive upset and of course your dog medications if he/she uses any. ",
  },
  {
    question: "Can I bring my dog’s own toys? ",
    answer:
      "Sure! These toys will be kept in their own kennel for them to play with. We do not recommend any bones, as it is a choking hazard.",
  },
  {
    question: "Can I bring a bed if I want to? ",
    answer:
      "Yes, you can bring your dog’s own bed or blanket, though we recommend a blanket as its easier cleaned if they were to have an accident.",
  },
  {
    question: "What NOT TO BRING: ",
    answer:
      "Water Bowls, Bed comforters, irreplaceable stuff toys, valuable stuff to you, rawhide (choking hazard) more than 2 Toys (dog won’t play with them, lots of other activities)",
  },
  {
    question: "Can I bring food that needs refrigeration?",
    answer:
      "Yes. We have refrigeration and a microwave to heat refrigerated food. ",
  },
  {
    question: "What if my dog won’t eat and drink while being boarded?",
    answer:
      "Some dogs may be stressed out in a different environment and may not eat at first. This is normal, and the dog will eat when hungry. We can also entice the dog with some wet food or treats to see if that may entice their appetite.",
  },
  {
    question: "What if my dog doesn’t get along with other dogs? ",
    answer:
      "Everything Is Pawsible has a number of play yards where your dog can spend time outside without having to interact with other dogs. All dogs in our kennel will get to go outside in play yards. ",
  },
  {
    question:
      "What do you do with dogs like mine? He is older and not very active, and I’d like to make sure he has a pleasant experience at boarding.",
    answer:
      "If he is older, we will either let him outside for some time by himself, or with some other older dogs that just want to relax in the sun.",
  },
  {
    question: "Why does my dog smell when I pick him up after being boarded? ",
    answer:
      "We clean and sanitize the kennels every day, but your dog may love playing with others and will get dirty that way. If they are staying over a week, we recommend scheduling an exit bath so they smell nice for you!",
  },
  {
    question:
      "I notice that my dog is especially tired after boarding. Is this normal?",
    answer:
      "Yes. A stay at Everything Is Pawsible can be very exciting!! Many dogs play the whole time, so when they get home, it's finally nap time!",
  },
  {
    question:
      "My pet is so thirsty when he/she comes home from a boarding visit? Doesn’t he/she get water when he/she is with you? ",
    answer:
      "Some dogs drink a lot of water when they are excited, so they come home and drink a ton! We assure you that they have water available both in their kennels and in the play areas",
  },
  {
    question:
      "Are there any suggestions when bringing my dog home from stay at Everything Is Pawsible?",
    answer:
      "Get them back into their normal routine. Some Dogs may take a day or two to get back to normal, eating regularly etc. ",
  },
]
