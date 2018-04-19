#Login to firebase
login:
	firebase login

#Deploy website at firebase
deploy:
	yarn build
	firebase deploy

sass-start:
	sass --watch ./src/scss:./src/css

dependencies:
	yarn install
