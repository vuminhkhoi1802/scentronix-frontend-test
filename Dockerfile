FROM node:20-alpine AS builder
ARG ENV
RUN apk add --no-cache libc6-compat
RUN apk update

#Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=shop --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:20-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
# COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .
RUN yarn turbo run build --filter=shop...

FROM node:20-alpine AS runner
ARG ENV
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app ./
WORKDIR /app/apps/shop
RUN mv .env.$ENV .env.local


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=installer --chown=nextjs:nodejs /app/apps/shop/.next/standalone ./
 COPY --from=installer --chown=nextjs:nodejs /app/apps/shop/.next/static ./.next/static
 COPY --from=installer --chown=nextjs:nodejs /app/apps/shop/public ./public

# Enable Back this line when using Cloud Run
EXPOSE 8080
#EXPOSE 3000

CMD [ "yarn", "start" ]