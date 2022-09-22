import { customAlphabet } from 'nanoid'
export function dateParser(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date
}

export function dateParserFromString(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date.toLocaleDateString()
}

export function createToken() {
    const nanoid = customAlphabet('1234567890', 6)
    return nanoid()
}

export function getMonthByStringDate(stringDate) {
    let tempDate = Date.parse(stringDate)
    let date = new Date(tempDate)
    return date.getMonth()
}

export function parseJson(obj) {
    return JSON.parse(JSON.stringify(obj))
}
