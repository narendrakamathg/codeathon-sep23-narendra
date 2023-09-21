function sortStringByFrequency(str) {
    // create a frequency map of characters in the string
    const freqMap = {};
    for (let char of str) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // create an array of [char, frequency] pairs
    const charFreqPairs = Object.entries(freqMap);

    // sort the array by frequency in descending order
    charFreqPairs.sort((a, b) => b[1] - a[1]);

    // create a new string by concatenating characters by frequency
    let sortedStr = '';
    for (let [char, freq] of charFreqPairs) {
        sortedStr += char.repeat(freq);
    }

    return sortedStr;
}

console.log(sortStringByFrequency('hello world'));
console.log(sortStringByFrequency('tree'));
