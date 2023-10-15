# IFTTT

IFTTT is a very awesome service for connecting services. It supports Webhooks, so we can use it with Discord.

## Create an Account on IFTTT

Visit [IFTTT](https://ifttt.com/) and create yourself an account (if you don't have one yet).

## Create Webhook on Discord

1. Go to **Server or Channel settings** ➤ **Integrations** ➤ **Webhooks** ➤ **Create Webhook** or **Click on existing one** if you created one already.
2. Setup name, avatar and the channel in which webhook messages will be sent. When ready, click **Save Changes** and **Copy Webhook URL**.

<!-- ### Bonus fo mobile users

On mobile these steps are unavailable and using browser in desktop mode is not very comfortable. So I created a little website to solve this problem: [Get Webhook URL... anywhere](https://get-discord-webhook-url.herokuapp.com/). Simply what it does: it uses Discord API webhooks scope to create webhook in chosen channel, no data is saved anywhere and if you reload page you have to start over main page, in audit logs it will be displayed like user created webhook by his own. In integrations you may see glue-bot appeared (this bot was used for authorization process), feel free to unauthorize it.

1. Click **Authorize with Discord**
2. Choose server and channel, click **Authorize**
3. After redirect you'll see field with link, this is URL address of newly created webhook. -->

**⚠️ Attention! Keep URL safe, don't share them with people you don't trust, don't post it in public channels, don't give your server mods Administrator or Manage Webhooks permission as it gives access to them as well. Webhooks are quite powerful and can cause some troubles, which including, but not limited to, @everyone/@here mentions (webhooks ignore channel permissions), message/image spam (webhooks have max 5 requests in 2 seconds window rate limit, but still it's 150 requests per minute) and requests can't be traced, so finding the guilty is pretty much impossible, so you're warned I guess... If something like this happen, remove webhook causing problems and it won't be able to send messages anymore.**

## Creating an Applet

### If `this`

1. Go to [**IFTTT website**](https://ifttt.com/) ➤ click **Create** ➤ [**Applets**](https://ifttt.com/create).
2. Click `[+]this`.
3. Choose a service you want accept updates/feeds from, use search to find it faster.
4. If you connect service in the first time it may ask you to authorize, just follow the steps.
5. Most of services have multiple triggers. Choose the one that fits your needs.
6. Fill the fields. Here can be more than one step. Read the descriptions and examples.

### Then `that`

1. Click `[+]that`
2. Search for **Webhooks** with the search bar.
3. Choose **Make a web request** as action.
4. Paste the **Webhook URL** in **URL** field.
5. Select **POST** as **Method**.
6. Select **application/json** as **Content Type**.
7. **Body** is the main part. there's couple of things you have to know:

* Neither IFTTT nor Discord build the result message, you're the one responsible for it.
* Request body is written in JSON, if you have no idea what it is, please check [JSON](../json.html) reference page first, then structure pages.
* All available Ingredients are listed under **Add Ingredient** dropdown menu. If something Ingredient not listed means you can't use it and it will cause error on proceeding. Also, make sure you put spaces between `{{` `}}` which are not part of Ingredient, like here: `{"embeds": [{"image": {"url": "{{ImageUrl}}"}}]}` ➤ `{"embeds": [{"image": {"url": "{{ImageUrl}}"} }]}` otherwise they may be assumed as end of Ingredient name and break the validation.
* Due to certain specifics of JSON format the Ingredients IFTTT provides may break the request. Because that escaping Ingredients is highly recommended! To escape Ingredient, add `<<<` & `>>>` around `{{Ingredient}}` ➤ `<<<{{Ingredient}}>>>` (website says `<<>>`, but that a typo). Only times when escaping rule may be ignored are when Ingredient is 100% URL and when Ingredient is part of URL and that Ingredient only consists of URL-safe characters, like: `https://twitter.com/{{Username}}` (in some cases escaping these were causing broken requests).
* You probably noticed when you post link in channel the embed appears under the link, it works in the same way with Webhooks! (adding embeds to body or adding `<>` around links disables that behavior though). So sometimes, instead of building complex request body `{"content": "{{Url}}"}` (Url is placeholder, it may be called differently between services) can be more than enough!
* Always check JSON for being valid! You can use text editors with JSON support, [Embed Visualizer by leovoel](https://leovoel.github.io/embed-visualizer/) which was made exclusively for previewing request bodies for Discord and provides better experience in editing them (default mode is bot mode and it has difference in embeds declaring, make sure **Webhook Mode** is enabled!), formatting/linting websites like [JSON Formatter](https://jsonformatter.org/) or [JSON Editor Online](https://jsoneditoronline.org/), etc. Although, this is not guarantee that request won't fail!
* Certain fields have limit in length and content (url fields may contain only urls, otherwise request fail!), make sure you don't overflow them.

1. Click **Create Action** and then **Finish**.
2. Done!

### Troubleshooting

If you suspect request failed, first check activity logs: **Applet** ➤ **Settings** ➤ **View Activity**. Ff there none errors, just messages about applet being created/updated means it wasn't triggered yet, give it some time, but if there's any please check this troubleshooting list:

* `Action failure message: Rate limited by the remote server.` - means Discord rate limited this request because IFTTT sends it too frequently. Mostly happens when IFTTT tries to send requests in bulk on same webhook in short amount of time. Discord's webhook rate limit is 5 requests per 2 seconds, keep that in mind.
* `Unable to make web request. Your server returned a 400.` - means request is invalid. Can be caused by:
  * wrong method verb (should be POST);
  * wrong content-type (should be application/json);
  * bad request body:
    * empty, non or invalid JSON
    * resulting JSON is broken (usually caused by newlines in ingredients (json doesn't support them in values) and unicode characters (rare, but happens sometimes)), can be fixed by escaping variables with <<<{{ingredient}} or unicode characters>>>;
  * error from server saying that one of fields hit limit (sadly, but ifttt doesn't show error that came from server). Check if json data follow limits [here](https://discord.com/developers/docs/resources/channel#embed-limits). Try replace ingredients with data from applet logs and send it through Postman, Insomnia, other REST Client.
* `Error 401` - webhook url isn't full, try to copy it again.
* `Error 404` - webhook you're using has been removed. Create new webhook and replace the old URL.
* `Error 405` - happens when you use other than POST methods.
* `There was a problem with the X service.` - and usually no data provided for this one. As it says, the problem is on service side, next check should be successful, if not - try reauthorize.

### Delay, checks and other stuff

Some services provide close to realtime delay, some are up to 15 minutes, some even longer. Delay in applet description may be misleading and different for everyone, it's always better check by your own. Having multiple applets using same service may cause additional overall delay. Please bare with that as nothing much can be done.

For example for Reddit you may try RSS service as Reddit supports it too (check [this](https://www.reddit.com/wiki/rss)), for Twitter/Instagram/etc. you may try services which convert to RSS feed.

IFTTT doesn't have retrospective check, means posts created before applet will be ignored. **Check now** button performs force check, but for some services it may work differently and don't do any check until cooldown passes.

Here's some services I made for own needs but I think others may find them useful too:

* [Avatar resolver](https://avatar.glue-bot.xyz/) - some services don't provide avatars you might want be showed in webhook messages, now you can), multiple providers supported!
  * usage example: `{"avatar_url": "https://avatar.glue-bot.xyz/twitter/{{Username}}"}`
* [discord-ifttt](https://discord-ifttt.vercel.app/) - use this if you keep receiving `Too many requests to this host` error, also applies rate limit so requests will less to fail, allows to use `text/plain` header, more info on the page!
* [Multi webhook](https://multi-webhook.vercel.app/) - for times when you want to send request to multiple webhooks using one.
  * usage example: `URL: https://multi-webhook.vercel.app/api/multi`, `JSON: {links: [first_url, second_url], ...}` where first_url and second_url are webhook urls.
