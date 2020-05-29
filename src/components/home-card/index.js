import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Input } from '../base';
import { newChallenge } from '../../services/challenge';
import { getChallenge } from '../../services/challenge';

const HomeCard = () => {
  const history = useHistory();
  const [openChallenge, setOpenChallenge] = useState(false);
  const [code, setCode] = useState('');
  const [mode, setMode] = useState('');

  const onNewChallenge = () => {
    newChallenge().then(resp => {
      history.push(`/challenge/${resp.auth.edition}`);
    });
  };
  const onOpenChallenge = () => {
    setOpenChallenge(true);
  };
  const onChangeCode = newCode => {
      getChallenge(newCode).then(challenge => {
        setMode(challenge.mode);
      });
    setCode(newCode);
  };
  const redirectChallenge = () => {
    if(mode === 'solve') {
      history.push(`/solve/${code}`);
    } else if (mode === 'edition') {
      history.push(`/challenge/${code}`);
    }
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
          <Button value="Go" onClick={redirectChallenge} />
        </Card>
      )}
    </>
  );
};

export default HomeCard;
