import { useEffect, useState } from "react";
import { ContainerContact } from "./styled.Contact";
import { init, send } from 'emailjs-com';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export default function Contact() {
    const initialForm = {
        fullName: "",
        email: "",
        content: ""
    };

    const [formState, setFormState] = useState(initialForm);
    const { fullName, email, content } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        console.log(`fullName updated : ${fullName}`);
    }, [fullName]);

    useEffect(() => {
        console.log(`email updated : ${email}`);
    }, [email]);

    useEffect(() => {
        console.log(`content updated : ${content}`);
    }, [content]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (fullName === "" || email === "" || content === "") {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao Preencher Formulário',
                text: 'É necessário preencher todos os campos do formulário!',
            });
            return;
        }
        try {
            const emailResult = await send(
                'service_uvdcu3h',
                'template_933dhkl',
                {
                    to_name: "BOTECHIA DEV",
                    from_name: email,
                    content: content
                },
                'Fqjs7CbN1e1UXczUQ'
            );

            console.log('Email sent successfully:', emailResult);

            // Exibe o alerta de sucesso
            Swal.fire({
                icon: 'success',
                title: 'Email Enviado!',
                text: 'Seu email foi enviado com sucesso.',
            });

            // Limpa o formulário após o envio bem-sucedido
            setFormState(initialForm);

        } catch (error) {
            console.error('Error sending email:', error);

            // Exibe o alerta de erro
            Swal.fire({
                icon: 'error',
                title: 'Erro ao Enviar Email',
                text: 'Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.',
            });
        }
    };

    return (
        <ContainerContact id="contact" onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>Entre em Contato! </legend>
                    <div>
                        <input type="text" name="fullName" placeholder="Nome para cadastro" value={fullName}
                            maxLength={60}
                            required
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="fulano@gmail.com" value={email}
                            maxLength={200}
                            required
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <textarea name="content" placeholder="Insira sua mensagem" value={content}
                            maxLength={140}
                            required
                            onChange={handleInputChange} />
                    </div>
                    <button type="submit">Enviar</button>
                </fieldset>
        
        </ContainerContact>
    );
}
