import jwt from 'jsonwebtoken'


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId : userId }, process.env.JWT_SECRET, {
        expiresIn: '20d'
    });

    // Set JWT as HTTP-Only cookie
    res.cookie('jwt',token, {
        httpOnly : true,
        secure : process.env.NODE_ENV !== 'development',
        sameSite : 'strict',
        maxAge : 20 * 24 * 60 * 60 * 1000 //20days
    })
}

export default generateToken;