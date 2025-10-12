
import HomeIntro from './HomeIntro';
import Skill from './Skill';
import Project from './Project';
import Education from './Education';
import ContactMe from './ContactMe';
import '../CSS/Home.css';

function Home() {


  return (  
    <div className="home">
          <HomeIntro />
          <Skill />
          <Project />
          <Education />
          <ContactMe /> 
    </div>
  );
}


export default Home;
