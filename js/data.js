const usedIds = [];
// const usd = [];
   
// const generateId = () => {
//     const id_2 = [];
//     for (let i = 0; i < 26; i++) {
//         id_2.push(getRandomIntInclusive(1, 26));
//         if (id_2.includes(usedIds)) {
//             usedIds.push(id_2);
//         } else {
            
//         };
//     };
// };

// 1. сгенерировать случайный id
// 2. проверить его уникальность
// (да) пункт 1
// (нет) записать его в usedIds
// передать в объект

// includes


const generateId = () => {
    let usd = getRandomIntInclusive(0,25);
    while (usedIds.includes(usd)) {
        usd = getRandomIntInclusive(0,25);
    };
    usedIds.push(usd);
    return usd;
};

console.log(generateId());

const generateComment = () => {
    const avatars = [];
    const cv = [];
    for (let i = 0; i < 10; i++) {
        cv.push(getRandomIntInclusive(1, 10));
        if (cv != avatars) {
            avatars.push(cv);
            break;
        } else {
           return 
        };
    };

    let usd = getRandomIntInclusive(1,250);
    while (usedIds.includes(usd)) {
        usd = getRandomIntInclusive(1,250);
    };
    usedIds.push(usd);

    return {
        id: usd,
        // avatar: `./img/avatar-${getRandomIntInclusive(1, 10)}.jpg`,
        avatar: `./img/avatar-${usedIds}.jpg`,
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
    };
};

const generatePost = () => {
    const comments = [];
    let i = 0;
    while (i < getRandomIntInclusive (0,10)) {
        comments.push(generateComment());
        i++;
    };

    return {
        id: usedIds,
        url: `./photos/${getRandomIntInclusive(1, POST_COUNT)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
        likes: 15,
        comments: comments,
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

// includes
