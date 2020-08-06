<!-- @format -->

<template>
  <b-container fluid id="curriculum">
    <h1>Vinicius Romão dos Santos 1.0</h1>
    <h3>Target job - Game Developer</h3>
    <div id="header">
      <div class="img" />
      <ul>
        <li><strong>Email:</strong> vinicius@kesselnebula.com</li>
        <li><strong>Phone:</strong> +55 (21) 99999-6907</li>
        <li><strong>Adress:</strong> Maria da Graça - Rio de Janeiro</li>
      </ul>
    </div>
    <div class="text">
      Hello my name is Vinicius Romão dos Santos, I was born in Vitória-ES
      Brazil, I'm 26, and I also attending classes at Federal University of Rio
      de Janeiro. Probably studying right now for a very intense test that's
      here to come. I made this site to store all my projects an thoughts in one
      place, for training front-end and back-end, not to become a full stack but
      beacuse I like making this little projects on my own. I also like to play
      piano but nowadays I'm a little bit rusted hehe. My main interest for
      years is creating video games. Now I'm focusing creating games using
      Vue.js, just for learning this new framework.
    </div>
    <h3>Abilities:</h3>
    <div id="abilities">
      <div style="margin:0" class="card">
        <div class="image html"></div>
        <h6>HTML</h6>
        <h6>Dominated</h6>
        <p class="card-text">
          As the fundamental tool for webdeveloping I'm working with it for
          years.
        </p>
      </div>

      <div class="card">
        <div class="image css"></div>
        <h6>CSS</h6>
        <h6>Dominated</h6>
        <p class="card-text">
          Same case as HTML, this page was made using CSS from scratch, and a
          little bit of bootstrap.
        </p>
      </div>

      <div class="card">
        <div class="image js"></div>
        <h6>Javascript</h6>
        <h6>Dominated</h6>
        <p class="card-text">
          To end the 3 basic tools of web developing.
        </p>
      </div>

      <div class="card">
        <div class="image react"></div>
        <h6>React.js</h6>
        <h6>Very good</h6>
        <p class="card-text">
          I've been using React as my main framework for years, and I'm pretty
          used to it.
        </p>
      </div>

      <div class="card">
        <div class="image redux"></div>
        <h6>Redux</h6>
        <h6>Very good</h6>
        <p class="card-text">
          I used Redux with React since the beggining.
        </p>
      </div>

      <div class="card">
        <div class="image vue"></div>
        <h6>Vue.js</h6>
        <h6>Intermediate</h6>
        <p class="card-text">
          I'm new with Vue.js, I'm learning a lot, this page is implemented
          using it.
        </p>
      </div>

      <div class="card">
        <div class="image typescript"></div>
        <h6>Typescript</h6>
        <h6>Intermediate</h6>
        <p class="card-text">
          Learning with Vue.js and is present on this page.
        </p>
      </div>

      <div class="card">
        <div class="image nodejs"></div>
        <h6>Node.js</h6>
        <h6>Novice</h6>
        <p class="card-text">
          I'm learning Express to develop node.js backend
        </p>
      </div>
    </div>

    <h3>Graduation:</h3>
    <div class="text">
      I'm currently attending classes on Electronical and Computational
      Engineering at Federal University of Rio de Janeiro (UFRJ), and I'll end
      this journey at 2021/2, it can be delayed by COVID-19 pandemic.
    </div>

    <h3>Experience:</h3>
    <div class="text">
      I've been working with front-end technologies since february 2019.
      <ul>
        <li>
          <strong
            ><a href="https://fluxoconsultoria.poli.ufrj.br" target="_blank"
              >Fluxo Consultoria</a
            >:</strong
          >This was my first job. It was a initiative inside my university for
          people who those wanted to take a closer look to extern labor market,
          it started <strong>February 2019</strong>
          and ended in June 2020 (1 and a half year). I've worked primarly with
          React and Redux making Websystems for big Companies in Brazil and also
          managing some other projects.

          <ul>
            <li>
              <strong>Web Developing:</strong> Since the begigining of this job
              I've been working on various projects only on front-end. The
              biggest project was a Webapp for a big energy company in Brazil
              called Neoenergia. This project consists in a productivity
              management app around daily tasks on that company, it took 2
              months to finish the developing and it was all based on a design
              made with AdobeXD by another company. It's still running!
            </li>
            <li>
              <strong>Managing:</strong>By the end of 2019 I've been selected to
              be product manager of 2 projects. This time I've mastered the arts
              of comunication, working in group and customer services. The
              biggest knoledge I've gathered this period was working with SCRUM
              and UI/UX services.
            </li>
          </ul>
        </li>
        <li>
          <strong
            ><a href="http://www.owse.com.br/" target="_blank">OWSE</a>:</strong
          >
          This was my best expierence in the labor market so far, It's a
          software factory company and my best chance to learn back-end
          frameworks profissionaly. Started at 01 June 2020. I'm changing some
          webapps layout using Vue.js and Bootstrapvue.
        </li>
      </ul>
    </div>

    <h3>Certificates and Courses:</h3>
    <div id="knowledges">
      <div style="margin:0" class="card">
        <div class="image ufrj"></div>
        <h6>UFRJ - Graduation</h6>
        <p class="card-text">
          Electronic and Computational<br />
          Engineering
        </p>
      </div>

      <div class="card">
        <div class="image usa"></div>
        <h6>English</h6>
        <h6>Good</h6>
        <p class="card-text">
          Complete course on Bobidiomas. A little but excelent english course
          inside my campus.
        </p>
      </div>

      <div class="card">
        <div class="image scrum"></div>
        <h6>SCRUM</h6>
        <p class="card-text">
          Completed an intense 2 <br />weeks course at Caelum.
        </p>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts" src="./curriculum.ts"></script>

