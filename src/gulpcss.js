/**
 *  Documentation
 * [
 *    {
 *         template: "app", // template name use to filter gulp when you run gulp --template app
 *         required: true, // add this if you want all files under this name to be compiled every time
 *         files: [{
 *             type: "sass", // type will apply mix function call e.g: mix.sass(....);
 *             filesIn: "app.scss", // filesIn will be the first args for mix function (string/array of strings) e.g: mix.sass(filesIn, ...);
 *             fileOut: "puplic/css/app.css", // the output file if not define that means by default it will be there we use this in case we need to change the file name or we have multi files in
 *             version: "css/app.css" // version will be the version file when mix.version([.....]) called
 *         }, {
 *             type: "....", // another file to compile
 *             filesIn: ["....", "....."], // binding many files together
 *             fileOut: "puplic/css/all.css" // the output file of binding both files above
 *         }]
 *     },
 * ]
 */


/**
 * return vendor/bower/bower_folder/{file-path}
 * @param path
 * @returns {string}
 */
function bowerPath( path ){
    return "../../../vendor/bower_dl/" + path;
}

module.exports =  [];