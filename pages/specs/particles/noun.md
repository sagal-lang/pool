# Noun Particles

## Introduction

Noun particles in Sagal serve as fundamental building blocks for representing or referring to entities within the framework.
These entities can include data, objects, concepts, operations, and more—similar to how nouns function in natural languages.

Noun particles are essential for establishing context, subject matter, and meaning within a clause, making them key elements in constructing semantically meaningful expressions in Sagal.

## Structure

Below is the general structure for how noun particles are defined:

```yaml
id: <clause_id> # Unique identifier for the clause
particle: noun # Specifies that this is a noun particle
body:
  - <identifier> # The identifier or name of the noun
  - <descriptor_clause> # Describes or qualifies the noun
  - <binding_clause> # Represents the value or reference associated with the noun
```

### Signature

#### 1. Identifier

The `<identifier>` is the name or label for the noun.
It provides the specific or general reference for the noun particle and could represent concepts like `book`, `car`, `person`, `Ali`.
The `<identifier>`, along with the `<clause_id>`, serves as the primary means of referencing this particular entity within the program.
It function much like the subject in a sentence or a variable name in a programming language.

#### 2. Descriptor Clause

The `<descriptor_clause>` defines and qualifies the noun, acting as both a type system and a means to add meaningful context.
At its simplest, it handles basic types like strings, integers, and collections, but its true strength lies in its ability to represent complex structures.
Beyond basic data types, it allows for more nuanced descriptions, similar to how adjectives or noun phrases add meaning in natural languages.
It can specify relationships, attributes, or characteristics, offering a rich method to define nouns in a more contextualized way.
This becomes especially useful when dealing with indefinite nouns or when the `<binding_clause>` is missing, as it helps clarify the noun’s context or characteristics.

For example:

> - "A list of completed tasks," where the descriptor defines "completed tasks"
> - "The car that John owns," where the descriptor defines "owned by John"

In essence, the descriptor clause is not just a type indicator, but a tool to enrich the noun with specific traits or relationships, making it a versatile feature within Sagal’s structure.
For simplicity, we will focus on basic types for now, with further elaboration to follow in the subsequent sections.

#### 3. Binding Clause

The `<binding_clause>` in Sagal represents the actual value or reference tied to a noun.
It serves as the means by which a noun is "bound" to a specific instance, object, or clause.
This is particularly significant when the noun is definite or when referring to specific entities within the program.

At its simplest, the binding clause can contain direct values such as numbers or strings.
However, it can also refer to more complex clauses or objects, similar to variables or references in traditional programming languages.
When the binding is missing—such as when dealing with indefinite nouns or when the value has yet to be assigned—the descriptor clause becomes critical, providing context and meaning for the noun.

## Types

### 1. Definiteness

In Sagal, definiteness plays a crucial role in distinguishing between specific and general references, much like define and indefine articles in natural languages (e.g. "the" vs "a" in English).
The definiteness of a noun is determined by the presence or absence of a **binding clause**.

#### Definite Nouns

Definite nouns refer to specific entities that are clearly identifiable within the context.
In Sagal, a noun is considered definite when the <binding_clause> is provided, explicitly associating the noun with a particular value or reference.

#### Indefinite Nouns

Indefinite nouns, on the other hand, refer to general or non-specific entities.
These are nouns that lack a binding clause, leaving them open to interpretation or assignment later.
Indefinite nouns are often used to introduce new concepts or objects, just as indefinite articles are used in natural languages ("a" or "an" in English).

Here are some examples:

```yaml
# Example of a definite noun:
id: 0x03
head: noun
body:
  - book # The identifier for the noun
  - object # Descriptor indicating it's a physical object
  - 0xA001 # Binding clause; the noun refers to a specific book
---
# Example of a indefinite noun:
id: 0x04
particle: noun
body:
  - car # The identifier for the noun
  - object # Descriptor indicating it's a physical object
  # No binding clause, making this an indefinite noun
```

### 2. Reference

> TODO

### 3. Possession

> TODO

### 4. Collectivity and Composition

> TODO

## Derived Noun Types

<!-- Context/Denotation: Defines the role, type, or abstract concept the noun represents. -->

> TODO

## Evaluation

> TODO
