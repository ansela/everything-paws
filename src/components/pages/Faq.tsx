import { Box, Container, Typography } from "@material-ui/core"
import * as React from "react"
import { ReactElement } from "react"
import PageTitle from "../PageTitle"

const Question = ({ q, a }: { q: string; a: string }): ReactElement => (
  <Box mb={3}>
    <Typography variant="h5" component="h3" gutterBottom color="primary">
      {q}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {a}
    </Typography>
  </Box>
)

const Faq = () => {
  return (
    <Container maxWidth="md">
      <PageTitle title="Frequently Asked Questions" />
      <Question
        q="What shots are required?"
        a="Your Dog should be current on Rabies, DHPP and Bordetella (“kennel
        cough”). We will need written proof of vaccinations. You can bring them
        with you for us to copy, or you can have your vet fax them to us ****.
        We recommend your pet being vaccinated at least one week prior to coming
        to Everything Is Pawsible. Since vaccinations stress a pet’s immune
        system, it’s best not to also stress them with a new environment.  Some
        pets may have a reaction to vaccines and this will greatly reduce chance
        of that happening here."
      />
      <Question
        q="Do you require the Bordetella vaccine every 6 months?"
        a="We do not. If the shot record provided by your veterinarian shows a due date that is a year after was given, we will honor your veterinarian’s recommendation. We are not vets, and quite frankly over-vaccination can be as harmful as under-vaccination. Please keep in mind that “Kennel Cough” protection is provided by the Bordetella vaccine. There are many strains and the vaccine is not effective against all of them (similar to the flu shot for people)., most of the dogs that may get “kennel cough” at Everything Is Pawsible are our new clients dogs…. not a wonderful first impression, but it happens-just like the new kid at daycare who gets sick. Our “regulars” rarely get sick as their immune systems have adjusted to the challenges."
      />
      <Question
        q="My dog is older and my veterinarian suggests that he doesn’t get certain vaccinations. What can I do?"
        a="Some vets test for titers to determine if a certain vaccination is necessary. We would accept this. Also if a vet doesn’t feel comfortable giving a certain vaccination, we simply require a signed waiver from your vet stating this."
      />
      <Question
        q="Can my dog get SICK at Everything Is Pawsible?"
        a="We cannot guarantee that your dog will not get sick at Everything Is Pawsible. Just like human diseases, many dogs are most contagious BEFORE they are showing symptoms of illness. Your best safeguard against serious illness is to make sure your dog has the required vaccinations at least one week prior to attending Everything Is Pawsible. We have occasionally had dogs come down with “kennel cough” and gastroenteritis after attending our facility. We are also cleaning and disinfecting our facility on a daily basis. Our non-porous epoxy floor helps keep gastroenteritis at minimum. We are very open about “kennel cough- when we have had cases reported or seen. We let the “parents” know, just as children’s daycare would. Due to the incubation period for “kennel cough” it’s possible that dogs don’t show any symptoms while with us-so we depend on the owners to report any illness after their pet gets home. The good news is that many of Everything Is Pawsible “regulars” seem to build up immunity. At Everything Is Pawsible, we believe knowledge is power, so we will always strive to keep owners aware of risks so they can make an informed decision as to the risks they will take."
      />
      <Question
        q="Are all breeds welcome?"
        a="We do not discriminate against any breeds. A good dog is a good dog, or problem dog is a problem dog, no matter what breed it is."
      />
      <Question
        q="Why do you require an emergency contact at Everything Is Pawsible?"
        a="We take your pets comfort, health and safety seriously. If your pet needs medical attention and you are unavailable, your emergency contact can help us make health care decisions for your pet."
      />
      <Question
        q="Can I visit your facility before I bring my pet?"
        a="Absolutely!! We love to have you visit us before your dog comes to stay with us. We’d like to show you how we are different from our competitors. Please bring your dog with you, just make sure you bring a current vaccination record with you, so he can see the facility too."
      />
      <Question
        q="How often Kennels cleaned?"
        a="Our facility is thoroughly cleaned and disinfected Every day. We use top of the line, animal-safe disinfectants that are strong enough to kill major viral, bacterial and fungal pathogens. We take great pride in the cleanliness of our facility!"
      />
      <Question
        q="Can I call to check and see how my dog is doing? "
        a="Absolutely!! Feel free to call during our open hours for an update."
      />
      <Question
        q="Can all my pets stay together in the same run?"
        a="Yes. We can accommodate your wishes and board your pets together in the same run, if the space chosen allows both comfort and safety."
      />
      <Question
        q="What do I need to bring?"
        a="The only thing we ask you to bring is your dog’s food. It’s best to keep your dogs diet that he’s used to in order to minimize any digestive upset and of course your dog medications if he/she uses any. "
      />
      <Question
        q="Can I bring my dog’s own toys?"
        a="Sure! You’re welcome to bring familiar toy from home that we can keep in the dogs run. Please be sure that All Belongings are clearly labeled, as they may be removed from the run do to a cleaning or laundering."
      />
      <Question
        q="Can I bring a bed if I want to?"
        a="Yes, you can bring your dog’s own bed or blanket. Through past experience, we have found it is best if you do NOT bring your pet’s bedding. They may be very good at home, but in this new environment we had pets urinate (mark their territory) and defecate on their beds as well as chew them up. Best thing to bring is a beach towel, we can easily wash it for you. During summer, dogs will NOT use bed they will lay down on cool floor, so they can cool themselves. In winter, when we heat floors they will lay down right on the floor too to warm themselves."
      />
      <Question
        q="What NOT TO BRING: "
        a="Water Bowls, Bed comforters, irreplaceable stuff toys, valuable stuff to you, rawhide (choking hazard) more than 2 Toys (dog won’t play with them, lots of other activities)"
      />
      <Question
        q="Can I bring food that needs refrigeration?"
        a="Yes. We have refrigeration and a microwave to heat refrigerated food. We are happy to feed your dog whatever he/she normally eats at home so don’t be afraid to mention this to us."
      />
      <Question
        q="What if my dog won’t eat and drink while being boarded?"
        a="When a dog doesn’t eat or eat well we cannot force him/her to do so. The dogs will start eating when they are hungry, sometimes they don’t eat as much as they do at home due to a stress. We will however entice him/her by making his/her food tastier. For example, we may put some canned food in his/her food or chicken broth. It’s extremely rare to encounter a dog that doesn’t drink water while being boarded. Clients that are concerned about this should see our staff about any questions prior to boarding."
      />
      <Question
        q="What if my dog doesn’t get along with other dogs? "
        a="Everything Is Pawsible has a number of play yards where your dog can spend time outside without having to interact with other dogs. All dogs in our kennel will get to go outside in play yards. "
      />
      <Question
        q="What do you do with dogs like mine? He is older and not very active, and I’d like to make sure he has a pleasant experience at boarding."
        a="We try to meet the needs of all types of dogs, including older and less active dogs that don’t enjoy being sniffed or invited to play. We may move them to quieter areas, when they can enjoy watching the other dogs while relaxing in a quieter space."
      />
      <Question
        q="Why does my dog smell when I pick him up after being boarded? "
        a="At Everything Is Pawsible, we are meticulous in cleaning our kennels, Play areas, and use veterinary hospital grade disinfectant/cleaner/deodorizers to keep them spotless. However, dogs in play group lick each other, their saliva on fur could smell, if someone pees they can walk thru it by the time our handler will clean they may get some of it on their fur around their paws or on them by running thru it. Certain customers may also be more sensitive to pet odors after having not been with an animal for a while. We recommend scheduling an “Exit Bath “or grooming for a pet before picking him up."
      />
      <Question
        q="I notice that my dog is especially tired after boarding. Is this normal?"
        a="Yes. A stay at Everything Is Pawsible can be very exciting!! Some dogs run around barking at other dogs and have a wonderful time. They often leave exhausted but happy-and sleep a lot the first couple days they are home."
      />
      <Question
        q="My pet is so thirsty when he/she comes home from a boarding visit? Doesn’t he/she get water when he/she is with you? Or why won’t he/she drink when being boarded? "
        a="Pets will frequently become very thirsty from the excitement and stress of seeing their family and loved ones again when they’re picked up. It’s natural and you should expect your pet a bit dehydrated from all the excitement once you get them home. While in our care, pets are monitored carefully for their consumption of fresh water, which is continuously checked and refreshed throughout the day. And just like the excitement of coming home, when they first are checked in and settled in their runs, they will tend to become very thirsty. We provide them with fresh water upon check-in to get the pet fully hydrated. After the first 30 min or so, most of them settle into the new routine, get more comfortable and establish their habits."
      />
      <Question
        q="Are there any suggestions when bringing my dog home from stay at Everything Is Pawsible?"
        a="Yes, some dogs may become over excited from seeing their owners and the car ride home. Over excitement may make a pet pant a lot and act thirsty. Hershel is probably not really thirsty and had plenty of water available to them while staying with us. Give them a few ice cubes to tide them over until they settle down.
Also the same applies with food and you should know that excessive eating and drinking may lead to digestive upsets. Do not feed your pet for about three hours after returning home, and then, limit the food and water you provide until they settle back in. You may also skip feeding till the next day, after you reestablish home patterns by following a normal schedule.
"
      />
    </Container>
  )
}

export default Faq
