function Header() {
  return (
    <div className="mx-auto px-4 sm:px-6  border-width-2">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <h1 className=" text-indigo-600 font-semibold tracking-wide uppercase text-xl">
          Talent View
        </h1>
        <div className="flex justify-start lg:w-0 lg:flex-1"></div>

        <a
          href="/"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="/dashboard"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Dashboard
        </a>
        <a
          href="/manage"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Manage
        </a>
        <a
          href="/search"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Search
        </a>
        <a
          href="/manage"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          My Profile
        </a>
        <a
          href="/manage"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Insights
        </a>
      </div>
    </div>
  );
}

export default Header;
