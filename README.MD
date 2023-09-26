-- EPISODE-1 (Inception) --
1. What is CDN File and Why we use it?
    1.1 Why we use React CDN file
    1.2 Why we use ReactDOM CDN file
2. What is React Element
    2.1 Parts of React Elements (Name of element, {props: attributes and childrens})
3. What does {root.render} do?

-- EPISODE-2 (Igniting our App) --
1. Push the code to the github
    1.1 git init (initialise git)
    1.2 add . (add all files of working folder to git)
    1.3 commit -m "message here" (commit all the added files with git)
    1.4 configure the local repository with the remote respository (github)
2. Initialise NPM (Package Manager)
    2.1 package.json (configuration file for the NPM)
3. Bundler (Parcel)
4. Difference between package.json and package-lock.json
5. What is node-modules and why it is there?
6. Transitive dependency
7. Every packages (node_modules) have their's own package.json file and own dependencies.
8. Why tilde (~) and carrat (^) are there in the package.json before the package version
9. Execute parcel (npx parcel targetfileName.extension).
10. Parcel doing the following for us:
    10.1 Create local server
    10.2 HMR (Hot Module Replacement) {Auto refresh the server when we made any changes to the code}
    10.3 Parcel uses 'File Watching Algorithm' to do HMR
    10.4 Caching (Faster Building)
    10.5 Image optimisation
    10.6 Bundling
    10.7 Minification (By comparssing the files)
    10.8 Differential bundling (support older browser)
    10.9 Error Handling
    10.10 Tree Shaking (Remove unsed code)
    10.11 Consistant Hashing
    10.12 Create different budles for Developement and Production
    and many more................................
11. How parcel co-ordinate with '.parcel-cache' and 'dist' file
12. What is the role of the 'parcel' in making the react-app faster?
13. Make your App compitable to older browser (browserlist in package.json)