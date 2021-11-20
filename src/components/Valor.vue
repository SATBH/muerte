<template>
	<div :style="`animation-delay: ${number * 300}ms`" class="valor p-4 rounded-lg border-2 border-gray-200 space-y-2 cursor-pointer transition hover:shadow-md">
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
	props: ['title', 'text', 'number'],
	methods: {
		log: () => {
			console.log(this.number);
		},
	}
}
</script>

<style scoped>
.valor {
	animation-name: slidein;
	animation-duration: 0.7s;
	animation-fill-mode: forwards;
	opacity: 0;
}

@keyframes slidein {
  from {
		transform: translateY(-40px);
		opacity: 0;
  }

	to {
		opacity: 1;
	}
}
</style>
