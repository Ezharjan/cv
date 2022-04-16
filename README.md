# My Resume
[This](https://ezharjan.github.io/cv) is my resume.


### Tutorial

1. `git checkout master` to move into the master branch to develop the resume;
2. Based on `Node v16.14.0`;
3. `npm i` to install all the dependencies;
4. Change the branch to the `master`s;
5. Revise the contents of the resume as you wish in source folder;
6. Be sure to reference the contents in the source files and place the images into the correct folders so that you are able view them later online;
7. `npm run start` to see the change in browser;
8. Open the address shown on console board in firefox browser and save the content using the Firefox plugin called `SingleFile`;
9. `git checkout built` to go to the branch named `built` which we deploy on our public server(eg: Github Pages);
10. Place the HTML file created by `SingleFile` plugin in the root folder of branch `built`;
11. **Note:** Make sure that the images you placed in `assets folder` is also placed into the assets folder of branch 'built', if not, copy them into it; 
12. `npm run build` to build out the fruits into the dist folder, but this `dist` folder is not going to be the last deployable folder we are putting on our public server, just keep this 'dist' folder as a backup;
13. `git add .` to add all of the files;
14. `git commit -m 'update'` to commit the changes
15. `git push -u origin master` to push the master's change onto the Github;
16. `git push -u origin built` to push the built's change onto the Github(use gitPusher.lua to automatically push the codes if the network is unstable);
17. Open the Github page to view the result;
18. `git push -u originGitee master` to push the master's change onto the Gitee;
19. `git push -u originGitee built` to push the master's change onto the Gitee;
20. Manually click `force update` on Gitee Pages Services to deploy the latest version of your resume;
21. Open the Gitee page to view the result.
22. Note that the `dist` folder created in this project is not deployable on Gitee pages or Github pages due to some path issues, so use single file instead.

<br>
<br>
<br>
<br>

<p align="right">Alexander Ezharjan</p>
<p align="right">17th April, 2022</p>