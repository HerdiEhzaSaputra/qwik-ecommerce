import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

// import './global.css';
import './assets/css/index.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      {/* <body lang="en" style="overflow:hidden;"> */}
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />

        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
      </body>
    </QwikCity>
  );
});
