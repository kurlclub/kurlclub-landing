import FeatureCard from '../feature-card';

const Features = () => {
  return (
    <div
      id="features"
      className="flex container flex-col gap-10 sm:gap-[70px] md:gap-[95px] w-full pt-10 sm:pt-15 sm::pt-20"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        Complete <span className="text-primary-green-500">Gym Management</span> Features
      </h2>
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
            {' '}
            Staff & Member{' '}
            <span className="text-primary-green-500">management</span>
          </>
        }
        description="Stay on top of every session with intelligent tools to track client progress, manage workout schedules, and monitor trainer performance — ensuring your gym never misses a beat."
        image="/assets/png/feature2.png"
        position="right"
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
      />
    </div>
  );
};

export default Features;
