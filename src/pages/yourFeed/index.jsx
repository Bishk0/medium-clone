import { stringify } from "query-string";
import { useEffect } from "react";
import Feed from "../../components/Feed";
import Banner from "../../components/Banner";
import Pagination from "../../components/Pagination";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";
import PopularTags from "../../components/popularTags";
import FeedToggler from "../../components/FeedToggler";
import useFetch from "../../hooks/useFetch";
import { getPagination, limit } from "../../utils";

const YourFeed = ({location, match}) => {
  const {offset, currentPage} = getPagination(location.search);
  const stringifiedParams = stringify({ limit, offset });
  const apiUrl = `/articles/feed?${stringifiedParams}`;
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);
  const url = match.url;

  useEffect(() => {
    doFetch()
  }, [doFetch, currentPage])

  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler />
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

export default YourFeed;
