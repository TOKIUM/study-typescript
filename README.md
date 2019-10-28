# study-typescript

## How to boot up

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
```
