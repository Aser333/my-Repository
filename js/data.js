const generateComment = () => {
    return {
        id: getRandomIntInclusive(1, 10),
        avatar: './img/avatar-1.svg',
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
    };
};

const generatePost = () => {
    const comments = [];
    let i = 0;
    while (i < getRandomIntInclusive(0,10)) {
        comments.push(generateComment());
        i++;
    };

    return {
        id: getRandomIntInclusive(1, POST_COUNT),
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
