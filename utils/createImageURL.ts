// It will be available as randomEntry() (camelCase of file name without extension)
export default (name: string, extension?: string, directory?: string): string => {
  const url: Ref<string> = ref('')
  // return new URL(`src/assets/${directory ?? 'images'}/${name}.${extension ?? 'png'}`, window.location.origin).href
  import(`assets/${directory ?? 'images'}/${name}.${extension ?? 'png'}`)
  .then(img => {
    // url.value = img.default;
    console.log('sssssss', img.default)
  })
  return url.value
}
