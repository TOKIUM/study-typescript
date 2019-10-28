# study-typescript

## How to boot up

```sh
# aliases
alias dc='docker-compose'
alias dcr='dc run --rm'
alias dce='dc exec'
```

```sh
# pull container images
$ dc build

# boot
$ dc up -d

# show the versions
$ dc exec node node --version
$ dc exec node yarn --version

# tsc
$ dce node yarn tsc src/helloworld.ts # will generate src/helloworld.js

# jest
$ dce node yarn jest
```
