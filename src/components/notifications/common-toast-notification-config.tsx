import { Toaster } from "react-hot-toast"

const CommonToastNotificationConfig = () => {
    return (
        <div className="z-50">
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
                        secondary: '#EC0014',
                    },
                    style: {
                        color: 'white',
                        background: '#EC0014'
                    },
                    duration: 5000
                },
            }} />
        </div>
    )
}

export default CommonToastNotificationConfig