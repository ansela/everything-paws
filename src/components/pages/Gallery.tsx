import { Container, makeStyles, Theme } from "@material-ui/core"
import React, { useCallback, useState } from "react"
import Gallery from "react-photo-gallery"
import { getGalleryPics } from "../../constants"
import Carousel, { Modal, ModalGateway } from "react-images"
import PageTitle from "../PageTitle"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& img": {
      objectFit: "cover",
    },
  },
}))

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const photos = getGalleryPics()
  const classes = useStyles()

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <PageTitle title="Photo Gallery" />
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                source: x.src,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  )
}

export default PhotoGallery
