import React from "react";

const rooms = [
  { id: 1, name: "1 on 1 Corner", link: "#room1" },
  { id: 2, name: "The Suite", link: "#room2" },
  { id: 3, name: "The Matrix", link: "#room3" },
  { id: 4, name: "Creative Loft", link: "#room4" },
  { id: 5, name: "Work Station 1", link: "#room5" },
  { id: 6, name: "Work Station 2", link: "#room6" },
  { id: 7, name: "Chat Pod", link: "#room7" },
];

function RoomwiseListView() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Roomwise</h2>
      <div>
        {rooms.map((room) => (
          <a
            key={room.id}
            href={room.link}
            className="block mb-6 p-6 bg-white rounded-lg shadow-lg hover:bg-indigo-50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              {/* Circle with initial letter */}
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {room.name.split(" ")[0].charAt(0)}
              </div>
              {/* Room details */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">{room.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Explore more details about this room. Click to know more!
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RoomwiseListView;
