# Обработка ошибок

При работе с API могут возникнуть ошибки, которые необходимо обрабатывать.

## Объект ошибки

Объект ошибки выглядит следующим образом:

```json
{
  "error": {
    "error_code": 1,
    "error_msg": "Invalid access token"
  }
}
```

## Параметры

Объект `error` включает в себя следующие параметры:

`error_code` *(целое число)* — уникальный номер ошибки, используется для её идентификации

`error_msg` *(строка)* — описание ошибки

:::danger

Ни в коем случае не используйте `error_msg` для идентификации ошибки, так как он может быть изменен в любое время.

:::

## Коды возможных ошибок

### 1

Токен отсутствует в запросе или не существует

### 2

Метод не существует или отсутствует в запросе

### 3

Необходимые параметры отсутствуют в запросе

### 4

Сумма перевода превышает максимальную

### 5

Недостаточно коинов для перевода

### 6

Текущий пользователь заблокирован

### 7

Превышен временной лимит запросов