import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from '../base';
import { newChallenge } from '../../services/challenge';
const HomeCard = () => {
  const history = useHistory();
  const handleClick = () => {
    newChallenge().then(resp => {
      history.push(`/challenge/${resp.auth.edition}`);
    });
  };
  return (
    <Card>
      <p>Select an option:</p>
      <Button value="New challenge" onClick={handleClick} />
      <Button value="Open using code" />
    </Card>
  );
};

export default HomeCard;
