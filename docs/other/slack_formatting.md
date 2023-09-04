# Slack formatting

Discord webhooks support [Slack](https://slack.com/) formatting too.
Just append `/slack` to webhook url to start using it.

## First layer

| Discord    | Slack       | Comment |
| ---------- | ----------- | ------- |
| username   | username    |         |
| avatar_url | icon_url    |         |
| content    | text        |         |
| embeds     | attachments |         |

## embeds (attachments)

| Discord     | Slack      | Comment                                                                                                             |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| color       | color      | supports hex codes `"#4c73c7"` and has three predefined colors: `good`(green), `warning`(yellow) and `danger`(red). |
| author      | -          | author block declares in different way. See the `author` table.                                                     |
| title       | title      |                                                                                                                     |
| url         | title_link |                                                                                                                     |
| description | text       |                                                                                                                     |
| fields      | fields     |                                                                                                                     |
| image       | -          | image block declares in different way. See the [`image`](#image) table.                                             |
| thumbnail   | -          | thumbnail block declares in different way. See the [`thumbnail`](#thumbnail) table.                                 |
| footer      | footer     | not a block. See the [`footer`](#footer) table                                                                      |
| timestamp   | ts         | requires [unix timestamp](https://www.unixtimestamp.com/) format.                                              |
| -           | fallback   | embed summary for notifications. Not sure if Discord supports that.                                                 |
| -           | pretext    | kinda broken atm. Should works as "content" before embed, but it just appends to "description".                     |

### author

| Discord  | Slack       | Comment                                                      |
| -------- | ----------- | ------------------------------------------------------------ |
| name     | author_name | just write them inside of `attachments` like `color` or etc. |
| url      | author_link |                                                              |
| icon_url | author_icon |                                                              |

### fields

| Discord | Slack | Comment |
| ------- | ----- | ------- |
| name    | title |         |
| value   | value |         |
| inline  | short |         |

### image

| Discord | Slack     | Comment                                                                        |
| ------- | --------- | ------------------------------------------------------------------------------ |
| url     | image_url | no `image` block. Just write them inside of `attachments` like `color` or etc. |

### thumbnail

| Discord | Slack     | Comment                                                                            |
| ------- | --------- | ---------------------------------------------------------------------------------- |
| url     | thumb_url | no `thumbnail` block. Just write them inside of `attachments` like `color` or etc. |

### footer

| Discord | Slack       | Comment                                                                         |
| ------- | ----------- | ------------------------------------------------------------------------------- |
| text    | footer      | no `footer` block. Just write them inside of `attachments` like `color` or etc. |
| icon    | footer_icon |                                                                                 |

## Example

Slack formatted example from [here](discord_webhook.md):

```json
{
  "username": "Webhook",
  "icon_url": "https://i.imgur.com/4M34hi2.png",
  "text": "Text message. Up to 2000 characters.",
  "attachments": [
    {
      "author_name": "Birdie♫",
      "author_link": "https://www.reddit.com/r/cats/",
      "author_icon": "https://i.imgur.com/R66g1Pe.jpg",
      "title": "Title",
      "title_link": "https://google.com/",
      "text": "Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`",
      "color": "#e8d44f",
      "fields": [
        {
          "title": "Text",
          "value": "More text",
          "short": true
        },
        {
          "title": "Even more text",
          "value": "Yup",
          "short": true
        },
        {
          "title": "Use `\"inline\": true` parameter, if you want to display fields in the same line.",
          "value": "okay..."
        },
        {
          "title": "Thanks!",
          "value": "You're welcome :wink:"
        }
      ],
      "thumb_url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg",
      "footer": "Woah! So cool! :smirk:",
      "footer_icon": "https://i.imgur.com/fKL31aD.jpg"
    }
  ]
}
```

### Additional info:

* [Execute Slack-Compatible Webhook](https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook)
* [Incoming Webhooks](https://api.slack.com/messaging/webhooks)
* [Basic message formatting](https://api.slack.com/reference/surfaces/formatting)
* [Attaching content and links to messages](https://api.slack.com/messaging/composing/layouts#attachments)
