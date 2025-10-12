import { python, javascript, csharp, html, css } from '../images/index';

import '../CSS/Skill.css';

function Skill() {

  return (
    <div className="Skill">

      <div className='skill-container'>Skill</div>
      <div className='containerlanguage'>
        <img src={python} alt="python" className='programlanguage' />
        <img src={javascript} alt="javascript" className='programlanguage' />
        <img src={csharp} alt="csharp" className='programlanguage' />
        <img src={html} alt="html" className='programlanguage' />
        <img src={css} alt="css" className='programlanguage' />
      </div>
    </div>
  );
}

export default Skill;
