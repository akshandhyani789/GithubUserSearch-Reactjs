import React from "react";
import { useState } from "react";

function UserCard({ user, loading, error }) {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-white p-6 shadow-2xl shadow-black/35 rounded-xl mt-6 flex flex-col items-center gap-4 border-2 border-dashed border-gray-300">
        <span className="bg-gray-200 p-4 rounded-full">
          <i className="fa-solid fa-magnifying-glass text-3xl text-gray-500 leading-none"></i>
        </span>
        <p className="text-xl font-bold">Start Your Search</p>
        <p className="text-center">Enter a GitHub username above to find and view user profiles</p>
      </div>
    );
  }

  // ✅ user FOUND
  return (
    <div className="bg-white px-20 py-10 rounded-xl shadow-2xl shadow-black/35 mt-6 flex gap-4 flex-col border-2 border-dashed border-gray-300">
      <div className="flex gap-4">
         <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 rounded-full"
      />
      <span>
        <h3 className="text-xl font-bold">{user.name || user.login}</h3>
        <p className="text-gray-600">@{user.login}</p>
        </span>
      </div>

      {/* profile section  */}
      <div className="flex flex-col gap-4">
        <div className="flex mx-4">
        <div className="flex mx-4 ">
          <i className="fa-solid fa-user-group text-2xl m-auto"></i>
          <span className="mx-2">
          <p>{user.followers}</p>
          <p>Followers</p>
          </span>
          </div>
          <div className="flex mx-4">
          <i className="fa-solid fa-user-group text-2xl m-auto"></i>
          <span className="mx-2">
          <p>{user.following}</p>
          <p>Following</p>
          </span>
          </div>
          </div>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="bg-gray-600 px-5 py-3 rounded-lg text-white hover:bg-gray-700 text-center">View Github Profile</a>
        </div>
    </div>
  );
}


export default UserCard;
