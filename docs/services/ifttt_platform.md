# IFTTT Platform / Filter code

[IFTTT Platform](https://platform.ifttt.com/) allows you to create and publish applets, so you can share it with the others. Also it allows to put script that will execute after applet being triggered, so you can modify output data and skip actions to custom conditions, that script is called Filter code.

Filter code is written in TypeScript, but JavaScript code shoud work too. If you're relying on [type coercion](https://developer.mozilla.org/docs/Glossary/Type_coercion) you'll need to manually convert values to right types, code window has build-in linter, it will tell what's wrong.

👉 **Update:** Before, Filter code was exclusively IFTTT Platform feature, but now it can be used on main website too (Pro subscription required).

* [JavaScript tutorial](https://learnxinyminutes.com/docs/javascript/)
* [TypeScript tutorial](https://learnxinyminutes.com/docs/typescript/)

* [IFTTT Platform Documentation](https://platform.ifttt.com/docs/applets)
* [IFTTT Filter code cheat sheet](https://ifttt.com/explore/filter-code-cheat-sheet)

## Example

```ts
// Building JSON body
const body = {
  embeds: [{
    author: {
      name: Trigger.UserName, // equals {{UserName}}
      url: Trigger.LinkToTweet // equals {{LinkToTweet}}
    },
    description: `*${Trigger.Text}*`, // equals *{{Text}}*
    color: 0x1da1f2, // equals 1942002 (hex ➤ decimal value)
    timestamp: Meta.triggerTime // equals moment.js object but during JSON encoding will be turned to YYYY-MM-DDThh:mm:ss.msZ (discord compatible timestamp)
  }]
};

// If you want to manually skip some triggers when some of ingredients match/not match something or allow to run only at certain time you can do this:
if (Trigger.Text.indexOf('skip') > 0) {
  MakerWebhooks.makeWebRequest.skip('this reason will appear in activity logs!');
}

// This action makes Web Request and sends webhook
MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));
// Done!
```

### TS/JS cheat sheet

```ts
//== in ts/js quotes around keys can be omitted
let body = {"content": "text"};
// equals
let body = {content: "text"};

//== the difference between single and double quotes that you need to escape it between them own
let text = ['what\'s up?', "*\"winks\"*"];
// equals
let text = ["what's up?", '*"winks"*'];

//== if you want to add value inside string use *template literals*: ` ` with ${}
let message = 'hello, ' + name + '!';
// equals
let message = `hello, ${name}!`;

//== if variable is a string there's no need to use template literals
let zzz = `${ccc}`;
// equals
let zzz = ccc; // if variable is not string but it should be call ccc.toString() on it!

//== var/let/const
// if value might be reassigned, use let
let favoriteNumber = 42
// otherwise use const
const name = 'John'
// using var is ok too, but less preferable
var happy = true

//== check if string includes substring
let str = 'The quick brown fox jumps over the lazy dog';
let substr = 'fox';
let substr2 = 'cat';
let result = str.indexOf(substr) > -1; // equals true
let result2 = str.indexOf(substr2) > -1; // equals false
// explanation: IFTTT doesn't have str.includes(substr) method available
// so we have to use str.indexOf(substr) > -1 instead,
// which returns coordinates of substring and -1 if not found.
// > -1 is in range [0..+inf), >= 0 will work the same way

//== random value
let random = Math.random(); // returns float value in range [0..1) (1 excluded)
let random2 = Math.round(Math.random()); // returns 0 or 1
let random3 = Math.floor(Math.random() * 10); // returns integer value in range [0..9] (10 excluded)
let random4 = 5 + Math.floor(Math.random() * 45); // returns integer value in range [5..49] (50 excluded)

//== random element in array
let arr = ['one', 'two', 'three', 'four'];
let picked = arr[Math.floor(Math.random() * arr.length)];
```

### Useful snippets

```ts
// check if str is part of substr, optionally comparing them case-insensitively
function includes(str: string, substr: string, caseInsensitive?: boolean): boolean {
  if (caseInsensitive) {
    str = str.toLowerCase();
    substr = substr.toLowerCase();
  }
  return str.indexOf(substr) > -1;
}

includes('watermelon', 'melon') // returns true
includes('Watermelon', 'Melon') // returns false
includes('Watermelon', 'Melon', true) // returns true

// random integer number between min and max
function random(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

random(5, 10) // returns value between 5 and 10
random(-5, 5) // returns value between -5 and 5

// select random element of array
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

pick(['apple', 'banana', 'orange'])
```
