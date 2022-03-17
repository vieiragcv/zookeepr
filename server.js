
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

/*-----------------------------------------------------------------------
- parse incoming string or array data && parse incoming JSON data
-----------------------------------------------------------------------*/

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/*-----------------------------------------------------------------------
-                       LISTENERS
-----------------------------------------------------------------------*/

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});