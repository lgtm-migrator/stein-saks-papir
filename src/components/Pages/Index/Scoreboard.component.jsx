import React from 'react';
import { useStoreState } from 'easy-peasy';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

/**
 * Funksjonen som viser selve poengtavlen. Henter spillernavn og poeng dynamisk fra state.
 * Viser bare navn og score hvis verdiene er definerte og eksisterer.
 * @returns {JSXElement} Returnerer JSX elementer med poengtavle
 */
function Scoreboard() {
  const Player = useStoreState((player) => player.score);
  return (
    <>
      <Card className="mx-auto mt-5 text-center d-none d-xl-block d-lg-block d-md-block">
        <Card.Header>
          <h6>Poengtavle</h6>
        </Card.Header>
        <CardDeck className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <span style={{ fontSize: '1.25rem' }}>{Player && Player[0].Name}</span>
              </Card.Title>
              <Card.Text>
                <span id="score-p1" className="display-3">
                  {' '}
                  {Player && Player[0].Score}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <span style={{ fontSize: '1.25rem' }}>{Player && Player[1].Name}</span>
              </Card.Title>
              <Card.Text>
                <span id="score-p2" className="display-3">
                  {' '}
                  {Player && Player[1].Score}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Card>
    </>
  );
}

export default Scoreboard;
