<template>
  <div id='curriculum-home'>
      <h1>Obrigado por me dar uma chance!</h1>
      <span class='img'></span>
  </div>
</template>

<script lang='ts' src='./curriculumHome'/>


<style scoped>
    #curriculum-home{
        text-align:center;
        font-family: ancient-modern-tales;
        text-shadow: 2px 2px 2px black;
        letter-spacing: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width:100%;
        background: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2018%2F04%2Fpixel-art-wallpaper-gif-13.gif&f=1&nofb=1') no-repeat center;
        background-size: 100% 100%;
    }

    h1{
        margin:0;
    }

    .img{
        position: absolute;
        right:0;
        bottom:0;
        height: 10vh;
        width:20vh;
        background:url('http://pixelartmaker.com/art/468e1fa8673eafe.png') no-repeat center;
        background-size:100%;
        animation-name: arrow;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        cursor: pointer;
    }

    @media (max-width : 600px){
        #curriculum-home{
            background-size: 250% 100%;
        }
    }

    @keyframes arrow {
        0%   {transform: translate(0,0);}
        50%  {transform: translate(-30px,0);}
        100% {transform: translate(0,0);}
    }
</style>