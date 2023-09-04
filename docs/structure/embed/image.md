# image

Allows you to add image to the embed. Currently, there is no way to set width/height of the image.
`url` value must be valid url that starts with `http(s)://` or `attachment://`, more info about the latter one can be found on the [file](../file.md#embedding-attachments) page.

Example:

```json
{
  "embeds": [{
    "image": {
      "url": "https://i.imgur.com/ZGPxFN2.jpg"
    }
  }]
}
```

![image](../../img/structure/embed/image.png)
