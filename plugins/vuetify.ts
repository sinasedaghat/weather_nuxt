// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition, DisplayThresholds } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const brackpoints: DisplayThresholds = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560
}

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#0167D8",
    secondary: "#9747FF",
    // background: "#ecf0f1",
    error: "#E40047",
    info: "#ADD4FF",
    success: "#04A204",
    warning: "#FFFD28",
  },
};

// const darkTheme: ThemeDefinition = {
//   dark: true,
//   colors: {
//     primary: "#8e44ad",
//     secondary: "#d35400",
//     background: "#2f3640",
//     error: "#27ae60",
//     info: "#f1c40f",
//     success: "#c0392b",
//     warning: "#2980b9",
//   },
// };

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    display: {
      mobileBreakpoint: 'sm',
      thresholds: brackpoints
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: lightTheme,
        // dark: darkTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})