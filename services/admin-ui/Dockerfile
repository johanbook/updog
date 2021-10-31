FROM node:16.5.0-alpine

# Add Tini init system
# See https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--", "npm"]

WORKDIR /app
COPY . .
RUN npm ci && npm run build

USER node
CMD ["start"]
