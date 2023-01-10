import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  }
  const {planetsList} = props
  return (
    <div className="container" data-testid="planets">
      <h1 className="planets-head">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem details={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
