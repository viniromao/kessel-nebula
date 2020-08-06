<template>
	<table id="game">
		<tr v-for="(row,index1) in tiles" :key="index1">
			<td
				@click="tile = 1"
				v-for="(tile,index2) in row"
				:key="index2"
				:class="returnClass(tile)"
			/>
		</tr>
	</table>
</template>

<script lang='ts' src='./game.ts' >
</script>


<style scoped>
#game {
	height: 100%;
	width: 100%;
	border-spacing: 0;
}

td {
	border: 2px solid black;
	cursor: pointer;
}

.not-selected {
	background-color: white;
}
.x {
	background-color: red;
}
.o {
	background-color: blue;
}
</style>