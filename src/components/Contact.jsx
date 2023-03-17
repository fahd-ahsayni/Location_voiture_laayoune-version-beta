import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Button } from "@material-tailwind/react";

export default function Contact() {
  return (
    <div className="bg-gray-100 dark:bg-primary-dark">
      <div className="mx-auto max-w-7xl pt-8 sm:pt-12 pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mb-24">
          <h2 className="text-lg font-semibold text-primary">Contact</h2>
          <p className="mt-2 text-3xl font-bold capitalize tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center">
            location de voiture laayoune Contact
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-gray-300 text-center">
            N'hésitez pas à nous contacter pour obtenir plus d'informations sur
            nos tarifs et nos offres de location. Nous sommes impatients de vous
            aider à trouver la voiture parfaite pour votre prochaine aventure
            sur la route.
          </p>
        </div>
        <div className="relative bg-white dark:bg-second-dark shadow-xl dark:shadow-[#0a0c0f] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-primary py-10 px-6 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-50">
                Contact Information
              </h3>
              <p className="mt-6 max-w-3xl text-base text-gray-50">
                Vous pouvez nos contacter via Télephone, Email ou bien notre
                site web.Vous êtes les bienvenus
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex items-center text-base text-gray-50">
                  <FiMail className="h-6 w-6 flex-shrink-0 text-gray-50" />
                  <span className="ml-3">support@workcation.com</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex items-center text-base text-gray-50">
                  <FaPhoneAlt className="w-5 h-5 flex-shrink-0 text-gray-50" />
                  <span className="ml-3">+216 649-000000</span>
                </dd>
              </dl>
              <ul role="list" className="mt-8 flex space-x-12">
                <li>
                  <a className="text-gray-100 hover:text-white" href="#">
                    <span className="sr-only">Whatsapp</span>
                    <BsWhatsapp className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-white" href="#">
                    <span className="sr-only">Facaebook</span>
                    <BsFacebook className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a className="text-gray-100 hover:text-white" href="#">
                    <span className="sr-only">Instagram</span>
                    <BsInstagram className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                Envoyez-nous un message
              </h3>
              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Prénom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 dark:border-primary-dark/60 py-3 px-4 text-gray-900 dark:text-gray-50 shadow-sm focus:border-parimary focus:ring-primary dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Nom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 dark:border-primary-dark/60 py-3 px-4 text-gray-900 dark:text-gray-50 shadow-sm focus:border-parimary focus:ring-primary dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 dark:border-primary-dark/60 py-3 px-4 text-gray-900 dark:text-gray-50 shadow-sm focus:border-parimary focus:ring-primary dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      Téléphone
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 dark:border-primary-dark/60 py-3 px-4 text-gray-900 dark:text-gray-50 shadow-sm focus:border-parimary focus:ring-primary dark:bg-gray-700"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Sujet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full rounded-md border-gray-300 dark:border-primary-dark/60 py-3 px-4 text-gray-900 dark:text-gray-50 shadow-sm focus:border-parimary focus:ring-primary dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      Message
                    </label>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 dark:border-primary-dark/60 py-3 px-4 text-gray-900 dark:text-gray-50 shadow-sm focus:border-parimary focus:ring-primary dark:bg-gray-700"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <Button color="blue" className="px-8 py-4">
                    Envoyer Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
