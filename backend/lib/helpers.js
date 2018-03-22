module.exports = {
    promiseWrapper: function (async_fn) {
        return function(req, res, next) {
            async_fn(req, res).then(function () {
                next();
            }).catch(function (err) {
                if (!err instanceof Error) {
                    next(new Error(err));
                } else {
                    next(err);
                }
            });
        };
    }
}