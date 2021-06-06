/**
 * Mocking client-server processing
 */
 const _filters = ["Toy", "Working", "Terrier", "Herding","Non-Sporting"]
    
  
  export default {
    getFilters (cb) {
      setTimeout(() => cb(_filters), 100)
    }
  }