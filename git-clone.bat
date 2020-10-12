@echo off
git clone %1 %2
cd %2
del .git /s /q

git init
git remote add origin %3