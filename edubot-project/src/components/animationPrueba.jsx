import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="container">
      <div className="card-grid">
        <Card
          title="Account"
          subtitle="Manage profile"
          href="#"
          Icon={FiUser}
        />
        <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Manage cards"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a href={href} className="card">
      <div className="card-overlay" />
      <Icon className="icon-background" />
      <Icon className="icon-foreground" />
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
    </a>
  );
};

export default HoverDevCards;
