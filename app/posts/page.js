import Todo from '../components/todo';
import Link from 'next/link';
export default async function Posts() {
// this api is SSG : static server generation by default.
// so it's generate the value that is returned from each api,
// will be cached forever so the value will not change even if the database is change,
// so to refresh it we use parameter which is object, to refresh the value we use this parameter in the api:

const response = await fetch('https://jsonplaceholder.typicode.com/posts',
// { cache:'force-cache' } // this component will be SSG,if it 'no-cache' then it will be recognized as SSR.
{
  next: {
    revalidate: 120 // to apply the ISG concept.so it's cached for 120 second then it's request again to refresh the data.
  }
});

const posts = await response.json();

 const postsJsx = posts.map((post)=>{
    return(
      <>
      <Link href={`posts/${post.id}`}>
      <div style={{marginBottom:"30px", marginLeft:"20px" , backgroundColor:"white" , color:"black", padding:"15px", }}>
      <h2>title : {post.title}.</h2>
      <p style={{marginBottom:"30px"}} > body : {post.body}.</p>
      </div>
      </Link>

      
      </>
    )
 })

  return (
  <>
  <h1>posts</h1>
  {postsJsx}
  <div>
    <Todo/>
  </div>
  </>
    )
  }
  