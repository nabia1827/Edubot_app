import React from "react";
import { FiBell, FiMail, FiUser, FiFileText } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="container">
      <div className="card-grid">
        <Card
          title="Asistente Eficaz"
          subtitle="para tu día a día"
          href="#"
          Icon={FiUser}
        />
        <Card title="Redactor de Emails" subtitle="y todo tipo de mensajes" href="#" Icon={FiMail} />
        <Card title="Especialista en Gestión" subtitle="de documentos" href="#" Icon={FiFileText} />
        <Card
          title="Notificador"
          subtitle="de recordatorios importantes"
          href="#"
          Icon={FiBell}
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
