import React from 'react';

const Section = ({ number, style }) => {
  //console.log(props);
  return (
    <>
      <section className="section" style={style}>
        Section {number}
      </section>
    </>
  );
};

export default Section;
