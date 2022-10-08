const generatePos = [
    [
        '2regg',
        'wrtgrt',
        'wtgt',
    ],
    [
        'wrgwgt',
        '43tgtg',
        'erhh',
    ]
];

const MESSAGES = [
    'mess-1',
    'mess-2',
    'mess-3',
    'mess-4',
    'mess-5',
];

const NAMES = [
    'name-1',
    'name-2',
    'name-3',
    'name-4',
    'name-5',
];

const DESCRIPTIONS = [
    'desc-1',
    'desc-2',
    'desc-3',
    'desc-4',
    'desc-5',
    'desc-6',
    'desc-7',    
];

const POST_COUNT = 25;

const getRandomArrayElement = (array) => {    
    return array[getRandomIntInclusive(0, array.length -1)]; 
}

const generateComment = () => {
    return {
        id: getRandomIntInclusive(1, 10),
        avatar: './img/avatar-1.svg',
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
    };
};

let num = getRandomIntInclusive(1, 10); 

const generatePost = () => {
    const comments = [];

    let i = 0;
    while (i < 10) {
        comments.push(generateComment());
        i++;
    };

    return {
        id: getRandomIntInclusive(1, POST_COUNT),
        url: `./photos/${getRandomIntInclusive(1, POST_COUNT)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
        likes: 15,
        comments: [
            
        ],
    };
};

const generatePosts = (count) => {
    const posts = [];

    for (let i = 0; i < count; i++) {
        posts.push(generatePost());
    }

    return posts;
};

console.log(generatePosts(26));