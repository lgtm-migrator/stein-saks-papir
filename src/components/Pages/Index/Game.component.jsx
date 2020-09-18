import React, { useState, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Alert from 'react-bootstrap/Alert';

import PlayGame from '../../../functions/PlayGame';

import ShowWinner from './ShowWinner.component';
import ResetGameButton from './ResetGameButton.component';
import ListWeapons from './ListWeapons.component';

/**
 * Generer knappene som viser våpnene
 * Håndterer det som skjer når knappene trykkes på via handlePlayGameClick()
 * Kaller increaseScore action fra Easy Peasy state
 * @returns void
 */
function Game() {
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [shouldCheckWinner, setshouldCheckWinner] = useState(false);
  const [computerSelected, setcomputerSelected] = useState(null);
  const [havewonThreeRounds, sethavewonThreeRounds] = useState(null);

  const increaseScore = useStoreActions((actions) => actions.increaseScore);
  const getScore = useStoreState((score) => score.score);

  useEffect(() => {
    const haveFinalWinner = getScore.find((score) => score.Score > 2);

    if (haveFinalWinner) {
      sethavewonThreeRounds(haveFinalWinner.Name);
      setshouldCheckWinner(false);
    }
  }, [shouldCheckWinner]);

  const handlePlayGameClick = (Weapon) => {
    const resultOfGame = PlayGame(Weapon);

    setshouldCheckWinner(false);
    setcomputerSelected(resultOfGame.computerSelected);

    if (resultOfGame.winner === 'Uavgjort') {
      setWinner('Uavgjort');
      setShowWinnerModal(true);
    } else {
      setWinner(resultOfGame.winner);
      setShowWinnerModal(true);
      increaseScore(resultOfGame.winner);
      setTimeout(() => {
        setshouldCheckWinner(true);
      }, 500);
    }
  };

  return (
    <>
      <ShowWinner
        showWinnerModal={showWinnerModal}
        setShowWinnerModal={setShowWinnerModal}
        computerSelected={computerSelected}
        winner={winner}
      />
      {havewonThreeRounds && (
        <>
          <Alert
            className="animate__animated animate__zoomInUp animate__slow mt-4"
            variant="success"
          >
            {havewonThreeRounds}
            {' '}
            har vunnet! Hurra!
            <br />
          </Alert>
        </>
      )}
      <div
        className={`animate__animated ${
          havewonThreeRounds && 'animate__zoomOutUp animate__slow position-absolute'
        }`}
      >
        <ListWeapons handlePlayGameClick={handlePlayGameClick} />
      </div>
      <ResetGameButton sethavewonThreeRounds={sethavewonThreeRounds} />
    </>
  );
}

export default Game;
