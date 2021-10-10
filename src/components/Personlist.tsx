import React from 'react';

export type PersonListProps = {
  // array
  names: {
    id: any;
    first: string;
    last: string;
  }[];
};

const Personlist = (props: PersonListProps) => {
  return (
    <div>
      <h1>Guest List</h1>
      {props.names.reverse().map((name, index) => {
        return (
          <h2 key={name.id}>
            {index + 1}
            {'.'}
            {name.first}&nbsp;{name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default Personlist;
