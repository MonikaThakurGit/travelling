const Packages = () => (
  <section id="packages" className="py-16 px-6 bg-white">
    <h3 className="text-3xl font-bold mb-8 text-center">Popular Packages</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Repeat cards here */}
      <div className="border rounded-lg p-4 shadow-sm">
        <h4 className="text-xl font-semibold">Paris Getaway</h4>
        <p className="text-sm text-gray-500">3 nights, 4 days | $799</p>
      </div>
    </div>
  </section>
);
export default Packages;
