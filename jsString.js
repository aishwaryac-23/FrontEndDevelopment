var st="welcome to javascript";
var st1=new String("Hello this is javascript");

console.log(st.charAt(5));
console.log(st.concat(st1));
console.log(st.length);
console.log(st.toUpperCase());
console.log(st.indexOf("a"));
console.log(st.lastIndexOf("i"));
//console.log(st.copyWithin);
console.log(st.slice(8,15));
console.log(st.substr(8,15));//takes the complete word

function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicates(st)); 

