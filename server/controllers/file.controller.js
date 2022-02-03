const fs = require('fs');
const baseUrl = 'http://localhost:8000/api/files/';

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/uploads/";
    
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

    module.exports = {
        download
    };