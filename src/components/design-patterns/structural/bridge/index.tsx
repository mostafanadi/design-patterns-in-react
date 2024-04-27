import {
  BannerNotification,
  ToastNotification,
} from "./components/abstractions-and-implementations";
import NotificationComponent from "./components/notification";

const Bridge: React.FC = () => {
  const toastNotification = new ToastNotification(
    "This is a toast notification"
  );
  const bannerNotification = new BannerNotification(
    "This is a banner notification"
  );

  return (
    <div className="app">
      <h1>Notification Examples</h1>
      <div className="notifications">
        <NotificationComponent notification={toastNotification} />
        <NotificationComponent notification={bannerNotification} />
      </div>
    </div>
  );
};

export default Bridge;
