import React, { useState } from "react";

export default function Assign() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-16 top-32 text-black w-5/6 h-screen float-right  bg-slate-200 ">
      <div class=" space-y-6 px-3.5">
        <section class="antialiased bg-gray-100 text-gray-100 h-full px-4">
          <div class="bg-gray-200  flex flex-col justify-center h-full">
            <div class=" h-16 w-100 bg-white shadow rounded">w-48</div>
            <div class="w-100 bg-gray-600   bg-white shadow-lg rounded-sm border border-gray-100">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">
                  Supervisor assignment
                </h2>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Place</div>
                        </th>

                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">
                            Assign Student
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="grey"
                                className=""
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-800">
                                Supervisor 1
                              </div>
                              <div class="font-normal text-gray-800">
                                Front End Developer
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div>
                            <div class="font-medium text-gray-800">
                              Addis way
                            </div>
                            <div class="font-normal text-gray-800">
                              Front End Developement
                            </div>
                          </div>
                        </td>

                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">
                            <div className="container mx-auto mt-8">
                              <button
                                className="bg-blue-500 text-white p-2 rounded"
                                onClick={toggleCollapse}
                              >
                                Student List
                              </button>

                              {isOpen && (
                                <div className="mb-4 flex">
                                  <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                      <tr>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-left">
                                            Name
                                          </div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Place</div>
                        </th>

                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">
                            Assign Student
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="grey"
                                className=""
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-800">
                                Alex Shatov
                              </div>
                              <div class="font-normal text-gray-800">
                                Front End Developer
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div>
                            <div class="font-medium text-gray-800">
                              Addis way
                            </div>
                            <div class="font-normal text-gray-800">
                              Front End Developement
                            </div>
                          </div>
                        </td>

                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">
                            <div className="container mx-auto mt-8">
                              <button
                                className="bg-blue-500 text-white p-2 rounded"
                                onClick={toggleCollapse}
                              >
                                Student List
                              </button>

                              {isOpen && (
                                <div className="mb-4 ">
                                  <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                      <tr>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-left">
                                            Name
                                          </div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y overflow-scroll h-auto divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Place</div>
                        </th>

                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">
                            Assign Student
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="grey"
                                className=""
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div class="font-medium text-gray-800">
                                Alex Shatov
                              </div>
                              <div class="font-normal text-gray-800">
                                Front End Developer
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div>
                            <div class="font-medium text-gray-800">
                              Addis way
                            </div>
                            <div class="font-normal text-gray-800">
                              Front End Developement
                            </div>
                          </div>
                        </td>

                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">
                            <div className="container mx-auto mt-8">
                              <button
                                className="bg-blue-500 text-white p-2 rounded"
                                onClick={toggleCollapse}
                              >
                                Student List
                              </button>

                              {isOpen && (
                                <div className="mb-4 flex">
                                  <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                      <tr>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-left">
                                            Name
                                          </div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">
                                            <select className="mt-1 p-2 text-gray-700 border rounded-md w-full">
                                              <option value="name text-gray-700 ">
                                                Field
                                              </option>
                                              <option value="place text-gray-700">
                                                Place
                                              </option>
                                              <option value="organization text-gray-700">
                                                Organization
                                              </option>
                                            </select>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      <tr>
                                        <td class="p-2 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="grey"
                                                className=""
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                              </svg>
                                            </div>
                                            <div>
                                              <div class="font-small text-gray-800">
                                                Alex Shatov
                                              </div>
                                              <div class="font-small text-gray-800">
                                                Front End Developer
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                          <div>
                                            <div class="font-small text-gray-800">
                                              Addis way
                                            </div>
                                            <div class="font-small text-gray-800">
                                              Front End Developement
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
