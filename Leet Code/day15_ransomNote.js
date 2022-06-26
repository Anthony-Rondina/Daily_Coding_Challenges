// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
    let note = ransomNote.split('').sort()
    let mag = magazine.split('').sort()
    let longest = ''
    if (note.length > mag.length) {
        longest = note.length
    } else {
        longest = mag.length
    }

    let freq = {}
    let freq2 = {}
    for (let i = 0; i < longest; i++) {
        let noteChar = note[i];
        let magChar = mag[i];
        if (noteChar) {
            if (freq[noteChar]) {
                freq[noteChar]++;
            } else {
                //If it does not exist in the frequency counter object then initialize it with a value of 1
                freq[noteChar] = 1;
            }
        }
        if (magChar) {
            if (freq2[magChar]) {
                freq2[magChar]++;
            } else {
                //If it does not exist in the frequency counter object then initialize it with a value of 1
                freq2[magChar] = 1;
            }
        }

    }
    // console.log("freq is", freq, "freq2 is", freq2
    // )
    for (let i = 0; i < Object.keys(freq).length; i++) {
        // console.log(`first is ${Object.keys(freq)[i]} Second is ${Object.keys(freq2)[i]}`)
        if (Object.keys(freq)[i] !== Object.keys(freq2)[i]) {
            let key = Object.keys(freq2)[i]
            delete freq2[key]
            i--
        }
    }
    // console.log("NEXT PASS", "freq is", freq, "freq2 is", freq2
    // )
    for (let i = 0; i < Object.keys(freq).length; i++) {
        // console.log(Object.values(freq)[i])
        if (Object.values(freq)[i] == Object.values(freq2)[i] && Object.keys(freq)[i] == Object.keys(freq2)[i]) {
            // console.log(`letter matches`)
        } else {
            return false
        }
    }
    return true
}

console.log(canConstruct("bg",
    "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))