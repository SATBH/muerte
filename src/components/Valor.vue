<template>
	<div class="rounded space-y-2">
		<h2 class="text-lg font-bold">{{title}}</h2>
		<p>{{text}}</p>
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

