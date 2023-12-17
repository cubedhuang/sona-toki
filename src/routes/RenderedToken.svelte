<script lang="ts">
	import type { Token } from '$lib/parser/Token';

	export let token: Token | null;
</script>

{#if token}
	<div class="p-2 bg-purple-100 rounded-xl">
		<p class="font-bold">
			{token.value}
		</p>
		<p class="uppercase text-xs text-purple-600">
			{token.type}
		</p>
	</div>
{/if}
