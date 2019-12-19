# Micro Frontend Starter

This repository was made for workshop and experiment purpose. The project included 3 folders that consist of `wrapper`, `microA`, `microB`.

> All of the configuration was configured up by developer's intuitive. if you want the better version of these, we're gladly to accep the merge request.

## Installation, build and run

Do `yarn install` in `/microA` `/microB` `/wrapper` project folder. Open new terminal in each folder then do the instruction below.

### MicroA Repository

Go to `/microA` and run `yarn start`. This web component will be build and served at `http://localhost:3001/main.js`.

this project was defined web component name in `/microA/src/index.js`

```javascript
customElements.define('micro-a', SomeToExportElement)
```

### MicroB Repository

Go to `/microA` and run `yarn start`. This web component will be build and served at `http://localhost:3002/main.js`.

this project was defined web component name in `/microB/src/index.js`

```javascript
customElements.define('micro-b', SomeToExportElement)
```

### Wrapper Repo

All of the web component should be wrapped up here (as its name). Go to `/wrapper` and run `yarn start`.

Let's look up at `/wrapper/public/index.html` you would notice this line of code in `<body>` tag

```html
<script src="http://localhost:3001/main.js"></script>
<script src="http://localhost:3002/main.js"></script>
```

These mean the web componnent (microA, microB) has been declared in html upper body.

Now, you are able to use `<micro-a>` or `<micro-b>` as html tag in this wrapped project.

Let's look some usage in `/wrapper/src/App.js`

```jsx
<div>
  <MicroWrapper name="MicroA" onClickMe={onClickMe}>
    <micro-a></micro-a>
  </MicroWrapper>
  <MicroWrapper>
    <micro-b></micro-b>
  </MicroWrapper>
</div>
```

## Web Component project structures

In running state, we have 2 mode that has different purpose.

### Development mode

Development configuration was wrote in `webpack.config.dev.js`, filled up with hot-reload stuff. You can create, edit, customize the React component and debug by run `yarn dev`.

### Serving mode

Serving configuration was wrote in `webpack.config.js`, this was just the ordinary config for react project. If you are ready to serve up web component to the wrapper project, just run `yarn start`. Our micro-project would stand for usage at declared port number in `package.json`. Do not forget to add web component declaration in wrapper project.
