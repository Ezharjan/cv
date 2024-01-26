### Environment

1. [Node v16.14.0](https://nodejs.org/en/blog/release/v16.14.0)
2. [Lua 5.3](https://luabinaries.sourceforge.net/download.html)


### Install
1. Run the following commands to install adn run:
```bash
sudo npm i
npm run start
```


### Process

1. `git checkout master` to move to the master's branch for development;
2. Revise the contents (Set your images path correctly according to the examples given);
3. `npm run start` to see the changes in the browser, make sure there are no errors;
4. Open [localhost](http://127.0.0.1:8080) in the Firefox browser and save the content using the Firefox plugin called `SingleFile`;
5. `lua gitPusher.lua` to push the master branch to remote repository;
6. `git checkout built` to change to branch `built` which we deploy on our public server;
7. Place your new images to `assets` folder;
8. Place the HTML file created by `SingleFile` plugin in the root folder of branch `built`;
9.  Rename the saved file to `index.html` and open it, revise the line of `Print Button` to the code below:
```html
<button class="actions__btn js-print utl-screen-only has-tooltip" aria-label="Print Résumé" onclick="print()">
```
10.  In branch `built`, use `lua gitPusher.lua` to push the built branch onto the online repository.




<br>
<br>

### Known Issues

1. If you encounter the problem of error output on building the CV, please check your Node.js version if it is `node-v16.17.0-x64` or not. This CV is built via `node-v16.17.0-x64`. It's available [here](https://github.com/Ezharjan/cv/tree/master/env-tools).
2. If you don't have the stable network environment, the `node_modules` is available [here](https://github.com/Ezharjan/cv/tree/master/env-tools/node_modules-bkup).




<br>
<br>
<br>
<br>
<br>
<br>
<br>





<p align="right">Alexander Ezharjan</p>
<p align="right">30th April, 2022</p>
