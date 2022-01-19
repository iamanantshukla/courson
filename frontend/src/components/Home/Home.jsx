import React, { PureComponent } from "react";
import "./Home.css";

export default class Home extends PureComponent {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <header className="home-header">
          <nav class="header-nav container flex-container">
            <h1 class="logo">
              <a class="logo-link" href="#">
                courson
              </a>
            </h1>
            <ul class="header-menu flex-container">
              <li>
                <a class="header-menu-link" href="">
                  Books
                </a>
              </li>
              <li>
                <a class="header-menu-link" href="">
                  Courses
                </a>
              </li>
              <li>
                <a class="header-menu-link" href="">
                  Webinars
                </a>
              </li>
              <li>
                <a class="header-menu-link" href="">
                  Blog
                </a>
              </li>
            </ul>
            <button class="ghost-button" onClick={() => { this.props.history.push('/login') }}>Get started</button>
          </nav>
          <section class="header-content">
            <figure class="header-img">
              <img className="home-img"
                src="https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050320.jpg&fm=jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Man holding camera looking at fireworks"
              />
            </figure>
            <div class="header-description container">
              <h2 class="header-title">Discover. Learn. Share.</h2>
              <p className="home-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit labore
                rem illum totam dolorem quam saepe harum reprehenderit
                consequatur fugit praesentium dolore delectus modi, veritatis
                debitis officiis enim blanditiis facere!
              </p>
              <button class="type-button" onClick={() => { this.props.history.push('/login') }}>Start Learning</button>
            </div>
          </section>
        </header>
      </div>
    );
  }
}
