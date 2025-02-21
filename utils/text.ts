export const upperFirstLetterOfString = (str: string) => {
  if (str.includes(" ")) {
    const arr = str.split(" ");
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join (" ")
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}