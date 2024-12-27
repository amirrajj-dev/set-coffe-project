'use client'
import Aos from 'aos';
import React from 'react'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyAos() {
    useEffect(() => {
        Aos.init({
          once: true,
          mirror : false
        });
      }, []);
    return null;
}

export default MyAos