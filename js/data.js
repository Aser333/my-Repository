const usedIds = [];

const generateId = () => {
    let usedId = getRandomIntInclusive(0,25);
    do while (usedIds.includes(usedId)) {
        usedId = getRandomIntInclusive(0,25)
    };
    usedIds.push(usedId);
    return usedId;
};

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

    let usedId = getRandomIntInclusive(1,250);
    while (usedIds.includes(usedId)) {
        usedId = getRandomIntInclusive(1,250);
    };
    usedIds.push(usedId);

    return {
        id: generateId,
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
