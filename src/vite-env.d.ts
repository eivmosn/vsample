/// <reference types="vite/client" />

export { }

declare global {
    interface Window {
        $dialog: import('naive-ui').DialogApi
        $message: import('naive-ui').MessageApi
        $loading: import('naive-ui').LoadingBarApi
        $notification: import('naive-ui').NotificationApi
    }
}