import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_FORM_ID } from '../libs/clientFormspree'

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return <p>Obrigado — mensagem enviada!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>Enviar</button>
    </form>
  );
}
