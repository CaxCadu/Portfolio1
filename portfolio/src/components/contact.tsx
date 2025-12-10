import { useState } from 'react'
import FORMSPREE_URL from '../libs/clientFormspree'
import './contact.css'


export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<string[] | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrors(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        const msgs = (json && (json.errors || []).map((it: any) => it.message)) || ['Erro ao enviar o formulário']
        setErrors(msgs)
        setStatus('error')
      }
    } catch (err: any) {
      setErrors([String(err.message || err)])
      setStatus('error')
    }
  }

  if (status === 'success') return <p>Obrigado — mensagem enviada!</p>

  return (
    <form onSubmit={handleSubmit} className="contact-form">

      <label htmlFor="name"></label>
      <input id="name" type="text" name="name" placeholder="Seu nome" required />

      <label htmlFor="email"></label>
      <input id="email" type="email" name="email" placeholder="Seu email" required />

      <label htmlFor="message"></label>
      <textarea id="message" name="message" placeholder="Sua mensagem" required />
      {errors && (
        <div className="form-errors">
          {errors.map((err, i) => (
            <p key={i} style={{ color: 'salmon' }}>{err}</p>
          ))}
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  )
}
