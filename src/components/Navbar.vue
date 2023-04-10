<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>

<template>
	<Navbar class="bg-white dark:bg-white fixed w-full z-20 top-0 left-0">
		<template #logo>
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center">
			<span class="self-center text-2xl font-semibold blackspace-nowrap text-black hover:text-yellow-900">Morgane et Romain</span>
		</a>
			</div>
		</template>
		<template #default="{isShowMenu}">
		<NavbarCollapse :isShowMenu="isShowMenu" class="items-left justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
		  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0">
			<NavbarLink>
			 <router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent" to="/">Déroulé de la cérémonie</router-link>
			</NavbarLink>
			<NavbarLink>
				<router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent" to="/rsvp">RSVP</router-link>
			  </NavbarLink>
			<NavbarLink>
				<router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent" to="/transports">Transports</router-link>
			</NavbarLink>
			<p class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent"> Morgane - 06.64.17.04.23</p>
			<p class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent"> Romain - 06.75.85.76.99</p>
		  </ul>
		</NavbarCollapse>
		</template>
	  </Navbar>
</template>

<style>

</style>
<!-- <script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>
<template>
    <Navbar class="bg-white dark:bg-white fixed w-full z-20 top-0 left-0">
      <template #logo>
		<a href="/" class="flex items-center">
			<span class="self-center text-2xl font-semibold blackspace-nowrap text-black hover:text-yellow-900">Morgane et Romain</span>
		</a>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu" >
          <NavbarLink is-active><router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent" to="/">Déroulé de la cérémonie</router-link></NavbarLink>
          <NavbarLink><router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent" to="/rsvp">RSVP</router-link></NavbarLink>
          <NavbarLink><router-link class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent" to="/transports">Transports</router-link></NavbarLink>
          <p class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent"> Morgane - 06.64.17.04.23</p>
			<p class="block py-2 pl-3 pr-4 text-black-900 rounded hover:text-yellow-900 md:p-0 md:bg-transparent"> Romain - 06.75.85.76.99</p>
        </NavbarCollapse>
      </template>
 
    </Navbar>
</template> -->
