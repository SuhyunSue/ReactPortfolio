import '../CSS/Education.css';

function Education() {
  const educations = [
    { year: "2013 - 2015", degree: "Master of Medical Science, Cha University (Korea)" },
    { year: "2023 - 2025", degree: "Master of Information Technology, Queensland University of Technology (Australia)" },
  ];

  return (
    <div className='education'>
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
    </div>
  );
}

export default Education;
