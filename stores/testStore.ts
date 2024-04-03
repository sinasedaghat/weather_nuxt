// import { defineStore } from "pinia"
export const useTestStore = defineStore('test', () => {
  const testValue: Ref<number> = ref(0)

  const testFunc = (val?: Ref<number> | number) => {
    console.log('testFunc call')
    testValue.value += toValue(val ?? 1)
  }

  return{
    testValue,
    testFunc
  }
})