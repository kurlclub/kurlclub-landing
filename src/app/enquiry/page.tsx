'use client';
import { Suspense, useState } from 'react';

import { EnquiryCard, ThanksCard } from '@/components/enquiry';

const Enquiry = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <>
      {isSubmitted ? (
        <ThanksCard />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <EnquiryCard onSubmit={() => setSubmitted(true)} />
        </Suspense>
      )}
    </>
  );
};

export default Enquiry;
