# Discord Markdown

## Text formatting

![discord markdown example](../img/other/discord_markdown.png)

[Markdown Text 101](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-) from Discord Support.
Formatting works in all fields except `username`, embed's `title`, footer's `text`, that means `:emoji:` won't work there as well (except it's in Unicode).

## Discord tags

2 ways:

1. Using developer mode: `User settings` ➤ `Advanced` ➤ `Developer Mode` ➤ enable.
   Now you can find id of any user, message, channel or server with right click ➤ Copy ID
2. Using magic backslash `\` escaping: Put it before (or if you're on iOS, surround with \`\`) user mention, mentionable role, channel tag or custom emoji and you will get unformatted data

![discord tags example](../img/other/discord_markdown_2.png)

This thing must be mentioned somewhere because some of you want to use this in messages.

| How it writes                   | How it looks          |
| :-----------------------------: | :-------------------: |
| `<@&role-id>`                   | `@role-name`          |
| `<#channel-id>`                 | `#channel-name`       |
| `<@user-id>`                    | `@mention`            |
| `<:custom_emoji_name:emoji-id>` | `:custom_emoji_name:` |

[Discord API reference for available tags](https://discord.com/developers/docs/reference#message-formatting-formats)

## Discord timestamp

Discord added support of dynamic timestamps that allow you to reference specific date and time so it will show dynamically for everyone depending on timezone they're in and Discord language setting. You can generate them by hand (need [Unix timestamp](https://www.unixtimestamp.com/)) or using one of these websites:

- [r.3v.fi/discord-timestamps](https://r.3v.fi/discord-timestamps/)
- [timestamps.app](https://www.timestamps.app/)

Result string should look like this: `<t:1577836800>` or `<t:1577836800:t>`

[Discord API reference for available formatting styles](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles)
