# Twitter

## Twitter embed

```json
{
  "content": "{{LinkToTweet}}"
}
```

![Twitter embed example](../img/examples/twitter.png)

## Custom embed

Custom embed won't show image or video.

```json
{
  "embeds": [{
    "color": 1942002,
    "author": {
      "name": "{{UserName}}",
      "url": "https://twitter.com/{{UserName}}",
      "icon_url": "https://avatar-resolver.vercel.app/twitter/{{UserName}}"
    },
    "title": "Link",
    "url": "{{LinkToTweet}}",
    "description": "<<<{{Text}}>>>",
    "footer": {
      "text": "Posted at {{CreatedAt}}"
    }
  }]
}
```

![custom embed example](../img/examples/twitter_custom.png)
