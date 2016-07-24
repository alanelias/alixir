/**
 *  Documentation
 * [
 *     {
 *         template: "app", // template name use to filter gulp when you run gulp --template app
 *         required: true, // add this if you want all files under this name to be compiled every time
 *         files: [ {
 *             type: "scripts", // type will apply mix function call e.g: mix.scripts(....);
 *             filesIn: [ "js/file1.js", bowerPath ("package-name/js/file2.js") , bowerPath ("js/file3.js") ],  // filesIn will be the first args for mix function (string/array of strings) e.g: mix.scripts(filesIn, ...);
 *
 *                // "js/file1.js" it means resources/assets/js/file1.js  (resources/assets/ default folder)
 *                // bowerPath ("js/file2.js") it means vendor/bower_dl/package-name/js/file1.js  (resources/assets/ default folder)
 *
 *             fileOut: "public/js/app.js", // the output file of binding the 3 files above
 *             version: "js/app.js" // version will be the version file when mix.version([.....]) called
 *         }]
 *     }
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

// "datatables.net/js/jquery.dataTables.js"
module.exports =  [];