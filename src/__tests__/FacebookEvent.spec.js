import FacebookEvent from '../FacebookEvent';

const statusAdd = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'status',
    post_id: '137542570280222_139610053406744',
    verb: 'add',
    published: 1,
    created_time: 1511949030,
    message: 'test',
  },
};

const statusEdited = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'status',
    post_id: '137542570280222_139560936744456',
    verb: 'edited',
    published: 1,
    created_time: 1511927135,
    message: '1234',
  },
};

const postRemove = {
  field: 'feed',
  value: {
    recipient_id: '137542570280222',
    from: {
      id: '139560936744123',
    },
    item: 'post',
    post_id: '137542570280222_139610053406744',
    verb: 'remove',
    created_time: 1511949068,
  },
};

const commentAdd = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'comment',
    comment_id: '139560936744456_139620233405726',
    post_id: '137542570280222_139560936744456',
    verb: 'add',
    parent_id: '139560936744456_139562213411528',
    created_time: 1511951015,
    message: 'Good',
  },
};

const commentEdited = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'comment',
    comment_id: '139560936744456_139597043408045',
    post_id: '137542570280222_139560936744456',
    verb: 'edited',
    parent_id: '137542570280222_139560936744456',
    created_time: 1511948891,
    message: 'Great',
  },
};

const commentRemove = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
    },
    parent_id: '137542570280222_139560936744456',
    comment_id: '139560936744456_139597043408045',
    post_id: '137542570280222_139560936744456',
    verb: 'remove',
    item: 'comment',
    created_time: 1511948944,
  },
};

const likeAdd = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
      name: 'user',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'add',
    item: 'like',
    created_time: 1511948636,
  },
};

const likeRemove = {
  field: 'feed',
  value: {
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'remove',
    item: 'like',
    created_time: 1511948666,
  },
};

const reactionAdd = {
  field: 'feed',
  value: {
    reaction_type: 'like',
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'add',
    item: 'reaction',
    created_time: 1511948636,
  },
};

const reactionEdit = {
  field: 'feed',
  value: {
    reaction_type: 'sad',
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'edit',
    item: 'reaction',
    created_time: 1511948713,
  },
};

const reactionRemove = {
  field: 'feed',
  value: {
    reaction_type: 'like',
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'remove',
    item: 'reaction',
    created_time: 1511948666,
  },
};

it('#isFeed', () => {
  expect(new FacebookEvent(statusAdd).isFeed).toEqual(true);
  expect(new FacebookEvent(statusEdited).isFeed).toEqual(true);
  expect(new FacebookEvent(postRemove).isFeed).toEqual(true);
  expect(new FacebookEvent(commentAdd).isFeed).toEqual(true);
  expect(new FacebookEvent(commentEdited).isFeed).toEqual(true);
  expect(new FacebookEvent(commentRemove).isFeed).toEqual(true);
  expect(new FacebookEvent(likeAdd).isFeed).toEqual(true);
  expect(new FacebookEvent(likeRemove).isFeed).toEqual(true);
  expect(new FacebookEvent(reactionAdd).isFeed).toEqual(true);
  expect(new FacebookEvent(reactionEdit).isFeed).toEqual(true);
  expect(new FacebookEvent(reactionRemove).isFeed).toEqual(true);
});

it('#isStatus', () => {
  expect(new FacebookEvent(statusAdd).isStatus).toEqual(true);
  expect(new FacebookEvent(statusEdited).isStatus).toEqual(true);
  expect(new FacebookEvent(postRemove).isStatus).toEqual(false);
  expect(new FacebookEvent(commentAdd).isStatus).toEqual(false);
  expect(new FacebookEvent(commentEdited).isStatus).toEqual(false);
  expect(new FacebookEvent(commentRemove).isStatus).toEqual(false);
  expect(new FacebookEvent(likeAdd).isStatus).toEqual(false);
  expect(new FacebookEvent(likeRemove).isStatus).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isStatus).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isStatus).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isStatus).toEqual(false);
});

it('#isStatusAdd', () => {
  expect(new FacebookEvent(statusAdd).isStatusAdd).toEqual(true);
  expect(new FacebookEvent(statusEdited).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(postRemove).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(commentAdd).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(commentEdited).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(commentRemove).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(likeAdd).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(likeRemove).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isStatusAdd).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isStatusAdd).toEqual(false);
});

