import React from 'react'
import { gameJams, imageDir } from './constants'
import './GameJams.scss'

const GameJams = () => {
  return (
    <div className="parent">
      <div className="panel">
        <div className="title text">Game Jams</div>
        <div className="text">
          For the last few years I have enjoyed taking part in game jams with
          friends. We've taken part in the Global Game Jam each year since 2018,
          as well as some of GUDEV's jams while we were at university.
        </div>
        <div className="text">
          I would like to have a go at Ludum Dare in the future and see what I
          can make on my own while under the theming and time contraints of such
          an event.
        </div>
        <div className="text">
          Below are some of the games I have been a part of creating while
          taking part in game jams, with options to play them online or view
          their repository.
        </div>
      </div>
      <div className="gameJams">
        {gameJams.map((gameJam, index) => (
          <div key={index} className="gameJam">
            <div className="details">
              <div className="title text">{gameJam.game.name}</div>
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
                src={imageDir + gameJam.game.image}
                alt={gameJam.game.name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameJams
