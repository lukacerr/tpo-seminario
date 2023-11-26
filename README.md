# Equipo 5 | InverRed

### Stack tecnológico

- Docker v^24.0.0
  - Docker Compose v3.9
- React v^18.2.0
  - Joy UI v^5.0.0-beta.12
  - MUI Icons v^5.14.16
- PocketBase v0.19.4

### Instalación

##### Requisitos:

- Tecnología de containerizing compatible con Docker Compose
  - Ejemplo: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Una vez clonado el repositorio, copiese el archivo [.env.example](/.env.example) dentro de un nuevo archivo llamado [.env](/.env).

##### Ejecución:

Desde un bash, parados sobre el directorio del repositorio:

```
docker compose up
```

> La [aplicación](http://localhost:3000/acerca-de) corre sobre http://localhost:3000/, el [CMS](http://localhost:5000/_/) en http://localhost:5000/\_/.

#### Documentación API

Véase dentro del [CMS](http://localhost:5000/_), entrando a cada colección, se encontrará información de los endpoints disponibles.
