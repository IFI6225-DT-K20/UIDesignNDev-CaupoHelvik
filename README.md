# UIDesignNDev-CaupoHelvik  
Following instructions are done in Windows based environment. Some commands in Linux may vary.

Website to replicate: https://www.barbican.org.uk/  
  
  
  
Installation intructions:  
  
1. npm init -y  
2. npm install react --save  
3. npm install react-dom --save  
4. npm install webpack --save  
5. npm install webpack-dev-server --save  
6. npm install webpack-cli --save  
7. npm install babel-core --save-dev  
8. npm install babel-loader --save-dev  
9. npm install babel-preset-env --save-dev  
10. npm install babel-preset-react --save-dev  
11. npm install html-webpack-plugin --save-dev  
Following commands need to be executed in root directory:  
12. type nul > index.html   
13. type nul > App.js  
14. type nul > main.js  
15. type nul > webpack.config.js  
16. type nul > .babelrc  
17. Add following code to webpack.config.js
    ```javascript
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
       entry: './main.js',
       output: {
          path: path.join(__dirname, '/bundle'),
          filename: 'index_bundle.js'
       },
       devServer: {
          inline: true,
          port: 8001
       },
       module: {
          rules: [
             {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ['es2015', 'react']
                }
             }
          ]
       },
       plugins:[
          new HtmlWebpackPlugin({
             template: './index.html'
          })
       ]
    }
    ```
18. Open package.json and remove in "scripts" the "test" "echo \"Error: no test specified\" && exit 1"  
19. In package.json put in "scripts" this code:
    ```javascript
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
    ```
20. In index.html file put following code:
    ```html
    <!DOCTYPE html>
    <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <title>React App</title>
    </head>
    <body>
    <div id = "app"></div>
    <script src = 'index_bundle.js'></script>
    </body>
    </html>
    ```
21. In App.js put following code: 
    ```javascript
    import React, { Component } from 'react';
    class App extends Component{
       render(){
          return(
             <div>
                <h1>Hello World</h1>
             </div>
          );
       }
    }
    export default App;
    ```
22. In main.js put following code:
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App.js';
    
    ReactDOM.render(<App />, document.getElementById('app'));
    ```
23. In .babelrc put following code:
    ```json
    {
       "presets":["env", "react"]
    }
    ```
24. npm install babel-loader@7
25. npm install babel-preset-es2015
26. Generate bundle with console command: npm run build
27. Run server in console with command: npm start