# angular-to-do-list
An Angular to do list

## Table of Contents
- [Local Setup](#local-setup)
- [Get it](#get-it)
- [Environment](#environment)
  - [Development](#development)
  - [Ide](#ide)
  - [Global Variables](#global-variables)
- [Contributing](#contributing)

### Local Setup
To preview the website locally you have to install on your local machine the listed softwares below:
1. Install [git](https://git-scm.com/) to manage Git repository.
2. Install [Node](https://www.nodejs.org/) to run the application

***That's it!***

### Get it
First of all, clone the repository `angular-to-do-list` into your local machine:

```shell
git clone https://github.com/FabioAnsaldi/angular-to-do-list.git
```
######

### Environment
Now you could run development environment and see the final result or if you want you could edit the project by running it through the product environment

######

#### Development
Go to the new folder directory and run the following commands:
```shell
cd angular-to-do-list
npm install
npm run start
```
> It runs developing environment. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `npm run start build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Ide
If it is useful for you to set an extra plugins for your Ide, you can find the `node_modules` folder and all of modules inside.
For example I usually use ESlint, such as in this repository, so I have to set the module directory folder in my Idee settings.
> Remember:
> You will have to install also NPM v16.17.1 locally

#### Global Variables
You have to add an extra file named `.env` where there will be the `API_HOSTNAME`, `API_PORT` and the `API_KEY` keys.
> API_HOSTNAME=gateway.marvel.com
> API_PORT=443
> API_VERSION=v1
> API_KEY=4c4123cf4dee41ba852d6788801480bc

### Contributing
Feel free to make changes to the project files.
