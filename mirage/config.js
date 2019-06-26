export default function() {

  this.resource('user')

  this.get('/v2/users', function({ users }) {
    return this.serialize(users, 'user-v2');
  });

  this.get('/v2/users/:id', function({ users }, { params: { id } }) {
    let user = users.find(id);

    return this.serialize(user, 'user-v2');
  });
}
