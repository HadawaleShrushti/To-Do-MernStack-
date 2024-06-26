/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import CustomForm from '../components/Form';
import { toast } from 'react-toastify';

let initialState = {
    title: '',
    description: ''
}


const EditTodo = () => {
    const [data, setData] = React.useState(initialState);

    const { id } = useParams();

    const getSingleTodo = async () => {
        await axios.get(`http://localhost:8000/api/todo/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        getSingleTodo();
    }, []);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/update/${id}`, data)
            .then((res) => {
                toast.success("Todo updated successfully");
                window.location.href = "/";
            }).catch((err) => console.log(err));
    }

    return (
        <div style={{ marginTop: 20 }}>
            <h3>Update Todo</h3>
            <CustomForm
                values={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default EditTodo