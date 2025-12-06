'use client';
import { Suspense, useState } from 'react';

import { EnquiryCard, ThanksCard } from '@/components/enquiry';

const EnquiryPage = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  return (
    <>
      {isSubmitted ? (
        <ThanksCard />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <EnquiryCard onSubmitClick={() => setSubmitted(true)} />
        </Suspense>
      )}
    </>
  );
};

export default EnquiryPage;
