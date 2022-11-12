import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import Card from "../../components/Card";
import Particles from "../../components/Particles";
import Section from "../../components/Section";
import TypingText from "../../components/TypingText";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <Particles>
          <div className="mb-5">
            <h1 className="text-4xl">
              Hi, I'm{" "}
              <span className="font-semibold text-light-acc dark:text-dark-acc">
                Manh
              </span>
            </h1>
          </div>
          <div className="w-32 h-32 mb-8 overflow-hidden rounded-full">
            <img
              src="/images/dp_male.svg"
              className="block object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="mb-6">
            <TypingText
              className="text-2xl"
              texts={[
                "Web Development",
                "UI/UX Design",
                "Frontend Development",
                "Backend Development",
              ]}
            >
              I'm into
            </TypingText>
          </div>

          <div>
            <Link
              to="#contact"
              className="px-5 rounded-none border-light-acc text-light-acc hover:bg-light-acc hover:text-white hover:border-light-acc dark:border-dark-acc dark:text-dark-acc btn-outline dark:hover:text-black dark:hover:bg-dark-acc btn"
            >
              Contact Me !
            </Link>
          </div>

          <div className="absolute flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bottom-4 animate-bounce bg-slate-700/5 dark:bg-slate-300/5">
            <BsChevronCompactDown
              size="24px"
              className="text-gray-800 dark:text-white"
            />
          </div>
        </Particles>
      </div>
      <div className="mb-12">
        <Section title="About me" id="about">
          <div className="text-justify">
            <p className="mb-2">
              Hi there 👋, My name is Manh, and I am a student at Hanoi
              University Of Industry. I had a strong passion for Web Development
              since my second year.
            </p>
            <p className="mb-2">
              I love to building web application. Whenever possible, I also put
              my love of creating things using Node.js and Modern Javascript
              Library/Frameworks like ReactJS and VueJS.
            </p>
          </div>
        </Section>

        <Section title="Projects" id="projects">
          <div className="flex flex-wrap mb-6 -mx-2 last:mb-0">
            <div className="w-full px-2 mb-6 sm:w-1/2">
              <Card
                title={
                  <div>
                    <p>Lifewear</p>
                    (E-commerce Website)
                  </div>
                }
                image="/images/project-lifewear.png"
              >
                <div className="flex flex-col justify-between flex-grow">
                  <div className="justify-end pt-2 card-actions">
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      React
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      Redux & Redux Toolkit
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      React Router 6
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      Tailwind CSS
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      Laravel
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-around pt-2">
                    <a
                      className="mb-1 btn btn-sm"
                      href="https://github.com/manhhn01/laravel-lifewear"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Backend
                    </a>
                    <a
                      className="mb-1 btn btn-sm"
                      href="https://github.com/manhhn01/react-lifewear"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Frontend
                    </a>
                    <a
                      className="mb-1 btn btn-sm"
                      href="https://lifewear.mn07.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            <div className="w-full px-2 mb-6 sm:w-1/2">
              <Card title={<p>Chat App</p>} image="/images/project-chat.png">
                <div className="flex flex-col justify-between flex-grow">
                  <div className="justify-end pt-2 card-actions">
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      React
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      Redux & Redux Toolkit
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      React Router 6
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      JWT
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      SocketIO
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      ExpressJS
                    </div>
                    <div className="text-black border-black badge badge-outline dark:border-white dark:text-white">
                      Sequelize
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-around pt-2">
                    <a
                      className="mb-1 btn btn-sm"
                      href="https://github.com/manhhn01/react-lifewear"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                    <a
                      className="mb-1 btn btn-sm"
                      href="https://lifewear.mn07.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="Skills" id="skills">
          <div className="flex flex-wrap mb-6 -mx-2 last:mb-0">
            <div className="w-full px-2 mb-6 sm:w-1/2">
              <Card
                title="Backend"
                image="/images/backend_development.png"
                imageFull
              >
                <div className="justify-center pt-2 card-actions">
                  <div className="badge badge-ghost">NodeJs</div>
                  <div className="badge badge-ghost">ExpressJs</div>
                  <div className="badge badge-ghost">SocketIO</div>
                  <div className="badge badge-ghost">JWT</div>
                  <div className="badge badge-ghost">Laravel</div>
                  <div className="badge badge-ghost">Docker</div>
                  <div className="badge badge-ghost">SQL</div>
                  <div className="badge badge-ghost">...</div>
                </div>
              </Card>
            </div>
            <div className="w-full px-2 mb-6 sm:w-1/2">
              <Card
                title="Frontend"
                image="/images/frontend_development.png"
                imageFull
              >
                <div className="justify-center pt-2 card-actions">
                  <div className="badge badge-ghost">HTML, JS, CSS/SASS</div>
                  <div className="badge badge-ghost">CSS Module</div>
                  <div className="badge badge-ghost">ReactJs</div>
                  <div className="badge badge-ghost">Redux/Redux Toolkit</div>
                  <div className="badge badge-ghost">TailwindCSS</div>
                  <div className="badge badge-ghost">...</div>
                </div>
              </Card>
            </div>
            <div className="w-full px-2 mb-6 sm:w-1/2">
              <Card title="Javascript" image="/images/js.png" imageFull>
                <div className="justify-center pt-2 card-actions">
                  <div className="badge badge-ghost">Syntax</div>
                  <div className="badge badge-ghost">Fetch API</div>
                  <div className="badge badge-ghost">ES6+</div>
                  <div className="badge badge-ghost">
                    Event bubbling, capturing
                  </div>
                  <div className="badge badge-ghost">Hoisting</div>
                  <div className="badge badge-ghost">...</div>
                </div>
              </Card>
            </div>
            <div className="w-full px-2 mb-6 sm:w-1/2">
              <Card title="Others" image="/images/other.jpg" imageFull>
                <div className="justify-center pt-2 card-actions">
                  <div className="badge badge-ghost">OOP</div>
                  <div className="badge badge-ghost">REST API</div>
                  <div className="badge badge-ghost">Git</div>
                  <div className="badge badge-ghost">Linux</div>
                  <div className="badge badge-ghost">...</div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        <Section title="Get in touch" id="contact">
          <ul className="flex items-center justify-around">
            <li className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl btn "
                href="https://facebook.com/izmm07"
              >
                <FaFacebookF />
                <span className="ml-2 text-base">Facebook</span>
              </a>
            </li>
            <li className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl btn "
                href="https://github.com/manhhn01"
              >
                <FaGithub />
                <span className="ml-2 text-base">Github</span>
              </a>
            </li>
            <li className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl btn "
                href="to:manhhn01@gmail.com"
              >
                <HiMail />
                <span className="ml-2 text-base">Email</span>
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
