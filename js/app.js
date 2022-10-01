
// const picture = {
//     id: 1,
//     url: './photos/1.jpg',
//     description : '',
//     likes: 15,
//     comments: [
//         {
//             id: 1,
//             avatar: './img/avatar-1.svg',
//             message: '',
//             name: ''
//         },
//         {
//             id: 2,
//             avatar: './img/avatar-1.svg',
//             message: '',
//             name: ''
//         }
//     ]
// };
// for (let i = 0; i < Number; i++) {
//     const generatePosts = (number) => {
//        picture = 
//     }
// }

// const generateComment = () => {
//     return {
//         id: getRandomIntInclusive(1, 10),
//         avatar: './img/avatar-1.svg',
//         message: '',
//         name: ''
//     };
// };

// const generateComment = () => ({
//     id: 1,
//     avatar: './img/avatar-1.svg',
//     message: '',
//     name: ''
// });

// const generatePost = () => {
//     return {
//         id: getRandomIntInclusive(1, 10),
//         url: './photos/1.jpg',
//         description : '',
//         likes: 15,
//         comments: [
//             generateComment(),
//             generateComment(),
//             generateComment(),
//         ]
//     };
// };

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
    }

    ;


    
    

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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}





console.log(generatePosts(26));
