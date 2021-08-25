---
title: Hello, world!
path: /hello-world
date: 2019-01-29
---

# Install Node

Node is server side Javascript, which we will use to develop our charts. Download node [here](https://nodejs.org/en/). 

# Install Git

Test if you already have git installed by running the following command in your terminal.

```bash
git --version
```

This should print a single line listing which version you have. If you get an error message, we need to install git. Checkout [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installation guide for help.

# Make a Github Account

If you don't have one already, create an account for [Github](https://github.com/). Once you get your username, send it to Alex on Slack to add you to the Data Section's organization.

# Install VSCode

VSCode is an IDE that we'll use for development. Install it [here](https://code.visualstudio.com/download).

# Install VSCode extensions

### Live Server

Open up your extensions by clicking on the icon with 4 blocks, 1 of which is removed from the other 3 on the left side bar. Alternatively, go to File -> Preferences -> Extensions.

Type in 'live server' and install the first extension that shows up.

### Prettier

Go to extensions again and this time type in 'Prettier'. Install the first option, 'Prettier - Code Formatter'

<Divider />

The following set of instructions will need to be done for every new project you work on.

# Setting up a project

Create a new folder somewhere on your computer where you want to store the files. Open up VSCode and open the folder you just created. 

Open up a terminal (Terminal -> New Terminal) run the following commands, replacing `REPONAME` with the repository's name and `YOURNAME` with your first name.

```bash
git init
git remote add origin https://github.com/dailynexusdata/REPONAME.git
git pull origin main
git branch -M YOURNAME
```

Then when you've made changes, you can run the following lines to push your changes to the repo.

```bash
git add *
git commit -m "short message describing what you did"
git push origin YOURNAME
```

# Installing Dependencies

Open a terminal and locate your package.json file. Typically, this will be in the current directory, if not, `cd` in to the correct directory. Then run `npm install` to install of the the dependencies. 

# Developer Menu

When we develop code, we're going to be testing it in your web browser. Often, we'll want to print out values when developing our code and this output will be put in your browser's console. Make sure you can open the develop tools in your browser.

In Chrome, open up a website and right click, you should see an option 'Inspect' which brings up a side or bottom bar which tabs such as `Elements` to show the structure of the website and `Console` which shows code output.

On Safari, you'll have to enable a setting to see this. Check out instructions [here](https://support.apple.com/en-ie/guide/safari/sfri20948/mac).

<Divider />

The following set of instructions will need to be done every time you go to work on a project.

# Starting Development

### Starting Webpack

Inside of the directory with your `package.json` file, run `npm start` which will watch for changes when you save your code and bundle your code.

### Starting Live Server

On the bottom bar of VSCode, you may see `Go Live`, which when you press will open up a page on your web browser so you can see the output of your code. 

If you don't see this button, go to View -> Command Palette and select 'Live Server: Open With Live Server'.