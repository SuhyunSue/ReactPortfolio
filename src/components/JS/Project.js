import { javascript, html, css, react } from '../images/index';
import '../CSS/Project.css';



function Project() {

  return (
    <div className="Project">
      <div className='projectIni'>Project</div>
      <div className='project-container'>
        <div className='projectli'>
          Portfolio version 02
          <div className='projectDes'>
            Personal portfolio website built with HTML, CSS, and JavaScript.<br />
            - Designed and developed a responsive personal website from scratch.<br />
            - Focused on clean layout and accessibility for various screen sizes.<br />
            - Added interactive features using vanilla JavaScript for enhanced user experience.<br />
            - Deployed via GitHub Pages for easy online access and sharing.<br />
            - Tech stack: HTML · CSS · JavaScript<br />
            - Link: <a href="https://suhyunsue.github.io/Portfolio_2/" target="_blank" rel="noopener noreferrer">View Project</a><br />
            <img src={javascript} alt="javascript" className='ForProject-icon' />
            <img src={html} alt="html" className='ForProject-icon' />
            <img src={css} alt="css" className='ForProject-icon' /><br />
          </div>
        </div>
        <div className='projectli'> Portfolio version 03
          <div className='projectDes'>
            Modern portfolio website developed with React and JavaScript.<br />
            - Rebuilt the portfolio site using React components and hooks.<br />
            - Improved performance, scalability, and code maintainability compared to the previous version.<br />
            - Applied responsive design principles and CSS modules for consistent styling.<br />
            - Implemented routing and dynamic rendering for a smooth user experience.<br />
            - Deployed using Vercel for fast, global content delivery.<br />
            - Tech stack: React · JavaScript · CSS<br />
            - Link: <a href="https://react-portfolio-kappa-seven-19.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a><br />
            <img src={javascript} alt="javascript" className='ForProject-icon' />
            <img src={react} alt="react" className='ForProject-icon' />
            <img src={css} alt="css" className='ForProject-icon' /><br />


          </div>
        </div>
      </div>

    </div>
  );
}

export default Project;
