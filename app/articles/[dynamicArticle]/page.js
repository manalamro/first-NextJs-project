export default function DynamicArticle(props) {
   console.log(props);
    return (
  <>
  <h1>DynamicArticle </h1>
  <h1>{props.params.dynamicArticle}</h1>

  </>
    );
  }
  