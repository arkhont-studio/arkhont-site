# Архонт — Next.js сайт (финальный старт)

Собран проект с вашим логотипом (public/logo.png, favicon.png).

## Запуск
```
npm i
npm run dev    # http://localhost:3000
```

## Прод
```
npm run build && npm start
```

## Где менять
- Логотип: `public/logo.png` (+ favicon.png).
- Цвета/кнопки: `app/globals.css` (переменные `--gold`, `--text`).
- Контент: файлы в `app/*/page.tsx`.

## Деплой
Лучше всего Vercel: импортируйте репозиторий, нажмите Deploy, подключите домен.
