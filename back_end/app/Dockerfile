FROM --platform=linux/amd64 python:3.9-slim-buster as build

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0"]