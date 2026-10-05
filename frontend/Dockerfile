FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Create non-root user with a real home directory
RUN addgroup -S appuser \
    && adduser -S -G appuser -h /home/appuser appuser \
    && chown -R appuser:appuser /app /home/appuser

# Switch to non-root user
USER appuser

# Environment
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]

