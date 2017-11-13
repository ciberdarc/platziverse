# platziver-db

### usage

``` js
const setupDatabase = require('platziverse-db')

setupDatabase(config).then(db => {
  const { agent, Metric } = db
}).catch(err => console.error(err))
```
