import toast from "react-hot-toast";
import React, { useRef, useState } from 'react'
import { main } from '../assets'
import { Styles } from '../Utils/Style';
import { TransingText } from '../components/CircularAnimation/CustomText';
import { motion } from 'framer-motion'
import { slideIn, textVariant, zoomIn } from '../Utils/motion';
import SectionWrapper from '../HOC/SectionWrapper';
import emailjs from "@emailjs/browser";
import { WhatsApp } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

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

          toast.error("something went wrong.")
        }
      );
  }

  return (
    <section className={`${Styles.paddingX} ${Styles.paddingY} bg-white dark:bg-[#0c0c0c] sm:rounded-t-[50%] rounded-t-[180px] sm:rounded-b-[10%] rounded-b-[100px] mt-6`} id="contactme">

      <div className="flex justify-center items-center sm:mt-10 mt-16">
        <TransingText title='Get In Touch ' textStyles='flex justify-center items-baseline sm:text-4xl xm:text-3xl text-2xl absolute' />

        <div className="flex justify-center items-center">
          <motion.h1 variants={zoomIn(0.70, 1)} className='sm:text-7xl xm:text-[55px] text-4xl -z-0 flex justify-center absolute text-[#51515143]  dark:text-[#96969654]'>CONTACT</motion.h1>
        </div>
      </div>

      <motion.h1 variants={textVariant(0.2)} className='sm:text-lg text-sm font-bold text-center mt-5 py-8 leading-7 dark:text-white max-w-[1000px] m-auto'>Feel free to reach out for collaborations, Freelance, have inquiries?
        I'm always open to conversations! Your messages and feedback are valued, and I look forward to engaging with you. Feel free to get in touch  with me across various social media platforms.
        or just send me a message right away 👇.</motion.h1>

      <div className="flex justify-between items-center sm:flex-row flex-col-reverse gap-6 overflow-x-hidden">

        <motion.div variants={slideIn('left', 'tween', 0.5, 1)}>
          <img src={main} alt="icon" className='object-cover w-[100%] sm:h-[600px] h-[450px]' />
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.0, 1)} className='bg-[#000] sm:p-3 p-2 rounded-2xl sm:w-[500px] w-[100%] m-auto mt-6'>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-6 rounded-lg sm:p-3 xm:p-3 p-0'
          >
            <div className='flex items-center justify-around text-white font-extrabold'>
              <h1 className=''>VIA</h1>
              <a href="https://wa.me/+2349068620646?text=Hi%20there👋" target='_blank'>
                <WhatsApp style={{ color: 'white', backgroundColor: 'green', padding: '6px', borderRadius: '50%', fontSize: '29px' }} className="icon" />
              </a>
              OR
              <a href="https://twitter.com/farouk_ayo" target='_blank'>
                <XIcon style={{ backgroundColor: '#000', color: 'white', padding: '6px', borderRadius: '50%', fontSize: '29px' }} className="icon" />
              </a>
            </div>
            <h1 className="text-white font-bold sm:text-2xl text-lg">📧Connect With Me👇</h1>
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
                className='py-1 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium poppins'
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