import { Field, Form, Formik } from 'formik';
import React from 'react';

const ToDoForm = ({ addToDo }) => {
    const submitHandler = (val, formBag) => {
        addToDo(val.text)
        formBag.resetForm();
    }
    return (
        <Formik
            initialValues={{text:""}}
            onSubmit={submitHandler}
        >
            <Form>
                <Field name="text"/>
                <button type='submit'>Add ToDo</button>
            </Form>
        </Formik>
    );
}

export default ToDoForm;
