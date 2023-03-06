// ES6 Map
// =========
// Map is a collection of Data



var myMap=new Map();
myMap.set('key1','Bangladesh');
myMap.set('key2','India');
myMap.set('key3','Bhutan');
myMap.set('key4','Nepal');
myMap.set('key5','Thailand');
myMap.set('key6','China');
myMap.set('key7','Austrelia');
myMap.set('key8','USA');
myMap.set('key9','UK');
myMap.set('key10','Rassia');
myMap.set('key11','Ukrene');
myMap.set('key12','Srilanka');
myMap.set('key13','Maldip');
myMap.set('key14','Brazil');



// console.log(myMap.values());
// console.log(myMap.keys());



// //  Loop for Map Values and Keys

// for(let myValue of myMap.values()){

//     console.log(myValue);
    
// }
// for(let myKeys of myMap.keys()){
    
//     console.log(myKeys);
    
// }


//  delete(key)
//  get(key)
//  clear()
//  has(key)

// =============================

// //  delete(key)

// myMap.delete("key1");
// myMap.delete("key2");

// for(let myValue of myMap.values()){

//     console.log(myValue);
// }

// ===============================
// // clear()

// myMap.clear();

// for(let myValue of myMap.values()){

//     console.log(myValue);
// }


// ================================
// //  get(key)

// // myMap.get("key6");

// console.log(myMap.get("key6"));






// ================================
//  has(key)
if(myMap.has("key17")){
    console.log("YES");
}
else{
    console.log("NO");

}
