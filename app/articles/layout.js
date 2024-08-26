export const metadata=   {
  title:'articles page'
}

export default function ({children}){
    return(
        <>
        <h3>articles</h3>
        <div style={{width:"50%" , height:"20%", padding:"20px" ,margin:"20px"}}>
          {children}
        </div>
        </>
    );
}