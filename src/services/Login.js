import axios from 'axios';

export const UseLogin = async (email, password) => {
    try {
        const res = await axios.post(
            `http://localhost:4000/api/login`,
            {
                email,
                password
            }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}