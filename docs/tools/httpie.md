# HTTPie

[HTTPie](https://httpie.io/) is a command line HTTP client, just like [curl](curl.md) but more user friendly.

* Windows - can be installed with `pip` (requires Python 3.x installed). By the way, this is cross-platform solution.
* Linux - can be installed with built-in package manager or [Homebrew](https://brew.sh/).
* macOS - can be installed with [Homebrew](https://brew.sh/) or [MacPorts](https://www.macports.org/).

Check [docs](https://httpie.io/docs#installation) for installation details.

## Usage

`http <url> <body params>`

### for Bash/Zsh/etc.

```sh
# set url variable to type less and make command more readable
export WEBHOOK_URL="https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
http -j post $WEBHOOK_URL username="Cat" content="meow" embeds:='[{"title": "Cool!"}]'
# -j/--json flag sets json header, but it's used by default so it can be omitted.
http post $WEBHOOK_URL username="Cat" content="meow" embeds:='[{"title": "Cool!"}]'
# Default method is GET, but adding data makes it switch to POST so you can omit it too.
http $WEBHOOK_URL username="Cat" content="meow" embeds:='[{"title": "Cool!"}]'
```

Depends on type of value you have to use different separators:

* `=` - text.
* `:=` - raw JSON value. Use it for array, number, boolean and nested values.
* `@` - embed file.
* `=@` - embed json file.

Also, if you don't want to mess with these and would like to just pass raw body, like can be done in `curl`, use the next approach:

```sh
echo '{"username": "Cat", "content": "meow", "embeds": [{"title": "Cool!"}]}' | http $WEBHOOK_URL
```

### PowerShell

```ps1
# In PowerShell you have to escape " with \ inside strings, so body string be parsed correctly.
$WEBHOOK_URL = "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
http $WEBHOOK_URL username="Cat" content="meow" embeds:='[{\"title\": \"Cool!\"}]'

# Also you can just pass raw json body:
'{"username": "Cat", "content": "meow", "embeds": [{"title": "Cool!"}]}' | http $WEBHOOK_URL
```

### Command Prompt (cmd.exe)

```bat
REM Notice escaped double quotes around values and none around link
SET WEBHOOK_URL=https://discord.com/api/webhooks/123/w3bh00k_t0k3n
http %WEBHOOK_URL% username="Cat" content="meow" embeds:="[{\"title\": \"Cool!\"}]"

REM Outer quotes are skipped due to cmd parsing
echo {"username": "Cat", "content": "meow", "embeds": [{"title": "Cool!"}]} | http %WEBHOOK_URL%
```

## Sending attachments

```sh
# -f flag sets "Content-Type: multipart/form-data" header.
# payload_json='{}' - sets json body.
# file1@cat.jpg - adds cat.jpg file as attachment.
# file2@images/dog.jpg - adds dog.jpg file from images directory.
http -f $WEBHOOK_URL \
  payload_json='{"username": "test", "content": "hello"}' \
  file1@cat.jpg \
  file2@images/dog.jpg
```
