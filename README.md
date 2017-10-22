# app-webpack

> Um boilerplate do Vuejs criado pelo vue-cli init webpack contendo alguns componentes básicos para o desenvolvimento de uma aplicação: bootstrap e outros

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Estrutura de diretórios

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./&onlyDirs=true) -->
```
webpack/
├── build/
├── config/
├─┬ dist/
│ └─┬ static/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   └── js/
├── scripts/
├─┬ src/
│ ├── assets/
│ ├── components/
│ ├── router/
│ └── scss/
├── static/
└─┬ test/
  ├─┬ e2e/
  │ ├── custom-assertions/
  │ └── specs/
  └─┬ unit/
    └── specs/
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Estrutura de diretórios e arquivos

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./) -->
```
webpack/
├─┬ build/
│ ├── build.js
│ ├── check-versions.js
│ ├── dev-client.js
│ ├── dev-server.js
│ ├── utils.js
│ ├── vue-loader.conf.js
│ ├── webpack.base.conf.js
│ ├── webpack.dev.conf.js
│ ├── webpack.prod.conf.js
│ └── webpack.test.conf.js
├─┬ config/
│ ├── dev.env.js
│ ├── index.js
│ ├── prod.env.js
│ └── test.env.js
├─┬ dist/
│ ├─┬ static/
│ │ ├─┬ css/
│ │ │ └── app.17ac7ff9d85998ab14ab80d481db5684.css
│ │ ├─┬ fonts/
│ │ │ ├── fontawesome-webfont.674f50d.eot
│ │ │ ├── fontawesome-webfont.af7ae50.woff2
│ │ │ ├── fontawesome-webfont.b06871f.ttf
│ │ │ └── fontawesome-webfont.fee66e7.woff
│ │ ├─┬ img/
│ │ │ └── fontawesome-webfont.912ec66.svg
│ │ └─┬ js/
│ │   ├── app.a5aaa4e4eb5b93396dcc.js
│ │   ├── app.a5aaa4e4eb5b93396dcc.js.map
│ │   ├── manifest.c34d336f525b20910ff5.js
│ │   ├── manifest.c34d336f525b20910ff5.js.map
│ │   ├── vendor.2d817150a300c85c17b6.js
│ │   └── vendor.2d817150a300c85c17b6.js.map
│ └── index.html
├─┬ scripts/
│ └── generate-docs.js
├─┬ src/
│ ├─┬ assets/
│ │ └── logo.png
│ ├─┬ components/
│ │ └── HelloWorld.vue
│ ├─┬ router/
│ │ └── index.js
│ ├─┬ scss/
│ │ └── app.scss
│ ├── App.vue
│ └── main.js
├── static/
├─┬ test/
│ ├─┬ e2e/
│ │ ├─┬ custom-assertions/
│ │ │ └── elementCount.js
│ │ ├─┬ specs/
│ │ │ └── test.js
│ │ ├── nightwatch.conf.js
│ │ └── runner.js
│ └─┬ unit/
│   ├─┬ specs/
│   │ └── Hello.spec.js
│   ├── .eslintrc
│   ├── index.js
│   └── karma.conf.js
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .postcssrc.js
├── doc-directory-create.js
├── doc-directory-tree.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Estrutura de diretórios: src

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./src&depth=100&onlyDirs=true) -->
```
src/
├── assets/
├── components/
├── router/
└── scss/
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Estrutura de diretórios e arquivos: src

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./src) -->
```
src/
├─┬ assets/
│ └── logo.png
├─┬ components/
│ └── HelloWorld.vue
├─┬ router/
│ └── index.js
├─┬ scss/
│ └── app.scss
├── App.vue
└── main.js
```
<!-- AUTO-GENERATED-CONTENT:END -->
