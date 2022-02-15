import React from 'react';

const Posts = ({ posts}) => {

  return (
    <div className="container">
    <div className="row m-2">
     {
         posts.map((item)=>{
             return (
              <div key={item.id} className="col-md-6">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                    <img src={item.image_url}  width={200} height={200}/>
                  <h5 className="card-title">Name :{item.name} </h5><br />
                  <h6 className="card-subtitle">
                    TagLine : {item.tagline}
                  </h6><br />
                  <p className="card-text"> pH : {item.ph}</p>
                  <p className="card-text"> srm : {item.srm}</p>
                  <p className="card-text"> unit : {item.volume.unit}</p>
                  <p className="card-text"> value : {item.volume.value}</p>
                </div>
              </div>
            </div>
             )
         })
     }
    </div>
    </div>
  );
};

export default Posts;