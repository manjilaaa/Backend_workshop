async function loginMiddleware(req,res,next) {
    req.body.username="hari"
    next();
    
}
export default loginMiddleware