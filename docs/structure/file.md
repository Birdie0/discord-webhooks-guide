# file

Sending files using webhooks is only possible using `Content-Type: multipart/form-data` header.
Using this method also means you have to set json body as value of `payload_json` parameter.

Parameter names should have unique names otherwise they will collide and only first file from ones with identical names will be shown.

Example:

```sh
file1=@cat.jpg
file2=@dog.jpg
payload_json={"embeds":[{"title":"test"}]}
```

![result example](../img/structure/file.png)

## Embedding attachments

To put image attachment inside embed use `attachment://` with its filename (not field name).
That will also hide attachment from the message.

```sh
file1=@pizza.jpg
payload_json={"embeds":[{"image":{"url":"attachment://pizza.jpg"}}]}
```

![result example](../img/structure/file_2.png)

## How to send attachments using various tools explained on respective pages:

* [curl](../tools/curl.md#sending-attachments)
* [HTTPie](../tools/httpie.md#sending-attachments)
* [Insomnia](../tools/insomnia.md#sending-attachments)
* [Postman](../tools/postman.md#sending-attachments)
