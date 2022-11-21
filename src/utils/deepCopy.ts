export function deepCopy<T>(variables?: T): T | undefined {
  if (variables === undefined) return variables
  return JSON.parse(JSON.stringify(variables))
}
