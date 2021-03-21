import axios from 'axios';

const url = 'https://floating-ridge-28249.herokuapp.com/auth/login';
const urlforposts = 'http://localhost:5000/posts';
const urlforlikes = 'http://localhost:5000/likes';

/*export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
*/

export const login=(data)=>axios.post(url,data);
export const addPost=(post)=>axios.post(urlforposts,post);
export const getPosts=()=>axios.get(urlforposts);
export const isLiked=(post_id)=>axios.get(`${urlforlikes}/${post_id}`);