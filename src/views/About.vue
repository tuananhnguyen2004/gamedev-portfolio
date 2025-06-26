<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Nguyễn Lê Tuấn Anh</strong>, a college student majoring in Information Systems at the University of Information Technology
        and an aspiring game developer with 2 years of experience.
      </div>

      <div style="margin-top: 20px;">Here's some <router-link to="/game-projects">games</router-link> that I've worked on in my free time (either to showcase my Unity skills or just playing around).</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as an Intern Unity Game Developer. You can reach me at <a href="mailto:nguyenletuananh456@gmail.com">nguyenletuananh456@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Tuan Anh's avatar" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.photo img {
  border-radius: 50%;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>