// const a = 1
// const b = 2

// function isNumSame() {
//     return new Promise(function(resolve, reject) {
//         if (a < b) {
//             resolve("operasi benar");
//         }else {
//             reject("operasi salah");
//         }
//     })
// }

// const resultNum = async () => {
//     const num = await isNumSame();
//     console.log(num);
// }

// resultNum();

// const getData = async () => {
//     const result = await fetch('https://jsonplaceholder.typicode.com/users')
//     const resultObj = await result.json()
//     console.log(resultObj[0].name)
// }

// getData();


// const getPokemon = async () => {
//     const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
//     const resultObj = await result.json()
//     console.log(resultObj)
// }

// getPokemon();

const getPokeName = async () => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
    const resultObj = await result.json()
    get = resultObj.results
}

const getP = async() => {
    await getPokeName()
    console.log(get)
}
getP()

// for (let i = 0; i < 10; i++) {
//     console.log(i);    

//      const getDetail = async () => {
//         const result = await
//         fetch(`https://pokeapi.co/api/v2/pokemon/`)
//         const resultObj = await result.json()
//         console.log(resultObj)
//     }
//     console.log(getDetail())

// }