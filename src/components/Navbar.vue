<template>
	<nav class="bg-white dark:bg-white fixed w-full z-20 top-0 left-0">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center">
			<span class="self-center text-2xl font-semibold blackspace-nowrap text-black hover:text-yellow-900">Morgane et Romain</span>
		</a>
		<div class="items-left justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
		  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0">
			<li>
			 <router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900" to="/">Déroulé de la cérémonie</router-link>
			</li>
			<li>
				<router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900" to="/rsvp">RSVP</router-link>
			  </li>
			<li>
				<router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900" to="/transports">Transports</router-link>
			</li>
			<p class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900"> Morgane - 06.64.17.04.23</p>
			<p class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900"> Romain - 06.75.85.76.99</p>
		  </ul>
		</div>
		</div>
	  </nav>
	  
</template>

<script>
export default {

}
</script>

<style>

</style>