it('#isStatusEdited', () => {
  expect(new FacebookEvent(statusAdd).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(statusEdited).isStatusEdited).toEqual(true);
  expect(new FacebookEvent(postRemove).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(commentAdd).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(commentEdited).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(commentRemove).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(likeAdd).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(likeRemove).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isStatusEdited).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isStatusEdited).toEqual(false);
});

it('#status', () => {
  expect(new FacebookEvent(statusAdd).status).toEqual({
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'status',
    post_id: '137542570280222_139610053406744',
    verb: 'add',
    published: 1,
    created_time: 1511949030,
    message: 'test',
  });
  expect(new FacebookEvent(statusEdited).status).toEqual({
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'status',
    post_id: '137542570280222_139560936744456',
    verb: 'edited',
    published: 1,
    created_time: 1511927135,
    message: '1234',
  });
  expect(new FacebookEvent(postRemove).status).toEqual(null);
  expect(new FacebookEvent(commentAdd).status).toEqual(null);
  expect(new FacebookEvent(commentEdited).status).toEqual(null);
  expect(new FacebookEvent(commentRemove).status).toEqual(null);
  expect(new FacebookEvent(likeAdd).status).toEqual(null);
  expect(new FacebookEvent(likeRemove).status).toEqual(null);
  expect(new FacebookEvent(reactionAdd).status).toEqual(null);
  expect(new FacebookEvent(reactionEdit).status).toEqual(null);
  expect(new FacebookEvent(reactionRemove).status).toEqual(null);
});

it('#isPost', () => {
  expect(new FacebookEvent(statusAdd).isPost).toEqual(false);
  expect(new FacebookEvent(statusEdited).isPost).toEqual(false);
  expect(new FacebookEvent(postRemove).isPost).toEqual(true);
  expect(new FacebookEvent(commentAdd).isPost).toEqual(false);
  expect(new FacebookEvent(commentEdited).isPost).toEqual(false);
  expect(new FacebookEvent(commentRemove).isPost).toEqual(false);
  expect(new FacebookEvent(likeAdd).isPost).toEqual(false);
  expect(new FacebookEvent(likeRemove).isPost).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isPost).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isPost).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isPost).toEqual(false);
});

it('#isPostRemove', () => {
  expect(new FacebookEvent(statusAdd).isPostRemove).toEqual(false);
  expect(new FacebookEvent(statusEdited).isPostRemove).toEqual(false);
  expect(new FacebookEvent(postRemove).isPostRemove).toEqual(true);
  expect(new FacebookEvent(commentAdd).isPostRemove).toEqual(false);
  expect(new FacebookEvent(commentEdited).isPostRemove).toEqual(false);
  expect(new FacebookEvent(commentRemove).isPostRemove).toEqual(false);
  expect(new FacebookEvent(likeAdd).isPostRemove).toEqual(false);
  expect(new FacebookEvent(likeRemove).isPostRemove).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isPostRemove).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isPostRemove).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isPostRemove).toEqual(false);
});

it('#post', () => {
  expect(new FacebookEvent(statusAdd).post).toEqual(null);
  expect(new FacebookEvent(statusEdited).post).toEqual(null);
  expect(new FacebookEvent(postRemove).post).toEqual({
    recipient_id: '137542570280222',
    from: {
      id: '139560936744123',
    },
    item: 'post',
    post_id: '137542570280222_139610053406744',
    verb: 'remove',
    created_time: 1511949068,
  });
  expect(new FacebookEvent(commentAdd).post).toEqual(null);
  expect(new FacebookEvent(commentEdited).post).toEqual(null);
  expect(new FacebookEvent(commentRemove).post).toEqual(null);
  expect(new FacebookEvent(likeAdd).post).toEqual(null);
  expect(new FacebookEvent(likeRemove).post).toEqual(null);
  expect(new FacebookEvent(reactionAdd).post).toEqual(null);
  expect(new FacebookEvent(reactionEdit).post).toEqual(null);
  expect(new FacebookEvent(reactionRemove).post).toEqual(null);
});

it('#isComment', () => {
  expect(new FacebookEvent(statusAdd).isComment).toEqual(false);
  expect(new FacebookEvent(statusEdited).isComment).toEqual(false);
  expect(new FacebookEvent(postRemove).isComment).toEqual(false);
  expect(new FacebookEvent(commentAdd).isComment).toEqual(true);
  expect(new FacebookEvent(commentEdited).isComment).toEqual(true);
  expect(new FacebookEvent(commentRemove).isComment).toEqual(true);
  expect(new FacebookEvent(likeAdd).isComment).toEqual(false);
  expect(new FacebookEvent(likeRemove).isComment).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isComment).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isComment).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isComment).toEqual(false);
});

