import "./StatCard.css";

const StatCard = (props) => {
  return (
    <div className="StatCard">
      <b>{props.message}</b>
    </div>
  );
};

export default StatCard;
