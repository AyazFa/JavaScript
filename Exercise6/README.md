Описание проекта LeetClone.

Приложение представляет собой онлайн-платформу для выполнения тестовых заданий по программированию.

Основные возможности:
1. Добавление/удаление/редактирование пользователей
2. Добавление/удаление/редактирование задач
3. Получение списков задач по пользователю
4. Фильтрация задач по статусам (активна, закрыта)

Основные сущности приложения:

Task (Задача):
Поле        | Тип    | Пример
id	        | string | example: 61dbae02-c147-4e28-863c-db7bd402b2d6
name        | string | example: Develop something
description | string | example: Implement CRUD
type	    | string | example: Technical
userId	    | string | example: 3df9a171-282e-47ad-9b5c-6472bb4c669d
createdAt   | string | example: 4/20/2022, 2:21:56 PM
updatedAt	| string | example: 4/20/2022, 2:21:56 PM
state	    | string | example: active

User (Пользователь):
Поле        | Тип    | Пример
id	        | string | example: 61dbae02-c147-4e28-863c-db7bd402b2d6
name        | string | example: Charlie
role        | string | example: Developer
organization| string | example: Google
skills	    | array  | example:  List [ "Data science", "DevOps" ]
createdAt   | string | example: 4/20/2022, 2:21:56 PM
updatedAt	| string | example: 4/20/2022, 2:21:56 PM


