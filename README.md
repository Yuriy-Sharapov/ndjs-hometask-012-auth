### Задание 1. Реализуйте API:

```javascript
GET /api/user/login   страница с формой входа / регистрации
GET /api/user/me      страница профиля
POST /api/user/login
POST /api/user/signup
```

### Задание 2. Настройте локальную аутентификацию с помощью PassportJS.

:white_check_mark: РЕШЕНИЕ:

В режиме разработки запустить сервисы
```Batchfile
docker compose -f docker-compose.dev.yml up
```
В режиме сборки образа сервиса **Библиотека** запустить сервисы
```Batchfile
docker compose -f docker-compose.build.yml up
```
В продуктивном режиме запустить сервисы
```Batchfile
docker compose up
```

1. Образ кастомного **Счетчика доступа к книге**
https://hub.docker.com/repository/docker/14101916/books_counter/general
2. Образ кастомного сервиса **Библиотека**
https://hub.docker.com/layers/14101916/books_counter/v4.0.0/images/sha256:a7e3391559d142c650eb6bb39c91745447fffb70064e93a43cad4d0b7d4128ea?uuid=CB9710F2-5DB5-4EBB-B5C3-FAA6849CDB3C