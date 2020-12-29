import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
class Components extends React.Component {
  componentDidMount() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    )
    if (window.location.href.lastIndexOf('#') > 0)
      document.getElementById(href).scrollIntoView()
    window.addEventListener('scroll', this.updateView)
    this.updateView()
  }
  componentDidUpdate() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    )
    document.getElementById(href).scrollIntoView()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateView)
  }
  easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }
  updateView() {
    var contentSections = document.getElementsByClassName('cd-section')
    var navigationItems = document
      .getElementById('cd-vertical-nav')
      .getElementsByTagName('a')

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute('data-number'), 10) - 1
      if (
        contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById('main-panel').offsetTop <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById('main-panel').offsetTop >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add('is-selected')
      } else {
        navigationItems[activeSection].classList.remove('is-selected')
      }
    }
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target)
    this.scrollTo(document.documentElement, targetScroll.offsetTop, 900)
  }
  scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start + document.getElementById('main-panel').offsetTop,
      currentTime = 0,
      increment = 20

    var animateScroll = function() {
      currentTime += increment
      var val = this.easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }.bind(this)
    animateScroll()
  }
export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NPC HOSTING"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Host your gameserver in the cloud.</h1>
              <h4>
                Indian Datacenter - Mumbai & Hyderabad, 
                Gameserver Panel, 
                Free DDOS Protection, 
                24/7 Support
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=anANeBaEw0s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch how
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
        <nav id='cd-vertical-nav'>
          <ul>
            <li>
              <a
                href='#buttons'
                data-number='1'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('buttons')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Basic Elements</span>
              </a>
            </li>
            <li>
              <a
                href='#navigation'
                data-number='2'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('navigation')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Navigation</span>
              </a>
            </li>
            <li>
              <a
                href='#notifications'
                data-number='3'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('notifications')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Notifications</span>
              </a>
            </li>
            <li>
              <a
                href='#footers'
                data-number='4'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('footers')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Footers</span>
              </a>
            </li>
            <li>
              <a
                href='#typography'
                data-number='5'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('typography')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Typography</span>
              </a>
            </li>
            <li>
              <a
                href='#contentAreas'
                data-number='6'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('contentAreas')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Content Areas</span>
              </a>
            </li>
            <li>
              <a
                href='#cards'
                data-number='7'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('cards')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Cards</span>
              </a>
            </li>
            <li>
              <a
                href='#morphingCards'
                data-number='8'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('morphingCards')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Morphing Cards</span>
              </a>
            </li>
            <li>
              <a
                href='#javascriptComponents'
                data-number='9'
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  this.smoothScroll('javascriptComponents')
                }}
              >
                <span className='cd-dot' />
                <span className='cd-label'>Javascript</span>
              </a>
            </li>
          </ul>
        </nav>
      <Footer />
    </div>
  );
}
