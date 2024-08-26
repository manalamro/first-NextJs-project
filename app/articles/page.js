// import Posts from "../posts/page"
import Link from "next/link"


export default function Article() {
  return (
  <>
  <h1>Article</h1>
  <Link href="/posts">
  <button style={{border:"2px solid black" , margin:"30px", padding:"30px"}}>
     move to posts
  </button>
  </Link>
  </>
    )
  }
  