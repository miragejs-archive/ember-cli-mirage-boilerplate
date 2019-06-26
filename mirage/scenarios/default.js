export default function(server) {

  let user = server.create('user', { name: 'Yehuda' });
  server.createList('post', 3, { user });

}
