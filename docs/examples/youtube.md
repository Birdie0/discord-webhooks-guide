# YouTube

## YouTube embed

```json
{
  "content": "{{Url}}"
}
```

![YouTube example](../img/examples/youtube.png)

## Custom embed

Embed includes thumbnail without ability to watch it in Discord.

```json
{
  "embeds": [{
    "color": 16711680,
    "author": {
      "name": "<<<{{ChannelName}}>>>",
      "icon_url": "https://avatar-resolver.vercel.app/youtube-avatar/q?url={{Url}}"
    },
    "title": "<<<{{Title}}>>>",
    "url": "{{Url}}",
    "description": "<<<{{Description}}>>>",
    "image": { "url": "https://avatar-resolver.vercel.app/youtube-thumbnail/q?url={{Url}}" },
    "footer": { "text": "Published at {{PublishedAt}}" }
  }]
}
```

![YouTube example](../img/examples/youtube_custom.png)
