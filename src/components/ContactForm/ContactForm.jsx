import s from './ContactForm.module.scss';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../../redux/emailOperations';
import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaEnvelopeOpenText, FaComment } from 'react-icons/fa';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    validation.isValid(formData).then((valid) => {
      setIsFormValid(valid);
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = async (field) => {
    try {
      await validation.fields[field].validate(formData[field]);
      setErrors({ ...errors, [field]: '' }); // Clear the error for this field
    } catch (err) {
      setErrors({ ...errors, [field]: err.message });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validation.validate(formData, { abortEarly: false });

      // Form is valid, proceed with submission
      console.log('Form submitted with data:', formData);
      // Add code to send the form data to a backend (not included in this example).

      // Clear any previous validation errors
      setErrors({});
    } catch (err) {
      // Handle validation errors
      const newErrors = {};

      if (err.inner) {
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
      }

      setErrors(newErrors);
    }
  };

  const validation = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Minimum length 2 characters')
      .max(32, 'Maximum length 32 characters')
      .required('Name required'),

    email: yup
      .string()
      .matches(
        /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email address. Example: example@gmail.com',
      )
      .required('Email required'),

    subject: yup.string(),
    message: yup.string().min(6, 'Minimum length 6 characters').required('Message is required field'),
  });

  return (
    <div className={s.Container}>
      <div className={s.Image}></div>
      <div className={s.Banner}>
        <h2 className={s.Header}>Contact us</h2>
        <p className={s.Desc}>Let us know how we can help you, and we'll be in touch.</p>
      </div>
      <form className={s.FormContainer} onSubmit={handleSubmit}>
        <div className={`${s.InputContainer} ${errors.name && s.ErrorBorder}`}>
          <FaUser className={s.Icon} />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            className={s.Input}
          />
          {errors.name && <div className={`${s.Error}`}>{errors.name}</div>}
        </div>
        <div className={`${s.InputContainer} ${errors.email && s.ErrorBorder}`}>
          <FaEnvelope className={s.Icon} />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            className={s.Input}
          />
          {errors.email && <div className={`${s.Error}`}>{errors.email}</div>}
        </div>
        <div className={`${s.InputContainer} ${errors.subject && s.ErrorBorder}`}>
          <FaEnvelopeOpenText className={s.Icon} />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={() => handleBlur('subject')}
            className={s.Input}
          />
          {errors.subject && <div className={`${s.Error}`}>{errors.subject}</div>}
        </div>
        <div className={`${s.InputContainerText} ${errors.message && s.ErrorBorder}`}>
          <FaComment className={s.Icon} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            className={s.InputText}
          />
          {errors.message && <div className={`${s.Error}`}>{errors.message}</div>}
        </div>
        <div>
          <button
            type="submit"
            className={`${s.Button} ${isFormValid ? '' : s.Disabled}`}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
