function superbowlWin(array) {
    const result1 = array.find( function(r) {
        return r.result === "W" })
        if (result1) {
            return result1.year
        } else {
            return undefined
        }

} 


    // get debugger going to find out what the array is.
    // figure out how to return an the objects year when winner returns true.
