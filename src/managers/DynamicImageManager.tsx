const DynamicImageManager = {
    Logo: (color = "currentColor", scaleClass = "h-9") => {
        const classNames = `bi bi-logo ${scaleClass} w-auto`;

        return <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            className={classNames}
            viewBox="0 0 464.87997 157.5"
        >
            <defs>
                <clipPath id="a">
                    <path d="M8 7.672h141.656v141.656H8Zm0 0" />
                </clipPath>
            </defs>
            <path d="M196.892 90.78v39.468h-21.766V29.702h21.766V71.81h17.25V29.7h21.75v100.547h-21.75V90.78ZM291.364 28.139c12.851 0 19.281 6.84 19.281 20.516v81.593H288.88V96.53h-15.687v33.718h-21.766V48.655c0-13.676 6.426-20.516 19.282-20.516Zm-18.172 51.61h15.687V46.013c0-.82-.289-1.547-.859-2.172-.562-.625-1.262-.937-2.094-.937h-9.78c-.837 0-1.54.312-2.11.937a3.153 3.153 0 0 0-.844 2.172ZM362.7 29.702h21.75v81.593c0 13.668-6.421 20.5-19.265 20.5h-19.266c-12.855 0-19.28-6.832-19.28-20.5V29.702h21.765v83.453c0 .836.281 1.562.843 2.187.57.617 1.274.922 2.11.922h8.39c.82 0 1.52-.305 2.094-.922.57-.625.86-1.351.86-2.187ZM455.162 56.123H434.49v-7.921c0-.832-.289-1.555-.86-2.172-.562-.625-1.26-.938-2.093-.938h-8.547c-.824 0-1.523.313-2.094.938a3.082 3.082 0 0 0-.859 2.172V66.06c0 .836.285 1.562.86 2.187.57.618 1.269.922 2.093.922h13.985c12.851.211 19.28 7.047 19.28 20.516v21.61c0 13.667-6.429 20.5-19.28 20.5h-18.329c-12.855 0-19.28-6.833-19.28-20.5v-10.423h20.671v11.188c0 .836.285 1.562.86 2.187.57.618 1.269.922 2.093.922h9.64c.821 0 1.52-.304 2.095-.922.57-.625.859-1.351.859-2.187V92.327c0-.82-.29-1.547-.86-2.172-.574-.625-1.273-.938-2.093-.938h-13.985c-12.855 0-19.28-6.836-19.28-20.515V48.655c0-13.676 6.425-20.516 19.28-20.516h17.25c12.844 0 19.266 6.84 19.266 20.516Zm0 0" />
            <g clip-path="url(#a)">
                <path d="m63.07 91.336 52.606-30.367 33.648 19.426c.02-.633.047-1.258.047-1.895 0-6.86-.996-13.484-2.824-19.758l-30.871-17.824v10.934L63.07 82.227V60.359l52.606-30.375 24.883 14.368a70.907 70.907 0 0 0-24.883-26.004c-10.727-6.586-23.34-10.391-36.848-10.391-38.96 0-70.543 31.582-70.543 70.543 0 38.96 31.582 70.547 70.543 70.547 13.516 0 26.121-3.832 36.848-10.43 9.23-5.672 17.07-13.387 22.847-22.547l-22.847-13.191v10.933L63.07 144.189v-21.872l52.606-30.37 27.351 15.792a69.946 69.946 0 0 0 5.266-17.004l-32.617-18.836v10.934L63.07 113.203V91.336" />
            </g>
        </svg>
    },

    RightArrow: (color = "currentColor", w = 24, h = 24) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={w}
            height={h}
            fill={color}
            className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white"
        >
            <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
            />
        </svg>
    ),

    Phone: (color = "currentColor", w = 24, h = 24) => {
        return <svg
            xmlns="http://www.w3.org/2000/svg"
            className="relative m-auto h-5 w-5"
            viewBox="0 0 24 24" 
            fill={color}
            width={w}
            height={h}
        >
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
        </svg>
    },

    Email: (color = "currentColor", w = 24, h = 24) => {
        return <svg
            xmlns="http://www.w3.org/2000/svg"
            className="relative m-auto h-5 w-5"
            viewBox="0 0 24 24" 
            fill={color}
            width={w}
            height={h}
        >
             <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
             <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
    },    

    Identification: (color = "currentColor", w = 24, h = 24) => {
        return <svg
            xmlns="http://www.w3.org/2000/svg"
            className="relative m-auto h-5 w-5"
            viewBox="0 0 24 24" 
            fill={color}
            width={w}
            height={h}
        >
            <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
        </svg>
    },

    Shine: (color = "currentColor") => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={color}
            className="h-5 w-5 opacity-60"
        >
            <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clip-rule="evenodd"
            />
        </svg>
    ),

    Feature: (color = "currentColor") => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={color}
            className="h-5 w-5 opacity-60"
        >
            <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clip-rule="evenodd"
            />
        </svg>
    ),

    Boost: (color = "currentColor") => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={color}
            className="h-5 w-5 opacity-60"
        >
            <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
    ),

    Build: (color = "currentColor") => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={color}
            className="h-5 w-5 opacity-60"
        >
            <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
    ),

    Facebook: (color = "currentColor", w = 20, h = 20) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            fill={color}
            className="bi bi-facebook"
            viewBox="0 0 512 512"
        >
            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
        </svg>
    ),

    Instagram: (color = "currentColor", w = 20, h = 20) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            fill={color}
            className="bi bi-instagram"
            viewBox="0 0 448 512"
        >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
    ),

    Yelp: (color = "currentColor", w = 20, h = 20) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            fill={color}
            className="bi bi-yelp"
            viewBox="0 0 384 512"
        >
            <path d="M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z" />
        </svg>
    ),

    ExternalLink: (color = "currentColor", w = 16, h = 16) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill={color}
            width={w}
            height={h}
        >
            <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
            <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
        </svg>
    )
};

export default DynamicImageManager;
