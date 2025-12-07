import { Leaf, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <Leaf className="text-green-500" size={32} />
            <span className="text-3xl font-bold">Viransh Veg</span>
          </div>

          <p className="text-gray-400 text-center max-w-2xl">
            Experience the finest vegetarian cuisine, where tradition meets innovation in every dish.
          </p>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={20} />
            <span>for food lovers everywhere</span>
          </div>

          <div className="pt-6 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Viransh Veg. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
