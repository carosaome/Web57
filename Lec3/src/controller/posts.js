const fs = require('fs');

const createPost = async ({ content, createdBy }) => {
  let newPosts;
  let oldPosts;
  const newPost = {
    id: Date.now(),
    content,
    createdBy,
  };

  const oldPostsStr =
    await fs.promises.readFile('posts.json', { encoding: 'utf-8' });

  if (!oldPostsStr) {
    newPosts = [newPost];
  }
  else {
    try {
      oldPosts = JSON.parse(oldPostsStr);
      oldPosts.push(newPost);
    } catch (error) {
      return;
    }
  }

  await fs.promises.writeFile(
    'posts.json',
    JSON.stringify(newPosts ? newPosts : oldPosts),
  )
  return newPost;

}

const getPosts = async () => {
  const oldPostsStr = await
    fs.promises.readFile('./posts.json', { encoding: 'utf-8' });

  const oldPosts = JSON.parse(oldPostsStr);

  return oldPosts;
}

const getPost = async (postId) => {
  const oldPostsStr = await
    fs.promises.readFile('./posts.json', { encoding: 'utf-8' });

  const oldPosts = JSON.parse(oldPostsStr);

  const foundPost = oldPosts.find(post => String(post.id) === postId);

  return foundPost;
}

const updatePost = async (updatePostData) => {
  const { content, postId } = updatePostData;

  const oldPostsStr = await
    fs.promises.readFile('./posts.json', { encoding: 'utf-8' });

  const oldPosts = JSON.parse(oldPostsStr);

  const newPosts = oldPosts.map(post => {
    if (String(post.id) === postId) {
      return {
        ...post,
        content
      }
    }
    return post;
  });

  await fs.promises.writeFile(
    './posts.json',
    JSON.stringify(newPosts),
  )

  return postId;
}

const deletePost = async (postId) => {
  const oldPostsStr = await
    fs.promises.readFile('./posts.json', { encoding: 'utf-8' });

  const oldPosts = JSON.parse(oldPostsStr);

  const postDelete = oldPosts.findIndex(post => String(post.id) === postId);
  oldPosts.splice(postDelete, 1)
  await fs.promises.writeFile(
    './posts.json',
    JSON.stringify(oldPosts),
  )

  return postDelete;
}
const getComments = async (postId) => {
  const postsStr =
      await fs.promises.readFile('./posts.json', { encoding: 'utf-8' })

  const posts = JSON.parse(postsStr)
  const foundPost = posts.find(post => String(post.id) === postId);

  const comments = foundPost.comments
  return comments

}
module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  getComments
} 