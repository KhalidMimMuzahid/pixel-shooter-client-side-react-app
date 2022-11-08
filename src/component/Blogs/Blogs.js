import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <div className="h-screen mt-16">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 dark:text-gray-400 text-xl font-bold">
                Here are the some question for your betterr understanding.
              </p>
            </div>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400  text-lg font-bold">
                  What is the Difference between SQL and NoSQL?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  The five critical differences between SQL vs NoSQL are:
                  <ul>
                    <li>
                      SQL databases are relational, NoSQL databases are
                      non-relational.
                    </li>
                    <li>
                      SQL databases use structured query language and have a
                      predefined schema. NoSQL databases have dynamic schemas
                      for unstructured data.
                    </li>
                    <li>
                      SQL databases are vertically scalable, while NoSQL
                      databases are horizontally scalable.
                    </li>
                    <li>
                      SQL databases are table-based, while NoSQL databases are
                      document, key-value, graph, or wide-column stores.
                    </li>
                    <li>
                      SQL databases are better for multi-row transactions, while
                      NoSQL is better for unstructured data like documents or
                      JSON.
                    </li>
                  </ul>
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-lg font-bold">
                  What is JWT, and how does it work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-lg font-bold">
                  How does the private route work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Private Routes vary based on the Apps, For example, Dashboard,
                  User Profile, App Settings, Home etc. In simple words, These
                  routes can be accessed only after login. The constraints for
                  Public and Private routes are that Public routes should not be
                  accessed after login and Private routes should not be
                  accessible before login. .
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-lg font-bold">
                  What is Node? How does Node work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Node.js is a JavaScript runtime environment that achieves low
                  latency and high throughput by taking a “non-blocking”
                  approach to serving requests. In other words, Node.js wastes
                  no time or resources on waiting for I/O requests to return.
                  .Node is completely event-driven. Basically the server
                  consists of one thread processing one event after another. A
                  new request coming in is one kind of event. The server starts
                  processing it and when there is a blocking IO operation, it
                  does not wait until it completes and instead registers a
                  callback function.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
