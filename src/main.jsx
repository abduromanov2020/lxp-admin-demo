import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Helmet } from "react-helmet";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Helmet>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
      <script src="/assets/vendor/purecounterjs/dist/purecounter_vanilla.js"></script>
      <script src="/assets/vendor/apexcharts/js/apexcharts.min.js"></script>
      <script src="/assets/vendor/overlay-scrollbar/js/overlayscrollbars.min.js"></script>
      <script src="/assets/vendor/choices/js/choices.min.js"></script>
      <script src="/assets/vendor/aos/aos.js"></script>
      <script src="/assets/vendor/glightbox/js/glightbox.js"></script>
      <script src="/assets/vendor/quill/js/quill.min.js"></script>
      <script src="/assets/vendor/stepper/js/bs-stepper.min.js"></script>
    </Helmet>
  </Provider>,
);
