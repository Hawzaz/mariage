<script setup>
import Navbar from './Navbar.vue'


</script>

<template>
	<Navbar></Navbar>
	<body>
		<div class="p-5 bg-white rounded">
			<title>Présentation de l'événement</title>
			<table>
				<tr>
				  <th>Heure</th>
				  <th>Activité</th>
				  <th>Lieu</th>
				</tr>
				<tr>
					<td>11 11 2023</td>
				</tr>
				<tr>
				  <td>12h</td>
				  <td>Arrivée des invités</td>
				  <td class="tooltip">Castell Peralada
					<span class="tooltiptext">Parking disponible en entrant dans le parc du château</span>
					</td>
				</tr>
				<tr>
				  <td>13h</td>
				  <td>Cérémonie religieuse</td>
				  <td>Iglesia del Carmen, Castell Peralada</td>
				</tr>
				<tr>
				  <td>14h</td>
				  <td>Vin d'honneur</td>
				  <td>Castell Peralada</td>
				</tr>
				<tr>
				  <td>16h</td>
				  <td>Repas</td>
				  <td>Castell Peralada</td>
				</tr>
				<tr>
				  <td>19h</td>
				  <td>Soirée dansante</td>
				  <td>Castell Peralada</td>
				</tr>
			  </table>
		</div>
	</body>
	
	
</template>

<style scoped>

</style>