it('#isCommentAdd', () => {
  expect(new FacebookEvent(statusAdd).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(statusEdited).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(postRemove).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(commentAdd).isCommentAdd).toEqual(true);
  expect(new FacebookEvent(commentEdited).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(commentRemove).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(likeAdd).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(likeRemove).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isCommentAdd).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isCommentAdd).toEqual(false);
});

it('#isCommentEdited', () => {
  expect(new FacebookEvent(statusAdd).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(statusEdited).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(postRemove).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(commentAdd).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(commentEdited).isCommentEdited).toEqual(true);
  expect(new FacebookEvent(commentRemove).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(likeAdd).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(likeRemove).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isCommentEdited).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isCommentEdited).toEqual(false);
});

it('#isCommentRemove', () => {
  expect(new FacebookEvent(statusAdd).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(statusEdited).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(postRemove).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(commentAdd).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(commentEdited).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(commentRemove).isCommentRemove).toEqual(true);
  expect(new FacebookEvent(likeAdd).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(likeRemove).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isCommentRemove).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isCommentRemove).toEqual(false);
});

it('#comment', () => {
  expect(new FacebookEvent(statusAdd).comment).toEqual(null);
  expect(new FacebookEvent(statusEdited).comment).toEqual(null);
  expect(new FacebookEvent(postRemove).comment).toEqual(null);
  expect(new FacebookEvent(commentAdd).comment).toEqual({
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'comment',
    comment_id: '139560936744456_139620233405726',
    post_id: '137542570280222_139560936744456',
    verb: 'add',
    parent_id: '139560936744456_139562213411528',
    created_time: 1511951015,
    message: 'Good',
  });
  expect(new FacebookEvent(commentEdited).comment).toEqual({
    from: {
      id: '139560936744123',
      name: 'user',
    },
    item: 'comment',
    comment_id: '139560936744456_139597043408045',
    post_id: '137542570280222_139560936744456',
    verb: 'edited',
    parent_id: '137542570280222_139560936744456',
    created_time: 1511948891,
    message: 'Great',
  });
  expect(new FacebookEvent(commentRemove).comment).toEqual({
    from: {
      id: '139560936744123',
    },
    parent_id: '137542570280222_139560936744456',
    comment_id: '139560936744456_139597043408045',
    post_id: '137542570280222_139560936744456',
    verb: 'remove',
    item: 'comment',
    created_time: 1511948944,
  });
  expect(new FacebookEvent(likeAdd).comment).toEqual(null);
  expect(new FacebookEvent(likeRemove).comment).toEqual(null);
  expect(new FacebookEvent(reactionAdd).comment).toEqual(null);
  expect(new FacebookEvent(reactionEdit).comment).toEqual(null);
  expect(new FacebookEvent(reactionRemove).comment).toEqual(null);
});

it('#isLike', () => {
  expect(new FacebookEvent(statusAdd).isLike).toEqual(false);
  expect(new FacebookEvent(statusEdited).isLike).toEqual(false);
  expect(new FacebookEvent(postRemove).isLike).toEqual(false);
  expect(new FacebookEvent(commentAdd).isLike).toEqual(false);
  expect(new FacebookEvent(commentEdited).isLike).toEqual(false);
  expect(new FacebookEvent(commentRemove).isLike).toEqual(false);
  expect(new FacebookEvent(likeAdd).isLike).toEqual(true);
  expect(new FacebookEvent(likeRemove).isLike).toEqual(true);
  expect(new FacebookEvent(reactionAdd).isLike).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isLike).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isLike).toEqual(false);
});

it('#isLikeAdd', () => {
  expect(new FacebookEvent(statusAdd).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(statusEdited).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(postRemove).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(commentAdd).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(commentEdited).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(commentRemove).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(likeAdd).isLikeAdd).toEqual(true);
  expect(new FacebookEvent(likeRemove).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isLikeAdd).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isLikeAdd).toEqual(false);
});

it('#isLikeRemove', () => {
  expect(new FacebookEvent(statusAdd).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(statusEdited).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(postRemove).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(commentAdd).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(commentEdited).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(commentRemove).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(likeAdd).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(likeRemove).isLikeRemove).toEqual(true);
  expect(new FacebookEvent(reactionAdd).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isLikeRemove).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isLikeRemove).toEqual(false);
});

