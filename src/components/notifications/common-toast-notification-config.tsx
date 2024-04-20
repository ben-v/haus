import { Toaster } from "react-hot-toast"

const CommonToastNotificationConfig = () => {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                // default options
                duration: 120000,

                // success toast options
                success: {
                    iconTheme: {
                        primary: 'white',
                        secondary: 'green',
                    },
                    style: {
                        color: 'white',
                        background: 'green'
                    },
                    duration: 5000
                },

                // error toast options
                error: {
                    iconTheme: {
                        primary: 'white',
                        secondary: 'red',
                    },
                    style: {
                        color: 'white',
                        background: 'red'
                    },
                    duration: 5000
                },
            }} />
    )
}

export default CommonToastNotificationConfig