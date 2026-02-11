function hello() {
    console.log("hello world")
};

function countOn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < 3000000; i++) { }
            console.log("completed counting");
            resolve("done");
        }, 0);
    })

}

function bye() {
    console.log("bye for now")
}

function main(){
let x = hello()
let y =countOn()
console.log(y)
let z =bye()
}
 main()
 console.log("completed all work")

