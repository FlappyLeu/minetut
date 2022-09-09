console.log("hello world")

const record = {
    id: 1,
    fields: {
        name: 'John',
        age: 25,
    },
    createdAt: 'Monday November 15',
    updatedAt: 'Sunday September 9',
};

const getMinifiedRecord = (record) => {
    return {
        id: record.id,
        ...record.fields
    }
}

console.log(getMinifiedRecord(record)) 

const d = new Date()
console.log(d.toString().substring(0,15))