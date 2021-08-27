<!doctype html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8">
    <title>New Tab</title>
    <style>
      body {
        background: #FFFFFF;
        margin: 0;
      }

      #oneGoogleBar {
        height: 56px;
      }

      #backgroundImage {
        border: none;
        height: 100%;
        pointer-events: none;
        position: fixed;
        top: 0;
        visibility: hidden;
        width: 100%;
      }

      [show-background-image] #backgroundImage {
        visibility: visible;
      }
    </style>
  </head>
  <body>
    <div id="oneGoogleBar"></div>
    <iframe id="backgroundImage"
        src="chrome-untrusted://new-tab-page/custom_background_image?url=https%3A%2F%2Flh4.googleusercontent.com%2Fproxy%2Fc7tPX0fpwmqIljPMIAbvVipXrd2ksOOzvEvVcrV0OSWpo3-D3pjIYGBFUEYi_NCJ65_SWY_64q1Ttu1UO_vZwo5vmzQb9JzxyKaJ6a6ubA%3Dw3840-h2160-p-k-no-nd-mv">
    </iframe>
    <ntp-app></ntp-app>
    <script type="module" src="new_tab_page.js"></script>
    <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
    <link rel="stylesheet" href="shared_vars.css">
    <div id="oneGoogleBarEndOfBody"></div>
  </body>
</html>
