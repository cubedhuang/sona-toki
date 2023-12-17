<script lang="ts">
	import type { ASTNode } from '$lib/parser/ast';

	import RenderedToken from './RenderedToken.svelte';

	export let node: ASTNode;
	export let label = node.type;
</script>

<div class="p-2 border-2 rounded-xl">
	<p class="text-center uppercase text-xs">{label}</p>

	<div class="mt-2 flex items-start justify-center gap-2">
		{#if node.type === 'sentence'}
			{#each node.subjects as subject}
				<svelte:self node={subject} label="subject"></svelte:self>
			{/each}

			{#each node.predicates as predicate}
				<svelte:self node={predicate}></svelte:self>
			{/each}
		{:else if node.type === 'predicate'}
			<RenderedToken token={node.li}></RenderedToken>

			<svelte:self node={node.predicate} label="verb"></svelte:self>

			{#each node.objects as object}
				<svelte:self node={object}></svelte:self>
			{/each}
		{:else if node.type === 'object'}
			<RenderedToken token={node.e}></RenderedToken>

			<svelte:self node={node.object}></svelte:self>
		{:else if node.type === 'phrase'}
			{#each node.words as word}
				<RenderedToken token={word}></RenderedToken>
			{/each}
		{/if}
	</div>
</div>
