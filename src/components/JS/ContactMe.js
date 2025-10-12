import '../CSS/ContactMe.css';
import { linkedin, git, insta, email } from '../images/index';



function ContactMe() {
      const contacts = [
    { src: linkedin, alt: "linkedin", url: "https://www.linkedin.com/in/suhyun-jeong-4b0631235/", text: "LinkedIn" },
    { src: git, alt: "git", url: "https://github.com/SuhyunSue", text: "GitHub" },
    { src: insta, alt: "insta", url: "https://www.instagram.com/daily_89_25/", text: "Instagram" },
    { src: email, alt: "email", url: "mailto:jeong.suhyun1632@gmail.com", text: "Email" }];
  return (
    <div className="ContactMe">
      <div className='contactsec'>Contact</div>
      <div className='Contact-container'>
       {contacts.map((item, idx) => (
        <a key={idx} href={item.url} target="_blank" rel="nooppener noreferrer" className='ContactForHome'>
          {item.text}
        </a>
       ))}
      </div>
    </div>

  );
}

export default ContactMe;
