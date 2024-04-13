# Chewey Bot Api

This is a handler for the [Chewey Bot API](https://api.chewey-bot.top/).

# Demos

## Javascript

```js
const { CheweyBotAPI, CB_ENDPOINTS } = require('chewey-bot-api');

let CBClient = new CheweyBotAPI('myToken');

CBClient.image(CB_ENDPOINTS.RED_PANDA)
  .then(result => {
    console.log(result); // URL of image
  })
  .catch(err => {
    console.error(err);
  });
```

## Typescript

```ts
import { CB_ENDPOINTS, CheweyBotAPI } from 'chewey-bot-api';

const CBClient = new CheweyBotAPI('myToken');

CBClient.image(CB_ENDPOINTS.RED_PANDA)
  .then(result => {
    console.log(result); // URL of image
  })
  .catch(err => {
    console.error(err);
  });
```

Help keep the API alive at [https://www.patreon.com/CheweyZ](https://www.patreon.com/CheweyZ)

or check out our website at [https://chewey-bot.top/](https://chewey-bot.top/)
access API directly at [https://api.chewey-bot.top/](https://api.chewey-bot.top/)