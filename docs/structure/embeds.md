# embeds

Sets custom embeds for message sent by webhook. `embeds` is an array of embeds and can contain up to 10 embeds in the same message.

Examples:

```json
{
  "embeds": [{
    "title": "Hello!",
    "description": "Hi! :grinning:"
  }]
}
```

![embeds example](../img/structure/embeds.png)

```json
{
  "embeds": [
    {
      "title": "Meow!",
      "color": 1127128
    },
    {
      "title": "Meow-meow!",
      "color": 14177041
    }
  ]
}
```

![embeds example](../img/structure/embeds_2.png)

## P.S.

Adding embeds overrides url embeds.
