import React from 'react'
import PropTypes from 'prop-types'
// import classnames from 'classnames'
import * as Gallery from '../layout/Gallery'

const Thumbs = (props) => {
  const {
    feature,
    images,
    urlMeta,
    onClick,
  } = props
  if (!images || !images.length) return null

  return images.map(image => (
    <Gallery.Thumb
      key={image.PS_ID_ARQUIVO}
      onClick={() => onClick(image.PS_PATH_IMAGEM_400)}
      featured={image.PS_PATH_IMAGEM_400 === feature}
    >
      <img src={image.PS_PATH_IMAGEM_400} alt={urlMeta.PS_TITLE} />
    </Gallery.Thumb>
  ))
}

class GalleryBox extends React.Component {
  constructor(props) {
    super()

    this.changeImage = this.changeImage.bind(this)

    let { image } = props

    if (props.images.length) {
      image = props.images[0].PS_PATH_IMAGEM_400
    }

    this.state = {
      featured: image,
    }
  }

  changeImage(image) {
    console.log(image)
    this.setState({ featured: image })
  }

  render() {
    const { images, urlMeta } = this.props
    const { featured } = this.state

    return (
      <Gallery.Box>
        <Gallery.Feature>
          <img src={featured} alt={urlMeta.PS_TITLE} />
        </Gallery.Feature>
        <Gallery.Thumbs>
          <Thumbs
            images={images}
            urlMeta={urlMeta}
            feature={featured}
            onClick={this.changeImage}
          />
        </Gallery.Thumbs>
      </Gallery.Box>
    )
  }
}


GalleryBox.propTypes = {
  image: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  urlMeta: PropTypes.object.isRequired,
}

export default GalleryBox
