import jsonServer from 'json-server';
const server = jsonServer.create();

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(1111, () => {
    console.log('JSON Server is running');
});
