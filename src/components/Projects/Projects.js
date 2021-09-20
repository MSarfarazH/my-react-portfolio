import React from 'react';

function Projects() {
    return (
    <div>
        <h2>These are my projects:</h2>
  
  
  <div class="content">
    <section id="projects"></section>
    <a href="https://github.com/MSarfarazH/employee-database"/>
    <img src="./Assets/stars.jpg" alt="Stars" style="width:100%" />
    <h3>Employee Database</h3>
  </div>
    

    <div class="column">
      <div class="content2">
      <a href="https://github.com/MSarfarazH/VisualExplorerRailsApp"/>
      <img src="./Assets/mountain.jpg" alt="Mountains" style="width:100%" />
      <h3>Visual Explorer</h3>
    </div>
    </div>

  <div class="column">
    <a href="https://github.com/MSarfarazH/03-password-generator"/>
    <div class="content2">
    <img src="./Assets/castle.jpg" alt="Castle" style="width:100%"/>
      <h3>Password Generator</h3>
    </div>
  </div>

  <div class="column">
    <a href="https://github.com/MSarfarazH/Code-Quiz"/>
    <div class="content2">
    <img src="./Assets/snow.jfif" alt="snow" style="width:100%"/>
      <h3>Code Quiz</h3>
    </div>
  </div>

  <div class="column">
    <a href="https://github.com/MSarfarazH/work-day-scheduler"/>
    <div class="content2">
    <img  src="./Assets/underwater.jpg" alt="underwater" style="width:100%"/>
      <h3>Work Day Scheduler</h3>
    </div>

  </div>

</div>


    )
}

export default Projects