import React from "react";

const Reviewcard = () => (
       <div className="mt-12 bg-white rounded-lg p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] max-w-[320px]">
            <p className="text-[13px] font-bold leading-snug mb-8">
              Our business relies on fast and reliable talent and support. Jirtu Software Labs gives us that and much more, while
              freeing us to do what we do best: great digital design.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/a1aa/image/1001f2b6-6366-4b46-669c-3197aa25ebc2.jpg"
                alt="Dino Pelle"
                className="rounded"
                width={40}
                height={40}
              />
              <div className="text-[11px]">
                <p className="font-bold leading-none">Dino Pelle</p>
                <p className="leading-none text-gray-600">Managing Partner @ Engage321</p>
              </div>
            </div>
          </div>
 
);

export default Reviewcard;