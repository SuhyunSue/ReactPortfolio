import centerimg from '../../components/images/Dinner.jpg';
import { ReactTyped } from 'react-typed';
import '../CSS/HomeIntro.css';
import {  linkedin, git, insta, email } from '../images/index';


function HomeIntro() {
    const contacts = [
    { src: linkedin, alt: "linkedin", url: "https://www.linkedin.com/in/suhyun-jeong-4b0631235/", text: "LinkedIn" },
    { src: git, alt: "git", url: "https://github.com/SuhyunSue", text: "GitHub" },
    { src: insta, alt: "insta", url: "https://www.instagram.com/daily_89_25/", text: "Instagram" },
    { src: email, alt: "email", url: "mailto:jeong.suhyun1632@gmail.com", text: "Email" }];

  return (
    <div className="homeIntro">
  <div className="imgContainer">
    <img src={centerimg} alt="Dinner" className='centerimg' /></div>
    <div className='mainWriting'>Hi, I am Suhyun.<br /> I can be a <br />
    <ReactTyped
        strings={["Web developer", "Data Analyst", "Youre Friend", "Youre Colleague", "Problem Solver"]}
        typeSpeed={50}
        backSpeed={25}
        loop/>
    </div>

            <div className="contactContainer">
        {contacts.map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="nooppener noreferrer">
            <img src={item.src} alt={item.alt} className='contact' />
          </a>
        ))}
      </div>
    </div>
  );
}

export default HomeIntro;
