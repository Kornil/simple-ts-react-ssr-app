type HtmlMarkup = (markup: string) => string;

const htmlMarkup: HtmlMarkup = markup => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>A simple react ts app</title>
  <base href="/">

  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="#ffffff">
  <meta name="application-name" content="simple-react-ts-app">
  <meta name="Description" content="simple-react-ts-app">

  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

  <script src="/bundle.js" defer></script>

  <style>
    html,
    body,
    #root {
      margin: 0;
      height: 100%;
    }
  </style>

</head>

<body>
<div id="root">${markup}</div>
</body>

</html>
`;

export default htmlMarkup;
