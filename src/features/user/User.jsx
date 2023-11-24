import { useSelector } from 'react-redux';

const User = () => {
  const username = useSelector((state) => state.user.userName);
  if (!username) return null;
  
  return (
    <div className="hidden text-sm font-semibold sm:block md:block">
      {username}
    </div>
  );
};

export default User;
