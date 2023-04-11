type TNotificationEl = {
  message: string;
};

export const Notification = ({ message }: TNotificationEl) => <p>{message}</p>;
