/**
 * Mocking client-server processing
 */
  const _filters = ["Toy", "Working", "Terrier", "Mixed", "Herding", "Non-Sporting", "Hound"]

  
  export default {
    getFilters (cb) {
      setTimeout(() => cb(_filters), 100)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }