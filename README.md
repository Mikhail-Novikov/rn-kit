# Reakit Native Mobile

Репозиторий проекта: [GitLab](http://git.esphere.local/ux/rnkit)

- [Технологии проекта](#Технологии-проекта)
- [Кодстайл](#Кодстайл)
- [Структура проекта](#Структура-проекта)
- [Запуск проекта](#Запуск-проекта)
- [Запуск проекта на устройстве](#Запуск-проекта-на-устройстве)
- [Работа с гитом](#Работа-с-гитом)
- [Контакты](#Контакты)


## Технологии проекта

- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React Native](https://reactnative.dev/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Rematch](https://github.com/rematch/rematch)
- [react-navigation](https://reactnavigation.org/)
- [react-hook-form](https://react-hook-form.com/)


## Кодстайл

За основу взят [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-).


## Структура проекта

```
.
├─── ios                             : ios source code
├─── android                         : android source code
├─── src                             : source code
|     ├─── assets                    : папка для стилизации кита
|     |     ├─── fonts               : основные шрифты
|     |     ├─── styles              : папка со стилями
|     |     └─── images              : папка с картинками для всего
|     |
|     |
|     ├─── components                : папка с общими компонентами, которые можно переиспользовать
|     |     └─── Icon                : папка компонента иконок svg спрайта в формате json
|     |           └─ glyfmaps        : папка json файла с иконками
|     |
|     ├─── hooks                     : что то для работы кита
|     ├─── navigation                : роутинг по киту
|     |
|     |
|     ├─── Projects                  : Наши проекты
|     |
|     └─── screens                   : экраны(страницы) кита

```


## Запуск проекта

####Npm команды

Запуск локального сервера
```javascript
npm start
```

Запуск iOS

```javascript
npm run ios
```

Запуск Android

```javascript
npm run android
```

####Команды Expo

Запуск локального сервера с отображением интерейса в браузере
```javascript
expo start
```

####Debugging

Для дебаггинга необходимо использовать приложение [react-native-debugger](https://github.com/jhen0409/react-native-debugger).


## Запуск проекта на устройстве

https://reactnative.dev/docs/running-on-device


## Работа с гитом

В проекте используется [Gitflow](https://ru.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

Сообщение в коммите начинается с кода задачи, например: `UI-XXX: Добавлена новая фича`.

## Добавление иконок

Описание использования сервиса для получения json файла иконок (пункт 15)
https://docs.google.com/document/d/1COALuwWaIsEjuorgMaRwiszotqL6kxBj/edit#

## Контакты
- Андрей Шамин (shamin.as@esphere.ru)
- Кашко Алексей (kashko.aa@esphere.ru)
- Новиков Михаил (novikov.mn@esphere.ru)
- Конюшков Николай (konyushkov.nk@esphere.ru)

## База ошибок и ссылки на их решение
- Error: Exception in HostObject::get(propName:NativeUnimoduleProxy): java.lang.AssertionError: expo-updates must be configured with a valid update URL or scope key.
  https://docs.expo.dev/bare/installing-updates/
