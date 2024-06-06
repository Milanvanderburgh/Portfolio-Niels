import React from 'react';

const ProjectElement = ({ project, image, alt, title, description, labels, setCurrentPage }) => {
  const handleClick = () => {
    setCurrentPage();
  };

  return (
    <div className="col-md-5 projectElement" onClick={handleClick}>
      <img src={image} alt={alt} height={250} width={300}/>
      <div className="background d-flex flex-column p-3 pb-0 rounded">
        <h5 className='mainColor'>{title}</h5>
        <p>{description}</p>
        <p className='fst-italic mt-auto mb-0'>{labels}</p>
      </div>
    </div>
  );
};

export default ProjectElement;
