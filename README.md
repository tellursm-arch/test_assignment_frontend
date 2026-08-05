```
nvm use
npm install
```

Прод сборка:
```
npm run build
npm run start
```

Дев сервер:
```
npm run dev
```

Линтинг:

Для css используется stylelint с дефолотным конфигом от GravityUi:
```
npm run stylelint
npm run stylelint:fix
```

Для проверки код-стайла используется eslint
```
npm run lint
npm run lint:fix
```

Для проверки типизации tsc --noEmit
```
npm run lint-types
```

Сборка в докере:
```
docker build --build-arg API_URL=201.34.138.168 --build-arg API_PORT=3001 -t frontend .
docker run -p 80:80 frontend
```

Сторибук:
```
npm run storybook
```