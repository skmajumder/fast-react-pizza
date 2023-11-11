import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  const linkBtnClass =
    'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={linkBtnClass}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={linkBtnClass}>
      {children}
    </Link>
  );
};

export default LinkButton;
