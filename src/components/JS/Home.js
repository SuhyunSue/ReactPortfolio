import centerimg from '../../components/images/Dinner.jpg';
import linkedin from '../images/linkedin.jpg';
import git from '../images/github.png';
import insta from '../images/instagram.png';
import email from '../images/email.png';
import python from '../images/python.png';
import javascript from '../images/java-script.png';
import csharp from '../images/C#.png';
import html from '../images/html.png';
import css from '../images/css.png';
import { ReactTyped } from 'react-typed';


function Home() {
  const contacts = [
    { src: linkedin, alt: "linkedin", url: "https://www.linkedin.com/in/suhyun-jeong-4b0631235/" },
    { src: git, alt: "git", url: "https://github.com/SuhyunSue" },
    { src: insta, alt: "insta", url: "https://www.instagram.com/daily_89_25/" },
    { src: email, alt: "email", url: "mailto:jeong.suhyun1632@gmail.com" }];

  const educations = [
    { year: "2013 - 2015", degree: "M.Sc. Medical Science, Cha University" },
    { year: "2023 - 2025", degree: "M.Sc. Information Technology, QUT" },
  ];

  return (
    <div className="home">
      <div className="imgContainer">
        <img src={centerimg} alt="Dinner" className='centerimg' /></div>
      <div className='mainWriting'>Hi, I am Suhyun.<br /> I can be a <br />
        <ReactTyped
          strings={["Web developer", "Data Analyst", "Youre Friend", "Youre Colleague", "Problem Solver"]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      </div>
      <div className="contactContainer">
        {contacts.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="nooppener noreferrer">
            <img src={item.src} alt={item.alt} className='contact' />
          </a>
        ))}
      </div>
      <div className='skill-container'>Skill</div>
      <div className='containerlanguage'>
        <img src={python} alt="python" className='programlanguage' />
        <img src={javascript} alt="javascript" className='programlanguage' />
        <img src={csharp} alt="csharp" className='programlanguage' />
        <img src={html} alt="javascript" className='programlanguage' />
        <img src={css} alt="csharp" className='programlanguage' />
      </div>

      <div className='projectIni'>Project</div>
      <div className='project-container'>
        <div className='projectli'>
          Portfolio version 01
          <div className='projectDes'>
            explain blahblah
          </div>
          <img src={javascript} alt="javascript" className='projectLang' />
          <img src={html} alt="javascript" className='projectLang' />
          <img src={css} alt="csharp" className='projectLang' />
        </div>
      </div>
      <div className='project-container'>
        <div className='projectli'>
          Portfolio version 01
          <div className='projectDes'>
            explain blahblah
          </div>
          <img src={javascript} alt="javascript" className='projectLang' />
          <img src={html} alt="javascript" className='projectLang' />
          <img src={css} alt="csharp" className='projectLang' />
        </div>
      </div>

      <div className='educationsec'>Education</div>
      <div className="timeline">
        {educations.map((edu, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="content">
              <h3>{edu.year}</h3>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='contactsec'>Contact</div>
      <div className='Contact-container'>
        <a href="mailto:jeong.suhyun1632@gmail.com" target="_blank" rel="noopener noreferrer" className="ContactForHome">Email</a>
        <a href="https://wa.me/61416159424?text=Hello%20Suhyun!" target="_blank" rel="noopener noreferrer" className="ContactForHome"> WhatsApp me</a>
      </div>

      <div className='Contact-container'>
        <a href="mailto:jeong.suhyun1632@gmail.com" target="_blank" rel="noopener noreferrer" className="ContactForHome">linked in</a>
        <a href="https://wa.me/61416159424?text=Hello%20Suhyun!" target="_blank" rel="noopener noreferrer" className="ContactForHome"> download resume</a>
      </div>
    </div>
  );
}

export default Home;
