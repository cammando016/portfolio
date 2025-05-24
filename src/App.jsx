import './App.css'
//Component Imports
import Navbar from './components/nav-bar'
import ContactMe from './components/contact-me'
import PortfolioSection from './components/portfolio-section'
import Project from './components/project'
import Skill from './components/skill'
import Footer from './components/footer'
//Data Imports
import { portfolioContent, projectContent, skillContent } from './data/portfolio-content'

function App() {

  return (
    <>
      <Navbar/>

      <main>
        <ContactMe/>
        <div id="main-content">
          {
            portfolioContent.filter(section => section.basicSection).map(section => {
              return (
                <PortfolioSection
                  sectionName={section.sectionName}
                  sectionContent={section.content}
                />
              )
            })
          }

          <PortfolioSection
            sectionName={portfolioContent[3].sectionName}
            sectionContent={portfolioContent[3].content}
            children={
              projectContent.map(project => {
                return <Project projectName={project.projectName} projectLink={project.projectLink} projectContent={project.projectOverview}/>;
              })
            }
          />

          <PortfolioSection
            sectionName={portfolioContent[4].sectionName}
            sectionContent={portfolioContent[4].content}
            children={
              <div id="skill-list">
                {
                  skillContent.map(skill => {
                    return (
                      <Skill 
                        skillName={skill.skillName}
                        logoImgSrc={skill.skillImage}
                      />
                    )
                  })
                }
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