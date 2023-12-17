import {
	numbers,
	particles,
	prepositions,
	preverbs,
	type Token
} from './Token';

export function lex(input: string) {
	const words = input.match(/[a-z]+/gi) ?? [];

	const tokens: Token[] = [];

	let offset = 0;

	for (const word of words) {
		const start = input.indexOf(word, offset);
		const end = start + word.length;

		offset = end;

		tokens.push({
			type: particles.includes(word)
				? 'particle'
				: // : prepositions.includes(word)
					// 	? 'preposition'
					// 	: preverbs.includes(word)
					// 		? 'preverb'
					// 		: numbers.includes(word)
					// 			? 'number'
					// 			: word === 'taso'
					// 				? 'taso'
					// 				: word === 'nanpa'
					// 					? 'nanpa'
					// 					: word === 'a'
					// 						? 'a'
					// 						: word[0] === word[0].toUpperCase()
					// 							? 'name'
					'content',
			value: word,
			start,
			end
		});
	}

	return tokens;
}
