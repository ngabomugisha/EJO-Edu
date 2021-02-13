import React, { useState, useEffect } from 'react';
import './Feed.css';
import Button from '@material-ui/core/Button';
import FeedCards from '../feedCards/FeedCards';
import NewAssignment from '../newAssignment/NewAssignment';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchSchool } from '../../store/actions/school.actions';

function Feed() {
  const dispatch = useDispatch();
  const { list: ALL_SCHOOLS } = useSelector((state) => state.school);
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      await dispatch(handleFetchSchool());
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="feed">
      <div className="hd">
        <div className="hd-txt">
          <h2>Overview</h2>
        </div>
        <div className="hd-btn">
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={() => {
              setPage('newAssignment');
            }}
          >
            New Assignment
          </Button>
          <Button variant="outlined" size="medium" color="primary">
            New Lesson Plan
          </Button>
        </div>
      </div>
      <NewAssignment />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {ALL_SCHOOLS.map((school) => (
            <li key={school._id}>{school.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Feed;
