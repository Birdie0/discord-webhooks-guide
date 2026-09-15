# allowed_mentions

Allows to suppress pings by user, role and everyone/here mentions. `allowed_mentions` object can contain the next parameters:

* `parse` - array, can include next values:
  * "everyone" - if present everyone/here will ping.
  * "users" - if present user mentions will ping.
  * "roles" - if present role mentions will ping.
* `users` - array with user ids, allows to limit which users may be pinged.
* `roles` - array with role ids, allows to limit which roles may be pinged.

Important: `users` and `roles` are mutually exclusive per `allowed_mentions` and `parse` fields.

Here's some examples:

* nobody will be pinged by this message.

  ```json
  {
    "content": "@everyone <@&role-id> <@user-id>",
    "allowed_mentions": { "parse": [] }
  }
  ```

* only users that didn't suppress everyone/here mentions will be pinged.

  ```json
  {
    "content": "@everyone <@&role-id> <@user-id>",
    "allowed_mentions": { "parse": ["everyone"] }
  }
  ```

* only user with `user-id` will be pinged, in this case `@everyone` won't ping anyone. `user2` mention is not in content so no ping for them.

  ```json
  {
    "content": "@everyone <@&role-id> <@user-id>",
    "allowed_mentions": { "users": ["user-id", "user2-id"]  }
  }
  ```

* similar for roles.

  ```json
  {
    "content": "@everyone <@&role-id> <@user-id>",
    "allowed_mentions": { "roles": ["role-id"] }
  }
  ```

* Will ping everyone with disabled everyone/here mention suppress, all users mentioned in message (i. e. `user-id` user) or with `role-id` role (unless enabled role mention suppress).

  ```json
  {
    "content": "@everyone <@&role-id> <@user-id>",
    "allowed_mentions": {
      "parse": ["everyone", "users"],
      "roles": ["role-id"]
    }
  }
  ```

[Discord API reference](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)
