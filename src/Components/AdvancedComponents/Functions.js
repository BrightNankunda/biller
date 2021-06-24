const capitalize = (word) => {
   return word.charAt(0).toUpperCase() + word.splice(1)
}

const isAuthenticated = (JSON.parse(localStorage.getItem('UgBillUser')) === null || undefined) ? false : true

export default {capitalize, isAuthenticated}