import type { Predicate, Sentence, SimplePhrase } from './ast';
import type { Token } from './Token';

export class Parser {
	private index = 0;

	constructor(public tokens: Token[]) {}

	parse() {
		return this.sentence();
	}

	private sentence() {}
}
