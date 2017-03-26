export const shuffle = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected Array, got ' + typeof arr)
  }

  let rand
  let tmp
  let len = arr.length
  let ret = arr.slice()

  while (len) {
    rand = Math.floor(Math.random() * len--)
    tmp = ret[len]
    ret[len] = ret[rand]
    ret[rand] = tmp
  }

  return ret
}
