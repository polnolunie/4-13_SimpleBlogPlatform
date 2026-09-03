# Simple Blog Platform

A simple blog platform built with React. The application allows users to read articles, create and edit their own posts, delete articles, register and log in, edit their profile, and like articles.

## Live Demo

https://4-13-simple-blog-platform.vercel.app/

## GitHub Repository

https://github.com/polnolunie/4-13_SimpleBlogPlatform

## Features

* User registration and authentication
* Login and logout
* Persistent authentication using a token
* User profile page
* Profile editing
* Avatar support
* Create new articles
* Edit articles
* Delete articles
* Like and unlike articles
* Article pagination
* Popular tags
* Markdown rendering for article content
* Loading indicators
* Error handling
* Form validation
* Protected routes for authenticated users
* Responsive interface

## Technologies

* React
* React Hooks
* React Router
* React Hook Form
* React Markdown
* JavaScript
* CSS
* Vite
* REST API
* ESLint
* Vercel

## API

The application uses the RealWorld API:

https://realworld.habsida.net/api

## Installation

Clone the repository:

```bash
git clone https://github.com/polnolunie/4-13_SimpleBlogPlatform.git
```

Navigate to the project folder:

```bash
cd 4-13_SimpleBlogPlatform
```

Install dependencies:

```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at the local address shown in the terminal.

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Linting

To check the project for ESLint errors:

```bash
npm run lint
```

## Authentication

Users can:

* Create an account
* Sign in
* Sign out
* Edit their profile
* Change their username
* Change their email
* Change their password
* Change their avatar

Authentication is handled using a token stored in `localStorage`.

## Articles

Authenticated users can:

* Create articles
* Edit their own articles
* Delete their own articles
* Like and unlike articles

Article content supports Markdown formatting.
