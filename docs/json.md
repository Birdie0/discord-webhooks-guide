# JSON

If you do not know anything about JSON, please, spend some time on learning JSON structure.

## `What is JSON?`

**JSON** stands for

* **J**ava
* **S**cript
* **O**bject
* **N**otation

N.B. Don't be scared. JSON is easy to learn and use! This is not a programming language!!!

JSON is data-storing format that easy to read and write for humans and robots.

* `key: value` - this is key-value pair.
* Key and value are separated with semicolon (`:`), no exceptions.
* Multiple key-values are separated with comma (`,`), no exceptions.
* Spaces and line breaks are ok till they not the part of key or value.
* The `key` is always text inserted between double quotes (`" "`).
* But `value` can be different types:
  * **string** - `"sample text"`, `"cool\nthings"`
  * **number** - `42`, `-300`, `6.62e-34`
  * **object** - `{ "name": "Jason", "likes": ["apples", "oranges"] }`
  * **array** - `["apple", "banana", "orange"]`, `[1, true, 3, "meow"]`
  * **boolean** - `true`, `false`
  * **null** - `null`

### About strings

Strings can store any characters you want, but some of them need to be escaped:

* **double quote** - `\"`
* **slash** - `\\`
* **backslash** - `\/` (escaping is optional)
* **newline** - `\n` (use this if you want to add newline to value)
* **carriage return** - `\r`
* **horizontal tab** - `\t`
* **backspace** - `\b`
* **form feed** - `\f`
* **unicode character** - `\uxxxx`

### Example

```json
{
  "name": "Pumpkin",
  "age": 7,
  "likes": [
    "patting",
    "sleeping in a garden",
    "salmon"
  ],
  "appearance": "Orange Tabby",
  "owner_name": "Jane Doe",
  "phone_number": "+447712345678",
  "address": {
    "country": "England",
    "city": "London",
    "street": "Crown Street",
    "house": 38,
    "notes": null
  }
}
```

## Recommended sources

* [Learn X in Y minutes, Where X=json](https://learnxinyminutes.com/docs/json/) - quick JSON tutorial
* [JSON official site](https://www.json.org/) - official website that explains the format using flowcharts
