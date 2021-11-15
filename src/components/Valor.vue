<template>
	<div>
		<h1> {{title}} </h1>
		{{text}}
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	props: ['title', 'text']
}
</script>

