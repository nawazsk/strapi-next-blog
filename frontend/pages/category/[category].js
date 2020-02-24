import { useRouter } from "next/router";  
import Articles from "../../components/articles";  
import Query from "../../components/query";  
import CATEGORY_ARTICLES_QUERY from "../../apollo/queries/category/articles";

const Category = () => {  
  const router = useRouter();
  let id;
  
  if(router.query.category) {
    id = router.query.category.split("-");
    id = id[id.length-1];
  }

  return (
    id ? (
      <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
        {({ data: { category } }) => {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{category.name}</h1>
                  <Articles articles={category.articles} />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    ):null
  );
};

export default Category;  