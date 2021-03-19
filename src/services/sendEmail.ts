const sendEmail = (
  name: string,
  subject: string,
  message: string,
  email: string
) => {
  const formattedMessage = `There is a new contact request from: ${name}
    
    Subject: ${subject}
    
    Message: ${message}
    
    Hit "Reply" to reply directly to the message.`
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      toEmails: ["ashley.ansell@gmail.com"],
      subject: `New Inquiry from: ${name}`,
      message: formattedMessage,
      replyToEmails: [email],
    }),
  }
  fetch(
    "https://mfx3cu5z3i.execute-api.us-east-1.amazonaws.com/Prod",
    requestOptions
  ).catch((err) => console.error(err))
}

export default sendEmail
