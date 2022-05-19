import { IncomingForm } from 'formidable';


const fs = require('fs');
const mv = require('mv');
const sharp = require('sharp');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      //console.log(fields, files);
      //console.log(fields);
      //console.log(files.file.filepath);
      var postId = fields.id;
      var oldPath = files.file.filepath;
      var newPath = `./public/uploads/${files.file.newFilename}.jpg`;
      console.log(fields.id);
      sharp(`${oldPath}`)
      .toFormat('jpg', {palette: true})
      .resize({ width: 500 })
      .toFile(newPath)
      
      //mv(oldPath, newPath, function (err) {});
      console.log(newPath);
      res.status(200).json({ fields, files, newPath });
    });
    
  });
  


};
