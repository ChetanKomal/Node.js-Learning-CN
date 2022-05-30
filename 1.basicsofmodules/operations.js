//we can use module.exports.function_name or just exports.function_name
//we use exports.func_name to make it visibl outside the file and be used outside the file
//and we just need toinclude the file with the main file.

exports.add = function(a, b){
    return  a + b;
}

exports.multiply = function(a, b){
    return a * b;
}