import { Box, Container, Typography } from "@material-ui/core"
import * as React from "react"
import { ReactElement } from "react"
import { FAQ, faqs } from "../../constants"
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
      {faqs.map((faq: FAQ, index) => (
        <Question key={index} q={faq.question} a={faq.answer} />
      ))}
    </Container>
  )
}

export default Faq
