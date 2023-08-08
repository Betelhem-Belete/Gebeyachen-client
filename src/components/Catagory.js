import React from 'react';
import './Catagory.css';
import Usefetch from '../hooks/useGet';
import { Link } from 'react-router-dom';

const Catagory = () => {
  const api = 'http://localhost:8000/ip/cat/allcat';
  const { data } = Usefetch(api);
  const catagory = data.cats;

  return (
    <div>
      <div className="container catagorys">
        <h2>Categories</h2>
        {catagory && (
          <div className="cats">
            {catagory.map((cats) => (
              <Link to={`/categorydetail/${cats._id}`}>
                <div class="card">
                  <img
                    src={cats.cat_pic}
                    class="card-img-top"
                    alt={cats.Catagory_Name}
                    className="cat_imgs"
                  />
                  <div class="card-body">
                    <h5>{cats.catagory_Name}</h5>
                    <p class="card-text">{cats.cat_description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {!catagory && (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catagory;
