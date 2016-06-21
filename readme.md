# Reactivate v1.0.0

### A quick way to get up and running with [React](https://facebook.github.io/react/docs/getting-started.html)/[Redux](http://redux.js.org/docs/basics/UsageWithReact.html) (leveraging [ES2015](https://babeljs.io/docs/learn-es2015/)) and [SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)/[Compass](http://compass-style.org/help/)/[Breakpoint](http://breakpoint-sass.com/) using [Webpack](https://webpack.github.io/docs/) for rapid development. 
-



#### Table of Contents:
* Assumptions (Read First)
* Installation
* Dev Mode
* Prod Build
* To Do
* License



#### Assumptions (Read First)

1. You're using a Mac or Linux (for bash and forward slashes). I may include Windows support after the [Windows 10 Anniversary Edition](https://blogs.windows.com/buildingapps/2016/03/30/run-bash-on-ubuntu-on-windows/) with native Bash support goes mainstream.

2. You have the following already installed your machine.
  * [Ruby](https://www.ruby-lang.org/en/downloads/)
  * [Gems](https://rubygems.org/pages/download)
  * [Homebrew](http://brew.sh/)
  * [Node.js & NPM](https://nodejs.org/en/download/)
  * [SASS](http://sass-lang.com/install)
  * [Compass](http://compass-style.org/install/)
  * **TIP:** As a Mac user, you can use Homebrew to upgrade your factory-installed instance of Ruby and Gems and freshly install Node. Use Gems to install 

3. You have some experience with Bash and a Terminal app.



#### Installation

1. Open up Terminal or [iTerm](https://www.iterm2.com/downloads.html).

2. Navigate to the folder directory which you've cloned this repo.

3. Run ```npm install```.

4. [That's it!](https://i.imgur.com/pKmhDHq.gifv)


#### Dev Mode

1. Open up Terminal or [iTerm](https://www.iterm2.com/downloads.html).

2. Navigate to the folder directory which you've cloned this repo.

3. Run ```npm run start```.

4. The terminal should log out the URL for the development page (e.g. [http://localhost:8080/](http://localhost:8080/)) and a message stating:
	* webpack: bundle is now VALID.


#### Prod Build

1. Open up Terminal or [iTerm](https://www.iterm2.com/downloads.html).

2. Navigate to the folder directory which you've cloned this repo.

3. Run ```npm run build```.

4. This will perform the following actions:
	* Delete the build folder if on already exists and all its content
	* Create a new build folder with an index.html and a hash-appended static css and js assets along with their respective map files and a manifest.



#### To Do
* Incorporate image optimizations for prod
* Explanation of the folder structure & rationale
* How each package play a role (helps with people who are just getting started, especially with webpacks)
* Technologies used (also in package.json)



#### License: MIT

The MIT License (MIT)

Copyright (c) 2016, Andrew Rindfleisch, [Element Theory](http://www.elementtheory.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
