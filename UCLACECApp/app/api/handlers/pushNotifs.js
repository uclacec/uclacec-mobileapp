import {PushNotificationIOS} from 'react-native';

export const createPushNotif = (event) => {
  console.log(event, 'creating')
  // let reminders = storage.store.getState().reminders;
  // let reminder = reminders.find(function(r) {
  //   return r.id === id
  // });
  //
  // if (reminder !== undefined) {
  //   const details = {
  //     alertBody: reminder.title,
  //     userInfo: {
  //       id,
  //     },
  //     fireDate: reminder.date
  //   };
  //   PushNotificationIOS.scheduleLocalNotification(details);
  // }
};

export const deletePushNotif = (event) => {
  console.log(event, 'deleting')
  // PushNotificationIOS.cancelLocalNotifications({id});
};