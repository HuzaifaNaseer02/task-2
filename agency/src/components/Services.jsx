import './Services.css' // Import the corresponding CSS file

const servicesData = [
  {
    title: 'Web Development',
    description:
      'Creating responsive, user-friendly websites that captivate and convert visitors into customers.'
  },
  {
    title: 'App Development',
    description:
      'Building seamless, high-performing mobile applications for iOS and Android platforms.'
  },
  {
    title: 'Digital Marketing',
    description:
      'Enhancing online presence through strategic SEO, social media management, and branding solutions.'
  }
]

const Services = () => {
  return (
    <section className='services'>
      <h2>Our Services</h2>
      <div className='services-container'>
        {servicesData.map((service, index) => (
          <div className='service-card' key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
