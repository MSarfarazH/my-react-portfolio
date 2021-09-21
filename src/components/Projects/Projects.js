import React from 'react';

let elemStyle = {marginRight: "100%"}
function Projects() {
    return (
    <div>
        <h2>Here are a few my projects:</h2>
  
  
  <div className="content">
    <section id="projects"></section>
    <a href="https://github.com/MSarfarazH/employee-database">
    <img src="./employee-database-icon.png" alt="employee-database-icon"/>
    <h3>Employee Database</h3>
    </a>
  </div>


  <div className="column">
    <a href="https://github.com/MSarfarazH/budget-tracker">
    <div className="content2">
    <img src="./budget-icon.png" alt="money-icon" style={elemStyle}/>
      <h3>Budget Tracker</h3>
    </div>
    </a>
  </div>

  <div className="column">
    <a href="https://github.com/MSarfarazH/tech-blog-app">
    <div className="content2">
    <img src="./tech-blog-icon.png" alt="letter-icon" style={elemStyle}/>
      <h3>Tech Blog App</h3>
    </div>
    </a>
  </div>

  <div className="column">
    <a href="https://github.com/MSarfarazH/work-day-scheduler">
    <div className="content2">
    <img  src="./scheduler-icon.png" alt="calender-icon" style={elemStyle}/>
      <h3>Work Day Scheduler</h3>
    </div>
    </a>
  </div>
  
  <div className="column">
    <a href="https://github.com/MSarfarazH/workout-tracker">
    <div className="content2">
    <img  src="./workout-icon.png" alt="fitness-icon" style={elemStyle}/>
      <h3>Workout Tracker</h3>
    </div>
    </a>
  </div>

</div>


    )
}

export default Projects