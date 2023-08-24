# Тестовое задание Neo Stack Technology на позицию Frontend-разработчика

## Global
Чтобы просмотреть задеплоеный сайт, нужно перейти по ссылке: https://deluxe-tulumba-974ac1.netlify.app/

## Установка проекта на ПК
Чтобы скачать репозиторий на персональный компьютер, нужно ввести команду git clone https://github.com/AlekseiYuzhanin/neostack_frontend_test/.
Также репозиторий можно скачать zip-архивом

## Docker 
Для того, чтобы запустить приложение с помощью докера, необходимо ввести следующие команды:
### `docker build -t neostack_frontend_app .`
### `docker run -p 3000:3000 neostack_frontend_app.`

Откройте [http://localhost:3000](http://localhost:3000) чтобы посмотреть приложение в браузере.

## pnpm
Для того, чтобы запустить приложение с помощью pnpm, необходима версия nodejs __не ниже 18 версии__.
Чтобы собрать приложение необходимо установить следующие зависимости:
### `npm install -g pnpm`
После чего, необходимо собрать проект командой:
### `pnpm install`
И запустить проект следующей командой:
### `pnpm start`

Откройте [http://localhost:3000](http://localhost:3000) чтобы посмотреть приложение в браузере.
