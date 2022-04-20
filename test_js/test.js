var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Anh vua ra xong nha'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Sao em chua thay nhi'
    }

]

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000)
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comments) {
            return comments.user_id;
        });

        return getUserIds(userIds)
            .then(function (user) {
                return {
                    user: user,
                    comment: comments
                }
            })
    })

    .then(function (data) {
        var commentBlock = document.querySelector('#comment')

        var html = '';

        data.comment.forEach(function (comment) {
            var user = data.user.find(function (user) {
                return user.id === comment.user_id;
            })

            html += `<li>${user.name}: ${comment.content}</li>`;
        })

        commentBlock.innerHTML = html;
    })

function getUsers() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(users);
        }, 1000)
    })
}

function getUserIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        })

        setTimeout(function () {
            resolve(result);
        }, 1000)
    })
}
