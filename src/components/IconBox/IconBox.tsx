// components/IconBox.tsx
const IconBox = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
    {icon}
  </div>
);

export default IconBox;
