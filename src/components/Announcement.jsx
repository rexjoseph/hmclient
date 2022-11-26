import "./Announcement.css";

// announcement component with children prop
export default function Announcement({ children }) {
  return (
    <div className="announcement-bar-container">
      <p>
        HM Black Friday — 30% off sitewide &nbsp;
        <a href="#">Go, Go, Go</a>
      </p>
    </div>
  );
}
