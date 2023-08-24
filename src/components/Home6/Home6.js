import React, { useEffect, useRef, useState } from 'react';
import "./Home6.css";

const Home6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(sectionRef.current); 
      }
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

    const boxData = [
        {
          id: 1,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-ibm.webp',
          title: 'Global Technology',
          description:
            "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.",
        },
        {
          id: 2,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-equity.webp',
          title: '4th Strongest Bank',
          description:
            "Empowering a continent by creating better livelihoods, Equity bank has been awarded 4th strongest Bank in the world in 2023. Offering various banking services over Africa region",
        },
        {
          id: 3,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-audi.webp',
          title: 'Intelligence on wheel',
          description:
            "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.",
        },
        {
          id: 4,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-aramco.webp',
          title: 'Energy Producer',
          description:
            "One of the world's largest integrated energy and chemicals companies, creating value across the hydrocarbon chain, and delivering societal and economic benefits to people and communities around the globe who rely on the vital energy we supply.",
        },
        {
          id: 5,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-insurity.webp',
          title: 'Cloud-Native Insurance',
          description:
            "Insurity, a leading provider of cloud-based software for insurance carriers, brokers, and MGAs. Insurity serves 500+ insurers, with 400+ in the cloud and 330+ in the public cloud. It is trusted by 22 of the top 25 P&C carriers & 7 of the top 10 MGAs.",
        },
        {
          id: 6,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-byju.webp',
          title: 'The Learning Platform',
          description:
            "BYJU'S is India's largest ed-tech company and the creator of India's most loved school learning app. BYJU’S provides India’s best teachers and subject matter experts to teach and clear doubts of the students in an ongoing class..",
        },

        {
          id: 7,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-linux.webp',
          title: 'Open Source Giant',
          description:
            "The Linux Foundation is a non-profit organization that supports the development and growth of the Linux operating system and other open source technologies like NodeJs, Kubernetes, GraphQL, OpenAPI etc.",
        },
        {
          id: 8,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-ifit.webp',
          title: 'Fitness Platform',
          description:
            "iFit is a workout app with thousands of on-demand classes to suit a variety of fitness levels. Stream classes using an iFit-compatible exercise machine or access them on your smartphone to work up a sweat in any location.",
        },
        {
          id: 9,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-payyit.webp',
          title: 'Smooth Invoicing',
          description:
            "Payyit is a cutting-edge Software as a Service (SAAS) platform designed to revolutionize the invoicing, bookkeeping, payment processing, virtual bank account and debit card management for businesses of all sizes.",
        },
        {
          id: 10,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-baanx.webp',
          title: 'Crypto Bank',
          description:
            "The Baanx Platform bridges the gap between fiat and digital asset technology to provide with an API-driven platform to create disruptive, cutting-edge digital products offering Payments, Digital Assets, Loans.",
        },
        {
          id: 11,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-inchcape.webp',
          title: 'Mobility Solution',
          description:
            "Inchcape is the leading independent multi-brand global automotive distributor, operating in over 40 markets and territories with a portfolio of the world’s leading automotive brands.",
        },
        {
          id: 12,
          imageUrl: 'https://geeksinvention.com/assets/v3/client/logo-penny.webp',
          title: 'Global Procurement',
          description:
            "Penny is a cloud-based Source-To-Pay system. Penny helps digitize and manage full procurement cycle from Request to approval, Manage RFQs to vendors, Compare quotations, Send POs and even payment.",
        }
      ];
    


  return (
    <section ref={sectionRef} className={`home_6 ${isVisible ? 'visible' : ''}`}>
      <div className={`client__title ${isVisible ? 'animate' : ''}`}>
        <h3>Recent clients</h3>
        <p>
          We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East <br/>
          World's 4th Strongest Banking Brand, Automobile &amp; IoT industry
        </p>
      </div>
      <div className={`box-container ${isVisible ? 'animate' : ''}`}>
        {boxData.map((box) => (
          <div key={box.id} className={`box ${isVisible ? 'animate' : ''}`}>
            <img src={box.imageUrl} alt={`Image ${box.id}`} />
            <h2>{box.title}</h2>
            <p>{box.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home6;
