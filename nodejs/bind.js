let config = {
    server_ip: "127.0.0.1",
    port: 3000,
    getRedisUrl: function () {
        let redisPort = this.port;
        return "redis://" + this.server_ip + ":" + redisPort;
    },
};

let newContext = { server_ip: "3.109.197.5" };
let boundGetRedisUrl = config.getRedisUrl.call(newContext);
let redisUrl = boundGetRedisUrl();
console.log(redisUrl);
