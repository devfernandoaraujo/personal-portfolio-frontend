import { NextPage } from 'next'
import React, { useRef, useState, useEffect } from 'react';
import Message, { IAlertPops } from '@/common/utils/alert';
import axios, { AxiosError } from 'axios';
import { useAlertVisible, useAlertVisibleActions } from '@/common/stores';

const ContactComponent : NextPage = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputSubject = useRef<HTMLInputElement>(null);
  const inputPhone = useRef<HTMLInputElement>(null);
  const inputMessage = useRef<HTMLTextAreaElement>(null);

  const visible = useAlertVisible();
  const { toggle } = useAlertVisibleActions();
  const [alertProps, setAlertProps] = useState<IAlertPops>({
    variant: '',
    icon: '',
    children: '',
  });

  interface FormDataType {
    name: string;
    email: string;
    subject: string;
    phone: string;
    message: string;
  }

  const formData: FormDataType = {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  };

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

     const jsonData = JSON.stringify({
      name: inputName?.current?.value || '',
      email: inputEmail?.current?.value || '',
      subject: inputSubject?.current?.value || '',
      phone: inputPhone?.current?.value || '',
      message: inputMessage?.current?.value || ''
    });
  
    try {
      const response = await axios.post(
        'https://api-portfolio.fernandomatosaraujo.com/contacts',
        jsonData,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      toggle();
      setAlertProps({
        ...alertProps,
        children: 'Thank you for your message!',
        icon: 'success',
        variant: 'success',
        header: 'Success',
      });
    } catch (error) {
        const err = error as AxiosError;
        let errorMessage = 'Sorry. It is not possible to deliver your message at the moment. Please try again in a few minutes.';
        
        if (err.code === 'ECONNABORTED') {
          errorMessage = 'Request timed out. Please check your connection.';
        } else if (err.response) {
          console.error('Server responded with:', err.response.status);
        } else if (err.request) {
          console.error('No response received:', err.request);
        }

        toggle();
        setAlertProps({
          ...alertProps,
          children: errorMessage,
          icon: 'danger',
          variant: 'danger',
          header: 'Error',
        });
    } finally {
      form.reset();
    }
  };

  return (
    <section className={'contact-area contact-area-two'} id="contacts">
      {visible && <Message {...alertProps} />}
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-lg-5 col-md-12'}>
            <div className={'get_info'}>
              <div className={'section_title_two undefined'}>
                <h6>Get in Touch</h6>
                <h2>Talk or Meet with Me</h2>
              </div>
              <div className={'media get_item'}>
                <i className={'flaticon-phone'} />
                <div className={'media-body'}>
                  <h6>Call Me Now</h6>
                  <a href="https://fernandomnatosaraujo.com/#" aria-label="">
                    1-778-814-1987
                  </a>
                </div>
              </div>
              <div className={'media get_item'}>
                <i className={'flaticon-chat'} />
                <div className={'media-body'}>
                  <h6>Contact Me</h6>
                  <a href="https://fernandomnatosaraujo.com/#" aria-label="">
                    contact@fernandomatosaraujo.com
                  </a>
                </div>
              </div>
              <div className={'media get_item'}>
                <i className={'flaticon-pin'} />
                <div className={'media-body'}>
                  <h6>Get Me Here</h6>
                  <p>Burnaby - British Columbia, Canada</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-lg-7 col-md-12'}>
            <div className={'input_form'}>
              <div className={'section_title_two undefined'}>
                <h6>Contact me</h6>
                <h2>Let me know here</h2>
              </div>
              <form id="formContact" className={'form_class'} onSubmit={handleSubmit} noValidate>
                <div className={'row'}>
                  <div className={'col-lg-6'}>
                    <input type="text" id="name" ref={inputName} name="name" className={'form-control'} placeholder="Your Name*" required />
                    <p />
                  </div>
                  <div className={'col-lg-6'}>
                    <input type="email" className={'form-control'} ref={inputEmail} id="email" name="email" placeholder="Your Email*" required />
                    <p />
                  </div>
                  <div className={'col-lg-6'}>
                    <input type="text" id="subject" name="subject" ref={inputSubject} className={'form-control'} placeholder="Subject*" required />
                    <p />
                  </div>
                  <div className={'col-lg-6'}>
                    <input type="text" className={'form-control'} id="phone" ref={inputPhone} name="phone" placeholder="1 (777) 846-1987" required />
                    <p />
                  </div>
                </div>
                <textarea name="message" id="message" ref={inputMessage} className={'form-control'} rows={6} placeholder="Your Message ..." required />
                <button type="submit" className={'btn send_btn theme_btn'}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
