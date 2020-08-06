<!-- @format -->

<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
@font-face {
	font-family: goblin-appears;
	src: url("./assets/Fonts/gamegirl-classic-font/GamegirlClassic-9MVj.ttf");
}

@font-face {
	font-family: ancient-modern-tales;
	src: url("./assets/Fonts/ancientModernTales/AncientModernTales-a7Po.ttf");
}

body {
	position: fixed;
	padding: 0;
	margin: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#app {
	font-family: Courier;

	height: 100%;
	width: 100%;

	color: white;

	background: rgb(154, 172, 190);
	background: linear-gradient(
		315deg,
		rgba(0, 43, 85, 1) 0%,
		rgba(9, 102, 121, 1) 49%,
		rgba(0, 189, 212, 1) 100%
	);
}
</style>
