import type { Token } from './Token';

export type ASTNode = Sentence | Predicate | Object | SimplePhrase;

export type Sentence = {
	type: 'sentence';
	subjects: SimplePhrase[];
	predicates: Predicate[];
};

export type Predicate = {
	type: 'predicate';
	li: Token | null;
	predicate: SimplePhrase;
	objects: Object[];
};

export type Object = {
	type: 'object';
	e: Token;
	object: SimplePhrase;
};

export type SimplePhrase = {
	type: 'phrase';
	words: Token[];
};
