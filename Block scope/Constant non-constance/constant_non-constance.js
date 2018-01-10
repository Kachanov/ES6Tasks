const account = {
    username: "marijn",
    password: "xyzzy"
};

Object.defineProperty(account, "password", {
    writable: false,
    configurable: false
});

account.password = "s3cret";// (*much* more secure)s

console.log(account.password);
