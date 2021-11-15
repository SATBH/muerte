<template>
	<div class="p-4 rounded-lg border-2 border-gray-200 space-y-2">
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

