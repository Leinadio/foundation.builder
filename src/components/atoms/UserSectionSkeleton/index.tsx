import React from "react";

export default function UserSectionSkeleton() {
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
      <div className="h-4 w-40 bg-gray-200 animate-pulse"></div>
    </div>
  );
}
