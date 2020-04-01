install:
	npm install
start:
	npm run start
build:
	npm run build
test:
	npm test
test-coverage:
	npm test -- --coverage
lint:
	npx eslint .
deploy:
	firebase deploy