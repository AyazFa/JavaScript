Описание проекта LeetClone.

Приложение представляет собой онлайн-платформу для выполнения тестовых заданий по программированию.

Основные возможности приложения:
1. Выполнение тренировочных практических заданий
2. Прохождение тестов
3. Возможность проведения технических интервью
4. Возможность размещения заданий на разных языках программирования

Спецификация API находится в корне репозитория в файле leetCloneApiSpec.yaml

Конечные точки REST API для пользователей:

1. Получить всех пользователей Get:
http://localhost:3000/users

curl -X 'GET' \
  'http://localhost:3000/users' \
  -H 'accept: application/json'

Пример ответа:
  	
Response body
[
  {
    "id": 1,
    "name": "Bob"
  },
  {
    "id": 2,
    "name": "Tom"
  },
  {
    "id": 3,
    "name": "Jack"
  }
]

Возможные коды ответов:
200 - возвращает всех пользователей
400 - ошибка запроса
404 - не найдены пользователи

2. Создать пользователя Post:
http://localhost:3000/users

curl -X 'POST' \
  'http://localhost:3000/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 1,
  "name": "theUser"
}'

Тело запроса:
{
  "id": 1,
  "name": "theUser"
}

Пример ответа:
This action adds a new user

3. Получить все задачи Get:
http://localhost:3000/tasks

curl -X 'GET' \
  'http://localhost:3000/tasks' \
  -H 'accept: application/json'

Пример ответа:
  	
Response body
[
  {
    "id": 1,
    "description": "Test"
  },
  {
    "id": 2,
    "description": "Technical task"
  },
  {
    "id": 3,
    "description": "Issue"
  }
]

Возможные коды ответов:
200 - возвращает все задачи
400 - ошибка запроса
404 - не найдены задачи

4. Создать задачу Post:
http://localhost:3000/tasks

curl -X 'POST' \
  'http://localhost:3000/tasks' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 10,
  "description": "Lack"
}'

Тело запроса:
{
  "id": 10,
  "description": "Lack"
}

Пример ответа:
This action adds a new task