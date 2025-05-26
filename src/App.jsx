import { useState } from 'react'

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
  const [activeOverview, setActiveOverview] = useState(projectContent[0].projectId);
  const updateActiveOverview = (id) => setActiveOverview(id.replace(/[a-z]+-/i, ''));

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
                  key={section.sectionName}
                  sectionName={section.sectionName}
                  sectionContent={section.content}
                  activeProject={activeOverview} 
                />
              )
            })
          }

          <PortfolioSection
            sectionName={portfolioContent[3].sectionName}
            sectionContent={portfolioContent[3].content}
            activeProject={activeOverview} 
            children={
              projectContent.map(project => {
                return (
                  <Project
                    key={project.projectId} 
                    project={project} 
                    onClick={updateActiveOverview} 
                    projectId={project.projectId}
                  />
                );
              })
            }
          />

          <PortfolioSection
            sectionName={portfolioContent[4].sectionName}
            sectionContent={portfolioContent[4].content}
            activeProject={activeOverview} 
            children={
              <div id="skill-list">
                {
                  skillContent.map(skill => {
                    return (
                      <Skill
                        key={skill.skillName}
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