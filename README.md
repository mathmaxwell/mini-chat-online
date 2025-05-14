🇬🇧 English README
md
Копировать
Редактировать
# Mini Chat Online

A minimal chat application built with React, PocketBase, and Material UI. Users can register or log in, view all other users, and send simple text messages to one another in real time.

⚠️ This is an early learning project — styling is minimal, there is no input validation, and user names can repeat. But it demonstrates key features like:

- User registration and authentication via PocketBase
- Creating and fetching messages
- Real-time updates with PocketBase `subscribe()`
- Proper cleanup of async subscriptions inside React `useEffect`

## 📸 Screenshots

Screenshots are available in the `screenshots/` folder.

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/mathmaxwell/mini-chat-online
cd mini-chat-online
npm install
npm run dev
2. Download PocketBase
Go to https://pocketbase.io/docs/

Download the ZIP, extract it, and rename the folder to pocketbase

Move it into your project directory (next to your frontend)

3. Run PocketBase
bash
Копировать
Редактировать
cd pocketbase
./pocketbase serve
Then visit http://127.0.0.1:8090 to access the admin UI.

4. Set Up the Database
Create a new collection named message

Add the following fields:

to (relation to users)

from (relation to users)

text (type: text)

That’s it — your backend is ready.

5. Testing the Chat
To simulate a conversation between two users, open the app in two different browsers (e.g. Chrome and Safari). Each user can send a message to the other and receive updates in real time without refreshing.

⚠️ Known Limitations
No validation: users can have duplicate usernames

You can accidentally send messages to yourself

Sent messages are not visible (only received ones)

UI is minimal, just enough for testing

📅 Created: May 2025
yaml
Копировать
Редактировать

---

## 🇷🇺 Перевод README

```md
# Mini Chat Online

Минимальный чат на React, PocketBase и Material UI. Пользователи могут зарегистрироваться, войти, просматривать других пользователей и отправлять текстовые сообщения в реальном времени.

⚠️ Это учебный проект. Минимум стилей, нет валидации, имена пользователей могут повторяться. Но он демонстрирует:

- Регистрацию и вход через PocketBase
- Создание и получение сообщений
- Обновления в реальном времени с `subscribe()` от PocketBase
- Корректное удаление подписки в `useEffect`

## 📸 Скриншоты

Скриншоты находятся в папке `screenshots/`.

## 🚀 Как запустить

### 1. Клонируй проект

```bash
git clone https://github.com/mathmaxwell/mini-chat-online
cd mini-chat-online
npm install
npm run dev
2. Скачай PocketBase
Перейди на https://pocketbase.io/docs/

Скачай ZIP, распакуй и переименуй папку в pocketbase

Помести её рядом с фронтендом в корень проекта

3. Запусти PocketBase
bash
Копировать
Редактировать
cd pocketbase
./pocketbase serve
Открой http://127.0.0.1:8090 в браузере — это админка PocketBase.

4. Создай коллекцию
Назови коллекцию message

Добавь поля:

to (связь с users)

from (связь с users)

text (тип: text)

Готово — бэкенд настроен.

5. Тестирование
Чтобы протестировать отправку сообщений, открой приложение в двух разных браузерах (например, Chrome и Safari). Сообщения доставляются в реальном времени без перезагрузки.

⚠️ Известные ограничения
Нет валидации: имена могут повторяться

Можно отправлять сообщения самому себе

Отправленные сообщения не видны (только полученные)

Интерфейс почти без стилей — только для тестов

📅 Сделано: Май 2025
