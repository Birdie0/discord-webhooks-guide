# Edit Webhook Message

Identically to sending messages with webhooks you can edit previously sent ones. For that you need to have message id which can be copied with right-clicking on the message and selecting `Copy Message ID` from context menu (`Developer Mode` has to be enabled in user settings). Alternatively, id can be retrieved from response after webhook sending request (`wait=true` has to be present in query).

* Request URL is `https://discord.com/api/webhooks/123/w3bh00k_t0k3n/messages/456`, where `456` is message id.
* Request verb has to be set to `PATCH` instead of `POST`.
* Request body is identical to the one we use for sending, but you have to consider next things:

  * Not providing `content` and `embeds` won't remove them from message, for that you have to pass empty string (`"content": ""`) and array (`"embeds": []`) respectively.
  * Attachments will be appended instead of replaced, to remove all attachments pass `attachments` with empty array in value (`"attachments": []`). If you want some of them to persist provide them in the same `attachments` array (attachment objects have to be retrieved from previous edit or send responses)

[Discord API reference](https://discord.com/developers/docs/resources/webhook#edit-webhook-message)
