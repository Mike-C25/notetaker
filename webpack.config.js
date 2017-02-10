module.exports = {
    //entry directs webpack where to compile
    entry: './app/App.js',
    output: {
        //output sends a direction to destinaiton of compiled code
        filename: "public/bundle.js"
    },
    module: {
        loaders: [{
            //includes .jsx files
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                //allows the use of react and ES6 code 
                //puts code through transformations
                presets: ['react', 'es2015']
            }
        }]
    }
}
