var filterFn = require('./file_filter_module.js');
var dir = process.argv[2];
var filter = process.argv[3];

filterFn(dir,filter,function(err,file_list){
    if(err)
    return console.log(err);

    file_list.forEach(function(file){
      console.log(file);
    });

});
