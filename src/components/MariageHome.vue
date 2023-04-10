<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
	<div class="p-5 bg-white rounded">
		<h1 >
			Mariage de Morgane et Romain <br>
			11 novembre 2023 <br>
			Castel Perralda, Espagne
		</h1>
		<img src="/src/assets/vista-de-la-fachada-principal.jpg" class="fade-in">
	</div>
	
</template>

<style scoped>

</style>