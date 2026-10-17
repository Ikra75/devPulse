function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300">

      <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center text-white mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;