const comments_data = [
  {
    id: HELPERS.guid(),
    username: faker.name.findName(),
    date: moment("2018-01-25").valueOf(),
    comment: faker.lorem.text()
  },
  {
    id: HELPERS.guid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(), 
    date: moment("2018-03-25").valueOf(),
    comment: faker.lorem.text()
  },
  {
    id: HELPERS.guid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(), 
    date: moment("2018-05-25").valueOf(),
    comment: faker.lorem.text()
  }
];

new Vue({ 
  el: "#comments_block",
  data: {
    comments: comments_data
  },
  methods: {
    addComment: function({ username, comment }) {
      comments_data.push({
        id: HELPERS.guid(),
        username,
        comment,
        date: moment().valueOf()
      })
    }
  }
});
