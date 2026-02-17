FROM node:22-bookworm-slim

WORKDIR /workspace

RUN npm install -g @angular/cli@latest

RUN apt-get update && apt-get install -y git procps && rm -rf /var/lib/apt/lists/*