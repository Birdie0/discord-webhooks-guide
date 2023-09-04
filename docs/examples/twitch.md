# Twitch

## Twitch embed

```json
{
  "content": "{{ChannelUrl}}"
}
```

![Twitch example](../img/examples/twitch.png)

## Custom embed

Preview will be cached and embeds will show same image.

```json
{
  "embeds": [{
    "color": 9520895,
    "author": {
      "name": "{{ChannelName}} is now streaming",
      "url": "{{ChannelUrl}}",
      "icon_url": "https://avatar-resolver.vercel.app/twitch/{{ChannelName}}"
    },
    "fields": [
      {
        "name": ":joystick: Game",
        "value": "<<<{{Game}}>>>\u200B",
        "inline": true
      },
      {
        "name": ":busts_in_silhouette: Viewers",
        "value": "{{CurrentViewers}}",
        "inline": true
      }
    ],
    "image": { "url": "{{StreamPreview}}" }
  }]
}
```

![Twitch example](../img/examples/twitch_custom.png)

## Filter code

Fixed issue with cached preview, added game box art.

```ts
const body: any = {
  embeds: [{
    color: 0x9146ff,
    author: {
      name: `${Trigger.ChannelName} is now streaming`,
      url: Trigger.ChannelUrl,
      icon_url: `https://avatar-resolver.vercel.app/twitch/${Trigger.ChannelName}`
    },
    fields: [{
      name: ':joystick: Game',
      value: Trigger.Game || 'No Game',
      inline: true
    }, {
      name: ':busts_in_silhouette: Viewers',
      value: Trigger.CurrentViewers,
      inline: true
    }],
    thumbnail: { url: `https://avatar-resolver.vercel.app/twitch-boxart/${encodeURIComponent(Trigger.Game || '')}` },
    image: { url: `${Trigger.StreamPreview}?${+moment()}` },
    timestamp: Meta.triggerTime
  }]
};
MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));
```

![Twitch example](../img/examples/twitch_filter_code.png)
