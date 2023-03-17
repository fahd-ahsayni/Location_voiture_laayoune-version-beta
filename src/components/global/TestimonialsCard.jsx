
export default function TestimonialsCard({name, text, location}) {
    return (
      <section className="overflow-hidden py-4 md:py-6 lg:py-8">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  
          <div className="relative">
            <blockquote className="mt-10">
              <div className="mx-auto max-w-3xl text-center text-xl font-medium leading-9 text-gray-900 dark:text-gray-300">
                <p>
                  &ldquo;{text}&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900 dark:text-gray-50">{name}</div>
  
                    <svg className="mx-1 hidden h-5 w-5 text-primary md:block" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
  
                    <div className="text-base font-medium text-gray-500 dark:text-gray-300">{location}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }