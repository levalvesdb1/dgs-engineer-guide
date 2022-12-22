Para rodar o projeto

## Desenvolvimento

Para criar a imagem

```
docker run --init -p 3000:3000 dgs-techguide:dev
```

Rodar a imagem em desenvolvimento

docker run -p 3000:3000 dgs-techguide:dev

## Produção

```
docker build -t dgs-techguide:latest .
```

Rodar a imagem em produção

docker run --rm -p 3000:80 dgs-techguide:latest
