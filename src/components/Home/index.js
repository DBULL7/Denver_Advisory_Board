import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import HomeGrid from './HomeGrid.js';
import ReactSVG from 'react-svg';
import './home.scss';

class Home extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    let options = {
      delay: '0',
      duration: '0'
    };
    Scroll.animateScroll.scrollToTop(options);
  }

  componentDidMount() {
    this.scrollAfterLoad();
  }

  scrollAfterLoad() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('home-container', {
        duration: 600,
        delay: 0,
        smooth: true
      });
    }, 700);
  }
  render() {
    return (
      <div id="home-container">
        <div className="home-intro-container">
          <span />

          <h3 data-aos="fade-up">
            We believe in creating and growing professional friendships
            resulting in personal & business success.
          </h3>
          <span />
        </div>
        <section className="home-page-section-1" data-aos="fade-down">
          <div
            src="/"
            data-aos="fade-down"
            className="call-to-action-container"
          >
            <ReactSVG path="computer.svg" style={{ width: 200 }} />
            <NavLink
              className="call-to-action-links"
              onClick={() => {}}
              to={'/'}
            >
              Get Connected
            </NavLink>
          </div>
          <div className="call-to-action-container" data-aos="fade-down">
            <ReactSVG path="chatting.svg" style={{ width: 200 }} />
            <NavLink
              className="call-to-action-links"
              onClick={() => {}}
              to={'/events'}
            >
              COME TO AN EVENT
            </NavLink>{' '}
          </div>
          <div data-aos="fade-down" className="call-to-action-container">
            <ReactSVG path="rocket.svg" style={{ width: 200 }} />
            <NavLink
              className="call-to-action-links"
              onClick={() => {}}
              to={'/'}
            >
              SOAR NETWORK
            </NavLink>
          </div>
        </section>
        <HomeGrid />
      </div>
    );
  }
}
export default Home;
