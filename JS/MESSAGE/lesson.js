let data_error = [
    {
        "message": "Parent with id 53196 not found for child id 212003"
    },
    {
        "message": "Parent with id 88888 not found for child id "
    },
    {
        "message": "Parent with id 88888 not found for child id "
    }
];

// Combine messages with the same parentid and childid into one message
let combinedMessages = data_error.reduce((acc, current) => {
    let existingMessage = acc.find(msg => msg.includes(current.message));
    if (!existingMessage) {
        acc.push(current.message);
    }
    return acc;
}, []);

// Remove duplicates using Set
let uniqueMessages = [...new Set(combinedMessages)];

// Join messages with new lines
let finalMessage = uniqueMessages.join('\n');

console.log(finalMessage);
