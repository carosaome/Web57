const fs = require('fs');

const addComments = async ({ content, createdBy, postId }) => {

    let newPosts
    const comment = {
        cmtId: Date.now(),
        content, createdBy
    }
    try {
        const postsStr =
            await fs.promises.readFile('./posts.json', { encoding: 'utf-8' })

        const posts = JSON.parse(postsStr)
        newPosts = posts.map(post => {
            if (String(post.id) === postId) {
                if (!post.comments) {

                    return {
                        ...post,
                        comments: [comment]
                    }
                }
                else {
                    post.comments.push(comment)
                    return post
                }

            }
            return post
        });
    } catch (error) {
        throw (error)
    }

    await fs.promises.writeFile(
        './posts.json',
        JSON.stringify(newPosts),
    )

    return newPosts


}

const updateCmt = async ({ content, postId, cmtId }) => {


    let newPosts

    try {
        const postsStr =
            await fs.promises.readFile('./posts.json', { encoding: 'utf-8' })

        const posts = JSON.parse(postsStr)
        newPosts = posts.map(post => {
            if (String(post.id) === postId) {
                let newCmts = post.comments.map((cmt, index) => {
                    if (String(cmt.cmtId) === cmtId) {
                        return {
                            ...cmt,
                            content
                        }
                    }

                    return cmt
                })

                post.comments = newCmts;
            }
            return post
        });
        console.log(x);

    } catch (error) {
        throw (error)
    }
    await fs.promises.writeFile(
        './posts.json',
        JSON.stringify(newPosts),
    )
    return newPosts
}

const deleteCmt = async ({ postId, cmtId }) => {

    let newPosts
    try {
        const postsStr =
            await fs.promises.readFile('./posts.json', { encoding: 'utf-8' })

        const posts = JSON.parse(postsStr)
        newPosts = posts.map(post => {
            if (String(post.id) === postId) {
                let comments = post.comments
                let cmtDelete = comments.findIndex(cmt => cmt.id = cmtId)
                comments.splice(cmtDelete, 1)
                return post
            }
            return post
        })
    } catch (error) {
        throw (error)
    }
    await fs.promises.writeFile(
        './posts.json',
        JSON.stringify(newPosts),
    )
    return newPosts
}

module.exports = {  addComments, updateCmt, deleteCmt }