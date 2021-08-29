import React from 'react';
import emailjs from 'emailjs-com';



class Contact extends React.Component {
    
        sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('portfolio_email', 'template_bj8okcw', e.target, 'user_QZNR85jlDVTQyXGgliobY')
                .then((result) => {
                    console.log(result.text);
                    alert('Message envoyé !')
                    e.target.reset()
                }, (error) => {
                    console.log(error.text);
                    alert('Erreur!')
                });
        }
        render(){
            return (
                <React.Fragment>
                    <form className="footer_form" onSubmit={this.sendEmail}>
                        <input type="text" placeholder="Prénom/Nom" name="user_name" ref={this.fieldName} required />
                        <input type="email" placeholder="Email" name="user_email" ref={this.fieldEmail} required />
                        <input type="text" placeholder="Sujet" name="user_subject" ref={this.fieldSubject} required />
                        <textarea name="msg" id="" cols="18" rows="5" ref={this.fieldMsg}></textarea>
                        <input type="submit" value="Envoyer" />
                    </form>

                </React.Fragment>
            );

        }
}
    export default Contact;
