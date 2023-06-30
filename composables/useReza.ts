
const useReza = (name: globalThis.Ref<string>) => {
  console.log(name.value)
  const rezaName = ref('reza')
  const rezaAge = ref(18)
  const rezaFamily = ref({
    brother: "hossein",
    name: name.value
  })
  
  return {
    rezaAge,
    rezaFamily,
    rezaName
  }
}

export default useReza