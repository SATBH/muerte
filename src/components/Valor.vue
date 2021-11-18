<template>
	<div class="valor p-4 rounded-lg border-2 border-gray-200 space-y-2 cursor-pointer transition hover:shadow-md">
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
	props: ['title', 'text'],
	methods: {
		log: () => {
			console.log("hello")
		}
	}
}
</script>

<style scoped>
.valor {
	animation-name: slidein;
	animation-duration: 1s;
}
@keyframes slidein {
  from {
		transform: translateY(-20px);
  }
}
</style>
