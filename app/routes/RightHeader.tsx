import React from 'react';

export default function RightHeader() {
  const mockfollow = [
    {
      id: 1,
      profileImage: "data:image/jpeg;base64,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",
      username: "John Doe",
    },
    {
      id: 2,
      profileImage: "https://moodoffdp.com/wp-content/uploads/2023/05/Single-Boy-DP-for-Whatsapp-1024x1024.jpg",
      username: "Kapil Doe",
    },
    {
      id: 3,
      profileImage: "https://moodoffdp.com/wp-content/uploads/2023/05/Single-Boy-DP-for-Whatsapp-1024x1024.jpg",
      username: "Chetan Singh",
    },
    {
        id: 5,
        profileImage: "https://i.pinimg.com/736x/0f/42/45/0f4245d5c29c43b3e1dcbe6ba5e4d213.jpg",
        username: "Ramesh Singh Lodhi",
      },
      {
          id:6,
          profileImage:"https://static.wixstatic.com/media/8bfbe4_c0d847f2f8164a17bbeb6b320ea202dd~mv2.png/v1/fill/w_508,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DP%403x.png",
          username:"Vinod Pandey",
      }
  ];

  return (
    <div className='px-28'>
      <div className='flex justify-between w-80 px-2 mt-4'>
        <div className='text-gray-600'>
          Contacts
        </div>
        <div className='flex'>
          <button className='px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className='py-4'>
        {mockfollow.map((post) => (
          <div key={post.id} className="mb-3 flex items-center px-2">
            <img
              className="mr-2 h-10 w-10 rounded-full"
              src={post.profileImage}
              alt="User's profile"
            />
            <div>
              <p className="font-medium">{post.username}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://mybook.com/" className="hover:underline">MyBook</a>. All Rights Reserved.</span>
    </div>
  );
}
