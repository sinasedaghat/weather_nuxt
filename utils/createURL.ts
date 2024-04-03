// It will be available as randomEntry() (camelCase of file name without extension)
export default (name: string, extension?: string, directory?: string): string => {
  // return new URL(`src/assets/${directory ?? 'images'}/${name}.${extension ?? 'png'}`, window.location.origin).href // 500 SSR: TRUE // ✔ SSR: FALSE
  // return toValue(computed(() => `~/assets/${directory ?? 'images'}/${name}.${extension ?? 'png'}`)) // 404
  // import(`/_nuxt/assets/${directory ?? 'images'}/${name}.${extension ?? 'png'}`) // ✔
  // .then(img => {
  //   return img.default;
  // })
  // https://github.com/nuxt/nuxt/issues/14766 // another solution
  return toValue(computed(() => `/_nuxt/assets/${directory ?? 'images'}/${name}.${extension ?? 'png'}`)) //✔
}




