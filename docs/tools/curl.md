# curl

[curl](https://curl.se/) - command line tool for sending web requests.

* [Windows] - preinstalled on Windows 10+, newer version can be installed with [Scoop](https://scoop.sh/) or [Chocolatey](https://chocolatey.org/).
* [Linux] - can be installed with built-in package manager or [Homebrew](https://brew.sh/).
* [macOS] - preinstalled, newer version can be installed with [Homebrew](https://brew.sh/) or [MacPorts](https://www.macports.org/).

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
# and/or set webhook url and body as variables.
WEBHOOK_URL="https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
BODY='{"username": "test", "content": "hello"}'
curl \
  -H "Content-Type: application/json" \
  -d $BODY \
  $WEBHOOK_URL
```

### PowerShell

Note: Preinstalled PowerShell (<5.1) comes with `curl` command that's actually alias to `Invoke-WebRequest` when actual curl can be accessed with `curl.exe`. This collision has been resolved in PowerShell Core 6+. If you're unsure which version you're using run this command:

```ps1
$PSVersionTable.PSVersion.ToString()
```

#### 5.1 and below (powershell.exe)

```ps1
# In older version you have to escape " with \ inside strings, so body string be parsed correctly.
curl.exe -H "Content-Type: application/json" -d '{\"username\": \"test\", \"content\": \"hello\"}' "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"

# To improve rediability you can split command with `
# and set webhook url and body to variables
$WEBHOOK_URL = "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
$BODY = '{\"username\": \"test\", \"content\": \"hello\"}'
# Alternatively, we can use PowerShell hashtables with the ConvertTo-Json function
$BODY = @{ username = "test"; content = "hello" } | ConvertTo-Json
curl.exe `
  -H "Content-Type: application/json" `
  -d $BODY `
  $WEBHOOK_URL
```

#### Core / 6 and above (pwsh.exe)

```ps1
$WEBHOOK_URL = "https://discord.com/api/webhooks/123/w3bh00k_t0k3n"
# In newer versions escaping \ with " is no longer necessary (and makes JSON invalid)
$BODY = '{"username": "test", "content": "hello"}'
# Alternatively, we can use PowerShell hashtables with the ConvertTo-Json function
$BODY = @{ username = "test"; content = "hello" } | ConvertTo-Json
curl.exe -H "Content-Type: application/json" -d $BODY $WEBHOOK_URL
```

### Command Prompt (cmd.exe)

Note: Unlike PowerShell, both `curl` and `curl.exe` point to the same binary.

```bat
REM ^ is multiline splitter in cmd.
curl ^
  -H "Content-Type: application/json" ^
  -d "{\"username\": \"test\", \"content\": \"hello\"}" ^
  https://discord.com/api/webhooks/123/w3bh00k_t0k3n

REM Notice double quotes around body and none around link.
SET WEBHOOK_URL=https://discord.com/api/webhooks/123/w3bh00k_t0k3n
SET BODY="{\"username\": \"test\", \"content\":\"hello\"}"
curl -H "Content-Type: application/json" -d %BODY% %WEBHOOK_URL%
```

## Sending attachments

```sh
# Adding `-H "Content-Type: multipart/form-data"` is not required as `-F` sets it automatically.
# -F 'payload_json={}' - when sending files JSON can provided with this field.
# -F "file1=@cat.jpg" - adds cat.jpg file as attachment.
# -F "file2=@images/dog.jpg" - adds dog.jpg file from images directory.
curl \
  -F 'payload_json={"username": "test", "content": "hello"}' \
  -F "file1=@cat.jpg" \
  -F "file2=@images/dog.jpg" \
  $WEBHOOK_URL
```

[Windows]: https://curl.se/windows/microsoft.html
[Linux]: https://everything.curl.dev/install/linux.html
[macOS]: https://everything.curl.dev/install/macos.html
