function CompareTime(TimeString1 , TimeString2 )
{
    let dateTime1 = new Date(TimeString1)
    let dateTime2 = new Date(TimeString2)

    return dateTime1.getTime() > dateTime2.getTime()
}

// CompareTime("2023-12-23T12:32:00.000Z" , "2023-12-12T12:33:00.000Z")

module.exports = { CompareTime };