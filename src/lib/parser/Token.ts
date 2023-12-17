export type TokenType =
	| 'particle'
	| 'content'
	| 'preposition'
	| 'preverb'
	| 'taso'
	| 'nanpa'
	| 'number'
	| 'a'
	| 'name';

export const particles = [
	// 'la',
	'li',
	'e',
	'o',
	'pi'
];
export const prepositions = ['lon', 'kepeken', 'tawa', 'tan', 'sama'];
export const preverbs = [
	'wile',
	'ken',
	'kama',
	'awen',
	'sona',
	'alasa',
	'lukin'
];
export const numbers = ['wan', 'tu', 'luka', 'mute', 'ale', 'ali'];

export interface Token {
	type: TokenType;
	value: string;
	start: number;
	end: number;
}
