export function deepCopy<T>(variables: T): T {
  return JSON.parse(JSON.stringify(variables))
}
