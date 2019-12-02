# TypeScriptにゃんにゃん会

## Prerequisites

Before you exec `dc up`, You need to setup [Ubuntu](https://beartail.esa.io/posts/1352) and [Docker](https://beartail.esa.io/posts/1353).

## How to boot up the docker containers

```sh
# aliases
# set the following aliases to your shell (.bashrc, .bash_profile, ...)
alias dc='docker-compose'
alias dcr='dc run --rm'
alias dce='dc exec'
```

```sh
# pull container images
$ dc build

# boot the containers
$ dc up -d

# show the versions
$ dce node node --version
$ dce node yarn --version

# tsc
$ dce node yarn tsc src/helloworld.ts # will generate src/helloworld.js

# jest
$ dce node yarn jest # will run all tests
$ dce node yarn jest --watchAll # will watch file modifications and run all tests

# eslint
$ dce node yarn lint # will run eslint against all .ts files
```

## Policy

- 30 minutes study session every weekday after work. (終業後に毎日30分やる)
- Pick up a topic of the day to implement practical TS code. (今日のお題を出して、実践的なコードを書けるようにする)
- Choose the topic in order to finish implementation and unit test by consulting the handbook within 30 minutes. (ハンドブックを調べながら書ける程度のお題とする)
- Write implementation and test code in a test file to get feedback faster. (テストファイルに実装とテストを書いて、早くフィードバックを得られるようにする)
- Checkout a branch before you started with naming `my-name/topic-name` like `kitamura/basic-types`. (始める前にブランチを作りましょう)
    - `git checkout -b my-name/topic-name`
- Send PR to attendants as soon as you finish coding. (書き終わったら参加者にPRを出しましょう)


## Schedule

| Start at | Content |
| -- | -- |
| 2019/10/28 ~ | https://www.typescriptlang.org/docs/handbook/basic-types.html |
| 2019/10/29 ~ | https://www.typescriptlang.org/docs/handbook/variable-declarations.html |
| 2019/10/30 ~ | https://www.typescriptlang.org/docs/handbook/interfaces.html |
| 2019/11/05 ~ | https://www.typescriptlang.org/docs/handbook/classes.html |
| 2019/11/08 ~ | https://www.typescriptlang.org/docs/handbook/functions.html |
| 2019/11/11 ~ | https://www.typescriptlang.org/docs/handbook/generics.html |
| 2019/11/14 ~ | https://www.typescriptlang.org/docs/handbook/enums.html |
| 2019/11/19 ~ | https://www.typescriptlang.org/docs/handbook/type-inference.html |
| 2019/11/19 ~ | https://www.typescriptlang.org/docs/handbook/type-compatibility.html |
| 2019/11/19 ~ | https://www.typescriptlang.org/docs/handbook/advanced-types.html |
| 2019/11/25 ~ | https://www.typescriptlang.org/docs/handbook/symbols.html |
| 2019/11/26 ~ | https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html |
| 2019/11/26 ~ | https://www.typescriptlang.org/docs/handbook/modules.html |
| 2019/11/26 ~ | https://www.typescriptlang.org/docs/handbook/namespaces.html |
| 2019/11/28 ~ | https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html |
|  | https://www.typescriptlang.org/docs/handbook/module-resolution.html |
|  | https://www.typescriptlang.org/docs/handbook/declaration-merging.html |
|  | https://www.typescriptlang.org/docs/handbook/jsx.html |
| 2019/12/02 ~ | https://www.typescriptlang.org/docs/handbook/decorators.html |
|  | https://www.typescriptlang.org/docs/handbook/mixins.html |
|  | https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html |
|  | https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html |
|  | https://www.typescriptlang.org/docs/handbook/utility-types.html |
