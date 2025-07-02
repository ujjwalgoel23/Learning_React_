import React from "react";

const CoinCard = ({ coin }) => {
  const cardStyles = {
    border: "1px solid #e1e4e8",
    borderRadius: "12px",
    padding: "20px",
    width: "240px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    backgroundColor: "#ffffff",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)"
    }
  };

  const imageStyle = {
    width: "64px",
    height: "64px",
    objectFit: "cover",
    marginBottom: "16px",
    borderRadius: "50%",
    border: "2px solid #f0f2f5"
  };

  const titleStyle = {
    fontSize: "1.25rem",
    margin: "12px 0 8px",
    fontWeight: "600",
    color: "#1a1a1a"
  };

  const infoStyle = {
    fontSize: "0.95rem",
    margin: "6px 0",
    color: "#4a4a4a",
    lineHeight: "1.4"
  };

  const priceStyle = {
    ...infoStyle,
    fontWeight: "500",
    color: coin.price_change_percentage_24h >= 0 ? "#16c784" : "#ea3943"
  };

  return (
    <div style={cardStyles}>
      <img src={coin.image} alt={coin.name} style={imageStyle} />
      <h3 style={titleStyle}>{coin.name}</h3>
      <p style={priceStyle}> Price: ${coin.current_price} </p>
      <p style={infoStyle}> Market Cap Rank: #{coin.market_cap_rank}</p>
    </div>
  );
};

export default CoinCard;