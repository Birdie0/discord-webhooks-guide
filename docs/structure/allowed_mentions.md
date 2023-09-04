# allowed_mentions

Allows to supress pings by users, roles or everyone/here mentions. `allowed_mentions` object and can contain next parameters:

* `parse` - array and can include next values:
  * "everyone" - if present everyone/here will ping.
  * "users" - if present user mentions will ping.
  * "roles" - if present role mentions will ping.
* `users` - array with id of users, allows to limit which users may be pinged.
* `roles` - array with id of roles, allows to limit which roles may be pinged.

Don't include `users` and `roles` both in `allowed_mentions` and `parse`, , if you want

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

* Will ping everyone with disabled everyone/here mention supress, all users mentioned in message (i. e. `user-id` user) or with `role-id` role (unless enabled role mention supress).

  ```json
  {
    "content": "@everyone <@&role-id> <@user-id>",
    "allowed_mentions": {
      "parse": ["everyone", "users"],
      "roles": ["role-id"]
    }
  }
  ```

[Discord API docs reference](https://discord.com/developers/docs/resources/channel#allowed-mentions-object)
