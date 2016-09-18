var fs = require('fs');
var path = require('path');

module.exports = function(dir,filetype,callback){
    fs.readdir(dir,function(err,file_list){
        if(err)
        return callback(err);

        file_list=file_list.filter(function(file){
          return path.extname(file)==='.'+filetype;
        });
        callback(null,file_list);
    });
}
