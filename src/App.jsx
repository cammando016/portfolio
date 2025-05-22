import './App.css'

import Navbar from './components/nav-bar'
import ContactMe from './components/contact-me'
import PortfolioSection from './components/portfolio-section'
import Project from './components/project'
import Skill from './components/skill'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>

      <main>
        <ContactMe/>
        <div id="main-content">
          <PortfolioSection
            sectionName={'Home'}
          />

          <PortfolioSection
            sectionName={'About Me'}
          />

          <PortfolioSection
            sectionName={'Education'}
          />

          <PortfolioSection
            sectionName={'Projects'}
            children={[<Project/>, <Project/>]}
          />

          <PortfolioSection
            sectionName={'Skills'}
            children={
              <div id="skill-list">
                <Skill 
                  skillName="HTML"
                  logoImgSrc="html-logo.svg"
                />
                <Skill 
                  skillName="CSS"
                  logoImgSrc="css-logo.svg"
                />
                <Skill 
                  skillName="JavaScript"
                  logoImgSrc="js-logo.png"
                />
              </div>
            }
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App