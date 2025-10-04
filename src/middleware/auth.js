


// const authMiddleware = (req, res, next) => {
//     const token = req.header("Authorization")?.replace  ("Bearer","");
//     // if(!token) return res.status(401).json({message: "No tooken, authorization denied"});

//     try{
//         // const decode = jwt.verify(token, process.env.JWT_SECRET);
//         // req.user = decode.userId;
//             next();


//     } catch (err) {
//         res.status(401).json({message: "Token is not valid"})
//     }
// };
// export default authMiddleware;



const authMiddleware = (req, res, next) => {
    next()
};

export default authMiddleware;