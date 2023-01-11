// console.log('person1:shows ticket');
// console.log('person2:shows ticket');

// const promiseWifeBringTicks = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('tickets')
//     }, 3000)
// })
// const getPopcorn = promiseWifeBringTicks.then((t)=>{
//     console.log('wife: I have tickets');
//     console.log('husband: we should go in');
//     console.log('wife: I am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`))
// })
// const getButter = getPopcorn.then((t)=> {
//     console.log('husband: i got popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} butter`))
// });
// const getColdrinks = getButter.then((t)=>{
//     console.log('husband: i got coldrinks');
//     console.log('husband: we should go in');
//     console.log('wife: yeah');
//     return new Promise((resolve, reject)=> resolve(`${t} coldrink`))
// });
// getColdrinks.then((t)=> console.log(t));


// console.log('person4:shows ticket');
// console.log('person5:shows ticket');

// const preMovie = async()=>{
//     const promiseWifeBringTicks = new Promise((resolve, reject)=>{
//             setTimeout(()=> resolve('tickets'), 3000)
//         });
//     const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`))
//     const getButter = new Promise((resolve, reject)=> resolve(`butter`))
//     const getColdrinks = new Promise((resolve, reject)=> resolve(`coldrinks`))

//     let tickets = await promiseWifeBringTicks;
//     console.log(`wife: I have ${tickets}`);
//     console.log('husband: we should go in');
//     console.log('wife: I am hungry');

//     let popcorn = await getPopcorn;
//     console.log(`husband: i got ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on popcorn');

//     let butter = await getButter;
//     console.log(`husband: i got ${butter}`);
//     console.log('husband: anything else');
//     console.log('wife: i need coldrinks also');

//     let coldrink = await getColdrinks;
//     console.log(`husband: i got ${coldrink}`);
//     console.log('husband: anything else');
//     console.log('wife: No, lets go');

//     return tickets;
// }
// preMovie().then((m)=> console.log(`person3: shows ${m}`));

// const preMovie = async()=>{
//     const promiseWifeBringTicks = new Promise((resolve, reject)=>{
//             setTimeout(()=> resolve('tickets'), 3000)
//         });
//     const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`))
//     const getButter = new Promise((resolve, reject)=> resolve(`butter`))
//     const getColdrinks = new Promise((resolve, reject)=> resolve(`coldrinks`))

//     let tickets = await promiseWifeBringTicks;
//     let[popcorn, butter, coldrink] = await Promise.all ([getPopcorn, getButter, getColdrinks])
//     console.log(`${popcorn}, ${butter}, ${coldrink}`)
//     return tickets;
// }
// preMovie().then((m)=> console.log(`person3: shows ${m}`));


const posts = [
    
    {title: 'post one', body:'this is post one', createdAt: new Date().getSeconds()},
    {title: 'post two', body:'this is post two', createdAt: new Date().getSeconds()}
];
let intervalId = 0;
function getPost(){
clearInterval(intervalId)
intervalId = setTimeout(()=>{
    let output = '';
    posts.forEach((post,index)=>{
        output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
},1000);
}

const list = async ()=>{
    
    const createPost = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                // posts.push(post);
                const error = false;
                if(!error){
                    resolve({title: 'post three', body:'This is post three'});
                }
                else{
                    reject('Error: something went wrong');
                }
            },2000)
        })

    const deletePost = new Promise ((resolve, reject)=>{
                setTimeout(()=>{
                    if(posts.length>0){
                        const lastElement = posts.pop()
                        resolve(lastElement);
                    }
                    else{
                        reject('Array is empty now');
                    }
                },1000)
            })

        // let post = await createPost;
        // let lastElement = await deletePost;
        let[post, lastElement] = await Promise.all([])

        return post;
}
list().then((m)=> console.log(m)).then(getPost);

