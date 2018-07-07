# Hitokoto

> A demo web page for HITOKOTO.

## File Structure

```
├── .babelrc
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .git
├── node_modules
├── package.json
├── package-lock.json
├── .postcssrc.js
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── index.vue
│   │   ├── reminder.vue
│   │   ├── user-controller.vue
│   │   ├── user-userinfo.vue
│   │   ├── home.vue
│   │   └── user.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   └── store
│       ├── index.js
│       └── modules
│           └── todos.js
├── static
│   ├── .gitkeep
│   └── svg
│       ├── add.svg
│       ├── back.svg
│       ├── Category.svg
│       ├── divide.svg
│       ├── electrical.svg
│       ├── home.svg
│       ├── more.svg
│       ├── operation.svg
│       ├── pic.svg
│       ├── pic1.svg
│       ├── reminder.svg
│       ├── selected.svg
│       ├── set.svg
│       ├── Smile.svg
│       ├── test.svg
│       ├── user.svg
│       ├── video.svg
│       ├── warning.svg
│       ├── word.svg
│       └── lights.svg
└── README.md
```

## Logic Function

User can use the APP to get more infomation that the X1 can't do, like having a look at the recieps and control the electronic equipments in distance.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
