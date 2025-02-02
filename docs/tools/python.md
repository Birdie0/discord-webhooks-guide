# Python

[Python](https://python.org) has many HTTP libraries that are able to generate webhook requests. While there's no way to list all of them, here are some examples you can try.

## httpx

The [httpx](https://www.python-httpx.org/) client library can be used to submit both simple and more complex webhooks.

### Send a payload as json

```python
import httpx

response = httpx.post(
    "https://discord.com/api/webhooks/123/w3bh00k_t0k3n",
    json={
        "username": "Captain Hook",
        "content": "Ahoy matey! I be a webhook message!",
        # you can add embeds here, too
    }
)
# raise an exception if the operation failed.
response.raise_for_status()
```

### Sending Attachments

```python
import json
import httpx

with open("image.png", "rb") as io_object:
    response = httpx.post(
        "https://discord.com/api/webhooks/123/w3bh00k_t0k3n",
        data={"payload_json": json.dumps({
            "embeds": [{
                "title": "Hello, world!",
                "description": "This is a message with an image",
                "image": {"url": "attachment://filename"}
            }]
        })},
        files={"filetag": ("filename", io_object, "image/png")}
    )
    # raise an exception if the operation failed.
    response.raise_for_status()
```
