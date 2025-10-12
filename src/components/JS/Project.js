import { javascript, html, css } from '../images/index';
import '../CSS/Project.css';



function Project() {

  return (
    <div className ="Project">
<div className='projectIni'>Project</div>
      <div className='project-container'>
        <div className='projectli'>
          Portfolio version 02
          <div className='projectDes'>
            Personal portfolio site using HTML, CSS, JavaScript<br/>
            - Designed and developed a personal portfolio website.<br/>
            - Implemented responsive design to ensure optimal viewing experience across devices.<br/>
            - Utilized JavaScript to add interactive elements and enhance user engagement.<br/>
            - Deployed the website using GitHub Pages for easy access and sharing.<br/>
            - Link: <a href="https://suhyunsue.github.io/Portfolio_2/" target="_blank" rel="noopener noreferrer">View Project</a><br/>
            <img src={javascript} alt="javascript" className='ForProject-icon' />
            <img src={html} alt="html" className='ForProject-icon' />
            <img src={css} alt="css" className='ForProject-icon' /><br/>

          </div>
        </div>
      </div>
      </div>
  );
}

export default Project;
