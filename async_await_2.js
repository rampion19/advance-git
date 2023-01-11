const posts = [

    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
];



    function getPost() {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                var output = '';
                posts.forEach((post) => {
                    output += `<li>${post.title}</li>`
                });
                document.body.innerHTML = output;
                resolve(output)
                // console.log(output);
            }, 1000);
        })
        
    }
    function createPost(post) {
        
        return new Promise((resolve) => {
            setTimeout(() => {
                // const error = false;
                // if (!error) {
                var post1 = posts.push(post);   
                resolve(`${post1}`);
                // }
                // else {
                //     reject('Error: something went wrong');
                // }
            }, 1000)
        })
    }
    // let updatetime = new Date().getSeconds();
    // function updateUserLastActivityTime() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             // posts.updatedtime = new Date().getSeconds();
    //             resolve(updatetime)
    //             // reject("error");
    //         }, 1000)
    //     })
    // }
    // function create4thPost(post) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             posts.push({ ...post, createdAt: new Date().getSeconds() });
    //             const error = false;
    //             if (!error) {
    //                 resolve();
    //             }
    //             else {
    //                 reject('Error: something went wrong');
    //             }
    //         }, 3000)
    //     })
    // }
    // 
    function deletePost() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (posts.length > 0) {
                    var lastElement = posts.pop()
                    resolve(lastElement);
                }
                else {
                    reject('Array is empty now');
                }
            }, 2000)
        })
    }
    
// let post2 = await createPost;
// 
const list = async () => {
output = await getPost();
post1 = await createPost({title: 'post three', body:'This is post three'});
output = await getPost();
lastElement = await deletePost();
// let[post] = await Promise.all([createPost])

        return getPost();
}
list().then((m)=>console.log(m))