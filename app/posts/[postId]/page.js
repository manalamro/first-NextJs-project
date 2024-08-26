import { Suspense } from 'react';
import PostDetails from '../../components/postDetails'
export default async function PostDetailsPage({params}){
    const loadingJsx = (
        <div>
<h1>loading ......</h1>
        </div>
    );

return(
<div>
<h1>post details</h1>

{/* Suspense is component that is used when i have parent component inside it there is child component contain it's api functions
that will need it's own time to be load , so to prevent the load time of the child component from affect the load time of the parent component for example:
if we have 3 child it's should wait all of them to be loaded to render the parent component so that 
we use * SUSPENSE * which will divide the child components in a way that the one which is complete load to render it , while the other it's will wait it until it is load then it will be rendered. 
and the react server component which include the * STREAMING * which divide the response git from the component.

*/}

{/* in Suspense component we can determine what to show while the loading is done [بديل يتم عرضه الا ان يتم تحميل الكومبونانت] using the fallback  */}
<Suspense fallback={loadingJsx}> 
<PostDetails postId={params.postId}/>     
</Suspense>
</div>
);

}