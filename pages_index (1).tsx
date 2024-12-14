import { useState } from 'react';

const TwitterProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('tweets');

  const stats = [
    { label: 'Following', value: '234' },
    { label: 'Followers', value: '12.5K' },
  ];

  const tweets = [
    {
      id: 1,
      content: 'Just launched my new project! 🚀 Really excited to share it with everyone. Check it out and let me know what you think!',
      likes: 142,
      retweets: 23,
      time: '2h',
    },
    {
      id: 2,
      content: 'Beautiful morning in San Francisco today. Perfect weather for coding and coffee ☕️',
      likes: 89,
      retweets: 12,
      time: '5h',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      {/* Cover Photo */}
      <div className="h-48 bg-blue-500 relative"/>

      {/* Profile Section */}
      <div className="px-4">
        {/* Avatar */}
        <div className="relative -mt-16 mb-4">
          <div className="w-32 h-32 bg-gray-200 border-4 border-white rounded-full"/>
        </div>

        {/* Profile Info */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-xl font-bold">Sarah Anderson</h1>
            <p className="text-gray-600">@sarahanderson</p>
            <p className="mt-2 text-gray-800">
              Full-stack developer | Open source contributor
              Building awesome things with code 👩‍💻
            </p>
            <div className="mt-2 text-gray-600">
              <span className="mr-4">📍 San Francisco</span>
              <span>🔗 github.com/sarah</span>
            </div>
            <div className="flex mt-2 space-x-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex space-x-1">
                  <span className="font-bold">{stat.value}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-4 py-2 rounded-full font-bold ${
              isFollowing
                ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b mb-4">
          {['Tweets', 'Replies', 'Media', 'Likes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-4 font-medium ${
                activeTab === tab.toLowerCase()
                  ? 'text-black border-b-2 border-blue-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tweets */}
        <div className="space-y-4">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="p-4 border rounded-xl hover:bg-gray-50">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full"/>
                <div className="ml-3">
                  <p className="font-bold">Sarah Anderson</p>
                  <p className="text-gray-600">@sarahanderson · {tweet.time}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-2">{tweet.content}</p>
              <div className="flex space-x-12 text-gray-600">
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <span>💬</span>
                  <span>{tweet.retweets}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <span>🔄</span>
                  <span>{tweet.retweets}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-red-500">
                  <span>❤️</span>
                  <span>{tweet.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <span>📤</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwitterProfile;