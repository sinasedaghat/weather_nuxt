// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  dark: false,
  colors: {
    background: "#BBD0DE",
    surface: "#8AA5BD",
    primary: "#507394",
    secondary: "#9EA4C3",
    error: "#FF6A2A",
    info: "#2F74C8",
    success: "#9FC131",
    warning: "#FCD037",
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,

    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme
      }
    },

    // Add the custom iconset
    // icons: {
    //   defaultSet: "custom",
    //   aliases,
    //   sets: {
    //     custom,
    //   },
    // },

    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 0,
        sm: 340,
        md: 540,
        lg: 800,
        xl: 1280,
      },
    },

   
    // $vuetify.breakpoint.mobile
  })

  nuxtApp.vueApp.use(vuetify)
})