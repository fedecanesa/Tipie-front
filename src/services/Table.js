import axios from 'axios';

export const UseGetTable = async (setData) => {
    try {
        const res = await axios.get(
            `http://localhost:4000/api/table`
        );
        const empleados = res.data;
        setData(empleados)
    } catch (error) {
        console.log(error);
    }
}