# color

Sets color for webhook's embed. It equals 0 (transparent) by default. Color requires number instead hex code, so you have to convert hexadecimal color code to decimal number. Color can be defined as number `65280` and as string `"65280"`.

I recommend to use [SpyColor](https://www.spycolor.com/) for color picking, it provides decimal value.

Example:

```json
{
  "embeds": [
    {
      "title": "Meow!",
      "color": 1127128
    },
    {
      "title": "Meow-meow!",
      "color": "14177041"
    }
  ]
}
```

![color example](../../img/structure/embed/color.png)
