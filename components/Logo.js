import PropTypes from 'prop-types';

function Logo({ size }) {
  const sizes = {
    small: {
      container: 'w-8 h-8',
      circle1: 'w-2.5 h-2.5 top-1 left-1',
      circle2: 'w-2 h-2 top-1 right-1',
      circle3: 'w-2 h-2 bottom-1 left-1',
      circle4: 'w-2.5 h-2.5 bottom-1 right-1',
    },
    medium: {
      container: 'w-36 h-36',
      circle1: 'w-12 h-12 top-4 left-4',
      circle2: 'w-8 h-8 top-4 right-4',
      circle3: 'w-8 h-8 bottom-4 left-4',
      circle4: 'w-12 h-12 bottom-4 right-4',
    },
    large: {
      container: 'w-48 h-48',
      circle1: 'w-16 h-16 top-6 left-6',
      circle2: 'w-12 h-12 top-6 right-6',
      circle3: 'w-12 h-12 bottom-6 left-6',
      circle4: 'w-16 h-16 bottom-6 right-6',
    },
  };

  const selectedSize = sizes[size] || sizes.medium;

  return (
    <div
      className={`relative flex items-center justify-center bg-gray-200 rounded-lg ${selectedSize.container}`}
    >
      <div
        className={`absolute ${selectedSize.circle1} rounded-full bg-kitchen-gray-50`}
      />
      <div
        className={`absolute ${selectedSize.circle2} rounded-full bg-kitchen-gray-50`}
      />
      <div
        className={`absolute ${selectedSize.circle3} rounded-full bg-kitchen-gray-50`}
      />
      <div
        className={`absolute ${selectedSize.circle4} rounded-full bg-kitchen-pink`}
      />
    </div>
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
};

export default Logo;
