export default async function PostDetails({postId}){
    // promise used to give more time to the request before it start and render the component.
       await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000);
       });
    
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                next: {
                  revalidate: 120 // to apply the ISG concept.so it's cached for 120 second then it's request again to refresh the data.
                }
            }
        );
        const postFromId = await response.json();
         
    return(
    <div>    
    
    <div style={{marginBottom:"30px", marginLeft:"20px"}}>
              <h2>title : {postFromId.title}.</h2>
              <p style={{marginBottom:"30px"}} > body : {postFromId.body}.</p>
              <hr/>
        
              </div>
              
    </div>
    );
    
    }