it('#like', () => {
  expect(new FacebookEvent(statusAdd).like).toEqual(null);
  expect(new FacebookEvent(statusEdited).like).toEqual(null);
  expect(new FacebookEvent(postRemove).like).toEqual(null);
  expect(new FacebookEvent(commentAdd).like).toEqual(null);
  expect(new FacebookEvent(commentEdited).like).toEqual(null);
  expect(new FacebookEvent(commentRemove).like).toEqual(null);
  expect(new FacebookEvent(likeAdd).like).toEqual({
    from: {
      id: '139560936744123',
      name: 'user',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'add',
    item: 'like',
    created_time: 1511948636,
  });
  expect(new FacebookEvent(likeRemove).like).toEqual({
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'remove',
    item: 'like',
    created_time: 1511948666,
  });
  expect(new FacebookEvent(reactionAdd).like).toEqual(null);
  expect(new FacebookEvent(reactionEdit).like).toEqual(null);
  expect(new FacebookEvent(reactionRemove).like).toEqual(null);
});

it('#isReaction', () => {
  expect(new FacebookEvent(statusAdd).isReaction).toEqual(false);
  expect(new FacebookEvent(statusEdited).isReaction).toEqual(false);
  expect(new FacebookEvent(postRemove).isReaction).toEqual(false);
  expect(new FacebookEvent(commentAdd).isReaction).toEqual(false);
  expect(new FacebookEvent(commentEdited).isReaction).toEqual(false);
  expect(new FacebookEvent(commentRemove).isReaction).toEqual(false);
  expect(new FacebookEvent(likeAdd).isReaction).toEqual(false);
  expect(new FacebookEvent(likeRemove).isReaction).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isReaction).toEqual(true);
  expect(new FacebookEvent(reactionEdit).isReaction).toEqual(true);
  expect(new FacebookEvent(reactionRemove).isReaction).toEqual(true);
});

it('#isReactionAdd', () => {
  expect(new FacebookEvent(statusAdd).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(statusEdited).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(postRemove).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(commentAdd).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(commentEdited).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(commentRemove).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(likeAdd).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(likeRemove).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isReactionAdd).toEqual(true);
  expect(new FacebookEvent(reactionEdit).isReactionAdd).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isReactionAdd).toEqual(false);
});

it('#isReactionEdit', () => {
  expect(new FacebookEvent(statusAdd).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(statusEdited).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(postRemove).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(commentAdd).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(commentEdited).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(commentRemove).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(likeAdd).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(likeRemove).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isReactionEdit).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isReactionEdit).toEqual(true);
  expect(new FacebookEvent(reactionRemove).isReactionEdit).toEqual(false);
});

it('#isReactionRemove', () => {
  expect(new FacebookEvent(statusAdd).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(statusEdited).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(postRemove).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(commentAdd).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(commentEdited).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(commentRemove).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(likeAdd).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(likeRemove).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(reactionAdd).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(reactionEdit).isReactionRemove).toEqual(false);
  expect(new FacebookEvent(reactionRemove).isReactionRemove).toEqual(true);
});

it('#reaction', () => {
  expect(new FacebookEvent(statusAdd).reaction).toEqual(null);
  expect(new FacebookEvent(statusEdited).reaction).toEqual(null);
  expect(new FacebookEvent(postRemove).reaction).toEqual(null);
  expect(new FacebookEvent(commentAdd).reaction).toEqual(null);
  expect(new FacebookEvent(commentEdited).reaction).toEqual(null);
  expect(new FacebookEvent(commentRemove).reaction).toEqual(null);
  expect(new FacebookEvent(likeAdd).reaction).toEqual(null);
  expect(new FacebookEvent(likeRemove).reaction).toEqual(null);
  expect(new FacebookEvent(reactionAdd).reaction).toEqual({
    reaction_type: 'like',
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'add',
    item: 'reaction',
    created_time: 1511948636,
  });
  expect(new FacebookEvent(reactionEdit).reaction).toEqual({
    reaction_type: 'sad',
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'edit',
    item: 'reaction',
    created_time: 1511948713,
  });
  expect(new FacebookEvent(reactionRemove).reaction).toEqual({
    reaction_type: 'like',
    from: {
      id: '139560936744123',
    },
    parent_id: '139560936744456_139597043408045',
    comment_id: '139560936744456_139597090074707',
    post_id: '137542570280222_139560936744456',
    verb: 'remove',
    item: 'reaction',
    created_time: 1511948666,
  });
});