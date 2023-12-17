# sona toki

My attempt at a Toki Pona parser.

```
sentence =
	| subject "o" $
	| sentenceStarter? clause ("la" clause)* $

clause =
	| subject
	| unmarkedPredicateSubject unmarkedPredicate
	| markedPredicateSubject markedPredicate
	| subject? deonticPredicate

subject =
	| unmarkedPredicateSubject
	| markedPredicateSubject

markedPredicateSubject =
	| contentPhraseMarkedPredicate
	| multipleSubject

multipleSubject =
	| contentPhrase ("en" contentPhrase)+

unmarkedPredicate =
	predicateBody markedPredicate?

markedPredicate =
	| "li" unmarkedPredicate

deonticPredicate =
	| "o" predicateBody deonticPredicate?

predicateBody =
	| intransitiveVerb prepositionPhrases?
	| transitiveVerb objectPhrases

intransitiveVerb =
	| preverbs? prepositionPhrase
	| preverbs? contentPhrase

transitiveVerb =
	| preverbs? contentPhrase

preverbs =
	| (preverb preModifier?)+

prepositionPhrases =
	| (prepositionPhrase+)*

prepositionPhrase =
	| preposition preModifier? contentPhrase

objectPhrases =
	| (objectPhrase+)*

unmarkedPredicateSubject =
	| "mi"
	| "sina"

sentenceStarter =
	| 'taso'
	| 'kin'
```
