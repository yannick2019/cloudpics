import { Fragment, useMemo } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import userIcon from "../../assets/icons8-user-48.png";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navigation() {
  const { currentUser } = useAuthContext();
  const { pathname } = useLocation();
  return (
    <ul className="flex flex-col gap-1 justify-start text-white sm:flex-row sm:gap-4 md:flex-row md:gap-4">
      <li className="mr-[80px] sm:mr-0 md:mr-0">
        <Link to="/" className={`${pathname === "/" ? "text-[#00df9a]" : ""}`}>
          Home
        </Link>
      </li>

      {currentUser && (
        <li className="">
          <Link
            to="/stock-images"
            className={`${
              pathname === "/stock-images" ? "text-[#00df9a]" : ""
            }`}
          >
            My Stock Images
          </Link>
        </li>
      )}

      {currentUser && (
        <li className="mr-[80px] sm:mr-0 md:mr-0">
          <Link
            to="/profile"
            className={`${pathname === "/profile" ? "text-[#00df9a]" : ""}`}
          >
            Profile
          </Link>
        </li>
      )}

      <li className="mr-[80px] sm:mr-0 md:mr-0">
        <Link
          to="#"
          className={`${pathname === "/about" ? "text-[#00df9a]" : ""}`}
        >
          About
        </Link>
      </li>
    </ul>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LogIn = () => {
  const { login, currentUser } = useAuthContext();
  return (
    !currentUser && (
      <button className="bg-[#00df9a] px-2 py-1" onClick={login}>
        Sign In with Gmail Account
      </button>
    )
  );
};

const LogOut = () => {
  const { logout, currentUser } = useAuthContext();
  return (
    currentUser && (
      <button className="bg-[#00df9a] px-2 py-1" onClick={logout}>
        Logout
      </button>
    )
  );
};

export default function Navbar() {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const username = useMemo(() => {
    return currentUser?.displayName;
  }, [currentUser]);

  const avatar = useMemo(() => {
    return currentUser ? (
      <img
        src={currentUser?.photoURL}
        alt={currentUser?.displayName}
        width={34}
        height={34}
        className="rounded-full"
      />
    ) : (
      <img className="h-8 w-8 rounded-full" src={userIcon} alt="user icon" />
    );
  }, [currentUser]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-2xl text-[#00df9a]">
                  <Link to={"/"}>Cloudpics</Link>
                </div>
                <div className="hidden sm:ml-6 sm:block mt-1">
                  <div className="flex space-x-4 ml-4">
                    <Navigation />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {avatar}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-white" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {currentUser && (
                              <Link to={"/profile"}>{username}</Link>
                            )}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={"#"}
                            className={classNames(
                              active ? "bg-white" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <LogIn />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => navigate("/")}
                            href="#"
                            className={classNames(
                              active ? "bg-white" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <LogOut />
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <Disclosure.Button className="p-2">
              <Navigation />
            </Disclosure.Button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
