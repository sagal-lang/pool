# Clauses

## Introduction

A clause is the fundamental building block of the Sagal framework, akin to sentences in natural language and expressions or statements in existing programming languages.
Just as sentences convey complete thoughts in language, a clause in Sagal represents the **primitive unit of meaning**.
In this document, we will explore how clauses are constructed and composed within Sagal, using `YAML` for structural representation.
We will draw analogies to natural language and provide comparisons with code examples from `Python 3.x` and `Scheme R7RS` where necessary.

## Clause Structure

In Sagal, a clause is defined as a structured unit with two primary components: the **head** and the **body**.
It can be represented as follows:

```yaml
id: <clause_id> # Unique identifier for the clause
head: <particle> # Grammatical particle that governs the clause
body:
  - "hello world!" # Content word representing a string
  - 0xFF01 # Clause reference (refers to another clause by id)
  # Nested clause example
  - head: <particle> # Head for the nested clause
    body: [] # Body of the nested clause (could contain content words or more clauses)
```

- **id:** A unique identifier for the clause.
- **head:** The grammatical particle that governs the type of logic the clause represents (e.g., "if", "while", "do").
  This will be expanded on in later sections of the specification.
- **body:** A list that can contain nested clauses, references to other clauses, or content words, which provide additional context for the clause.

### Signature

The signature of a clause is governed by the **grammatical particle** in the head.
This signature specifies how the clause is structured, including the relationship between the elements and/or clauses within the body.
Just as a function signature defines how a function behaves in traditional programming languages, the signature in Sagal ensures that each clause has a clear and precise meaning, enabling correct interpretation and execution.

## Clause Modularity

In Sagal, a program is composed of a list of clauses, where each clause can either refer to other clauses or contain nested clauses that are local to the clause itself.
For example, this is similar to how paragraphs in natural language use anaphora—a linguistic device where a word (such as a pronoun) refers back to an earlier part of the text.

For example, in a sentence:

```txt
John went to the store. He bought some bread.
```

The pronoun `he` refers to `John`, connecting the two sentences and allowing them to form a coherent thought.
Similarly, in Sagal, one clause can reference another to maintain logical flow while keeping the structure modular.

This concept of clause references is comparable to the use of variables or pointers in existing programming languages, where an element defined earlier in the code can be referred to later by name or reference enhancing reusability.

## Clause Evaluation

### Clause Imperativeness

### Parsing & Interpretation

## Examples

Consider the following sentence in natural language:

```txt
When the sun rises, jog for 30 minutes around the block.
```

In Sagal, this sentence can be broken down into multiple clauses, each representing a primitive unit of meaning that contributes to the overall thought:

```yaml
id: 0x01 # Unique identifier for this clause
head: <temporal_particle> # Temporal particle clause: "when"
body:
  # The condition clause that must be satisfied
  - head: <predicate_particle> # predicate particle, explained later in the specs
    body:
      - <verb_particle_clause_id> # Verb particle clause: "rise"
      - <noun_particle_clause_id> # Noun particle clause: "sun" (subject of the verb)
  # The clause to be executed if the condition is met
  - head: <imperative_particle> # imperative particle, explained later in the specs
    body:
      - <verb_particle_clause_id> # Verb particle clause: "jog"
      - <preposition_particle_clause_id> # Clause indicating duration (for 30 minutes)
      - <preposition_particle_clause_id> # Clause indicating location (around the block)
```
