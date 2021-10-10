import React from 'react';

export type GreetProps = {
  name: string;
  messageCount: number;
  isLogedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogedIn
          ? `
        Welcome ${props.name}!! You have ${props.messageCount} unread message!`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;
