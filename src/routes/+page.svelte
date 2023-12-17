<script lang="ts">
	import { Parser } from '$lib/parser/Parser';
	import { lex } from '$lib/parser/lex';

	import RenderedAst from './RenderedAst.svelte';
	import RenderedToken from './RenderedToken.svelte';

	let input = 'jan li moku e kala pona';

	$: tokens = lex(input);

	$: parser = new Parser(tokens);
	$: ast = parser.parse();
	$: console.log(ast);
</script>

<h1 class="text-3xl font-bold text-center">sona toki</h1>

<p class="mt-4">
	<input
		type="text"
		class="block w-full px-4 py-3 border-2 rounded-xl
			outline-none focus:border-pink-500 transition"
		placeholder="o toki..."
		bind:value={input}
	/>
</p>

<div class="mt-4 p-4 border-2 rounded-xl flex gap-2 flex-wrap">
	{#each tokens as token}
		<RenderedToken {token}></RenderedToken>
	{/each}
</div>

<div class="mt-4">
	<RenderedAst node={ast}></RenderedAst>
</div>
