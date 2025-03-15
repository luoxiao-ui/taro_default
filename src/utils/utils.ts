const Utils = {
  print(...args: any[]) {
    if(process.env.NODE_ENV !== 'production') {
      console.log(...args)
    }
  }
}

export default Utils
