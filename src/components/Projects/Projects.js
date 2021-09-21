import React from 'react';

let elemStyle = {marginRight: "100%"}
function Projects() {
    return (
    <div>
        <h2>These are my projects:</h2>
  
  
  <div className="content">
    <section id="projects"></section>
    <a href="https://github.com/MSarfarazH/employee-database"/>
    <img src="./employee-database-icon.png" alt="employee-database-icon" style={elemStyle} />
    <h3>Employee Database</h3>
  </div>


  <div className="column">
    <a href="https://github.com/MSarfarazH/budget-tracker"/>
    <div className="content2">
    <img src="./public/castle.jpg" alt="money-icon" style={elemStyle}/>
      <h3>Budget Tracker</h3>
    </div>
  </div>

  <div className="column">
    <a href="https://github.com/MSarfarazH/tech-blog-app"/>
    <div className="content2">
    <img src="./public/snow.jfif" alt="letter-icon" style={elemStyle}/>
      <h3>Tech Blog App</h3>
    </div>
  </div>

  <div className="column">
    <a href="https://github.com/MSarfarazH/work-day-scheduler"/>
    <div className="content2">
    <img  src="./public/underwater.jpg" alt="calender-icon" style={elemStyle}/>
      <h3>Work Day Scheduler</h3>
    </div>

  </div>
  
  <div className="column">
    <a href="https://github.com/MSarfarazH/workout-tracker"/>
    <div className="content2">
    <img  src="./public/underwater.jpg" alt="fitness-icon" style={elemStyle}/>
      <h3>Workout Tracker</h3>
    </div>

  </div>

</div>


    )
}

export default Projects