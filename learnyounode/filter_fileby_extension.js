var fs = require('fs');
fs.readdir(process.argv[2],function(err,file_list){
  for(var i=0;i<file_list.length;i++){
    var file_string = file_list[i];
    if(file_string.split('.')[1]===process.argv[3]){
      console.log(file_string);
    }
  }
});
