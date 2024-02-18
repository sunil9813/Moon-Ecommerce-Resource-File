import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-medium ${
    level === 1
      ? "text-[80px] font-[600] text-primary"
      : level === 2
      ? "text-[40px] font-[700] text-primary"
      : level === 3
      ? "text-[28px] font-[700] text-primary"
      : level === 4
      ? "text-[24px] font-[600] text-primary"
      : level === 5
      ? "text-[22px] font-[600] text-primary"
      : "text-[18px] font-[500] text-primary"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-primary-gray mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
  return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-primary-gray">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};

const CustomNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};
const CustomLink = ({ className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

const Badges = ({ children, color }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}
    >
      {children}
    </div>
  );
};

export {
  Title,
  BodyOne,
  BodyTwo,
  Caption,
  Span,
  Badges,
  CustomLink,
  CustomNavLink,
};
Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
CustomNavLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes,
  children: PropTypes.node.isRequired,
};
CustomLink.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes,
  children: PropTypes.node.isRequired,
};
BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};
Caption.propTypes = {
  children: PropTypes.node.isRequired,
};
Span.propTypes = {
  children: PropTypes.node.isRequired,
};
Badges.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};
