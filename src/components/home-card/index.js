import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Input } from '../base';
import { newChallenge } from '../../services/challenge';
const HomeCard = () => {
  const history = useHistory();
  const [openChallenge, setOpenChallenge] = useState(false);
  const [code, setCode] = useState('');
  const onNewChallenge = () => {
    newChallenge().then(resp => {
      history.push(`/challenge/${resp.auth.edition}`);
    });
  };
  const onOpenChallenge = () => {
    setOpenChallenge(true);
  };
  const onChangeCode = newCode => {
    console.log('code: ', newCode);
    setCode(newCode);
  };
  const redirectChallgen = () => {
    history.push(`/solve/${code}`);
  };
  return (
    <>
      {!openChallenge && (
        <Card>
          <p>Select an option:</p>
          <Button type="primary" value="New challenge" onClick={onNewChallenge} />
          <Button type="primary" value="Open using code" onClick={onOpenChallenge} />
        </Card>
      )}
      {openChallenge && (
        <Card>
          <p>Insert code:</p>
          <Input onChange={onChangeCode} />
          <Button value="Go" onClick={redirectChallgen} />
        </Card>
      )}
    </>
  );
};

export default HomeCard;
