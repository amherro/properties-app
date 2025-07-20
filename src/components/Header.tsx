
const Header = () => {
  return (
    <header className='header-container'>
        <h1 className="logo"><a href="/">HomeSteady</a></h1>
        <nav>
            <ul className="nav-links-container">
                <li className="nav-link"><a href="/">Home</a></li>
                <li className="nav-link"><a href="/about">About</a></li>
                <li className="nav-link"><a href="/contact">Contact</a></li>
                <li className="nav-link"><a href="/login">Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header