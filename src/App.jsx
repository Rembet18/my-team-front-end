function App() {
  return (
    <div className="min-h-screen bg-blue-50">

      {/* Navbar */}
      <nav className="bg-blue-700 px-6 py-4 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold">My Website</h1>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200">
              Home
            </a>
            <a href="#" className="hover:text-blue-200">
              About
            </a>
            <a href="#" className="hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Welcome to My Website
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            A simple React JS page using Tailwind CSS.
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              01
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Simple
            </h3>

            <p className="mt-2 text-gray-600">
              Simple and clean interface for your website.
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              02
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              Responsive
            </h3>

            <p className="mt-2 text-gray-600">
              Works well on desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              03
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              React
            </h3>

            <p className="mt-2 text-gray-600">
              Built using React components and Tailwind CSS.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 py-6 text-center text-white">
        <p>© 2026 My Website</p>
      </footer>

    </div>
  );
}

export default App;