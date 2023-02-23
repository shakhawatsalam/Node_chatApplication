
function decoratehtmlResponse(page_title) {
    return function (req, res, next) {
        req.locals.html = true;
        res.locals.title = `${page_title} - ${process.env.APP_NAME}`
}
}