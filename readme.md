#Ініціалізація проекту 

У терміналі ввести  команду встановлення Vite - бандлер
npm create vite@latest
____  ____  ____  _____   ______  ______
#Інсталювати Tailwind 

npm install -D tailwindcss
npx tailwindcss init

#Додати конфігураційний файл для Tailwind CSS

/** @type {import('tailwindcss').Config} */  - цей коментар вказує редактору, що файл є конфігурацією для Tailwind CSS, і полегшує роботу з його налаштуванням.
export default {    - експортує конфігурацію Tailwind CSS як експорт за замовчуванням
  content: ["./**/*.{html,js}"],  -  означає, що Tailwind сканує всі файли з розширеннями .html та .js в усіх папках і підпапках проєкту.
  theme: {
    extend: {},     -  Цей параметр дозволяє налаштовувати й розширювати стандартну тему Tailwind CSS. Тут порожній об'єкт extend: {} означає, що в конфігурації немає кастомних змін теми (наприклад, кольорів, розмірів шрифтів тощо), але це можна змінити, додаючи власні параметри до цього блоку.
  },
  plugins: [],   -  Цей параметр дозволяє підключати додаткові плагіни до Tailwind CSS
}
#Додайте дерективи Tailwind 

@tailwind base;   — додає базові стилі та нормалізує CSS.
@tailwind components; — підключає стилі для повторно використовуваних компонентів (наприклад, кнопки, форми тощо).
@tailwind utilities;  — додає утилітарні класи для швидкого налаштування стилів (такі як text-center, bg-red-500 тощо).

#Налаштовуємо Vite для використання PostCSS разом із плагінами Tailwind CSS та Autoprefixer.

import { defineConfig } from "vite";  -  Імпортується функція defineConfig з Vite, що дозволяє легко створити конфігураційний файл для проєкту.
import tailwindcss from "tailwindcss";  -  Імпортується Tailwind CSS, який додає утилітарні класи для стилізації.
import autoprefixer from "autoprefixer";  -   Імпортується Autoprefixer, який автоматично додає вендорні префікси для CSS, щоб забезпечити сумісність з різними браузерами. 

export default defineConfig({   -  Експортується конфігурація для Vite за допомогою функції defineConfig
  plugins: [],
  css: {
    postcss: {                                   
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});   -  налаштовується PostCSS для використання плагінів Tailwind CSS та Autoprefixer. Це означає, що під час обробки CSS Vite буде застосовувати ці плагіни для трансформації стилів, додаючи утилітарні класи Tailwind та вендорні префікси для кращої підтримки браузерів.




# landing-page-nextcent
