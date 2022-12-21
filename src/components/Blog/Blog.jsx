import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {

  useTitle("Blog")

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 rounded border-2">
          <img
            src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64 rounded"
            alt=""
          />
          <div className="py-5 px-3">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              26 Oct 2022
            </p>
            <p className="text-2xl font-bold leading-5">What is `cors`?</p>
            <p className="mb-4 text-gray-700">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
              <br />
              For security reasons, browsers restrict cross-origin HTTP requests
              initiated from scripts. For example, XMLHttpRequest and the Fetch
              API follow the same-origin policy. This means that a web
              application using those APIs can only request resources from the
              same origin the application was loaded from unless the response
              from other origins includes the right CORS headers.
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 rounded border-2">
          <img
            src="https://www.nbnminds.com/wp-content/uploads/2019/03/is-Firebase-right-for-my-app.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="object-cover w-full h-64 rounded"
            alt=""
          />

          <div className="py-5 px-3">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              26 Oct 2022
            </p>
            <p className="text-2xl font-bold leading-5">
              Why are you using `firebase`?
            </p>
            <p className="my-4 text-gray-700">
              Google Analytics for Firebase allows you to track your users'
              journey through realtime and custom reporting. As mentioned
              previously, Firebase supports IOS, Android, Web, and Unity
              products, allowing you to track your users across a wide range of
              devices.
            </p>
            <p className="text-2xl font-bold leading-5">
              What other options do you have to implement authentication?
            </p>
            <p className="my-4 text-gray-700">
              Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
              alternatives and competitors to Firebase Authentication.
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 rounded border-2">
          <img
            src="https://miro.medium.com/max/1400/0*uPdUx0n3GLndmHRQ.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64 rounded"
            alt=""
          />
          <div className="py-5 px-3">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              26 Oct 2022
            </p>
            <p className="text-2xl font-bold leading-5">
              How does the private route work?
            </p>
            <p className="mb-4 text-gray-700">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 rounded border-2">
          <img
            src="https://miro.medium.com/max/747/1*ptvSdUknyEbemXJOh9wNiw.png?"
            className="w-full h-64 rounded"
            alt=""
          />
          <div className="py-5 px-3">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              26 Oct 2022
            </p>
            <p className="text-2xl font-bold leading-5">What is Node?</p>
            <p className="mb-4 text-gray-700">
              <ul>
                <li className="list-disc list-inside">
                  Node.js is an open source server environment
                </li>
                <li className="list-disc list-inside">Node.js is free</li>
                <li className="list-disc list-inside">
                  Node.js runs on various platforms (Windows, Linux, Unix, Mac
                  OS X, etc.)
                </li>
                <li className="list-disc list-inside">
                  Node.js uses JavaScript on the server
                </li>
              </ul>
            </p>
            <p className="text-2xl font-bold leading-5">How does Node work?</p>
            <p className="mb-4 text-gray-700">
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.js: Node.js
              accepts the request from the clients and sends the response, while
              working with the request node.js handles them with a single
              thread. To operate I/O operations or requests node.js use the
              concept of threads. Thread is a sequence of instructions that the
              server needs to perform. It runs parallel on the server to provide
              the information to multiple clients. Node.js is an event loop
              single-threaded language. It can handle concurrent requests with a
              single thread without blocking it for one request. Node.js
              basically works on two concept{" "}
              <ul>
                <li className="list-disc list-inside">Asynchronous </li>
                <li className="list-disc list-inside">Non-blocking I/O </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
