import FeatureCard from '../feature-card';

const Features = () => {
  return (
    <div
      id="features"
      className="flex container flex-col gap-10 sm:gap-[70px] md:gap-[95px] w-full pt-10 sm:pt-15 sm::pt-20"
    >
      <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-[668px] sm:mx-auto items-start sm:items-center">
        <h5 className="uppercase text-[14px] font-semibold text-primary-green-100">
          Features
        </h5>
        <h2 className="font-medium text-[28px] sm:text-[40px] md:text-[50px] leading-[100%]">
          All-in-One
          <span className="text-primary-green-500"> Platform</span>
        </h2>
        <p className="text-[15px] sm:text-center">
          Complete fitness business management with smart attendance tracking
          (NFC tap, biometrics, gate entry), automated billing based on dues,
          trainer management, and WhatsApp integration
        </p>
      </div>
      <FeatureCard
        title={
          <>
            <span className="text-primary-green-500">Empower</span> your
            business with strategic{' '}
            <span className="text-primary-green-500">insights</span>
          </>
        }
        description="Enjoy a full fledged dashboard with powerful member and staff management tools, integrated attendance device tracking, and WhatsApp connectivity"
        image="/assets/png/feature1.png"
      />
      <FeatureCard
        title={
          <>
            <span className="text-primary-green-500">Whatsapp </span>Integration
            features
          </>
        }
        description="Monitor client progress, manage workout timings, and evaluate trainer performance with advanced fitness management features designed to keep your gym running smoothly and your team performing at its best."
        image="/assets/png/feature3.png"
        position="right"
      />
      <FeatureCard
        title={
          <>
            {' '}
            Staff & Member{' '}
            <span className="text-primary-green-500">management</span>
          </>
        }
        description="Stay on top of every session with intelligent tools to track client progress, manage workout schedules, and monitor trainer performance — ensuring your gym never misses a beat."
        image="/assets/png/feature2.png"
      />
    </div>
  );
};

export default Features;
