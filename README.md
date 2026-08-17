# CI/CD with github actions 
code -> github -> docker hub -> render (hook)

github actions 
.github/workflows/ci.yml or cd.yml

in ci
code push -> run test -> fail -> protected branch not able to merge to main
pass -> merge pull request

in cd 
build docker image -> push docker image to docker hub
render listen to docker hub from deploy webhook

# set secret of docker hub username and token and render hook in github secret 

