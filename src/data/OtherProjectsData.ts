import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Sorlar System Simulator", "img/other-projects/SolarSystemGif.gif", `
      <div class="paragraph">
        I collaborated with a team of three to develop this solar system simulator as the final project for the Computer Graphics 
        (CS105) course at the University of Information Technology.
      </div>

      <div class="paragraph">
        Main features:
        <ul>
        <li>Recreates the orbital and axial motion of Solar System planets with interactive 3D visuals.</li>
        <li>Users can select planets via a friendly UI, zoom in for close-up views, and toggle grid/orbit lines to enhance 
        spatial understanding.</li>
        <li>Each planet features a detailed info panel showing physical attributes like diameter, mass, and rotation speed.</li>
        <li>Includes time control slider, simulation clock, and optional background music for a tailored viewing experience.</li>
        </ul>
      </div>

      <div>Technology: Threejs, React-three-fiber.</div>

      <div class="paragraph">
          <div class="notice">
          Source code is available on <a href="https://github.com/tuananhnguyen2004/CS105-computer-graphics" target="_blank">GitHub</a>.
          </div>
      </div>

      <div class="paragraph center">
        <img class="pc-screenshot" src="img/other-projects/Grid-Orbit.jpg" alt="Grid Orbit" />
        <img class="pc-screenshot" src="img/other-projects/Planet-selection.jpg" alt="Planet Selection" />
        <img class="pc-screenshot" src="img/other-projects/Self-rotation.jpg" alt="Self Rotation" />
        <img class="pc-screenshot" src="img/other-projects/Speed.jpg" alt="Speed Modifier" />
      </div>
      `, "#2d918e", false, true)
];