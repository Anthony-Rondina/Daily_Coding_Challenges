// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {
    //Created arrays from inputs
    let mag = Array.from(magazine, String);
    let note = Array.from(ransomNote, String);
    //Create new map as frequency counter
    let map = new Map();

    //looping through note array to count how many times a letter is in note  
    for (let x of note) {
        //if the freq counter map has x...
        if (map.has(x)) {
            //set the map key of x with the value of what x currently has +1
            map.set(x, map.get(x) + 1);
        }
        else {
            //else, set X to the map with a value of 1
            map.set(x, 1);
        }
    }

    //looping through note array to subtract from map if a letter exists in mag
    for (let x of note) {
        //if mag array includes current letter in note
        if (mag.includes(x)) {
            //remove current letter of note from first appearance in mag
            mag.splice(mag.indexOf(x), 1);
            //set maps value for current letter to be minus 1
            map.set(x, map.get(x) - 1);
        }
        else {
            //if current letter in note doesnt exist in mag then return false
            return false;
        }
    }
    // console.log(map)
    //check map if all letters have a value of 0
    for (let [v] of map) {
        //If a letter has a greater value than 0 it means not enough letters could not be found in mag
        if (v > 0) {
            return false;
        }
    }
    return true;
}

console.log(canConstruct("bg",
    "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))