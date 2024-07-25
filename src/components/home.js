import './home.css'

function Home() {
    return (
        <section class="main">
            <header>
                <a href=""><img src="images/logo.png" class="logo" /></a>
                <div class="toggle"></div>
                <ul class="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </header>
            <div class="content">
                <div class="text">
                    <div class="slogan">
                        <h2>Starbucks <br /><span class="style">or nothing</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis <br />nobis voluptate fugit vero saepe,at deserunt a esse, quis eius excepturi <br /> rerum tempora ipsa ad non aspernatur, consectetur veniam!</p>
                    </div>
                    <a href="#" class="btn">Order Now</a>
                    <div class="social-media">
                        <a href=""><i class="fa fa-twitter"></i></a>
                        <a href=""><i class="fa fa-facebook"></i></a>
                        <a href=""><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div class="image">
                    <img src="images/image.png" />
                </div>
            </div>
        </section>
    )
}

export default Home