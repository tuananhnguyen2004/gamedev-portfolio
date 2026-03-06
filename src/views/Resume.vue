<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      Game Developer with 2 years of hands-on experience in designing and developing games using Unity Engine. Strong
      foundation in gameplay programming, collaborative development, and problem-solving in fast-paced environments.
      Passionate about creating engaging interactive experiences and continuously learning new tools and techniques in
      game development.

      <div style="margin-top:20px; margin-bottom:10px;">
        <a class="download-link" href="d/TuanAnh_resume_final.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical Skills</h3>
        <SkillRate name="Unity (C#)"/>
        <SkillRate name="Git, GitHub"/>
        <SkillRate name="Visual Studio, Visual Studio Code"/>
        <SkillRate name="Code review, debugging"/>
      </div>

      <div style="clear:both" />

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Teamwork"/>
        <SkillRate name="Communication"/>
        <SkillRate name="Project Management"/>
        <SkillRate name="Problem Solving"/>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>University of Information Technology - VNUHCM</h3>
      <h4>Oct 2022 - Present</h4>
      <strong>Major in Information Systems</strong>
      <div>GPA: 8.14/10.00</div>
      <div>Expected Graduation: June 2026</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>TOEIC (880/990)</div>

      <h3>Vietnamese</h3>
      <div>Native speaker</div>

      <h2>Activities</h2>

      <h3>Lead Developer · <span class="company-name">UIT GamApp Studios</span></h3>
      <h4>Mar 2024 - Mar 2025</h4>

      <ul>
        <li>Oversaw code quality through regular reviews, managed team members' code integration, and performed code refactoring to maintain clean, efficient, and maintainable code for the development team.
        </li>
        <li>Designed and implemented an efficient game development workflow using Git/GitHub, Kanban boards, and
        Scrum/Agile methodologies, significantly improving team collaboration and project management.
        </li>
        <li>Authored a comprehensive Unity training program documentation to onboard and mentor new students,
 accelerating their learning curve and integration into development teams.
        </li>
      </ul>

      <h3>Participant · <span class="company-name">Global Game Jam Vietnam 2025</span></h3>
      <h4>Jan 2025</h4>

      <ul>
        <li>Participated as a programmer in Global Game Jam Vietnam 2025, collaborating closely with a multidisciplinary team to
        develop a complete game within 48 hours.
        </li>
        <li>Implemented movement mechanics and ball grab interaction system for the main character using Unity and C#.
        </li>
        <li>Contributed to debugging and playtesting throughout the jam to ensure functionality and polish.
        </li>
      </ul>

      <h3>Participant · <span class="company-name">Gameloft x HCMUIT Game Dev Club Mentorship</span></h3>
      <h4>July 2024 - Aug 2024</h4>

      <ul>
        <li>Collaborated with a team across two development phases, each resulting in a complete game project.
        </li>
        <li>Designing core game mechanics, prototyping gameplay systems, and scripting interactive elements using Unity and C#.
        </li>
      </ul>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Games</h3>
        <div>I used to play games only for fun when I was in high school. But now, it's also for developing my game design skills.</div>

        <h3>I 🧡 Sports</h3>
        <div>I usually play badminton on weekends, and I'm also planning to start going to the gym soon.</div>

        <h3>I 💛 Anime</h3>
        <div>One Piece is the best anime ever 🙌!!</div>

      </div>
    </div>
    <div class="photo">
      <img src="img/resume_image.jpg" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.company-name {
  opacity: .5;
}

.paragraph {
  max-width: 700px;
  text-align: justify;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 0px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    width: 300px;
    padding-right: 30px; 
  }
}
</style>