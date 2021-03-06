# My Resume
[This](https://ezharjan.github.io/cv) is my resume.


### Tutorial

1. Based on `Node v16.14.0`;
2. Change the branch to the `master`s;
3. `git checkout master` to move to the master's branch for development;
4. `npm i` to install all the dependencies;
5. If you don't have the stable network environment, the `node_modules` is available [online](xxx).
6. You can directly place the `node_modules` from branch `libs` and no need to `npm install` at all.
7. Revise the contents of the resume as you wish in source folder;
8. Be sure to reference the contents in the source files and place the images into the correct folders so that you are able view them later online;
9. `npm run start` to see the changes in the browser, make sure there are no errors;
10. Open the address shown on console board in the Firefox browser and save the content using the Firefox plugin called `SingleFile`;
11. `npm run build` to build out the fruits into the dist folder, but this `dist` folder is not going to be the last deployable folder we are to put on our public server, just keep this 'dist' folder as a backup;
12. `git checkout built` to go to the branch named `built` which we deploy on our public server(eg: Github Pages);
13. Place the HTML file created by `SingleFile` plugin in the root folder of branch `built`;
14. Rename and open the file created by Firefox SingleFile plugin then revise the line of `Print Button` to the code below:
```html
<button class="actions__btn js-print utl-screen-only has-tooltip" aria-label="Print Résumé" onclick="print()">
```
15. **Note:** Make sure that the images you placed in `assets folder` is also placed into the assets folder of branch 'built', if not, copy them into it; 
16. \---------------Use Lua5.3 To Run gitPusher.lua On Both Branches---------------
17. `git add .` to add all of the files;
18. `git commit -m 'update'` to commit the changes
19. `git push -u origin master` to push the master's change onto the Github;
20. `git push -u origin built` to push the built's change onto the Github(use gitPusher.lua to automatically push the codes if the network is unstable);
21. Open the Github page to view the result;
22. `git push -u originGitee master` to push the master's change onto the Gitee;
23. `git push -u originGitee built` to push the master's change onto the Gitee;
24. \------------------------------------------------------------------------------
25. Manually click `force update` on Gitee Pages Services to deploy the latest version of your resume;
26. Open the Gitee page to view the result.
27. Note that the `dist` folder created in this project is not deployable on Gitee pages or Github pages due to some path issues, so use single file instead.


<br>
<br>
<br>

### Brief

1. `git checkout master` to move to the master's branch for development;
2. Revise the contents of your resume;
3. `npm run start` to see the changes in the browser, make sure there are no errors;
4. **Open the address shown on console board in the Firefox browser and save the content using the Firefox plugin called `SingleFile`;**
5. Copy the images in `assets` folder;
6. `npm run build` to build out the fruits into the dist folder, but this `dist` folder is not going to be the last deployable folder we are to put on our public server, just keep this 'dist' folder as a backup;
7. `lua gitPusher.lua` to push the master branch to the online repository;
8. `git checkout built` to go to the branch named `built` which we deploy on our public server(eg: Github Pages);
9.  Place the HTML file created by `SingleFile` plugin in the root folder of branch `built`;
10. Rename and open the file created by Firefox SingleFile plugin then revise the line of `Print Button` to the code below:
```html
<button class="actions__btn js-print utl-screen-only has-tooltip" aria-label="Print Résumé" onclick="print()">
```
11. **Note:** Make sure that the images you placed in `assets folder` is also placed into the assets folder of branch 'built', if not, copy them into the folder; 
12. `lua53 gitPusher.lua` to push the built branch onto the online repository;
13. Manually click `force update` on Gitee Pages Services to deploy the latest version of your resume;
14. Open the Gitee page to view the result.


<br>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="right">Alexander Ezharjan</p>
<p align="right">30th April, 2022</p>