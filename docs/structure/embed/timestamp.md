# timestamp

Allows you to add `timestamp` to embed. Time stores as String in the next format: `"YYYY-MM-DDTHH:MM:SS.MSSZ"`. If `footer` was used they will be separated with a bullet (•). Also, this is special field, because it can show different time based on user's device.

P.S. Timestamp is not just text. This is formatted UTC time and date. It will show different time because timezones. Look on example below: I set 12pm but it shows 2pm because UTC+2 timezone.

Example:

```json
{
  "embeds": [{
    "description": "Time travel!",
    "timestamp": "2015-12-31T12:00:00.000Z"
  }]
}
```

![timestamp example](../../img/structure/embed/timestamp.png)
