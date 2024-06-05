import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <img src='../images/logo.jpg' alt='Softmark Solutions Logo' />
        </div>
        <div className='header-text'>
          <h1>Softmark Solutions</h1>
          <p>
            Crafting digital success through Web & Mobile apps, SEO, and
            branding
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
