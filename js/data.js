const usedCommentIds = [];
const usedPostIds = [];

const generateComment = () => {
    
    const generateCommentId = () => {
        let usedId = getRandomIntInclusive(0, 250);
        while (usedCommentIds.includes(usedId)) {
        usedId = getRandomIntInclusive(0, 250)
        };
        usedCommentIds.push(usedId);
        return usedId;
};
        return {
        id: generateCommentId(),
        avatar: `./img/avatar-${getRandomIntInclusive(1, 6)}.jpg`,
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