<style scoped>
#curriculum {
  padding: 2% 5%;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  background-color: #444;
  box-sizing: border-box;
}

.img {
  height: 18vh;
  width: 18vh;
  background: url("../../assets/images/me.png") no-repeat;
  background-size: 130%;
  background-position: 20% 0%;
  border-radius: 1000px;
}

a {
  color: white;
}

#header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.text {
  width: 80%;
}

#knowledges {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
  max-width: 100%;
  height: 35%;
  margin-right: 10vw;
}

#abilities {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  max-width: 100%;
  height: 35%;
  margin-right: 10vw;
}

.card {
  text-align: center;
  margin-left: 1vw;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  min-width: 150px;
  height: 90%;
  border-radius: 5px;
  background-color: #666;
  box-shadow: 2px 2px 2px #333;
}

.image {
  height: 50%;
  width: 100%;
}

* {
  font-size: 14px;
}

h1 {
  font-size: 20px;
}

h6 {
  margin: 0;
}

.card-text {
  font-size: 10px;
  width: 100%;
}

.html {
  background: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.w3.org%2Fhtml%2Flogo%2Fdownloads%2FHTML5_Logo_512.png&f=1&nofb=1")
    no-repeat center;
  background-size: 50%;
}

.css {
  background: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fopencode.us%2Fwp-content%2Fuploads%2F2013%2F10%2Fcss3_logo.png&f=1&nofb=1")
    no-repeat center;
  background-size: 35%;
}

.js {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb6%2FBadge_js-strict.svg%2F739px-Badge_js-strict.svg.png&f=1&nofb=1")
    no-repeat center;
  background-size: 37%;
}

.react {
  background: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1")
    no-repeat center;
  background-size: 45%;
}

.redux {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1")
    no-repeat center;
  background-size: 45%;
}

.vue {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F1200px-Vue.js_Logo_2.svg.png&f=1&nofb=1")
    no-repeat center;
  background-size: 45%;
}

.typescript {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FT%2Ftypescript-logo-B29A3F462D-seeklogo.com.png&f=1&nofb=1")
    no-repeat center;
  background-size: 45%;
}

.ufrj {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F2%2F2a%2FBras%25C3%25A3o_da_UFRJ.png%2F220px-Bras%25C3%25A3o_da_UFRJ.png&f=1&nofb=1")
    no-repeat center;
  background-size: 45%;
}

.usa {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe0%2FUnited_States_flag_waving_icon.svg%2F1280px-United_States_flag_waving_icon.svg.png&f=1&nofb=1")
    no-repeat center;
  background-size: 55%;
}

.scrum {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluralsight2.imgix.net%2Fpaths%2Fimages%2Fscrum-a5c44d8364.png&f=1&nofb=1")
    no-repeat center;
  background-size: 70%;
}

.nodejs {
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd9%2FNode.js_logo.svg%2F1920px-Node.js_logo.svg.png&f=1&nofb=1")
    no-repeat center;
  background-size: 70%;
}

/* Scrollbar stylization */
::-webkit-scrollbar {
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
