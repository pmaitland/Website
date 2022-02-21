type GameJam = {
  organisation: string
  date: string
  theme: string
  game: Game
}

type Game = {
  name: string
  description: string
  image?: string
  playLink?: string
  repoLink?: string
}

export const gameJams: GameJam[] = [
  {
    organisation: 'Global Game Jam',
    date: '2022',
    theme: 'Duality',
    game: {
      name: 'God Complex',
      description:
        'In God Complex you are a god-like being given the opportunity to create life. Will the choices you make help it grow and progress, or lead to its annihilation? Created to fit the theme "Duality" with React, TypeScript, Sass, Twine, Twison, Clip Studio Paint, and BeepBox.',
      image: 'games/godComplex.png',
      playLink: 'https://yasmojam.github.io/ggj2022/',
      repoLink: 'https://github.com/Yasmojam/ggj2022',
    },
  },
  {
    organisation: 'GitHub Game Off',
    date: '2021',
    theme: 'Bug',
    game: {
      name: 'Bee Game',
      description: '',
      image: 'games/beeGame.png',
      repoLink: 'https://github.com/Iain530/github-game-jam-2021',
    },
  },
  {
    organisation: 'Global Game Jam',
    date: '2021',
    theme: 'Lost and Found',
    game: {
      name: 'Island Dream',
      description:
        'You are a survivor. Your plane has crashed and you have been lost to society! Stranded on a series of desert islands you must solve simple puzzles and build a boat to leave the islands and find your way back to the world. Find materials to progress across the islands to achieve this goal!',
      image: 'games/islandDream.png',
      playLink: 'https://dasha1362.itch.io/island-dream',
      repoLink: 'https://github.com/Yasmojam/GGJ21',
    },
  },
  {
    organisation: 'Global Game Jam',
    date: '2020',
    theme: 'Repair',
    game: {
      name: '',
      description: '',
      repoLink: 'https://github.com/Yasmojam/GlobalGameJam2020',
    },
  },
  {
    organisation: 'GUDEV',
    date: 'February 2019',
    theme: 'Twins',
    game: {
      name: 'Slimes',
      description: '',
      image: 'games/slimes.png',
      playLink: 'https://gudev.itch.io/slimes',
      repoLink: 'https://github.com/pmaitland/GUDev5',
    },
  },
  {
    organisation: 'Global Game Jam',
    date: '2019',
    theme: 'Home',
    game: {
      name: 'Hermit',
      description: '',
      image: 'games/hermit.png',
      repoLink: 'https://github.com/Iain530/GGJ19',
    },
  },
  {
    organisation: 'GUDEV',
    date: 'October 2018',
    theme: 'Deceit',
    game: {
      name: 'Parkour Piggies',
      description: '',
      image: 'games/parkourPiggies.png',
      playLink: 'https://dasha1362.itch.io/parkour-piggies',
      repoLink: 'https://github.com/dasha1362/gudev4-deceit',
    },
  },
  {
    organisation: 'GUDEV',
    date: 'March 2018',
    theme: 'Salvage',
    game: {
      name: 'Claw Game',
      description: '',
      repoLink: 'https://github.com/pmaitland/GUDEV_GameJam_Email-',
    },
  },
  {
    organisation: 'Global Game Jam',
    date: '2018',
    theme: 'Transmission',
    game: {
      name: 'Operation: Wire',
      description: '',
      image: 'games/operationWire.png',
      playLink: 'https://dasha1362.itch.io/operation-wire',
      repoLink: 'https://github.com/DevdudeSami/GUEmail_GGJ',
    },
  },
]
