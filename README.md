# myname

Determines the name of a module.

```javascript
const myname = require('myname')

console.log(myname())
```

## What it does

It gets the name of the parent module (the one requiring the `myname` module). It then removes itself from the module cache so that the next module will have its own parent as the one that `myname` returns.

License: MIT
