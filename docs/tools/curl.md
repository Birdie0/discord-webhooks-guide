# curl

[curl](https://curl.se/) - command line tool for sending web requests.

* Windows - can be installed with [Scoop](https://scoop.sh/) or [Chocolatey](https://chocolatey.org/).
* Linux - can be installed with built-in package manager or [Homebrew](https://brew.sh/).
* macOS - can be installed with [Homebrew](https://brew.sh/) or [MacPorts](https://www.macports.org/).

Also, you can download executable from their website and run it from a directory or make it discoverable through `PATH`,
so it can be run from anywhere. Using a package manager is preferable as it simplifies the process of installing and updating the tool.

## Usage

`curl -H "Content-Type: application/json" -d <body> <link>`

### Bash/Zsh/etc.

```sh
# Usually, request also includes `-X POST` to set request verb to POST, but using `-d` does that automatically.
# -H "Content-Type: application/json" - adds header that tells server you're sending JSON data.
# -d '{"username": "test", "content": "hello"}' - sets request data.
curl -H "Content-Type: application/json" -d '{"username": "test", "content": "hello"}' "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"

# To make command more readable you can split it to multiple lines using backslash `\`
# and set webhook url as variable, so you don't need to paste it over and over again.
# Also you can add the variable to your `.*rc` file, so it persists on console reloads.
export WEBHOOK_URL="https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
curl \
  -H "Content-Type: application/json" \
  -d '{"username": "test", "content": "hello"}' \
  $WEBHOOK_URL
```

### PowerShell

```ps1
# In PowerShell you have to escape " with \ inside strings, so body string be parsed correctly.
$WEBHOOK_URL = "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
curl -H "Content-Type: application/json" -d '{\"username\": \"test\", \"content\": \"hello\"}' $WEBHOOK_URL

# ` is used for making command multiline
curl `
  -H "Content-Type: application/json" `
  -d '{\"username\": \"test\", \"content\": \"hello\"}' `
  $WEBHOOK_URL
```

### Command Prompt (cmd.exe)

```bat
REM Notice double quotes around body and none around link.
SET WEBHOOK_URL=https://discord.com/api/webhooks/123/w3bh00k_t0k3n
curl -H "Content-Type: application/json" -d "{\"username\": \"test\", \"content\":\"hello\"}" %WEBHOOK_URL%

REM ^ is multiline splitter in cmd.
curl ^
  -H "Content-Type: application/json" ^
  -d "{\"username\": \"test\", \"content\": \"hello\"}" ^
  %WEBHOOK_URL%
```

## Sending attachments

```sh
# Adding `-H "Content-Type: multipart/form-data"` is not required as `-F` sets it automatically.
# -F 'payload_json={}' - sets json body.
# -F "file1=@cat.jpg" - adds cat.jpg file as attachment.
# -F "file2=@images/dog.jpg" - adds dog.jpg file from images directory.
curl \
  -F 'payload_json={"username": "test", "content": "hello"}' \
  -F "file1=@cat.jpg" \
  -F "file2=@images/dog.jpg" \
  $WEBHOOK_URL
```
