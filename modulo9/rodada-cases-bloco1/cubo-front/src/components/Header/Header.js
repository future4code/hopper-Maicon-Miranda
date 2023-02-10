import React from "react";
import '../../components/Header/Header.css'
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm"


function Header() {


    const [form, onChange, clear] = useForm({
        name: "",
        lastname: "",
        participation: ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()

        if (isNaN(form.participation)) {
            alert('The participation informed is not a number!')
        }

        

        //console.log(form)
        
    }

    const onSendParticipation = () => {
        axios.post(`${BASE_URL}`, form)
            .then((res) => {
                console.log(res.data)
                clear()
                window.location.reload(true);
            })
            .catch((error) => {
                console.log(error.response)
            })
    }


    return (
        <form onSubmit={onSubmitForm}>

            <input
                id="name"
                placeholder="First name"
                value={form.name}
                onChange={onChange}
                type={'text'}
                name={'name'}
                required
            />

            <input
                id="lastname"
                placeholder="Last name"
                value={form.lastname}
                onChange={onChange}
                type={'text'}
                name={'lastname'}
                required
            />

            <input
                id="participation"
                placeholder="Participation"
                value={form.participation}
                onChange={onChange}
                type={'text'}
                name={'participation'}
                required
            />

            <button type={'submit'} onClick={onSendParticipation}><strong>SEND</strong></button>

        </form>
    )
}

export default Header;