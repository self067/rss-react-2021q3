import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { H1, DetailsItem, DetailsCard, Loader } from './styled';
import { setSearchResult } from '../../redux/reducers/searchResults';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const searchResults = useSelector((state: RootStateOrAny) => state.searchResults);
  const dispatch = useDispatch();

  const doSearch = (personId: string) => {
    console.log(personId);
    setIsLoading(true);
    setLoadError('');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer KMuQ0BrRt4TNpMmuR4Nz',
    };

    fetch(`https://the-one-api.dev/v2/character/${personId}`, { headers })
      .then(response => response.json())
      .then(
        data => {
          // console.log(data);
          setIsLoading(false);
          if ('total' in data && data.total > 0) {
            dispatch(setSearchResult(data));
            setLoadError('');
          } else {
            setLoadError(data.message);
          }
        },
        error => {
          console.log(error);
          setIsLoading(false);
          setLoadError(error);
        }
      )
      .catch(err => setLoadError(err));
  };

  useEffect(() => {
    doSearch(id);
  }, [id]);

  if (isLoading) return <Loader>Loading...</Loader>;

  return (
    <DetailsCard>
      <H1>Person: {id}</H1>

      {loadError ? (
        <div>{loadError}</div>
      ) : (
        <>
          <DetailsItem> Name: {searchResults.docs[0]?.name}</DetailsItem>
          <DetailsItem> Birth Date: {searchResults.docs[0]?.birth}</DetailsItem>
          <DetailsItem> Death Date: {searchResults.docs[0]?.death}</DetailsItem>
          <DetailsItem> Gender: {searchResults.docs[0]?.gender}</DetailsItem>
          <DetailsItem> Hair: {searchResults.docs[0]?.hair}</DetailsItem>
          <DetailsItem> Height: {searchResults.docs[0]?.height}</DetailsItem>
          <DetailsItem> Race: {searchResults.docs[0]?.race}</DetailsItem>
          <DetailsItem>
            {searchResults.docs[0]?.wikiUrl ? (
              <a href={searchResults.docs[0]?.wikiUrl} target="blank">
                Wikipedia
              </a>
            ) : (
              <div>no wiki link</div>
            )}
          </DetailsItem>
        </>
      )}
    </DetailsCard>
  );
};

export default Details;
