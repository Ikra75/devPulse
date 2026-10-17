function TestimonialCard({ name, role, review }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500 transition duration-300">

      <div className="flex items-center gap-4 mb-4">

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>

      </div>

      <p className="text-gray-300 leading-7">
        "{review}"
      </p>

    </div>
  );
}

export default TestimonialCard;