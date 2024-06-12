// Anagram is group of letters where it contains same letters in different spellings.
// Input: s="flow" t="wolf"   true
// Input: s="flow" t="tall"   false

const isAnagram =(s, t) => {
    if(s.length !== t.length) return false;
    let obj1= {};
    let obj2 = {};
    for(let i=0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for(const key in obj1){
        if(obj1[key] !== obj2[key]) return false
    }
    return true;
}
console.log(isAnagram("namak", "manak"))
