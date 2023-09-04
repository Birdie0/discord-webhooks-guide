# Insomnia

[Insomnia](https://insomnia.rest/download) is a GUI tool similar to Postman for sending web requests.

Download it from official website. Available for Windows, Linux, and macOS.

Here's how to use it:

1. Click `+` on the left, choose `New Request`, in dialog window press `Create`.
2. Click on dropdown in front of URL field and choose `POST`.
3. Paste Webhook URL in URL field.
4. Click `Body` dropdown, choose `JSON`.
5. Paste the body below.
6. Press `Send`.
7. If status shows `204 No Content` means request succeed!

![Insomnia example](../img/other/insomnia.png)

## Sending attachments

To send attachment(s):

1. Switch `Body` format from `JSON` to `Multipart Form`.
2. Click on arrow icon, choose `File`.
3. Click `Choose File` and select file.
4. Repeat if you want to add more attachments.
5. To add json to request add key with `payload_json` name and json body value (both `Text` and `Text (Multi-line)` are fine).

![Insomnia example](../img/other/insomnia_2.png)
