import {url} from './config'

export  const deleteFetch = async (id) => {
  await fetch(`${url}/${id}` ,{
  method: "DELETE"})
} 
export const postBlog = async (blog) => {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
} 
