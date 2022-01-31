import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://hidden-fortress-42664.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully.');
                    reset();
                }
            })
    };

    return (
        <div className='add-service'>
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 30 })} placeholder='Title' />
                <input {...register("brand")} placeholder='Brand' />
                <input type="number" {...register("price")} placeholder='price' />
                <input {...register("img")} placeholder='Image url' />
                <textarea {...register("detail")} placeholder='Detail ...' />
                <input type="submit" />
            </form>
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
        </div>
    );
};

export default AddService;