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
import { portfolioContent, projectContent, skillContent, upcomingProjects } from './data/portfolio-content'

function App() {
  const [activeOverview, setActiveOverview] = useState(null);
  const updateActiveOverview = (id) => {
    let clickedProjId = id.replace(/[a-z]+-/i, '');
    let oldProjId = activeOverview;
    
    if(activeOverview === null) {
      setActiveOverview(clickedProjId);
      document.querySelector(`#project-${clickedProjId}`).classList.toggle('active-project');
    }
    else if (activeOverview !== clickedProjId) {
      document.querySelector(`#project-${oldProjId}`).classList.toggle('active-project');
      setActiveOverview(clickedProjId);
      document.querySelector(`#project-${clickedProjId}`).classList.toggle('active-project');
    } else {
      setActiveOverview(null)
      document.querySelector(`#project-${clickedProjId}`).classList.toggle('active-project');
    }
  };

  function generateChildContent(sectionName) {
    let childContent = '';

    switch (sectionName) {
      case 'Projects':
        childContent = (
          projectContent.map(project => {
              return (
                <Project
                  key={project.projectId} 
                  project={project} 
                  onClick={updateActiveOverview} 
                  projectId={project.projectId}
                />
              );
            }))
        break;

      case 'Upcoming Projects':
        childContent = (
          upcomingProjects.map(project => {
            return (
              <Project
                key={project.projectId}
                project={project}
                onClick={updateActiveOverview}
                projectId={project.projectId}
              />
            );
          }))
        break;

      case 'Skills':
        childContent = (
          <div id='skill-carousel'>
            <div className='skill-list'>
              {
                skillContent.map(skill => {
                  return (
                    <Skill
                      key={skill.skillName}
                      skill={skill}
                    />
                  )
                })
              }
            </div>
            <div className='skill-list' aria-hidden>
            {
              skillContent.map(skill => {
                return (
                  <Skill
                    key={skill.skillName}
                    skill={skill}
                  />
                )
              })
            }
          </div>
        </div>
        );
        break;
      default:
        childContent = null;
    }

    return childContent;
  }

  return (
    <>
      <Navbar/>

      <main>
        <ContactMe/>
        <div id="main-content">
          {
            portfolioContent.map(section => {
              return (
                <PortfolioSection
                  key={section.sectionId}
                  sectionName={section.sectionName}
                  sectionContent={section.content}
                  activeProject={activeOverview} 
                  children={generateChildContent(section.sectionName)}
                />
              )
            })
          }
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App