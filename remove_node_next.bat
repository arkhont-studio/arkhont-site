@echo off
echo === Удаляем node_modules и .next из Git-истории ===

REM Удаляем из индекса
git rm -r --cached node_modules .next

REM Добавляем в .gitignore
echo node_modules/>>.gitignore
echo .next/>>.gitignore

REM Фиксируем изменения
git add .gitignore
git commit -m "remove node_modules and .next from repo"

REM Отправляем на GitHub с перезаписью
git push origin main --force

echo === Готово! Проверь свой GitHub ===
pause
