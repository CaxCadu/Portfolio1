import clientFormspree from '../libs/clientFormspree';


<form
  action={clientFormspree()}
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email"/>
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>

  <button type="submit">Send</button>
</form>