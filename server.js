const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/image', async (req, res) => {
  try {
    if (!req.files) {
      req.send({
        status: false,
        message: 'No files',
      });
    } else {
      const { image } = req.files;

      picture.mv('./uploads' + picture.name);

      res.send({
        status: true,
        message: 'File is uploaded',
      });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('server is running on port ${port}`'));
