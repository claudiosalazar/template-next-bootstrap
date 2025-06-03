'use client';

import { useState } from 'react';
import { validateEmail, validatePhone } from '@/lib/validations';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    comentario: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Validación especial para el campo teléfono
    if (name === 'telefono') {
      // Solo permitir +, números y espacios
      const phoneRegex = /^[+0-9\s]*$/;
      if (!phoneRegex.test(value)) {
        return;
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const getFieldClass = (fieldName: keyof ContactFormData) => {
    if (!validated) return 'form-control';

    let isValid = false;

    switch (fieldName) {
      case 'nombre':
        isValid = formData.nombre.trim().length > 0;
        break;
      case 'email':
        isValid = validateEmail(formData.email);
        break;
      case 'telefono':
        isValid = validatePhone(formData.telefono);
        break;
      case 'comentario':
        isValid = formData.comentario.trim().length >= 10;
        break;
    }

    const classes = ['form-control'];
    if (validated) {
      classes.push(isValid ? 'is-valid' : 'is-invalid');
    }
    return classes.join(' ');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);

    // Validar manualmente todos los campos
    const isValid =
      formData.nombre.trim().length > 0 &&
      validateEmail(formData.email) &&
      validatePhone(formData.telefono) &&
      formData.comentario.trim().length >= 10;

    if (!isValid) {
      e.stopPropagation();
    } else {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);

      // Resetear formulario después del envío exitoso
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        comentario: '',
      });
      setValidated(false);

      // Mostrar mensaje de éxito (opcional)
      alert('¡Mensaje enviado correctamente!');
    }
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <form className='needs-validation' noValidate onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <label htmlFor='nombre' className='form-label'>
                Nombre completo <span className='text-danger'>*</span>
              </label>
              <input
                type='text'
                className={getFieldClass('nombre')}
                id='nombre'
                name='nombre'
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder='Ingresa tu nombre completo'
              />
              <div className='invalid-feedback'>
                Por favor, ingresa tu nombre completo.
              </div>
              <div className='valid-feedback'>Nombre válido.</div>
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor='email' className='form-label'>
                Email <span className='text-danger'>*</span>
              </label>
              <input
                type='email'
                className={getFieldClass('email')}
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='tu@email.com'
              />
              <div className='invalid-feedback'>
                Por favor, ingresa un email válido.
              </div>
              <div className='valid-feedback'>Email válido.</div>
            </div>
          </div>

          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label'>
              Teléfono <span className='text-danger'>*</span>
            </label>
            <input
              type='tel'
              className={getFieldClass('telefono')}
              id='telefono'
              name='telefono'
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder='+56 9 1234 5678'
              pattern='[+]?[0-9\s]*'
            />
            <div className='invalid-feedback'>
              Por favor, ingresa un número de teléfono válido (solo números,
              espacios y +). Mínimo 8 dígitos.
            </div>
            <div className='valid-feedback'>Teléfono válido.</div>
          </div>

          <div className='mb-4'>
            <label htmlFor='comentario' className='form-label'>
              Comentario <span className='text-danger'>*</span>
            </label>
            <textarea
              className={getFieldClass('comentario')}
              id='comentario'
              name='comentario'
              rows={5}
              value={formData.comentario}
              onChange={handleChange}
              required
              placeholder='Escribe tu mensaje aquí...'
              minLength={10}
            />
            <div className='invalid-feedback'>
              Por favor, ingresa tu comentario (mínimo 10 caracteres).
            </div>
            <div className='valid-feedback'>Comentario válido.</div>
          </div>

          <div className='d-grid'>
            <button type='submit' className='btn btn-primary btn-lg'>
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
