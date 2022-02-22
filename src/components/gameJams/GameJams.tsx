import React from 'react'
import { gameJams } from './constants'
import './GameJams.css'

const GameJams = () => {
  return (
    <div className="gameJams">
      {gameJams.map((gameJam, index) => (
        <div key={index} className="gameJam orange-shadow">
          <div className="details">
            <div className="name text">
              <b>{gameJam.game.name}</b>
            </div>
            <div className="text">
              <i>
                {gameJam.organisation} {gameJam.date} ({gameJam.theme})
              </i>
            </div>
            <div className="description text">{gameJam.game.description}</div>
            <div className="links">
              {gameJam.game.playLink && (
                <div className="link">
                  <div className="text">
                    <a
                      href={gameJam.game.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &gt; Play
                    </a>
                  </div>
                </div>
              )}

              {gameJam.game.repoLink && (
                <div className="link">
                  <div className="text">
                    <a
                      href={gameJam.game.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &gt; GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {gameJam.game.image && (
            <img
              className="image"
              src={gameJam.game.image}
              alt={gameJam.game.name}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default GameJams
