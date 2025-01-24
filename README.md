# Taino Language App
Taino Language App is a language-learning app that helps Taino descendants and culture enthusiasts learn the Taino language and culture.

![taino-language-app](https://github.com/user-attachments/assets/3f942bc5-f779-4efb-9a44-47ff3251894e)

## Background
The Taíno, the Indigenous people of the Caribbean and parts of the southern U.S. were the first Native Americans to meet Europeans in 1492. Though long thought extinct after colonization, they survived - many Caribbean people today have Taíno ancestry, and efforts are ongoing to preserve their culture and language.

This project aims to aid in the revitalization of the Taíno culture by giving its descendants, as well as language and culture enthusiasts, by providing an easy learning experience for all ages and education levels.

This mono repository contains two projects for the Taino Language App Project
- learn-taino-pwa: The progressive web app for Learn Taino built with Expo, React Native, Nest.js
- lesson-authoring-tool: Uses Payload CMS. This web app allows content creators, lesson authors, and admin users to create and edit lessons and vocabulary.

## Stack 
Learn Taino PWA:
- Frontend:
    - React Native
    - Expo
    - Auth0
    - TypeScript
- Backend:
    - TypeScript
    - Nest.js
    - PostgreSQL(Avien.io)
    - Prisma ORM
    - Cloudinary
 
 Lesson Authoring Tool:
 - Payload CMS
 - React.js
 - TypeScript
 - PostgreSQL(Avien.io)

## Requirements
- Node.js v20+
- PNPM v9+

## Run Locally

First, clone this repository to your local machine:
```bash
git clone https://github.com/itskarelleh/taino-language-app.git
```

### Learn Taino PWA
To run the frontend of the Learn Taino App, open a terminal and run the following commands:
```zsh
cd learn-taino-pwa
cp .env.example .env # add the correct values in the newly created .env file
npm install && npx expo start -c
```

To run the Nest.js server of the Learn Taino PWA, open another terminal and run the following commands:
```zsh
cd learn-taino-pwa/server
cp .env.example .env # add the correct values in the newly created .env file
npx prisma db pull # Runs introspection for Prisma ORM
npx prisma generate #Generates the Prisma ORM client 
pnpm install && pnpm run start:dev
```

### Lesson Authoring Tool
For the lesson-authoring tool, do the following:
```zsh
cd lesson-authoring
cp .env.exampe .env # add the correct values in newly created .env
pnpm install && pnpm run dev #install and gnerate 
```

For more details on how to run, deploy, and navigate this project, read the wiki: [Learn Taino GitHub Wiki](https://github.com/itskarelleh/taino-language-app/wiki)

For additional details about this whole project, feel free to browse our Notion page: [TLA Phase 3 - Dev Notion Page](https://www.notion.so/tech-fleet-community-dao/Development-729b6c4c865e4a329823b392a0738bf1)
## Credits

### Phase 1
- Okino Kamali Leiba
- Paulina Kottlewska
- Aaron Brinckerhoff
- Harrison Hughes

### Phase 3
- Karelle Hofler
- Divine Ebisike
- Neisha Rose
- Jasmine Taylor
- Ha Do
- Linh Nyugen
- Angela Lee
