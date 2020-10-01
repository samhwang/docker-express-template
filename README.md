# Docker Express+Babel+TypeScript template

My Node(Express)+TypeScript &amp; Docker template for starting up a new express project

## Requirements

- Node 12+
- NPM 6+
- Yarn 1.22+

## Usage

This project was set up with yarn in mind, but if you like npm, please
adjust accordingly.

```bash
git clone https://github.com/samhwang/docker-express-template.git
cd docker-express-template/express
cp .env.sample .env

yarn install
git add yarn.lock
git commit -m "[YOUR COMMIT MESSAGE HERE]"

cd ..
docker-compose build
docker-compose up

# Production build
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```
