import { stringify } from "query-string";
import { useEffect } from "react";
import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";
import PopularTags from "../../components/popularTags";
import useFetch from "../../hooks/useFetch";
import { getPagination, limit } from "../../utils";

const GlobalFeed = ({location, match}) => {
  const {offset, currentPage} = getPagination(location.search);
  const stringifiedParams = stringify({ limit, offset });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
  const url = match.url;

  useEffect(() => {
    doFetch()
  }, [doFetch, currentPage])

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <Loading />}
            {error && <ErrorMessage /> }
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination total={response.articlesCount} limit={limit} url={url} currentPage={currentPage} />
              </>
            )}
          </div>
          <div className="col-md-3"><PopularTags /></div>
        </div>
      </div>
    </div>
  );
}

export default GlobalFeed;
