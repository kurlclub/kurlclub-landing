'use client';
import { useState } from 'react';

import { EnquiryCard, ThanksCard } from '@/components/enquiry';

const Enquiry = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <>
      {isSubmitted ? (
        <ThanksCard />
      ) : (
        <EnquiryCard onSubmit={() => setSubmitted(true)} />
      )}
    </>
  );
};

export default Enquiry;
