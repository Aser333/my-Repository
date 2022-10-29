const usedIds = [];
const usedPostIds = [];

const generateCommentId = () => {
    let usedId = getRandomIntInclusive(0, 250);
    while (usedIds.includes(usedId)) {
        usedId = getRandomIntInclusive(0, 250)
    };
    usedIds.push(usedId);
    return usedId;
};


const generateComment = () => {
    

    let usedId = getRandomIntInclusive(1, 250);
    while (usedIds.includes(usedId)) {
        usedId = getRandomIntInclusive(1, 250);
        
    };
    usedIds.push(usedId);

    return {
        id: generateCommentId(),
        avatar: `./img/avatar-${usedIds}.jpg`,
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
    };
};

const generatePostId = () => {
    let usedPostId = getRandomIntInclusive(0, 250);
    while (usedPostIds.includes(usedPostId)) {
        usedPostId = getRandomIntInclusive(0, 250)
    };
    usedPostIds.push(usedPostId);
    return usedPostId;
};

const generatePost = () => {
    
    const comments = [];
    let i = 0;
    while (i < getRandomIntInclusive (0,10)) {
        comments.push(generateComment());
        i++;
    };

    return {
        id: generatePostId(),
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
