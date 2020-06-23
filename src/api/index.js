
let list = [
    {
        itemId: 1,
        displayText: "laundry"
    },
    {
        itemId: 2,
        displayText: "grocery shopping"
    },
    {
        itemId: 3,
        displayText: "take a dentist appointment"
    },
]


export function getList() {
    return Promise.resolve({
        list
    })
}

export function add(text) {
    let item = {
        itemId: list.length+1,
        displayText: text
    }
    list.push(item);
    return Promise.resolve(item.itemId)
}
