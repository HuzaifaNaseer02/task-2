import PropTypes from 'prop-types'
import './AboutUs.css' // Import the corresponding CSS file

const AboutUs = ({ imagePath }) => {
  return (
    <section className='about-us'>
      <div className='about-us-container'>
        <div className='about-us-text'>
          <h2>About Us</h2>
          <p className='tagline'>
            Crafting digital success through Web & Mobile apps, SEO, and
            branding
          </p>
          <p className='description'>
            At Softmark Solutions, we envision a digital landscape where
            innovation meets excellence. Our mission is to empower businesses
            with cutting-edge software solutions, spanning web and mobile app
            development, SEO mastery, and comprehensive branding services. With
            a passion for creativity and a commitment to quality, were dedicated
            to helping our clients thrive in the ever-evolving digital realm.
            Partner with us and lets shape the future together.
          </p>
        </div>
        <div className='about-us-image'>
          <img src={imagePath} alt='About Us' />
        </div>
      </div>
    </section>
  )
}

AboutUs.propTypes = {
  imagePath: PropTypes.string.isRequired
}

export default AboutUs
