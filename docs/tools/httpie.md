# HTTPie

[HTTPie](https://httpie.io/) is a command line HTTP client, just like [curl](curl.md) but more user friendly.

* Windows - can be installed with `pip` (requires Python 3.x installed). By the way, this is cross-platform solution.
* Linux - can be installed with built-in package manager or [Homebrew](https://brew.sh/).
* macOS - can be installed with [Homebrew](https://brew.sh/) or [MacPorts](https://www.macports.org/).

Check [docs](https://httpie.io/docs/cli/installation) for installation details.

## Usage

`http <url> <body params>`

### for Bash/Zsh/etc.

```sh
# Optional flags and method were omitted:
# if unspecified method is set to POST if body is specified
# -j/--json forces JSON mode, yet it's default behavior
http "https://discord.com/api/webhooks/123/w3bh00k_t0k3n" content="test" embeds[0][title]="text"
```

Depends on type of value you have to use different separators:

* `=` - text.
* `:=` - raw JSON value. Use it for array, number, boolean and nested values.
* `@` - embed file.
* `=@` - embed json file.

```sh
http \
  "https://discord.com/api/webhooks/123/w3bh00k_t0k3n" \
  content="test" \
  embeds[0][title]="text"
```

Also, if you don't want to mess with these and would like to just pass raw body, like can be done in `curl`, use the next approach:

```sh
echo -n '{"content": "test", "embeds": [{"title": "text"}]}' | http "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
```

### PowerShell

```ps1
$WEBHOOK_URL = "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
http $WEBHOOK_URL content="test" embeds[0][title]="text"
# Also you can just pass raw json body:
'{"content": "test", "embeds": [{"title": "text"}]}' | http $WEBHOOK_URL
```

### Command Prompt (cmd.exe)

```bat
REM Notice escaped double quotes around values and none around link
SET WEBHOOK_URL=https://discord.com/api/webhooks/123/w3bh00k_t0k3n
http %WEBHOOK_URL% content="test" embeds[0][title]="text"

REM Outer quotes are skipped due to cmd parsing
echo {"content": "test", "embeds": [{"title": "text"}]} | http %WEBHOOK_URL%
```

## Sending attachments

```sh
# -f flag sets "Content-Type: multipart/form-data" header.
# payload_json='{}' - when sending files json can provided with this field.
# file1@cat.jpg - adds cat.jpg file as attachment.
# file2@images/dog.jpg - adds dog.jpg file from images directory.
http -f $WEBHOOK_URL \
  payload_json='{"content": "test", "embeds": [{"title": "text"}]}' \
  file1@cat.jpg \
  file2@images/dog.jpg
```
