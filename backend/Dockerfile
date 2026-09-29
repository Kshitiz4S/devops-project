FROM python:3.12-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PIP_NO_INPUT=1

# Copy requirements
COPY requirements.txt .

# Install Python packages
RUN python -m pip install --no-cache-dir -r requirements.txt

COPY . .

# Create non-root user with a real home directory
RUN addgroup --system appuser \
    && adduser --system --group --home /home/appuser appuser \
    && mkdir -p /app/staticfiles /app/media \
    && chown -R appuser:appuser /app /home/appuser

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 8000

# Start server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "config.wsgi:application"]
