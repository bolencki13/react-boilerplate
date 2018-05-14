# ReactJS Boilerplate
> A ReactJS boilerplate template

![NPM Version][npm-image]

A basic boilerplate template for a ReactJS Project. This template includes support for sass, jsx, html, and arbitrary files. There is also a basic folder structure for organization and readability. The template supports minified versions for a production build

## Features

* [Webpack](https://webpack.js.org/) dev server
* Minified production build
* Readable folder structure
* [ESLint](https://eslint.org/)
* [SASS/SCSS](https://sass-lang.com/)
* File loading
* [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html)/[Enzyme](https://github.com/airbnb/enzyme) (continuous) testing
* Git hooks with [Husky](https://github.com/typicode/husky)

## Installation

```sh
git clone git@bitbucket.org:bolencki13/react-boilerplate.git && rm -R .git/ && git init && npm i -D
```

## Usage example

This template has its own build server with [webpack](https://webpack.js.org/). In development, the webpage with automatically reload when there are changes.

```sh
npm start
```

In production, a minified version will be built.

```sh
npm run build
```


## Development setup

Testing is supported with [jest](https://facebook.github.io/jest/docs/en/tutorial-react.html) and [enzyme](https://github.com/airbnb/enzyme). Tests can be run as follows:

```sh
npm i -D
npm test
```

Continuously watching for file changes:

```sh
npm run test:watch
```

## Release History

* 1.0.0
    * Initial Release

## Meta

Brian Olencki – [@bolencki13](https://twitter.com/bolencki13) – [bolencki13@bolencki13.com](mailto://bolencki13@bolencki13.com)

Distributed under the MIT license. See [``LICENSE``](LICENSE) for more information.

[https://github.com/bolencki13/react-boilerplate](https://github.com/bolencki13/react-boilerplate)

## Contributing

1. Fork it (<https://github.com/bolencki13/react-boilerplate/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
