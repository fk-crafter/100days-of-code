import PropTypes from 'prop-types';

const Card = ({ number }) => {
  return (
    <div className="bg-gray-800 text-gray-100 shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="text-center text-2xl font-bold relative">
          <span className="blur-lg hover:blur-none transition duration-300 ease-in-out">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Card;
