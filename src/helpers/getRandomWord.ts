let words: string[] = [
    'NARUTO',
    'DEAMON SLAYER',
    'DRAGON BALL Z',
    'CABALLEROS DEL ZODIACO',
    'CAPITAIN TSUBASA',
    'ONE PIECE',
    'NETFLIX',
    'TWICH',
    'SAMURAI X',
    'GLOBANT',
    'PRAGMA',
    'GOOGLE',
    'MIDUDEV',
    'PANDORA',
    'FIN'
]


export function getRandomWord() {


    const randomIndex = Math.floor(  Math.random() * words.length  ) ;
    return words[ randomIndex ];
}