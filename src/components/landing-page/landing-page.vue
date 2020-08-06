<!-- @format -->

<template>
  <div id="landing-page">
    <div @click="goToCurriculum()" class="button">
      <img
        style="margin-left: 5px"
        class="icon"
        src="https://scontent.fvix1-1.fna.fbcdn.net/v/t1.0-9/12360163_904882306265480_7113064388964326956_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=JhcN5IHbBj4AX8-Z3yY&_nc_ht=scontent.fvix1-1.fna&oh=f3c796c7e6ca91879af5409ea149b0e7&oe=5F3100EE"
        alt="profile-photo"
      />
      <p style="margin-left: 10px">Curriculum Vitae - Vinicius Romão</p>
    </div>

    <div @click="goToGame()" class="button">
      <p style="margin-left: 10px">Game</p>
    </div>
    <div @click="goToCanvas()" class="button">
      <p style="margin-left: 10px">Canvas</p>
    </div>
  </div>
</template>

<script lang="ts" src="./landing-page.ts" />

<style scoped>
#landing-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.button {
  padding: 1vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 22vw;
  height: 10vh;
  border-radius: 1000px;
  background-color: rgba(7, 7, 7, 0.5);
  cursor: pointer;
}
.button:hover {
  background-color: rgba(4, 4, 4, 0.6);
}

.icon {
  border-radius: 1000px;
  height: 10vh;
  width: 10vh;
}

.image {
  height: 30vh;
  width: 30vw;
}
</style>
