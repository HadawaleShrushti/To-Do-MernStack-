import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/all');
            setData(res.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Run fetchData only once when the component mounts

    return (
        <div>
            <h3>ToDo Lists</h3>
            <table className='table table-striped' style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? data.map((todoData, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{todoData.title}</td>
                            <td>{todoData.description}</td>
                          
                            {<td><Link to={`/edit/${todoData._id}`}>Edit</Link></td> }
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4">No data found</td>
                        </tr>
                    )}
                </tbody>
                {/* Uncomment this line for debugging purposes */}
               
            </table>
        </div>
    );
};

export default TodoList;
