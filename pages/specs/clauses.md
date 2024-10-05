# Clauses

## 1. Introduction

A clause is the fundamental building block of the Sagal framework, akin to sentences in natural language and expressions or statements in programming languages.
It represents the **primitive unit of meaning**.

In this document, we will explore how clauses are constructed and composed within Sagal, using `YAML` for structural representation.
We will draw analogies to natural language and provide comparisons with code examples from `Python 3.x` and `Scheme R7RS` where necessary.

## 2. Structure

A clause consists of two primary components: the **head** and the **body**, and it can be represented as follows:

```yaml
id: <clause_id> # Unique identifier for the clause
head: <particle> # Grammatical particle that governs the clause
body: # Body of the clause
  - "hello world!" # Content word representing a string
  - 0xFF01 # Clause reference (refers to another clause by id)
  # Nested clause example
  - head: <particle> # Head for the nested clause
    body: [] # Body of the nested clause (could contain content words or more clauses)
```

- **id:** A unique identifier for the clause.
- **head:** The grammatical particle that governs the clause.
  This will be expanded on in later sections of the specification.
- **body:** A list that can contain nested clauses, references to other clauses, or content words, which provide additional context for the clause.

### 2.2. Signature

The signature of a clause is governed by the **grammatical particle** in the head.
This signature specifies how the clause is structured, including the relationship between the elements and/or clauses within the body.

### 2.2. Modularity

In Sagal, a program is composed of a series of clauses, with one clause serving as the entry point of execution.
Each clause can either reference other clauses or contain nested clauses that are local to itself.
This structure is akin to how paragraphs in natural language may use devices like pronouns, which refer back to earlier elements in the text to maintain logical continuity.
Clause references in Sagal work like variables or imports in traditional programming languages, where elements defined earlier in the code can be reused later by name, enhancing both reusability and modularity.

For example, consider this natural language sentence:

> John went to the store. **He** bought some bread.

Now, compare it with this Python code:

```py
# References a clause (class)
from collections import defaultdict
```

And in Scheme:

```scheme
(define message "Hello, World!")

;; References a clause (variable)
(display message)
```

## 3. Evaluation

In Sagal, the structure and meaning of a program are built from a stack of clauses, with each clause governed by a grammatical particle.
Grammatical particles in Sagal operate much like their counterparts in natural languages, such as prepositions or conjunctions.

In human languages, some particles are not explicitly written but are understood from context.
In contrast, Sagal ensures that every aspect of meaning is explicitly represented by a grammatical particle, which determine the function of a clause—whether it acts as data, a variable, a function call, parameter passing, or other logical operations.

### 3.1. Examples

To demonstrate, let's take an imperative sentence and represent it in Sagal’s structure:

```txt
When the sun rises, jog for 30 minutes around the block.
```

Which can be broken down into multiple clauses:

```yaml
id: 0x01 # Unique identifier for this clause
head: <temporal_particle> # Temporal particle clause: "when"
body:
  # The condition clause that must be satisfied
  - head: <predicate_particle> # predicate particle
    body:
      - <verb_particle_clause_id> # Verb particle clause: "rise"
      - <noun_particle_clause_id> # Noun particle clause: "sun" (subject of the verb)
  # The clause to be executed if the condition is met
  - head: <imperative_particle> # imperative particle
    body:
      - <verb_particle_clause_id> # Verb particle clause: "jog"
      - <preposition_particle_clause_id> # Clause indicating duration (for 30 minutes)
      - <preposition_particle_clause_id> # Clause indicating location (around the block)
```

We will discuss the particles used in this example in greater detail in the upcoming sections.
