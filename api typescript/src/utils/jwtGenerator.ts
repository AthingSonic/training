import jwt from 'jsonwebtoken';

interface Payload {
    user: {
        id: number;
    };
}

const jwtGenerator = (userId: number): string => {
    const payload: Payload = {
        user: {
            id: userId,
        },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: '1h' });

    return token;
};

export default jwtGenerator;
