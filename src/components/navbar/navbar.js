// import './home.css'
import Logo from '../content/images/logo.png'
import './navbar.css'

function Navbar() {
    return (
        <>
            <header>
                <a href=""><img src={Logo} class="logo" /></a>
                <div class="toggle"></div>
                <ul class="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Navbar