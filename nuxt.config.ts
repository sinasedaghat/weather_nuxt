// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  // css: [
  //   '@/assets/stylesheets/main.scss'
  // ],

  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],

  // vuetify: {
  //   /* vuetify options */
  //   vuetifyOptions: {
  //     // @TODO: list all vuetify options
  //   },

  //   // moduleOptions: {
  //   //   /* nuxt-vuetify module options */
  //   //   treeshaking: true | false,
  //   //   useIconCDN: true | false,

  //   //   /* vite-plugin-vuetify options */
  //   //   styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
  //   //   autoImport: true | false,
  //   // }
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/stylesheets/main.scss" as *;'
        }
      }
    }
  }
})