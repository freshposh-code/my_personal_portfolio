import React, { useRef, useState } from 'react'
import { main } from '../assets'
import { Styles } from '../Utils/Style';
import { TransingText } from '../components/CustomText';
import {motion} from 'framer-motion'
import { slideIn, zoomIn } from '../Utils/motion';
import toast from 'react-hot-toast';
import SectionWrapper from '../HOC/SectionWrapper';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
         "service_145qg49",
          "template_ohppxl3",
          {
            from_name: form.name,
            to_name: "FAROUK_AYO",
            from_email: form.email,
            to_email: "atomisefarouk919@gmail.com",
            message: form.message,
          },
        "sNI5J8rvovZ1uyjcF",
        )
        .then(
          () => {
            setLoading(false);
            toast.success('Sent Successfully')
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            toast.error("Ahh, something went wrong. Please try again.")
          }
        );
    }

  return (
    <section className={`${Styles.paddingX} ${Styles.paddingY} bg-white`}>

<div className="flex justify-center items-center sm:mt-4 mt-16">
        <TransingText title='Get In Touch ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl absolute' />
        
        <div className="flex justify-center items-center">
        <motion.h1 variants={zoomIn(0.70, 1)} className='sm:text-7xl xm:text-6xl text-4xl -z-0 flex justify-center absolute text-[#51515143]'>CONTACT</motion.h1>
        </div>
        </div>

        <motion.h1 className='sm:text-lg text-base font-bold text-center mt-5 py-5 leading-7 dark:text-white'>Feel free to reach out for collaborations, Freelance, have inquiries?
         I'm always open to conversations! Your messages and feedback are valued, and I look forward to engaging with you. Feel free to get in touch  with me across various social media platforms.
         or just send me a message right away 👇.</motion.h1>

        <div className="flex justify-between sm:flex-row flex-col-reverse gap-6 overflow-x-hidden">

        <motion.div variants={slideIn('left', 'tween', 0.5, 1)}>
            <img src={main} alt="image" className='object-cover w-[600px] sm:h-[600px] h-[450px]' />
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.5, 1.4)} className='bg-[#000] sm:p-3 p-2 rounded-2xl sm:w-[500px] w-[100%]'>
            
             <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 rounded-lg sm:p-3 xm:p-3 p-0'
        >
          <label className='flex flex-col'>
            <span className='text-blue-200 mb-4 font-bold'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium poppins'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-blue-200 mb-4 font-bold'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium poppins'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-blue-200 mb-4 font-bold'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='py-1 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium poppins placeholder:pt-3'
            />
          </label>

          <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        </motion.div>

        </div>
    </section>
  )
}

export default SectionWrapper(Contact)