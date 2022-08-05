import './Form.css'
import InputText from "../inputText";
import React from "react";

const Form = () => {
    return (
        <section className= "FormC">
            <form>
                <InputText label="Nome" placeholder="Digite seu nome"/>
                <InputText label="Sabor" placeholder="Digite um sabor"/>
            </form>
        </section>
    )
}
export default Form
